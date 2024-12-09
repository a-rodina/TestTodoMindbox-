import './Header.css';
import { THeader } from '../../types';
import { useSelector } from 'react-redux';

function Header({inputText, setInputText, addTodo, deleteAllTodo, deleteLastTodo, showAll, showCompleted} : THeader) {

    const all = useSelector((state: any) => state.todo.all);
    const count = useSelector((state:any) => state.todo.count);

    return ( <>
        <div className='header'>
            <button data-testId='cypress-deleteAllBtn' className='header__button' onClick={deleteAllTodo}>Delete All</button>
            <button data-testId='cypress-deleteLastBtn' className='header__button' onClick={deleteLastTodo}>Delete Last</button>
            <input data-testId='cypress-input'
                    placeholder='Add todo' 
                    className='header__input' 
                    value={inputText} 
                    onChange={(e) => setInputText(e.target.value)}>
            </input>
            <button data-testId='cypress-addBtn' className='header__button' onClick={addTodo}>Add</button>
        </div>
        <div className='navigation'>
            <div className='countAll'>All: {all}</div>
            <div className='countCompleted'>Completed: {count}</div>
            <button className='header__button' onClick={showAll}>Show All</button>
            <button className='header__button' onClick={showCompleted}>Show Completed</button>
        </div>
    </>        
    );
}

export default Header;