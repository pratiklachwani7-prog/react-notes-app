import React, { useCallback } from 'react'
import { X } from 'lucide-react';

const Cards = (props) => {

    const setTask = props.setTask ;

    const deleteNote = useCallback( (idx) =>
            {
                const copyTask = [...props.taskArray] ;
                copyTask.splice(idx , 1) ;
                setTask(copyTask) ;
                localStorage.setItem("Notes" , JSON.stringify(copyTask)  ) ;
            }  , [props.taskArray]  
    )

  return (
            <div id="cards"
            className='h-60 w-49 bg-[#1e293b] border-4 border-[#334155] rounded-xl shadow-lg shadow-black/30 transition-all duration-200 ease-in-out shrink-0 p-3
            hover:scale-110'>
                <div className='flex justify-between'>
                    <h4 className='inline px-2 py-0.5 text-xs rounded-md bg-indigo-500/20 text-indigo-400'>{props.id + 1} </h4>
                    <X className=' text-slate-400 hover:text-red-400 active:scale-95 transition duration-200 hover:scale-140 cursor-pointer' size={18} strokeWidth = {1.75} 
                    onClick={ () =>
                        {
                            deleteNote( props.id ) ;
                        }
                     }
                    />
                </div>
                <h3 className='text-white font-semibold flex justify-center'>{props.title}</h3>
                <p className='text-gray-400 '>{props.desc}</p>
            </div>
  )
}

export default Cards
