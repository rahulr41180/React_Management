
// const Todoitem = ({todoitem}) =>{

//     return (
//         <div>{todoitem} <button>Delete</button></div>
//     )
// }

// export { Todoitem }




// /*
// let's implement first toggle first means done or not
// */
// const Todoitem = ({todoitem}) =>{

//     return (
//         <div>{todoitem} <button>Toggle</button></div>
//     )
// }

// export { Todoitem }






// /*
// for ensure that respective todo done or not for that we have to do like status true and false

// and for ensure respective todo done or not we use object like
// const todo = {
//     title : "Learn React",
//     status : "false"
// }
// we need to do it in todo.jsx
// */
// const Todoitem = ({todoitem}) =>{

//     return (
//         <div>{todoitem} <button>Toggle</button></div>
//     )
// }

// export { Todoitem }






// /*
// now todoitem is an object so we need to do like
// */
// const Todoitem = ({todoitem}) =>{

//     return (
//         <div>
//             {todoitem.title} - {todoitem.status ? "Done" : "Not Done"}<button>Toggle</button>
//         </div>
//     )
// }

// export { Todoitem }







// /*
// for changing the status of respective todo then we need to do like -->
// first we go in todo.jsx and found respective todo title in todolist by id or change status to false or true by clicking on toggle button
// for we need to do like
// and give unique id
// by npm insall nanoid
// and import it into todo.jsx
// */
// const Todoitem = ({todoitem}) =>{

//     return (
//         <div>
//             {todoitem.title} - {todoitem.status ? "Done" : "Not Done"}<button>Toggle</button>
//         </div>
//     )
// }

// export { Todoitem }




// /*

// */
// const Todoitem = ({todoitem}) =>{

//     return (
//         <div>
//             <div>id : {todoitem.id}</div>
//             {todoitem.title} - {todoitem.status ? "Done" : "Not Done"}<button>Toggle</button>
//         </div>
//     )
// }

// export { Todoitem }





/*
I want when I click on toggle and I need to go in parent of todoitem.jsx which is todo.jsx and where I found respective todo object with the help of id
and if I able to found the respective object then we need to change it's status and ensuring it to like done or not
this done by only call back function means we send id of respective object and found respective object in todolist and change status of it.
because todoitem.jsx is a child of todo.jsx
*/
const Todoitem = ({todoitem,statusfn}) =>{

    return (
        <div>
            <div>id : {todoitem.id}</div>
            {todoitem.title} - {todoitem.status ? "Done" : "Not Done"}
            <button onClick={() =>{
                statusfn(todoitem.id)
            }}>Toggle</button>
        </div>
    )
}

export { Todoitem }