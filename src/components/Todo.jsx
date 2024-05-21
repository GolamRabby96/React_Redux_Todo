import { useState } from "react";
import { FaRegPlusSquare } from "react-icons/fa";
import { updateSearchTerm } from "../redux/actions";
 import {useDispatch} from "react-redux"
import { IoSearchCircleOutline } from "react-icons/io5";
import FilterButton from "./FilterButton";


const Todo = () => {
    const dispatch = useDispatch();

    const [newTodoText, SetNewTodoText] = useState("");
    const [updateSearchTerm, setUpdateSearchTerm]=useState("")

    const handleAddToDo = (text) => {
        dispatch(addTodo(text));
    }

    const handleAddToDoClick = () => {
        if (newTodoText.trim !== "") {
            handleAddToDo(newTodoText.trim());
            SetNewTodoText("");
        }
    }


    return (
        <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
            <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">Personal todo apper </h2>

            {/* input text and btn */}
            <div className="flex items-center mb-4">
                <input type="text" value={newTodoText} onChange={(e) => SetNewTodoText(e.target.value)} name="addTodoInput" id="addTodoinput" placeholder="Add Todo"
                    className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" />
                <button onClick={handleAddToDoClick} className="ml-4 p-2 bg-blue-400 text-white rounded hover:bg-blue-600"><FaRegPlusSquare /></button>
            </div>

            {/* Filte and search option */}
            <div className="flex items-center justify-between">
                <FilterButton />
                <div className="flex items-center mb-4">
                    <input type="text" value={updateSearchTerm} onChange={(e) => setUpdateSearchTerm(e.target.value)} name="addTodoInput" id="addTodoinput" placeholder="Add Todo"
                        className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" />
                    <button className="ml-4 p-2 bg-blue-400 text-white rounded hover:bg-blue-600"><IoSearchCircleOutline /></button>
                </div>
            </div>
        </div>
    )
}

export default Todo;