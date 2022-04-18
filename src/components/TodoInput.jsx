
// function TodoInput()
// {
//     return (
//         <div>
//             <input onChange={(e) =>{
//                 // e is event object
//                 console.log(e);
//                 console.log(e.target);
//                 console.log(e.target.value)
//             }} type="text" />
//             <button>Add Todo</button>
//         </div>
//     )
// }
// export { TodoInput }





// import { useState } from "react";
// function TodoInput()
// {
//     const [Text,setText] = useState("");
//     return (
//         <div>
//             <input onChange={(e) =>{
//                 // e is event object
//                 // console.log(e);
//                 // console.log(e.target);
//                 console.log(e.target.value)
//                 setText(e.target.value);
//             }} type="text" />
//             <button>Add Todo</button>
//             {Text}
//         </div>
//     )
// }
// export { TodoInput }





import { useState } from "react";
/*
Now I want to send TodoInput value to Todo

And we know TodoInput.jsx is a child of Todo.jsx so we do it by just call back function
*/
function TodoInput({getDataFn})
{
    // console.log('getDataFn:', getDataFn)
    
    const [Text,setText] = useState("");
    // console.log('Text:', Text)
    return (
        <div>
            <input onChange={(e) =>{
                // e is event object
                // console.log(e);
                // console.log(e.target);
                // console.log(e.target.value);
                setText(e.target.value);
            }} type="text" />

            <button onClick={() =>{

                getDataFn(Text);
                
            }}>Add Todo</button>

            {Text}
        </div>
    )
}
export { TodoInput }