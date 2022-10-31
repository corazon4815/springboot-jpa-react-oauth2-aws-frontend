import React from "react";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import Login from "./components/user/Login";
import SignUp from "./components/user/SignUp";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            parksujin, {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

function AppRouter() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/todos" element={<App />} />
                    <Route path="/join" element={<SignUp />} />
                </Routes>
            </BrowserRouter>
            <Box mt={5}>
                <Copyright />
            </Box>
        </div>
    );
};

export default AppRouter;