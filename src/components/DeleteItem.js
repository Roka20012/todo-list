import React from "react";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

export default class extends React.Component {
    handleDeleteTodoItem = () => {
        const {id} = this.props;
        this.props.onDeleteTodo(id); 
    }

    render() {
        return (
            <IconButton aria-label="delete" onClick={this.handleDeleteTodoItem}>
                <DeleteIcon fontSize="small" />
            </IconButton>
        );
    }
}
