import React from 'react'; 
import {TodoContext} from '../TodoContext';
import './TodoSearch.css';

function TodoSearch(){ 

    //searchValue, setSearchValue nombres como estan definidos en TodoContext 
    const {searchValue, setSearchValue} = React.useContext(TodoContext);

    const onSearchValueChange = (event) =>{
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return(
        <input 
            placeholder='Buscar...' 
            className='TodoSearch' 
            value={searchValue} 
            onChange={onSearchValueChange}
        />
    );
}
export {TodoSearch};