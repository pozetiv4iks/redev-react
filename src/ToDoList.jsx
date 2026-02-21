import InputToDo from './components/InputToDo'

export default function ToDoList () {

    return(
        <div className="block">
            <div style={{padding:'10px'}}><h1>Мой ToDo-List</h1></div>
            <InputToDo />
        </div>
    )
}