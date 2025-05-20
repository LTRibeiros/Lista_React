import {ChevronRightIcon} from "lucide-react";
import {Trash} from "lucide-react";
import {useNavigate} from "react-router-dom";

function Tasks(props) {

    const navigate = useNavigate()

    function onSeeDatailsClick(task) {
        navigate(`/task?title=${task.title}&description=${task.description}`)
    }
    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {props.tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                    <button
                        onClick={() => props.onTaskClick(task.id)}
                        className={`bg-slate-400 text-left w-full flex items-center gap-2 text-white p-2 rounded-md ${
                            task.isCompleted && "line-through"
                        }`}
                    >
                        {task.title}
                    </button>

                    <button onClick={() => onSeeDatailsClick(task)} className="bg-slate-400 text-white p-2 rounded-md">
                        <ChevronRightIcon/>
                    </button>

                    <button onClick={() => props.onDeleteTaskClick(task.id)} className="bg-slate-400 text-white p-2 rounded-md">
                        <Trash />
                    </button>

                </li>
            ))}
        </ul>
    );
}

export default Tasks;

