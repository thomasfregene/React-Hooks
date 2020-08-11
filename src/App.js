import React,{useState} from 'react';


const App =({initialCount})=> {
  let [count, setCount] = useState(initialCount)
  let [posts, setPost] = useState([
    {
      name: 'Super awesome hooks',
      body: 'Every thing is awesome when you are part of a team'

    }
  ])

  const addOne=()=>{
    setCount(prevCount => {
      return prevCount + 1
    })
  }

  const restOne=()=>{
    setCount(prevCount => {
      return prevCount - 1
    })
  }

  const addOnePost=()=>{
    let newPost ={
      name: 'Super awesome hooks 2',
      body: 'Every thing is awesome when you are part of a team 2'

    }

    setPost([
      ...posts,
      newPost
    ])
  }
   
  return (
    <>
      <h3>Count: {count}</h3>
      <button onClick={addOne}>Add one +</button>
      <button onClick={restOne}>Rest one -</button>
      <button onClick={()=>setCount (initialCount)}>Reset</button>
      
      {posts.map((item, i)=>(
        <div key={i}>
          <hr/>
          <div>Name: {item.name}</div>
          <div>Body: {item.body}</div>
        </div>
      ))}
      <button onClick={addOnePost}>Add one more post</button>
    </>
  );
}

export default App;
