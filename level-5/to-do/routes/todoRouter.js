const express = require("express")
const todoRouter = express()

const uuid = require("uuid").v4

const todos = [
    {
        name: "Vaccum",
        description: "Vaccum house",
        imageUrl: "http://www.myimage....",
        completed: false,
        _id: uuid()
    },
    {
        name: "Clean Windows",
        description: "Clean the house windows",
        imageUrl: "http://www.myimage....",
        completed: false,
        _id: uuid()
    },
    {
        name: "Gas",
        description: "Fill up car with gas",
        imageUrl: "http://www.myimage....",
        completed: false,
        _id: uuid()
    },
    {
        name: "BR",
        description: "Clean the Bathroom",
        imageUrl: "http://www.myimage....",
        completed: false,
        _id: uuid()
    },
    {
        name: "Garage",
        description: "Organize the Garage",
        imageUrl: "http://www.myimage....",
        completed: false,
        _id: uuid()
    },
    
]

todoRouter.use(express.json())

todoRouter.route("/")
.get((req,res) => {
    // console.log(req)
    res.send(todos)
})
.post((req, res) => {
    const newTodo = req.body /*new todo*/
    todos.push(newTodo) /*add new todo to todo list*/
    res.send(`${newTodo} has been added to todos list`) /* send response */
})

todoRouter.delete("/:todoId", (req, res) => {
    const todoId = req.params.todosId  /* Id */
    const todoIndex = todos.findIndex(todo => todo._id === todoId)  /* index */
    todos.splice(todoIndex, 1)/* splice */
    res.send("successfully deleted todo item")
    })

todoRouter.put("/:todoId", (req, res) => {
const todoId = req.params.todoId /* Id */
const updateObj = req.body/* updates */
const todoIndex = todos.findIndex(todo => todo._id === todoId) /* index */
const updatedTodo = Object.assign(todos[todoIndex], updateObj)/* create new obj  w/ (obj.assign) */
res.send(updatedTodo)
})

todoRouter.get("/:todoId", (req, res) => {
    // console.log(req)
const todoId = req.params.todoId
const foundTodo = todos.find(todo => todo._id === todoId)
res.send(foundTodo)
})




module.exports = todoRouter