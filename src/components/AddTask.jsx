import {useState} from "react";

function AddTask({onAddTaskSubmit}) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <input
                type="text"
                placeholder="Adicione uma tarefa"
                className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            >
            </input>
            <input
                type="text"
                placeholder="Descrição da tarefa"
                className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            >
            </input>

            <button onClick={() => {
                if (!title.trim() || !description.trim()) {
                    return alert("preenche o título e a descrição da tarefa")
                }
                onAddTaskSubmit(title, description)
            }}
                className="bg-slate-500 text-white px-4 py-2 rounded-md"> Adicionar
            </button>


        </div>
    )

}

export default AddTask