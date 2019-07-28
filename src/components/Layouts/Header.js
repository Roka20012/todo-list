import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import SearchBar from "./SearchBar";

export default props => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h4">TodoList</Typography>
            <SearchBar />
        </Toolbar>
    </AppBar>
);
