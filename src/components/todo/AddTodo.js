import React, {useState} from "react";
import {Button, Grid, TextField} from "@mui/material";

const AddTodo = (props) => {

        const [item, setItem] = useState({
            title: ""
        });

        const addItem = props.addItem;

        // onButtonClick 함수 작성
        const onButtonClick = () => {
            addItem(item); // addItem 함수 사용
            setItem({title: ""});
        };

        // onInputChange 함수 작성
        const onInputChange = (e) => {
            setItem({title: e.target.value});
            console.log(item);
        };

        // enterKeyEventHandler 함수
        const enterKeyEventHandler = (e) => {
            if (e.key === 'Enter') {
                onButtonClick();
            }
        };

        return (
            <React.Fragment>
                <Grid container style={{marginTop: 20}}>
                    <Grid xs={11} md={11} item style={{paddingRight: 16}}>
                        <TextField placeholder={"할일을 입력해주세요."}
                                   fullWidth
                                   onChange={onInputChange}
                                   onKeyPress={enterKeyEventHandler}
                                   value={item.title}
                        />
                    </Grid>
                    <Grid xs={1} md={1} item>
                        <Button fullWidth
                                style={{height: '100%'}}
                                color={"secondary"}
                                variant={"outlined"}
                                onClick={onButtonClick}>+</Button>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
;
export default AddTodo;