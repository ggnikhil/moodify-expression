import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Card from './components/Card'
import Modale from './components/Modale'


const App = () => {

  const [notes, setnotes] = useState([])
  const [currentEditId, setCurrentEditId] = useState(null)


  async function getdata(){
    let detail = await axios.get("https://express-23ge.onrender.com/api/notes")
    setnotes(detail.data.notes)
  }

  useEffect(()=>{
    getdata()
  },[])

  function handleSubmit(e){
    e.preventDefault()
    const faram = e.target

    let inputdata = e.target.elements.input.value
    let discriptiondata = e.target.elements.discription.value

    axios.post("https://express-23ge.onrender.com/api/notes",{
      title:inputdata,
      discription:discriptiondata
    })
    .then(()=>{
      faram.reset()
      getdata()
    })
  }

  function deleteHandler(id){
    axios.delete(`https://express-23ge.onrender.com/api/notes/${id}`)
    .then(()=>{
      getdata()
    })
  }

  function editDiscription(EditedValue,id){
    axios.patch(`https://express-23ge.onrender.com/api/notes/${id}`,{
      discription: EditedValue
    })
    .then(()=>{
      getdata()
    })
  }

const currentNote = notes.find(note => note._id === currentEditId)

  return (
    <div className='h-screen w-screen bg-black flex gap-3 items-start flex-col relative'>

        <div className='flex gap-2 m-3'>
          <form className='flex gap-2 flex-col' onSubmit={handleSubmit}>
            <input className='bg-[#ffffffc8] border-2 border-[#009966] rounded font-bold' type="text" name="input" required/>
            <input className='bg-[#ffffffc8] border-2 border-[#009966] rounded' type="text" name='discription'/>
            <button className='bg-[#009966] text-white w-fit self-center px-3 py-1 rounded active:scale-95' required>Add notes</button>
          </form>
        </div>

        {
          notes.map((notes,idx)=>{
            return <Card key={idx} title={notes.title} discription={notes.discription} id={notes._id} deleteHandler={deleteHandler} setCurrentEditId={setCurrentEditId}/>
          })
        }
        <Modale currentDiscription={currentNote?.discription || ''} id={currentEditId} editDiscription={editDiscription} setCurrentEditId = {setCurrentEditId} />
    </div>
  )
}

export default App
