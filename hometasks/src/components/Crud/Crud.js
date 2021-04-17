import {useState} from 'react';
import Note from '../Note/Note';
import axios from "axios";

export default function Crud(){
    const [note, setNote] = useState({})

    // async function postNote(url = '', data = ''){
    //     try {
    //         const response = await fetch(url, {
    //           method: 'POST',
    //           mode: 'no-cors',
    //           body: data, 
    //         })
            
    //         console.log('response:',response)
    //         const json = await response.json();
    //         console.log('Успех:', JSON.stringify(json));
    //       } catch (error) {
    //         console.error('Ошибка:', error);
    //       }
    // }
    async function postNote(url = '', data = ''){
        let res = await axios.post('http://localhost:7070/', data)      
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        .catch(error => {
            console.log(error)
        })
    }



    return (
        <div className="crud">
            <div className="notes-output">
                <Note />
            </div>
            <form className="notes-input">
                <label htmlFor="note">
                    <textarea type="text" name="note" id="note" onChange={(e) => {
                        console.log(e.target.value)
                        setNote(
                            {
                                "id": 0,
                                "content": e.target.value
                            }
                        )
                        }}>
                        
                    </textarea>
                </label>
                <label className="posting" htmlFor="posting">
                    <input type="submit" name="posting" id="submit" value="Отправить" onClick={()=>postNote('http://localhost:7070/',note)}></input>
                </label>
            </form>
        </div>
    )
}