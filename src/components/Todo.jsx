import { useState } from "react";
import { FaRegPlusSquare } from "react-icons/fa";
import { addTodo, updateSearchTerm } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux"
import { IoSearchCircleOutline } from "react-icons/io5";
import FilterButton from "./FilterButton";
import TodoList from './TodoList';

const Todo = () => {
    const todos = useSelector((state) => state.todos);
    const filter = useSelector((state) => state.filter);
    const dispatch = useDispatch();

    const [newTodoText, SetNewTodoText] = useState("");
    const [searchTerm, setSearchTerm] = useState("")

    const handleAddToDo = (text) => {
        dispatch(addTodo(text));
    }

    const handleAddToDoClick = () => {
        if (newTodoText.trim !== "") {
            handleAddToDo(newTodoText.trim());
            SetNewTodoText("");
        }
    }

    const handleSearchChange = (value) => {
        setSearchTerm(value);
        dispatch(updateSearchTerm(value));
    }


    return (
        <div className="bg-gray-400">
            <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-cyan-700 rounded shadow">
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
                        <input type="text" value={searchTerm} onChange={(e) => handleSearchChange(e.target.value)} name="searchTodoInput" id="searchTodoInput" placeholder="Add Todo"
                            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" />
                        <button className="ml-4 p-2 bg-blue-400 text-white rounded hover:bg-blue-600"><IoSearchCircleOutline /></button>
                    </div>
                </div>
                <TodoList />
            </div>
        </div>
    )
}

export default Todo;