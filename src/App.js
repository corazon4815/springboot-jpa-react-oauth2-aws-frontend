import "./App.css";
import React, {useState, useEffect, useCallback} from "react";
import {
    Container,
    List,
    Paper,
    Grid,
    Button,
    AppBar,
    Toolbar,
    Typography,
} from "@mui/material";
import AddTodo from "./components/todo/AddTodo";
import Todo from "./components/todo/Todo";
import {useNavigate} from "react-router-dom";
import ApiService from "./service/ApiService";

function App() {
    const [items, setItems] = useState(null);
    const [loading, setLoading] = useState(true);

    let navigate = useNavigate();

    useEffect(() => {
        reqGetTodoList();
    }, []);

    const addItem = (item) => {
        reqPostTodo(item);
    };

    const editItem = (item) => {
        reqPutTodo(item);
    };

    const deleteItem = (todo) => {
        reqDeleteTodo(todo);
    };

    const reqPostTodo = async (params) => {
        const result = await ApiService.todo.reqPostTodo(params);
        if(result.data === 1) {
            reqGetTodoList();
        } else{
            alert("서버오류")
        }
    };

    const reqPutTodo = async (params) => {
        const result = await ApiService.todo.reqPutTodo(params);
        if(result.code === 1) {
            reqGetTodoList();
        } else{
            alert("서버오류")
        }
    };

    const reqDeleteTodo = async (todo) => {
        const result = await ApiService.todo.reqDeleteTodo(todo);
        if(result.code === 1) {
            reqGetTodoList();
        } else{
            alert("서버오류")
        }
    };

    const reqGetTodoList = async () => {
        const result = await ApiService.todo.reqGetTodoList();
        if(result.code === 1) {
            console.log(result);
            setItems(result.data);
        } else{
            alert("서버오류")
        }
        setLoading(false);
    };

    let todoItems = items && (
        <Paper style={{margin: 16}}>
            <List>
                {items.map((item) => (
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

    // navigationBar 추가
    let navigationBar = (
        <AppBar position="static">
            <Toolbar>
                <Grid justifyContent="space-between" container>
                    <Grid item>
                        <Typography variant="h6">오늘의 할일</Typography>
                    </Grid>
                    <Grid item>
                        <Button color="inherit" raised>
                            로그아웃
                        </Button>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );

    /* 로딩중이 아닐 때 렌더링 할 부분 */
    let todoListPage = (
        <div>
            {navigationBar} {/* 네비게이션 바 렌더링 */}
            <Container maxWidth="md">
                <AddTodo addItem={addItem}/>
                <div className="TodoList">{todoItems}</div>
            </Container>
        </div>
    );

    /* 로딩중일 때 렌더링 할 부분 */
    let loadingPage = <h1> 로딩중.. </h1>;
    let content = loadingPage;

    if (!loading) {
        /* 로딩중이 아니면 todoListPage를 선택*/
        content = todoListPage;
    }

    /* 선택한 content 렌더링 */
    return <div className="App">{content}</div>;
}


export default App;