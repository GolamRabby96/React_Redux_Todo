import React from 'react'
import { useSelector } from 'react-redux';
import { TodoItem } from './TodoItem';

const TodoList = () => {
    const filteredTodos = useSelector((state)=>{
        const todos = state.todos;
        const filter = state.filter;
        const searchTerm = state.searchTerm.toLowerCase();
        
        return todos.filter((todo) => {
            const matchsFilter = (filter === "COMPLETED" && todo.completed) || 
            (filter === "INCOMPLETED" && !todo.completed) || (filter === 'ALL');
            const matchsSearch = todo.text.toLowerCase().includes(searchTerm);

            console.log("++++",matchsFilter , matchsSearch,matchsFilter && matchsSearch)


            return matchsFilter && matchsSearch;
        })
    })
    console.log("**********",filteredTodos);
  return (
    <ul>
        <li className='my-2 text-sm italic'>All your Notes Here .....</li>
        {
            filteredTodos.map((todo,index)=>(
                <TodoItem key={index} todo={todo} index={index}/>
            ))
        }
    </ul>
  )
}

export default TodoList;