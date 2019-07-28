import React from "react";
import AddIcon from "@material-ui/icons/Add";
import {
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Fab,
    withStyles,
    Button
} from "@material-ui/core";

const useStyles = theme => ({
    fab: {
        position: "absolute",
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        margin: theme.spacing(1),
        zIndex: 2
    }
});

export default withStyles(useStyles)(
    class extends React.Component {
        state = {
            open: false,
            text: null
        };

        handleToggleAddMenu = () => {
            this.setState(({ open }) => ({ open: !open }));
        };

        handleCreateTodoItem = () => {
            if (!this.state.text) return;
            const todo = {
                id: Math.random(Date.now()),
                text: this.state.text,
                done: false
            };
            this.setState(({ open, text }) => ({ open: !open, text: null }));
            this.props.handleCreateTodoItem(todo);
        };

        handleInput = ({ target: { value } }) => {
            this.setState(({ text }) => ({ text: value }));
        };

        render() {
            const { open } = this.state;
            const { classes } = this.props;
            return (
                <>
                    <Fab
                        color="secondary"
                        aria-label="add"
                        size="medium"
                        className={classes.fab}
                        onClick={this.handleToggleAddMenu}
                    >
                        <AddIcon />
                    </Fab>
                    <Dialog
                        open={open}
                        onClose={this.handleToggleAddMenu}
                        aria-labelledby="form-dialog-title"
                    >
                        <DialogTitle id="form-dialog-title">
                            Create TodoItem
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                To create TodoItem please fill this fileld and
                                then press CREATE
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Description"
                                type="email"
                                fullWidth
                                onChange={this.handleInput}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button
                                onClick={this.handleToggleAddMenu}
                                color="secondary"
                            >
                                Cancel
                            </Button>
                            <Button
                                onClick={this.handleCreateTodoItem}
                                color="primary"
                                variant="contained"
                            >
                                Create
                            </Button>
                        </DialogActions>
                    </Dialog>
                </>
            );
        }
    }
);
