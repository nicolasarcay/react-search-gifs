import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setinputValue] = useState('');

  const onInputChage = ({ target }) => {
    setinputValue(target.value);
  };

  const onSubmit = (event) =>{
    event.preventDefault();
    // Al menos se deben escribir 2 carcateres
    if (inputValue.trim().length <= 1) return;
    //setCategories( categories => [ inputValue, ...categories] );
    onNewCategory( inputValue.trim() );
    setinputValue('');
  }

  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={ inputValue }
        onChange={onInputChage}
      />
    </form>
  );
};
