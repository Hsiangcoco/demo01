import { MdDelete, MdEdit } from "react-icons/md";
import EditForm from "./EditForm";


function Todo({ todo, deleteTodo, toggleCompleted, toggleIsEdit ,editTodo }) {
    return (

        //檢查 todo.isEdit 是否為true
        todo.isEdit
            //是的話 執行EditForm的函式
            ? <EditForm todo={todo} editTodo={editTodo}/>

            //不是的話 執行下方內容
            : <>
                {/* //新增一個completed 類別規則
            // 使用反引號 +三原運算子檢查是否
            // 如果為真 => 套用completed 類別規則
            // 反之亦然變更為=> '' */}
                <div className={`todo ${todo.isCompleted ? 'completed' : ''}`}>
                    <p onClick={() => { toggleCompleted(todo.id) }}>{todo.content}</p>
                    <div>
                        <MdEdit onClick={() => { toggleIsEdit(todo.id) }}
                            style={{ cursor: 'pointer' }} />
                        <MdDelete
                            onClick={() => { deleteTodo(todo.id) }}
                            style={{ cursor: 'pointer', marginLeft: '5px' }} />
                    </div>
                </div>
            </>
    )
}

export default Todo