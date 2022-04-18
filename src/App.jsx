
// import './App.css';

// function App() {

//   return (
//     <div className="App">
//       <First />
//       <Second />
//     </div>
//   );

// }

// function First()
// {
//   return (
//     <div>First Child</div>
//   )
// }

// function Second()
// {
//   return (
//     <div>Second Child</div>
//   )
// }
// export default App;





// import { useState } from "react";
// import './App.css';

// function App() {

//   return (
//     <div className="App">
//       <First />
//       <Second />
//     </div>
//   );

// }

// function First()
// {
//   const [x, setx] = useState(30);
//   return (
//     <div>First Child,{x}</div>
//   )
// }

// function Second()
// {
//   return (
//     <div>Second Child</div>
//   )
// }
// export default App;





// import { useState } from "react";
// import './App.css';

// function App() {
//   const data = "Hello C1";
//   return (
//     <div className="App">
//    parent to child by this method
//       <First parent = {data} />
//       <Second />
//     </div>
//   );

// }

// function First({parent})
// {
//   console.log("Received from parent",parent);
//   return (
//     <div>First Child, {parent}</div>
//   )
// }

// function Second()
// {
//   return (
//     <div>Second Child</div>
//   )
// }
// export default App;







// import { useState } from "react";
// import './App.css';
// // our data in First Child
// // I want send data from First Child to Parent
// // For that we use

// // Call back fuction
// function App() {
//   return (
//     <div className="App">
//       <First parent = "Hello" />
//       <Second />
//     </div>
//   );
// }
// function First({parent})
// {
//   const data = "Hello C1";
//   console.log("Received from parent",parent);
//   return (
//     <div>First Child, {parent}</div>
//   )
// }
// function Second()
// {
//   return (
//     <div>Second Child</div>
//   )
// }
// export default App;






// import { useState } from "react";
// import './App.css';
// // our data in First Child
// // I want send data from First Child to Parent
// // For that we use

// // Call back fuction
// function App() {
//   const getData = (data) =>
//   {
//     console.log("Data from First child", data);
//   }
//   return (
//     <div className="App">
//       <First Fromparent = {getData} />
//       <Second />
//     </div>
//   );
// }
// function First({Fromparent})
// {
//   const data = "Hello C1";
//   console.log("Received from parent",Fromparent);
//   return (
//     <div>First Child</div>
//   )
// }
// function Second()
// {
//   return (
//     <div>Second Child</div>
//   )
// }
// export default App;






// import { useState } from "react";
// import './App.css';
// // our data in First Child
// // I want send data from First Child to Parent
// // For that we use

// // Call back fuction
// function App() {
//   const getData = (data) =>
//   {
//     console.log("Data from First child", data);
//   }
//   return (
//     <div className="App">
//       <First Fromparent = {getData} />
//       <Second />
//     </div>
//   );
// }
// function First({Fromparent})
// {
//   const data = "Hello C1";
  
//   Fromparent(data);
//   return (
//     <div>First Child</div>
//   )
// }
// function Second()
// {
//   return (
//     <div>Second Child</div>
//   )
// }
// export default App;






// import { useState } from "react";
// import './App.css';
// /*
// Now we want data sent from one sibling to another sibling means first to second
// for that we have to first send from one sibling to parent then after we send parent to another sibling
// like first to parent and parent to second
// like first child to parent and parent to second child
// like first to app and app to second
// for that we need to first update data by useState then after we send useState data

// setMessage --> whenever setMessage called it set new value in useState and then after it recreate the app component function means rerender the app component function
// */
// function App() {

//   // Message from First Child and go to Second Child
//   const [Message, setMessage] = useState("");

//   const getData = (data) =>
//   {
//     console.log("Data from First child", data);
//   }
//   return (
//     <div className="App">
//       <First Fromparent = {getData} />
//       <Second FirstToParentToSecond = { Message } />
//     </div>
//   );
// }
// function First({Fromparent})
// {
//   console.log('Fromparent:', Fromparent)
  
//   const data = "Hello C1";
//   Fromparent(data);
//   return (
//     <div>First Child</div>
//   )
// }
// function Second({FirstToParentToSecond})
// {
//   // we don't get anything because we have to setMessage first in useState
//   console.log("Get data from FirstToParentToSecond", FirstToParentToSecond);
//   return (
//     <div>Second Child</div>
//   )
// }
// export default App;






// import { useState } from "react";
// import './App.css';
// /*
// Now we want data sent from one sibling to another sibling means first to second
// for that we have to first send from one sibling to parent then after we send parent to another sibling
// like first to parent and parent to second
// like first child to parent and parent to second child
// like first to app and app to second
// for that we need to first update data by useState then after we send useState data

// setMessage --> whenever setMessage called it set new value in useState and then after it recreate the app component function means rerender the app component function
// */
// function App() {
//   // Message from First Child and go to Second Child
//   const [Message, setMessage] = useState("");

//   const getData = (data) =>
//   {
//     console.log("Data from First child", data);
//     // we have to set here because we get data here from First Child
//     setMessage(data);
//   }
//   return (
//     <div className="App">
//       <First Fromparent = {getData} />
//       <Second FirstToParentToSecond = { Message } />
//     </div>
//   );
// }
// function First({Fromparent})
// {
//   // console.log('Fromparent:', Fromparent)
  
//   const data = "Hello C1";
//   Fromparent(data);
//   return (
//     <div>First Child</div>
//   )
// }
// function Second({FirstToParentToSecond})
// {
//   // we don't get anything because we have to setMessage first in useState
//   console.log("Get data from FirstToParentToSecond", FirstToParentToSecond);
//   return (
//     <div>Second Child</div>
//   )
// }
// export default App;





// import { useState } from "react";
// import './App.css';
// /* 
// I want when we click on button then our data send to parent and parent to second
// */
// function App() {
//   const [Message, setMessage] = useState("");

//   const getData = (data) =>
//   {
//     console.log("Data from First child", data);
//     setMessage(data);
//   }
//   return (
//     <div className="App">
//       <First Fromparent = {getData} />
//       <Second FirstToParentToSecond = { Message } />
//     </div>
//   );
// }
// function First({Fromparent})
// { 
//   const data = "Hello C1";
//   return (
//     <div>First Child
//       <button onClick={() =>{
//         Fromparent(data);
//       }}>First Child Send Data to Parent and Parent Send data to Second Child</button>
//     </div>
//   )
// }
// function Second({FirstToParentToSecond})
// {
//   console.log("Get data from FirstToParentToSecond", FirstToParentToSecond);
//   return (
//     <div>Second Child,{FirstToParentToSecond}</div>
//   )
// }
// export default App;




import { Todo } from "./components/Todo";
import './App.css';
function App() {
  return (
    <div className="App">
      <Todo />
    </div>
  );
}
export default App;