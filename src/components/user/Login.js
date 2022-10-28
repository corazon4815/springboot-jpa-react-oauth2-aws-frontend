import React from "react";
import {
    Container,
    Grid,
    Typography,
    TextField,
    Button
} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import ApiService from "../../service/ApiService";

function Login() {

    let navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);

        let params = {
            email: data.get("email"),
            password: data.get("password"),
        }

        signIn(params);

    };

    const signIn = async (params) => {
        const result = await ApiService.user.signIn(params);
        if(result.code === 1) {
            goTodo();
        } else{
            alert("서버오류")
        }
    };

    const goTodo = () => {
        navigate('/todo');
    };

    return (
        <Container component="main" maxWidth="xs" style={{marginTop: "8%"}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography component="h1" variant="h5">
                        로그인
                    </Typography>
                </Grid>
            </Grid>
            <form noValidate onSubmit={handleSubmit}>
                {" "}
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="이메일"
                            name="email"
                            autoComplete="email"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            label="패스워드"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" fullWidth variant="contained" color="primary">
                            로그인
                        </Button>
                    </Grid>
                    <Grid item>
                        <Link to="/signup" variant="body2">
                            계정이 없습니까?
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}

export default Login;