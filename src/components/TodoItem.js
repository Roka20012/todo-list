import React from "react";
import {
    ListItem,
    ListItemText,
    ListItemSecondaryAction
} from "@material-ui/core";
import DeleteItem from "./DeleteItem";

export default class extends React.Component {
    render() {
        const { text, done, id, onDeleteTodo } = this.props;
        return (
            <ListItem button>
                <ListItemText
                    primary={text}
                    style={
                        done
                            ? {
                                  color: "#E91E63",
                                  textDecoration: "line-through",
                                  wordWrap: "break-word"
                              }
                            : { wordWrap: "break-word" }
                    }
                />
                <ListItemSecondaryAction>
                    <DeleteItem id={id} onDeleteTodo={onDeleteTodo} />
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}
