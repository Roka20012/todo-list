import React from "react";
import { Paper, withStyles } from "@material-ui/core";
import Header from "./components/Layouts/Header";
import TodoList from "./components/TodoList";
import AddItem from "./components/AddItem";
import "./App.css";

const useStyles = theme => ({
    root: {
        position: "relative",
        flexGrow: 1,
        width: 500,
        height: 500,
        marginLeft: "auto",
        marginRight: "auto"
    }
});

export default withStyles(useStyles)(
    class extends React.Component {
        state = {
            todos: [
                {
                    id: Math.random(Date.now()),
                    text: "Make todo-list",
                    done: true
                },
                {
                    id: Math.random(Date.now()),
                    text: "Make sandwiches",
                    done: false
                },
                {
                    id: Math.random(Date.now()),
                    text: "Repair mouse",
                    done: true
                },
                {
                    id: Math.random(Date.now()),
                    text: "Make milk",
                    done: false
                }
            ]
        };

        createTodoItem = (todoItem) => {
            this.setState(({ menuOpen, todos, todo }) => ({
                menuOpen: !menuOpen,
                todos: [
                    ...todos,
                    todoItem
                ]
            }));
        };

        deleteTodoItem = (id) => {
          this.setState(({todos}) => ({
            todos: todos.filter(todo => todo.id !== id)
          }))

        }
        render() {
            const { todos, todo } = this.state;
            const { classes } = this.props;
            return (
                <Paper className={classes.root}>
                    <Header />
                    <TodoList todos={todos} onDeleteTodo={this.deleteTodoItem}/>
                    <AddItem
                        handleCreateTodoItem={this.createTodoItem}
                        todos={todos}
                        todo={todo}
                    />
                </Paper>
            );
        }
    }
);
