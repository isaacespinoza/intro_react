import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props){ 
    const onClickButton = () => {
        //props.setOpenModal(true);
        //props.setOpenModal(true => !false);
        props.setOpenModal(prevState => !prevState);
    };

    return(
        <button 
            className="CreateTodoButton" 
            onClick={onClickButton}
        >
            +
        </button>
    );
}
export {CreateTodoButton};