import './Card.css';
import { MdCheckBox , MdCheckBoxOutlineBlank } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";

interface ITodo {
    id: number,
    text: string,
    date: string,
    isChecked: boolean
}

function Card({oneTodo, remove, changeTodo}: {oneTodo: ITodo, remove: (value: number) => void,  changeTodo: (value: number) => void}) {

    return ( <>
        <div className='card'>
            <div className='card-left'>
                <div className='card-left__checkbox' onClick={() => changeTodo(oneTodo.id)}>
                    {oneTodo.isChecked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                </div>
                <div className='card-left__text'>{oneTodo.text}</div>
            </div>
            <div className='card-right'>
                <div className='card-left__date'>{oneTodo.date}</div>
                <div className='card-left__button' onClick={() => remove(oneTodo.id)}><FaRegTrashAlt /></div>
            </div>
        </div>
    </> );
}

export default Card;