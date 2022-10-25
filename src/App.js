import Todo from './components/todo/Todo.js'
import './App.css';
import {useEffect, useState} from "react";
import {Container, List, Paper} from "@mui/material";
import AddTodo from "./components/todo/AddTodo";

function App() {
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        call("/todo", "GET", null)
            .then((response) => setItems(response.data));
    }, []);

    const addItem = (item) => {
        call("/todo", "POST", item)
            .then((response) => setItems(response.data));
    };

    const editItem = (item) => {
        call("/todo", "PUT", item)
            .then((response) => setItems(response.data));
    };

    const deleteItem = (item) => {
        call("/todo", "DELETE", item)
            .then((response) => setItems(response.data));
    };

    let todoItems = todoList.length > 0 && (
        <Paper style={{ margin: 16 }}>
            <List>
                {todoList.map((item) => (
                    <Todo
                        item={item}
                        key={item.id}
                        editItem={editItem}
                        deleteItem={deleteItem}
                    />
                ))}
            </List>
        </Paper>
    );

    return (
        <div className="App">
            <Container maxWidth={"md"}>
                <AddTodo addItem={addItem} />
                <div className="TodoList">{todoItems}</div>
            </Container>
        </div>
    );
}

export default App;
