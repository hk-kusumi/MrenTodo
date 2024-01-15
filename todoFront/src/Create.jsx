import { useState } from "react"
import axios from 'axios'

function Create() {
    const [task, setTask] = useState()
    const handleAdd = () => {
        axios.post("http://localhost:3001/add", { task: task })
            .then(res => {
                console.log(res);
                location.reload()
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="center" >
            <input type="text" style={{ borderBlockColor: 'black' }} onChange={(e) => { setTask(e.target.value) }} />
            <button type="button" onClick={handleAdd}>Add</button>
        </div>
    )
}

export default Create
