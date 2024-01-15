import { useEffect, useState } from "react"
import Create from "./Create"
import axios from 'axios'
import { BsFillCheckCircleFill, BsFillTrashFill } from 'react-icons/bs'
import { BsCircleFill } from 'react-icons/bs'

function Home() {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/get')
            .then(res => {
                setTodos(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const handleEdit = (id) => {
        axios.put('http://localhost:3001/update/' + id)
            .then(res => { location.reload() })
            .catch(err => console.log(err))
    }
    const onHandleDelete = (id) => {
        axios.delete('http://localhost:3001/delete/' + id)
            .then(res => {
                console.log(res);
                location.reload()
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h2 className="topic">To Do List</h2>
            <div><Create /></div>
            {
                todos.length === 0
                    ?
                    <div className="list"><h2> No Record</h2></div>
                    :
                    todos.map(todo => (
                        <div className="list">
                            <div onClick={() => handleEdit(todo._id)}>
                                {todo.done ?
                                    <BsFillCheckCircleFill></BsFillCheckCircleFill>
                                    :
                                    <BsCircleFill />}

                                {todo.task}
                            </div>
                            <div>
                                <BsFillTrashFill onClick={() => onHandleDelete(todo._id)} />
                            </div>
                        </div>)
                    )
            }
        </div>
    )
}

export default Home
