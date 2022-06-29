import React, {useState} from 'react';
import Hello from './sayHello';
import Tweet from './Tweet';

function App(){
  const [isRed, setRed] = useState(false);
  const [count, setCount]=useState(0);
  const [isOdd, setOdd]= useState(false);
  const increment = () => {
    setCount (count+1);
    setRed(!isRed);
    setOdd(!isOdd);
  }
  const [users, setUsers]=useState([
    {name: 'Ed', message: 'Hello There' , likes: '100'},
    {name: 'Ram', message: 'Party' , likes: '10'},
    {name: 'Stephen Curry', message: 'GOAT' , likes: '200'},
  ])

  return (
    
       <div className="app">        
        {/* <Hello /> */}
        {/* <Tweet name="One" message="This is a random tweet" likes="50"/>
        <Tweet name="Two" message="This is a random tweet two" likes="600"/>
        <Tweet name="Three" message="This is a random tweet three" likes="300"/>
        <Tweet name="Four" message="This is a random tweet four" likes="100"/> */}
        {/* <h1 class={isRed ? "red" : "blue"}>{isOdd ? "Odd" : "Even"}</h1>
        <button onClick ={increment}>Increment </button>
        <h1>{count}</h1> */}
        
        {users.map(user =>(
          <Tweet name={user.name} message={user.message} likes={user.likes}/>
        ))}
        </div>
  );
}
export default App;