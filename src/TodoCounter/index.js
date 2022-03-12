import React from 'react';
import {TodoContext} from '../TodoContext';
import './TodoCounter.css';

function TodoCounter(){ 

    //totalTodos, completedTodos nombres como estan definidos en TodoContext 
    const { totalTodos, completedTodos} = React.useContext(TodoContext);

    return(
        <h2 className='TodoCounter'>Completado {completedTodos} de {totalTodos} ToDos</h2>
    );
}

//export default TodoCounter; Permite importarlo con cualquier nombre
export {TodoCounter}; //Obliga que al importarlo se deba llamar por el nombre asignado TodoCounter