import {useState} from 'react';

export default function Watches(){
    return (
        <div className="watches">
            <form className="form">
                <label htmlFor="watches-name">
                    Название
                    <input type="text" name="watches-name" id="watches-name"></input>
                </label>
                <label htmlFor="watches-name">
                    Временная зона
                    <input type="text" name="watches-name" id="watches-name"></input>
                </label>
                <label className="adding" htmlFor="adding">
                    ''
                    <input type="submit" name="adding" id="adding" value="Добавить"></input>
                </label>
            </form>
        </div>
    )
}