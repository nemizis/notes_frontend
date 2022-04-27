import React, {useState, useEffect} from 'react'
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'
import {
  useParams,
  useNavigate,
  } from "react-router-dom"

const NotePage = () => {

    let navigate  = useNavigate()
    let {noteId} = useParams()
    let [note, setNote] = useState(null)

    useEffect(()=>{
        getNote()
    }, [noteId])


    let getNote = async ()=> {
        if (noteId === 'new') return
        let response = await fetch('/api/notes/'+noteId.toString())
        let data = await response.json()
        console.log(response)
        setNote(data)
    }
  
  let createNote = async () => {
    fetch('/api/notes/create/',{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })
    navigate("/", {replace:true})
  }  

  let updateNote = async () => {
    fetch('/api/notes/'+noteId.toString()+'/update/', {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })
  }

  let deleteNote = async () => {
    fetch('/api/notes/'+noteId.toString()+'/delete/', {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
        }
    })
    navigate("/", {replace:true})

  }


  let handleSubmit = ()=> {
      updateNote()
    navigate("/", {replace:true})
  }

  return (
    <div className='note'>
        <div className='note-header'>
          <h3>
              <ArrowLeft onClick={handleSubmit} />
          </h3>
          { noteId !=='new' ? (<button onClick={deleteNote}>Удалить запись</button>
          ): (<button onClick={createNote}>Сохранить</button>)}
        </div>
        <textarea onChange={(e)=> {setNote({...note, 'body': e.target.value})}} defaultValue={note?.body}></textarea>
    </div>
  )
}

export default NotePage