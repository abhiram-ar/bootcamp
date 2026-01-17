import path from "node:path";
import type { ServiceClientConstructor } from "@grpc/grpc-js";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";

const packageDefinition = protoLoader.loadSync(
	path.join(__dirname, "./../a.proto"),
);

const personProto = grpc.loadPackageDefinition(packageDefinition);

const PERSONS = [
	{
		name: "harkirat",
		age: 45,
	},
	{
		name: "raman",
		age: 45,
	},
];

//@ts-ignore
function addPerson(call, callback) {
	console.log(call);
	const person = {
		name: call.request.name,
		age: call.request.age,
	};
	PERSONS.push(person);
	callback(null, person);
}

//@ts-ignore
function getPersonByName(call, callback) {
	console.log(call);
	const person = PERSONS.find((person) => person.name === call.request.name);
	callback(null, person);
}

const server = new grpc.Server();

server.addService(
	(personProto.AddressBookService as ServiceClientConstructor).service,
	{ addPerson: addPerson, getPersonByName: getPersonByName },
);

server.bindAsync(
	"0.0.0.0:50051",
	grpc.ServerCredentials.createInsecure(),
	() => {
		server.start();
	},
);
