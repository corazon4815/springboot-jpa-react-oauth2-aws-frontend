import React, {useState} from "react";
import {Checkbox, InputBase, ListItem, ListItemText} from "@mui/material";

const Todo = (props) => {

        const [item, setItem] = useState(props.item ? props.item : null);

        return (
            <React.Fragment>
                {
                    props.item &&
                    <ListItem>
                        <Checkbox checked={item.done}/>
                        <ListItemText>
                            <InputBase
                                inputProps={{"aria-label": "naked"}}
                                type={"text"}
                                id={item.id}
                                name={item.id}
                                value={item.title}
                                multiline={true}
                                fullWidth={true}
                            />
                        </ListItemText>
                    </ListItem>
                }
            </React.Fragment>
        );
    }
;
export default Todo;