import {useState} from 'react';
import Clock from '../Clock/Clock';

export default function Watches(){

    const [watches, setWatch] = useState([])
    const [name, setName] = useState('')
    const [offset, setOffset] = useState(1)

    const onSubmit = (e) => {
        e.preventDefault();
        setWatch(prev => (
            [...prev, [name, offset]]
        ))
    }

    const removeClock = (e) => {
        e.stopPropagation()
        let targetEl = e.currentTarget
        let parent = targetEl.parentNode
        watches.splice(parent.id, 1)
        setWatch(prev => (
            [...prev]
        ))
    }

    return (
        <div className="watches">
            <form className="form">
                <label htmlFor="watches-name">
                    Название
                    <input type="text" name="watches-name" id="watches-name" onChange = {(e) => setName(e.target.value)}></input>
                </label>
                <label htmlFor="watches-name">
                    Временная зона
                    <input type="text" name="watches-name" id="watches-name" onChange = {(e) => setOffset(e.target.value)} placeholder="введите,например, +3 или -2"></input>
                </label>
                <label className="adding" htmlFor="adding">
                    ''
                    <input type="submit" name="adding" id="adding" value="Добавить" onClick={(e) => onSubmit(e)}></input>
                </label>
            </form>
            <div className="output-clocks">
                {watches.map((clock, i) => {
                    return <Clock offset = {clock[1]} city = {clock[0]} id = {i} key = {i} remove = {(e)=>removeClock(e)}/>
                })}
            </div>
        </div>
    )
}