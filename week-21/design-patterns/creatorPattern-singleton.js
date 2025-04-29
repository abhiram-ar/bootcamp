const config = {
    start: () => console.log("app has started"),
    stop: () => console.log("app has stoped"),
};

Object.freeze(config);

config.name = "abhiram";
console.log(config);

class Config {
    constructor() {}
    start() {
        console.log("app has started");
    }
    stop() {
        console.log("app has stoped");
    }
}

const instance = new Config();
Object.freeze(instance);

instance.name = "new added name field";
console.log(instance.name); // undefined
