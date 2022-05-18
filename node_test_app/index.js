import express from "express"
import { v4 as uuid } from "uuid"

const handleNotFound = (req, res, next) => {
  return res.status(404).end("Not found");
};

const PORT = 5000

const app = express()

//mock database for API
let dogs = [
  { name: 'Rodney', age: 12, id: uuid()},
  { name: 'Dolly', age: 9, id: uuid()},
  { name: 'Monty', age: 5, id: uuid()}
]

//console/terminal is working
app.listen(PORT, () => console.log(`Express App is running on port ${PORT}`))

const logger = (req, res, next) => {
  console.log("Request body", req.body)
  console.log(`Incoming request on route: ${req.method} - ${req.url}`)
  next()
}

app.use(express.json())

app.use(logger)

//get all dogs
app.get("/dogs", (req, res, next) => {
  return res.json(dogs)
})

//add a new dog to array
app.post("/dogs", (req, res, next) => {
  const { body: newDog } = req

  if (!newDog.name || !newDog.age) {
    return res.status(400).json({message: 'Please provide name and age of the dog.'})
  }
  newDog.id = uuid()
  dogs.push(newDog)
  console.log(dogs)
  return res.status(200).json({ message: `Dog with ${newDog.name} who is ${newDog.age} years old has been added`})
})

//get one dog
app.get("/dogs/:id/", (req, res, next) => {
  const { id } = req.params; 
  const dog = dogs.find((dog) => dog.id === id)

  if (!dog) {
    return res.status(404).json({ message: `Dog with id ${id} not found.`})
  }
  res.status(200).json(dog)
})


//modify name of dog --> couldn't get this one... 
app.put("/dogs/:id/", (req, res, next) => {
  const { id } = req.params
  const changedDog = req.body

  const index = dogs.findIndex(dog => dog.id === id)

  if (index !== -1) {
    dogs[index] = changedDog
    res.status(200).json(dogs[index])
  } else {
    res.status(404).json({ message: 'Dog does not exist' })
  }

})


//delete dog from array
app.delete("/dogs/:id/", (req, res, next) => {
  const { id } = req.params; 
  const dog = dogs.find((dog) => dog.id === id)

  if (dog) {
    dogs = dogs.filter(dog => dog.id !== id)
    return res.status(200).json('The Dog has been removed')
  } else {
    return res.status(404).json({ message: 'Dog not found'})
  }
})


app.use(handleNotFound)