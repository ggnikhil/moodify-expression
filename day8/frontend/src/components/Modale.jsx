import React from 'react'

const Modale = (props) => {
    const {editDiscription,currentDiscription,id} = props
  return (
    <div className='modaleBox h-20 w-20'>
      <div className='bg-[#00bc7d] h-50 w-90 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 rounded-2xl'>
        <h2 className='font-bold text-xl pt-10'>Edit your discription</h2>

        <form  onSubmit={(e)=>{
            e.preventDefault()
            const EditedValue =e.target.elements.inputDiscription.value
            props.editDiscription(EditedValue,id)
            document.querySelector('.modaleBox').classList.toggle('show')
            }}
            className='flex flex-col items-center gap-2'>

            <input name='inputDiscription' defaultValue={currentDiscription} className='bg-[#016040] h-8 w-fit pl-5 text-xl rounded text-white' type="text" placeholder='correct your discription'/>

            <div className='flex gap-10'>
                <button type="submit" className='bg-black text-white mt-5 px-4 py-0.5 text-xl rounded cursor-pointer active:scale-95'>Save</button>
                <button type="button" className='bg-[#6c1414] text-white mt-5 px-4 py-0.5 text-xl rounded cursor-pointer active:scale-95'
                onClick={(e)=>{
                document.querySelector('.modaleBox').classList.toggle('show')
                console.log("clicked")
              }}>Cancel</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Modale
