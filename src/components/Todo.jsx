import { FaRegPlusSquare } from "react-icons/fa";

const Todo =() =>{
    return(
        <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
            <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">Personal todo apper </h2>

            {/* input text and btn */}
            <div className="flex items-center mb-4">
                <input type="text"  name="addTodoInput" id="addTodoinput" placeholder="Add Todo" 
                className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"/>
                <button className="ml-4 p-2 bg-blue-400 text-white rounded hover:bg-blue-600"><FaRegPlusSquare /></button>
            </div>
        </div>
    )
}

export default Todo;