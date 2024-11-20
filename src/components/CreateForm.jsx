import { useState } from "react"

function CrateForm({ addTodo }) {
    //建立input內容的變數 使用useState
    const [content, setContent] = useState('');
    const handleSubmit = (e) => {
        //取消事件預設行為
        e.preventDefault();
        //增加todo的內容
        addTodo(content);
        //清除文字方塊
        setContent('')
    }
    return (
        <>
            <form action="" className="crate-from" onSubmit={handleSubmit}>
                <input type="text" placeholder="輸入待辦事項"
                    value={content}
                    onChange={(e) => {
                        setContent(e.target.value)
                    }
                    } />
                <button type="submit">加入</button>
            </form>
        </>
    )
}
export default CrateForm