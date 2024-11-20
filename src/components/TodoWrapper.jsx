import { useState } from "react"
import CrateForm from "./CreateForm"
import Todo from "./Todo"

function TodoWrapper() {
    //因為有n個todo 所以要用陣列存取
    // const [todos, setTodo] = useState(['List1', 'List2'])

    //因為陣列需要key屬性，所以要改成陣列物件，加上id
    // const [todos, setTodos] = useState([
    //     { content: 'list1', id: Math.random() },
    //     { content: 'list2', id: Math.random() },
    // ]
    // )因為要判定todo是否被點擊，所以要增加一個標記屬性=>isCompleted
    // 新增一個陣列屬性 isEdit=> 判別 是否編輯狀態
    const [todos, setTodos] = useState([
        { content: 'list1', id: Math.random(), isCompleted: false, isEdit: false },
        { content: 'list2', id: Math.random(), isCompleted: false, isEdit: false },
    ]
    )

    //建立加入新的todo內容
    //1.使用...其餘運算子來保留原陣列內容
    //2.再加入新的物件內容
    const addTodo = (content) => {
        setTodos([...todos, { content: content, id: Math.random(), isCompleted: false, isEdit: false }])
    }
    // 建立刪除todo函式 傳給Todo 元件使用
    // 使用filter方法，去除被刪除的todo
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => {
            // 檢查目前的id 是否為被刪除的id 如果不是則保留
            return todo.id !== id

        }))
    }

    //建立雙向(toggle)切換 「完成與取消」的函式
    const toggleCompleted = (id) => {
        setTodos(todos.map((todo) => {
            //檢查被點擊的id是否跟目前陣列中的id一樣
            //yes=>1. 取出todo 2.將isCompleted屬性值反向處理(true->false)
            //no => todo 不變
            return todo.id === id
                ? { ...todo, isCompleted: !todo.isCompleted }
                : todo

        }))
    }

    //建立是否修改中的函式 (雙向)
    const toggleIsEdit = (id) => {
        //透過map將todos資料丟到參數todo中 
        setTodos(todos.map((todo) => {
            // 將參數中todo.id中對比 我們點選後獲得的參數id對比是否一樣
            return todo.id === id
                //?>>如果有的話 保留原本的 並將isEdit 透過！todo：isEdit 變爲反向結果
                ? { ...todo, isEdit: !todo.isEdit }
                //>>如果沒有的話 維持原樣
                : todo
        }))

    }

    // 建立 完成修改的函式
    // 1.content 需要異動 變更為新的內容
    const editTodo = (id, newContent) => {
        setTodos(todos.map((todo) => {
            return todo.id === id
                ? { ...todo, content: newContent, isEdit: false }
                : todo
        }))
    }


    return (
        <>
            <div className="wrapper">
                待辦事項
                <CrateForm addTodo={addTodo} />
                {
                    todos.map((todo) => {
                        return <Todo todo={todo} key={todo.id}
                            deleteTodo={deleteTodo}
                            toggleCompleted={toggleCompleted}
                            toggleIsEdit={toggleIsEdit}
                            editTodo={editTodo} />
                    })

                }

            </div>
        </>
    )
}

export default TodoWrapper