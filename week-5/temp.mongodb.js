use("books")

db.createCollection('nonFiction', {
    validator: {
        $jsonSchema: {
            required: ['name', "price"],
            properties: {
                name: {
                    bsonType: "string",
                    description: "name is required and must be string"
                },
                price: {
                    bsonType: "number",
                    description: "price is required and must be a number"
                }

            }
        }
    },

    validationAction: "error"
})

db.runCommand({
    collMod: "nonFiction", //field to modify
    validator: {
        $jsonSchema: {
            required: ["name", "price", "authors"],
            properties: {
                name: {
                    bsonType: "string",
                    description: "name is required and must be string",
                },
                price: {
                    bsonType: "number",
                    description: "price is required and must be a number",
                },
                authors:{
                    bsonType:"array",
                    description: "must be an array and is required",
                    items: {  //defining the schema of array elemets
                        bsonType: "object",
                        
                        required: ["name", "email"],
                        properties: {
                            name: {
                                bsonType: "string",
                            },
                            email: {
                                bsonType: "string"
                            }

                        }


                    }
                }
            },
        },
    },
});