import React, {useState, useEffect} from "react";
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
        if (result.code === 1) {
            reqGetTodoList();
        } else {
            alert("서버오류")
        }
    };

    const reqPutTodo = async (params) => {
        const result = await ApiService.todo.reqPutTodo(params);
        if (result.code === 1) {
            reqGetTodoList();
        } else {
            alert("서버오류")
        }
    };

    const reqDeleteTodo = async (todo) => {
        const result = await ApiService.todo.reqDeleteTodo(todo);
        if (result.code === 1) {
            reqGetTodoList();
        } else {
            alert("서버오류")
        }
    };

    const reqGetTodoList = async () => {
        const result = await ApiService.todo.reqGetTodoList();
        if (result.code === 1) {
            console.log(result);
            setItems(result.data);
        } else {
            alert("서버오류")
        }
    };

    const signOut = async () => {
        const result = await ApiService.user.signOut();
        if (result.code === 1) {
            goLogin();
        } else {
            alert("서버오류")
        }
    };

    const goLogin = () => {
        navigate('/');
    };


    /* 선택한 content 렌더링 */
    return (
        <React.Fragment>
            {
                items ?
                    <React.Fragment>
                    <AppBar position="static">
                        <Toolbar>
                            <Grid justifyContent="space-between" container>
                                <Grid item>
                                    <Typography variant="h6">오늘의 할일</Typography>
                                </Grid>
                                <Grid item>
                                    <Button color="inherit" raised onClick={()=>{signOut()}}>
                                        로그아웃
                                    </Button>
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                    <Container maxWidth="md">
                        <AddTodo addItem={addItem}/>
                        <div className="TodoList">
                            <Paper style={{margin: 16}}>
                                <List>
                                    {items && items.map((item) => (
                                        <Todo
                                            item={item}
                                            key={item.id}
                                            editItem={editItem}
                                            deleteItem={deleteItem}
                                        />
                                    ))}
                                </List>
                            </Paper>
                        </div>
                    </Container>
                    </React.Fragment>
                :
                null
            }

        </React.Fragment>
    );
    //<div className="App">{content}</div>;
}


export default React.memo(App);