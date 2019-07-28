import React from "react";
import { makeStyles, List } from "@material-ui/core";
import TodoItem from "./TodoItem";

const useStyles = makeStyles(theme => ({
    List: {
        overflowY: "scroll",
        height: 420
    }
}));

export default ({ todos, onDeleteTodo }) => {
    const classes = useStyles();
    return (
        <List className={classes.List} component="nav">
            {todos.map((todo) => (
                <TodoItem key={todo.id} {...todo} onDeleteTodo={onDeleteTodo}/>
            ))}
        </List>
    );
};
