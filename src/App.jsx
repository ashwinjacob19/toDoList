import React, { useState } from 'react'
import './App.css'

export default function App() {

  const [toDos,setToDos] = useState([])
  const [toDo,setToDo] = useState('')

  function handleText(event){
    setToDo(event.target.value)
  }

  function handleButton(){
    setToDos([...toDos,{id: Date.now(),text: toDo,status: false}])
  }

  
  return (
    <div className='app'>
      <div className='mainHeading'>
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <h2>Whoop, it's Wednesday 😇 ☕️</h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={handleText} placeholder='  🖊️ Add item...' />
        <i onClick={handleButton} className="fa-solid fa-plus"></i>
      </div>
      <div className="toDos">
        {toDos.map(obj => {
          return(
            <div className="toDo">
              <div className="left">
                <input onChange={(event)=>{
                  console.log(event.target.checked)
                  console.log(obj)
                  setToDos(toDos.filter((obj2)=>{
                    if(obj2.id===obj.id){
                      obj2.status = event.target.checked
                    }
                    return obj2
                  }))
                }} 
                checked={obj.status} type="checkbox" />
                <p>{obj.text}</p>
              </div>
              <div className="right">
              <i onClick={()=>{
                setToDos(toDos.filter((obj2)=>{
                  let temp;
                  if(obj2.id != obj.id){
                    temp=obj2
                  }
                  return temp
                }))
              }} className="fa-sharp fa-solid fa-xmark"></i>
              </div>
              
        </div>
          )
          })}
      </div>
      {toDos.map((obj)=>{
        if(obj.status){
          return(<h1>{obj.text}</h1>) 
        }
        return null
      })}

    </div>
  )
}
