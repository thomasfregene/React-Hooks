import React,{useState, useEffect} from 'react';

import Post from './post';


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

  useEffect(()=>{
    return ()=>{
      console.log('use effect count')
    }
  }, [count])

  // useEffect(()=>{
  //   console.log('POST')
  // }, [posts])

  // useEffect(()=>{
  //   console.log('MOUNTED')
  // }, [])

  const removePost = () =>{
    setPost([])
  }
   
  return (
    <>
      <h3>Count: {count}</h3>
      <button onClick={addOne}>Add one +</button>
      <button onClick={restOne}>Rest one -</button>
      <button onClick={()=>setCount (initialCount)}>Reset</button>

      {posts.map((item, i)=>(
          <Post item={item} key={i}/>
      ))}
      <button onClick={addOnePost}>Add one more post</button>
      <button onClick={removePost}>Remove post</button>
    </>
  );
}

export default App;
