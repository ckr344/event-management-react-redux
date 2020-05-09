import React from 'react';

// function App() {
//   // const greeting = "Hi!!";
//   // const dom = <h1 className="foo">{greeting}</h1>
//   // return (
//   //   dom
//   // );

//   // return (
//   //   <input type="text" onClick={() => {console.log("I am clicked.")}} />
//   // );

//   // return (
//   //   <input type="text" onChange={() => {console.log("I am clicked.")}} />
//   // );

//   // return (
//   //   <div>
//   //     <label htmlFor="bar"> bar </label>
//   //     <input type="text" onChange={() => {console.log("I am clicked.")}} />
//   //   </div>
//   // );

//   return (
//     <React.Fragment>
//       <label htmlFor="bar"> bar </label>
//       <input type="text" onChange={() => {console.log("I am clicked.")}} />
//     </React.Fragment>
//   );
// }

const App = () => {
  return(
    <div>
    <Cat />
    <Cat />
    <Cat />
    <Cat />
    <Cat />
  </div>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}

// class App extends Component {
//   render(){
//     return(
//       <React.Fragment>
//         <label htmlFor="bar"> bar </label>
//         <input type="text" onChange={() => {console.log("I am clicked.")}} />
//       </React.Fragment>
//     )
//   }
// }

export default App;
