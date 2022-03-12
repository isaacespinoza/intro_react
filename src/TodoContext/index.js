import React from 'react';
import {useLocalStorage} from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props){ 
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_v1',[]);
    
    const [searchValue, setSearchValue] = React.useState(''); 

    const [openModal,setOpenModal]=React.useState(false);

    //Total marcados como ok
    const completedTodos = todos.filter( todo => !!todo.completed).length; 
    //Es lo mismo que: const completedTodos = todos.filter( todo => todo.completed === true);

    //Total de todos los ToDos
    const totalTodos = todos.length; 

    //BUSCADOR 
    let searchedTodos = [];
    if(!searchValue.length >= 1){
        //Sino no ha escrito nada muestra todos
        searchedTodos = todos;
    }else{ 
        //Si escribe algo, entonces filtra en Todos, a ver cual incluye el texto escrito  
        searchedTodos = todos.filter( todo =>{ 
            //guarda el texto en minusculas 
            const todoText = todo.text.toLowerCase();
            //texto escrito en minusculas 
            const searchText = searchValue.toLowerCase(); 
            //retorna si coincide 
            return todoText.includes(searchText);
        }) 
    } 

    const completeTodo = (text)=>{ 
        //examina de Todos los Todos, cual tiene el mismo texto y así saber la posición
        const todoIndex = todos.findIndex( todo => todo.text === text  ); 
        const newTodos = [...todos]; 
        //marca en el nuevo array, el Todos como true 
        newTodos[todoIndex].completed=true;
        //actualiza la lista de los Todos, con el nuevo estado: completed
        saveTodos(newTodos);
    }

    const deleteTodo = (text)=>{ 
        const todoIndex = todos.findIndex( todo => todo.text === text  ); 
        const newTodos = [...todos]; 
        newTodos.splice(todoIndex,1);
        saveTodos(newTodos);
    }

    const addTodo = (text)=>{
        const newTodos = [...todos]; 
        newTodos.push({
            completed:false,
            text,
        });
        saveTodos(newTodos);
    }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos, 
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            addTodo,
            openModal,
            setOpenModal, 
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider};