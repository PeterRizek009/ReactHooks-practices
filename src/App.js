import React, { useState , useEffect} from 'react';



export default function App() {
    const [counter , setCounter] =useState(0);
    const [title , setTitle] = useState('');

    const handleTitle = () => setTitle('React Hooks')
  
    useEffect(
      () => {console.log("inside useeffect");
          document.title = `you have clicked ${counter} times`;
        },[counter > 3] )

  return (
    <div className="container text-center pt-5">
      <button type="button" className="btn btn-primary"onClick={() => setCounter(counter + 1) }>Count up</button>
      <button type="button" className="btn btn-primary mx-5"onClick={() => setCounter(0) }>Clear</button>
      <button type="button" className="btn btn-primary mx-3"onClick={handleTitle}>Change title</button>
       <div className='mt-3'>{counter}</div>
    </div>
    

  );
}


