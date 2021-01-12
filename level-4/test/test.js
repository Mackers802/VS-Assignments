document.body.appendChild(h1)
    // make a new input, give it some text, add event lstener
    // .type = "checkbox"
    const newInput = document.createElement("input.type='checkbox'");
    const newInput = document.createElement("input");
    newInput.type = "checkbox";
    newInput.textContent = "";
    document.body.appendChild(newInput)
    // addEventListener take 2 arguments, action and the function
    newInput.addEventListener("click", function(e) {
    newInput.checked = todo.completed;
    newInput.addEventListener("change", function(e) {
        e.preventDefault();
        if (checked === true) {
            document.body.appendChild(newInput)
        };
        axios.put("https://api.vschool.io/simpfriedrice/todo/" + todo._id, todo)
    });
});

// Update
// get todos
getToDos();

// Clearlist function to avoid data repeat on page
function clearList() {
    const list = document.getElementById('list')
    while(list.firstChild) {
        list.removeChild(list.firstChild)
    }
}



// Part 2 - POST
// The user can add new todos to their list. The new item should be 
const addToDoForm = document["add-todo-form"]

// Add Todo button


addToDoForm.addEventListener("submit", function(e){
    e.preventDefault();
        console.dir(addToDoForm)
function postToDo(userPost) {
        console.log(err)
    };
})
function putToDos() {
    const userPost = 
    axios.put("https://api.vschool.io/simpfriedrice/todo", userPost)
function putToDos(userPost) {
    axios.put("https://api.vschool.io/simpfriedrice/todo/", userPost)
    .then(response => {
        console.log(response.data)
    })
    .catch(error => console.log(error))
}
// Part 3 - PUT Part 1
// Each todo will have a checkbox where it can be marked complete or incomplete
// Checking the checkbox should update the database
// get one
// code goes here but idk if we put first or not lol brb
// put
function displayTodos(todos){
    todos.map(todo => {
        // Create Element Container
        let div = document.createElement('div')
        //Create Elements
        let h1 = document.createElement('h1')
        //Add Text
        h1.textContent = todo.title
        //Add Element to Container
        div.appendChild(h1)
        //Add Container to HTML
        document.getElementById('list').appendChild(div)
    })
}
// putbutton
const putBtn = document.getElementById("put-todo-button")
putBtn.addEventListener("click", putToDos) 
// update
// Part 4 - DELETE
// A user will be able to delete todos (this is different from marking a todo as "completed")
// Each todo should be rendered with a button marked "X" or "Delete" that when clicked, will delete the Todo
// delete
const deleteBtn = document.getElementById('delete-button')
deleteBtn.addEventListener("click", deleteToDo)

function deleteToDo() {
    axios.delete("https://api.vschool.io/simpfriedrice/todo/<id>")
        .then(res => console.log(res))
        .catch(err => console.log(err))
}