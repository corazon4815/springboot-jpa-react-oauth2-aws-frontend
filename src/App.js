import Todo from './components/todo/Todo.js'
import './App.css';
import {useState} from "react";
import {Container, List, Paper} from "@mui/material";
import AddTodo from "./components/todo/AddTodo";

function App() {
    const [todoList, setTodoList] = useState([
        {
            id: "0",
            title: "산책가기",
            done: true
        },
        {
            id: "1",
            title: "독서하기",
            done: true
        },
        {
            id: "2",
            title: "영어 공부하기",
            done: false
        }
    ]);

    return (
        <div className="App">
            <Container maxWidth={"md"}>
                <AddTodo/>
                <div className={"TodoList"}>
                    <Paper style={{margin: 16}}>
                        <List>
                            {
                                todoList.length > 0 && todoList.map((item) => (
                                    <Todo key={item.id} item={item}/>
                                ))
                            }
                        </List>
                    </Paper>
                </div>
            </Container>
        </div>
    );
}

export default App;
