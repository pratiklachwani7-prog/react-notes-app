import React from 'react'
import Cards from './Cards'


const NoteCards = (props) => {  

  return (
    <div className='h-screen w-1/2 overflow-x-hidden bg-[#0f172a]'>
        <h1 className='w-full flex justify-center text-4xl font-bold text-indigo-400 m-5'>Recent Notes</h1>
        <div className='notesContainer w-full flex flex-wrap justify-start gap-12 px-8 py-3 overflow-auto '>
            {props.task.map( (elem , idx) =>  
                    {
                        return <Cards taskArray = {props.task} key={idx} id={idx} title={elem.title} desc={elem.desc} setTask = {props.setTask}/>
                    }
            ) }
        </div>
            
    </div>
  )
}

export default NoteCards
