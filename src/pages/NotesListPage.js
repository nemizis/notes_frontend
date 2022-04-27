import React, {useState, useEffect} from 'react'
import ListItem from '../components/ListItem'
import { AddButton } from '../components/AddButton'


const NotesListPage = () => {

    let [notes, setNotes] = useState([])

    useEffect(()=> {
        getNotes()
    }, [])

    let getNotes = async () => {
        let responce = await fetch('/api/notes/')
        let data = await responce.json()
        console.log('data:', data)
        setNotes(data)
    }

  return (
    <div className='notes'>
        <div className='notes-header'>
            <div>
                <h2 className='notes-title'>
                    &#9782; Записи
                </h2>
            </div>
            <p className='notes-count'>
                    Количество записей: {notes.length}
            </p>
        </div>
        <div className='notes-list'>
            {notes.map((note, index) => (
                <ListItem key={index} note={note} />
            ))}
        </div>
        <AddButton />
    </div>
  )
}

export default NotesListPage