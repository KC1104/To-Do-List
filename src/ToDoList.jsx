import { useState } from "react";
import Card from "./Card";

export default function ToDoList() {

    const [item, setItemName] = useState({ id: 0, text: "", done: false })
    const [items, setItems] = useState([])

    const total = items.length;
    const completed = items.filter(item => item.done).length;

    function setName(event) {
        const newValue = event.target.value;
        setItemName((prevValue) => ({ ...prevValue, text: newValue }));
    }

    function handleChange() {
        setItems((prevValue) => {
            return [...prevValue, item]
        })

        setItemName((prevValue) => ({
            id: prevValue.id + 1,
            text: "",
            done: false
        }))

    }

    function clicking(identifier) {
        setItems((prevValue) => {
            return prevValue.map((item) => {
                if (item.id === identifier) {
                    return { ...item, done: !item.done };
                }
                return item;
            })
        })
        let newCount = 0;
        for (let i = 0; i < items.length; i++) {
            if (items[i].done) {
                newCount += 1;
            }
        }

    }

    function remove() {
        setItems((prevValue) => {
            return prevValue.filter((item) => !item.done)
        })
    }

    function deleteCard(identifier){
        setItems((prevValue) => {
            return prevValue.filter((item) => item.id!=identifier)
        })
    }
    return (
        <div className='container'>
            <div className='heading'>
                <h1>To Do List</h1>
            </div>
            <div className="items-container">
                <div className='form'>
                    <input type="text" placeholder="What needs to be done" onChange={setName} />
                    <button onClick={handleChange}>+</button>
                </div>
                <div className="stats">
                    <p>{completed} out of {total} completed</p>
                    <button onClick={remove} className='remove-btn'>Clear Done</button>
                </div>
                <div className='items'>
                    {items.map((value) => (
                        <Card
                            key={value.id}
                            id={value.id}
                            text={value.text}
                            done={value.done}
                            onToggle={clicking}
                            remove={deleteCard}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}