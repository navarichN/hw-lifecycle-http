import {useState} from 'react';
import Note from '../Note/Note';
import axios from "axios";

export default function Crud(){
    const [note, setNote] = useState({})
    const [notes, setNotes] = useState([]);

    const getNotes = async () => {
        try {
            const res = await axios.get('http://localhost:7070/notes')
            console.log('res in getNotes:',res)
            setNotes(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    
    const postNote = async (e) => {
        e.preventDefault()
        try {
            let res = await axios.post('http://localhost:7070/notes', note)      
    
            console.log(res);
            console.log('res in postNotes:',res);
            await getNotes();
        } catch (error) {
            console.log(error)
        }
    }

    const deleteNote = async (e) => {
        e.preventDefault()
        e.stopPropagation()
        try {
            let res = await axios.delete('http://localhost:7070/notes/' + e.target.parentNode.id)
            console.log(res)
            await getNotes();
        } catch (error) {
            console.log(error)
        }
    }

    function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }


    return (
        <div className="crud">
            <h1>Notes</h1>
            <button onClick={getNotes}>Обновить</button>
            <div className="notes-output">
            {(notes.length >= 1) ? notes.map((value,index)=>{return <Note content = {value.content} id = {value.id} key = {index} onClick={(e)=>deleteNote(e)}/>}) : <h3 className="note-no">здесь пока нет заметок</h3>}
            </div>
            <form className="notes-input">
                <label htmlFor="note">
                    <textarea type="text" name="note" id="note" onChange={(e) => {
                        console.log(e.target.value)
                        setNote(
                            {
                                "id": randomInteger(1, 1000000000),
                                "content": e.target.value
                            }
                        )
                    }}>
                        
                    </textarea>
                </label>
                <label className="posting" htmlFor="posting">
                    <input type="submit" name="posting" id="submit" value="Отправить" onClick={(e)=>postNote(e)}></input>
                </label>
            </form>
        </div>
    )
}