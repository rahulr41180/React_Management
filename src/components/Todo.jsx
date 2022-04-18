
// function Todo()
// {
//     return (
//         <div>Hello</div>
//     )
// }
// export { Todo }






// function Todo()
// {
//     return (
//         <div>
//             <input type="text" />
//             <button>Add Todo</button>
//         </div>
//     )
// }
// export { Todo }






// function Todo()
// {
//     return (
//         <div>
//             <input type="text" />
//             <button>Add Todo</button>
//             {/* Todo List */}
//         </div>
//     )
// }
// export { Todo }



// import { TodoInput } from "./TodoInput";
// /* 
// How will I able to get TodoInput value here
// we able to get value esily because TodoInput is a Child of Todo Parent
// and we understand that we able to get value from Chile to Parent by call back fuction
// */
// function Todo()
// {
//     return (
//         <div>
//             <TodoInput />
//             {/* Todo List */}
//         </div>
//     )
// }
// export { Todo }




// import { TodoInput } from "./TodoInput";
// import { useState} from "react";
// /* 
// Now I Want to create list
// */
// function Todo()
// {
//     const [ Todolist, setTodolist ] = useState(["Learn React", "Learn Redux"]);   
//     console.log('Todolist:', Todolist)
//     return (
//         <div>
//             <TodoInput />
//             {Todolist.map((e) =>{
//                 return (
//                     <div>{e}</div>
//                 )
//             })}
//         </div>
//     )
// }
// export { Todo }






// import { TodoInput } from "./TodoInput";
// import { useState} from "react";
// /* 
// Now I want to show input value in Todo list
// we know TodoInput is a child of Todo so we do it by call back function
// means means we send TodoInput value to Todo by call back function
// TodoInput.jsx value to Todo.jsx
// */
// function Todo()
// {
//     const [ Todolist, setTodolist ] = useState(["Learn React", "Learn Redux"]);   
//     console.log('Todolist:', Todolist)

//     const getData = (todo) =>{
//         console.log("Received todo from TodoInput.jsx :", todo);
//     }
//     return (
//         <div>
//             <TodoInput getDataFn = {getData} />
//             {Todolist.map((e) =>{
//                 return (
//                     <div>{e}</div>
//                 )
//             })}
//         </div>
//     )
// }
// export { Todo }






// import { TodoInput } from "./TodoInput";
// import { useState} from "react";
// /* 
// Now we able to got TodoList we need to show it on DOM
// for we need to do setTodolist in useState
// but before setTodolist we need to populate earlier Todolist by
// setTodolist([...Todolist])

// means we spreading the current array into a new array but at the end whatever we add it add in new array and take earlier array as it or same as for that we have to do like that
// setTodolist([...Todolist, newtodoelement])

// [...Todolist] it called spread

// for Ex.
// const arr = [1,2,3,4];
// we need to add 5 in arr by spreading so for that we need to do like
// const arr2 = [...arr,5];

// it look like that const arr2 = [1,2,3,4,5]
// */
// function Todo()
// {
//     const [ Todolist, setTodolist ] = useState([]);   
//     console.log('Todolist:', Todolist)

//     const getData = (todo) =>{
//         console.log("Received todo from TodoInput.jsx :", todo);
//         setTodolist([...Todolist, todo]);
//         // when todo get only Todolist.map(function()) will rerender
//     }

//     return (
//         <div>
//             <TodoInput getDataFn = {getData} />
//             {Todolist.map((e) =>{
//                return (
//                     <div>{e}</div>
//                )
//             })}
//         </div>
//     )
// }
// export { Todo }






// import { TodoInput } from "./TodoInput";
// import { useState} from "react";
// import { Todoitem } from "./todoitem";
// /* 
// Now I want to delete todo show we have all todolist here so we create a component called todoitem.jsx which is child of todo.jsx
// and we just send respective click todoitem to todoitem.js
// */
// function Todo()
// {
//     const [ Todolist, setTodolist ] = useState([]);   
//     console.log('Todolist:', Todolist)

//     const getData = (todo) =>{
//         console.log("Received todo from TodoInput.jsx :", todo);
//         setTodolist([...Todolist, todo]);
//         // when todo get only Todolist.map(function()) will rerender
//     }

//     return (
//         <div>
//             <TodoInput getDataFn = {getData} />
//             {Todolist.map((e) =>{
//                return(
//                 <Todoitem todoitem = {e} ></Todoitem>
//                )
//             })}
//         </div>
//     )
// }
// export { Todo }






// import { TodoInput } from "./TodoInput";
// import { useState} from "react";
// import { Todoitem } from "./todoitem";
// /* 
// for ensure that respective todo done or not for that we have to do like status true and false

// and for ensure respective todo done or not we use object like
// const todo = {
//     title : "Learn React",
//     status : "false"
// }
// we need to do it in todo.jsx
// */
// function Todo()
// {
//     const [ Todolist, setTodolist ] = useState([]);   
//     console.log('Todolist:', Todolist)

//     const getData = (todo) =>{
//         const payload = {
//             title : todo,
//             status : false,
//         }
//         console.log("Received todo from TodoInput.jsx :", todo);
//         setTodolist([...Todolist, payload]);
//         // when todo get only Todolist.map(function()) will rerender
//     }

//     return (
//         <div>
//             <TodoInput getDataFn = {getData} />
//             {Todolist.map((e) =>{
//                return(
//                 <Todoitem todoitem = {e} ></Todoitem>
//                )
//             })}
//         </div>
//     )
// }
// export { Todo }





// import { TodoInput } from "./TodoInput";
// import { useState} from "react";
// import { Todoitem } from "./todoitem";
// import { nanoid } from "nanoid"; 
// /* 
// for changing the status of respective todo then we need to do like -->
// first we go in todo.jsx and found respective todo title in todolist by id or change status to false or true by clicking on toggle button
// for we need to do like
// and give unique id
// by npm insall nanoid
// and import it into todo.jsx

// so we have to provide like nanoid(sizeofid);
// */
// function Todo()
// {
//     const [ Todolist, setTodolist ] = useState([]);   
//     console.log('Todolist:', Todolist)

//     const getData = (todo) =>{
//         const payload = {
//             title : todo,
//             status : false,
//             id : nanoid(5)
//         }
//         console.log("Received todo from TodoInput.jsx :", todo);
//         setTodolist([...Todolist, payload]);
//     }

//     return (
//         <div>
//             <TodoInput getDataFn = {getData} />
//             {Todolist.map((e) =>{
//                return(
//                 <Todoitem todoitem = {e} ></Todoitem>
//                )
//             })}
//         </div>
//     )
// }
// export { Todo }




// import { TodoInput } from "./TodoInput";
// import { useState} from "react";
// import { Todoitem } from "./todoitem";
// import { nanoid } from "nanoid"; 
// /* 
// I want when I click on toggle and I need to go in parent of todoitem.jsx which is todo.jsx and where I found respective todo object with the help of id
// and if I able to found the respective object then we need to change it's status and ensuring it to like done or not
// this done by only call back function means we send id of respective object and found respective object in todolist and change status of it.
// because todoitem.jsx is a child of todo.jsx
// */
// function Todo()
// {
//     const [ Todolist, setTodolist ] = useState([]);   
//     console.log('Todolist:', Todolist)

//     const getData = (todo) =>{
//         const payload = {
//             title : todo,
//             status : false,
//             id : nanoid(5)
//         }
//         console.log("Received todo from TodoInput.jsx :", todo);
//         setTodolist([...Todolist, payload]);
//     }

//     const handlestatus = (id) =>{
        
//         console.log('id:', id)
        
//     }
//     return (
//         <div>
//             <TodoInput getDataFn = {getData} />
//             {Todolist.map((e) =>{
//                return(
//                 <Todoitem todoitem = {e} statusfn = {handlestatus} ></Todoitem>
//                )
//             })}
//         </div>
//     )
// }
// export { Todo }




// import { TodoInput } from "./TodoInput";
// import { useState} from "react";
// import { Todoitem } from "./todoitem";
// import { nanoid } from "nanoid"; 
// /* 
// Now I am able to found id now we need to change status of respective todo

// for that we need to do like that
// */
// function Todo()
// {
//     const [ Todolist, setTodolist ] = useState([]);   
//     console.log('Todolist:', Todolist)

//     const getData = (todo) =>{
//         const payload = {
//             title : todo,
//             status : false,
//             id : nanoid(5)
//         }
//         console.log("Received todo from TodoInput.jsx :", todo);
//         setTodolist([...Todolist, payload]);
//     }

//     const handlestatus = (id) =>{
        
//         console.log('id:', id)
//         setTodolist([...Todolist.map((element) =>{
//             return (
//                 element.id === id ? {...element, status : !element.status} : element
//             )
//         })])
//     }
//     return (
//         <div>
//             <TodoInput getDataFn = {getData} />
//             {Todolist.map((e) =>{
//                return(
//                 <Todoitem todoitem = {e} statusfn = {handlestatus} ></Todoitem>
//                )
//             })}
//         </div>
//     )
// }
// export { Todo }







import { TodoInput } from "./TodoInput";
import { useState} from "react";
import { Todoitem } from "./todoitem";
import { nanoid } from "nanoid"; 
/* 
Now I am able to found id now we need to change status of respective todo

for that we need to do like that
*/
function Todo()
{
    const [ Todolist, setTodolist ] = useState([]);   
    console.log('Todolist:', Todolist)
    const getData = (todo) =>{
        const payload = {
            title : todo,
            status : false,
            id : nanoid(5)
        }
        console.log("Received todo from TodoInput.jsx :", todo);
        setTodolist([...Todolist, payload]);
    }

    const handlestatus = (id) =>{
        
        console.log('id:', id)
        const newarr = Todolist.map((element) =>{
            if(element.id === id)
            {
                return (
                    {...element, status : !element.status}
                )
            }
            else
            {
                return (
                    element
                )
            }
        })
        setTodolist(newarr);
    }
    return (
        <div>
            <TodoInput getDataFn = {getData} />
            {Todolist.map((e) =>{
               return(

                <Todoitem todoitem = {e} statusfn = {handlestatus} ></Todoitem>
                
               )
            })}
        </div>
    )
}
export { Todo }