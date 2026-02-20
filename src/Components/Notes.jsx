import React, { useCallback, useEffect, useState } from 'react'

const Notes = (props) => {
    
    const setTitle = props.setTitle ;
    const setDesc = props.setDesc ;
    const setTask = props.setTask ;
    
    const submitHandler = useCallback( (e) => 
    {
        e.preventDefault() ;        
        let copyTask = [...props.task] ;

        copyTask.push( {title : props.title , desc : props.desc} )
        setTask(copyTask) ;
        localStorage.setItem("Notes" , JSON.stringify(copyTask)  ) ;
        setTitle("") ;
        setDesc("") ;
    } , [props.title , props.desc , props.task , setTask] )





    

  return (
    <div className='bg-[#0f172a] w-1/2'>
      <form 
      className='min-h-screen w-full flex flex-col gap-12 p-10 bg-[#1e293b]'
      onSubmit={ (e) =>
                    {
                        submitHandler(e) ;
                    }
                }>
            <h1
            className='w-full flex justify-center text-4xl font-bold text-indigo-300'
            >Add Notes</h1>


            <input 
            type='text'
            className='h-12 w-full bg-[#334155] font-extrabold text-4xl px-5 py-10 border-2 border-[#475569] rounded-lg transition-all duration-200
            text-white placeholder:text-gray-400
            focus:outline-none focus:ring-2 focus:ring-indigo-500
            '
            onChange={ (event) => 
                {
                    setTitle(event.target.value) ;
                }
            }
            value={props.title}
            placeholder='Write the Notes Heading'
            />

            <textarea
            type='text'
            className='h-36 w-full bg-[#334155] font-medium text-2xl px-5 py-4 border-2 border-[#475569] rounded-lg resize-none transition-all duration-200
            text-white placeholder:text-gray-400
            focus:outline-none focus:ring-2 focus:ring-indigo-500
            '
            onChange={ (event) =>
                    {
                        setDesc(event.target.value)
                    }  
             }
             value={ props.desc }
            placeholder='Write your Notes Description'
            />  
            <button
            className='h-10 w-full bg-indigo-500 font-medium  text-white rounded-lg transition-all duration-500 ease-in-out
            hover:bg-indigo-600 active:rounded-4xl  
            '
            >Add Notes</button>
      </form>
    </div>
  )
}

export default Notes
