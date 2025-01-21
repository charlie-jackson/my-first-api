const fruits = require("../fruits.json")

// You will need to build a class
// It will have a constructor to build instances of the fruit to return to the controller
// method showAll will access fruits json & return instances of all fruit to controller
// method show will usethe filter method below which will access one fruit, build an instance & return to controller 'show'

// const fruit = fruits.filter(fruit => fruit.name.toLowerCase() === name)
//     if (fruit.length === 1) {
//       res.status(200).send(fruit)
//     } else {
//       res.status(404).send("The fruit doesn't exist on the API")
//     }

    class Fruit {
        constructor(fruit){
            this.genus = fruit.genus,
            this.name = fruit.name,
            this.id = fruit.id,
            this.family = fruit.family,
            this.order = fruit.order,
            this.nutritions = fruit.nutritions
        }

        static showAll = () => {
            return fruits.map(fruit => new Fruit(fruit))
        }

        static show(name) {
            const fruit = fruits.find((fruit) => fruit.name.toLowerCase() == name);
    
            if (fruit) {
                return new Fruit(fruit);
            } else {
                throw "The fruit doesn't exist.";
            }
        }

        static create = (data) => {
            const newFruit = data
            const fruit = fruits.find(fruit => fruit.name.toLowerCase() === newFruit.name.toLowerCase())
            console.log(newFruit)
            if (fruit) {
                throw Error("The fruit already exists.")
            } else {
                newFruit["id"] = fruits.length + 1
                fruits.push[newFruit]
                return new Fruit(newFruit)
            }
        }

        update(data) {
            const updatedFruit = fruits.find(fruit => fruit.name.toLowerCase() === this.name.toLowerCase())
            if(updatedFruit) {
                updatedFruit.name = data.name
                updatedFruit.family = data.family
                return new Fruit(updatedFruit)
            } else {
                throw Error("Fruit not found")
            }
        }

        destroy() {
            const deletedFruit = fruits.find(fruit => fruit.name.toLowerCase() === this.name.toLowerCase())
            if (deletedFruit) {
                const index = fruits.indexOf(deletedFruit)
                fruits.splice(index, 1)
            } else {
                throw Error("Fruit not found")
            }
        }
    
    }

module.exports = Fruit;