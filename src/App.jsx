import React, { useCallback, useEffect, useState } from 'react'
import Notes from './Components/Notes'
import NoteCards from './Components/NoteCards'

const App = () => {

  const [title, setTitle] = useState("") ;
  const [desc, setDesc] = useState("") ;
  const [task, setTask] = useState([]) ;

      const renderingOldTask = useCallback( (e) => 
        {
            const oldTaskCopy = JSON.parse(localStorage.getItem("Notes")) ;
            setTask(oldTaskCopy) ;
        } , [task , setTask] 
    )

    useEffect(renderingOldTask , [setTask]) ;


  return (
    <div className='flex h-screen w-screen bg-[#0f172a]'>
      <Notes title={title} desc={desc} task={task} setTitle={setTitle} setDesc={setDesc} setTask={setTask} />
      <NoteCards task={task} setTask = {setTask}/>

    </div>
  )
}

export default App
