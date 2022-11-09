import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');
    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = () => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        // setCategories((cat) => [...cat, inputValue]);
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Buscar gifs" value={inputValue} onChange={onInputChange} />
        </form>
    )
}
