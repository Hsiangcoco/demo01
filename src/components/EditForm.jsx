import { useState } from "react"

function EditForm({ todo, editTodo }) {
    //建立input內容的變數 使用useState
    const [content, setContent] = useState(todo.content);
    const handleSubmit = (e) => {
        //取消事件預設行為
        e.preventDefault();

        editTodo(todo.id,content);
    
    }
    return (
        <>
            <form action="" className="crate-from" onSubmit={handleSubmit}>
                <input type="text"
                    value={content}
                    onChange={(e) => {
                        setContent(e.target.value)
                    }
                    } />
                <button type="submit">完成</button>
            </form>
        </>
    )

}
export default EditForm