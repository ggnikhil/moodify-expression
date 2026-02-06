import React from 'react'

const Card = (props) => {
    const {title,discription,deleteHandler,id,setCurrentEditId} = props
  return (
    <>
      <div  className='bg-emerald-600 h-fit w-45 rounded mx-5 p-3 flex justify-center items-start flex-col'>
          <div>
              <h1 className='font-bold'>{title}</h1>
              <p>{discription}</p>

            <div className='flex gap-7'>
              <button onClick={()=>{
                deleteHandler(id)
              }} className='bg-red-700 text-xs rounded px-1 cursor-pointer active:scale-90 mt-2 text-white'>Delete</button>
              <button className='bg-orange-400 text-xs rounded px-1 cursor-pointer active:scale-90 mt-2 text-white'
              onClick={(e)=>{
                setCurrentEditId(id)
                document.querySelector('.modaleBox').classList.toggle('show')
                console.log("clicked",id)
              }}
              >Edit</button>
            </div>
          </div>
      </div>
    </>
  )
}

export default Card
