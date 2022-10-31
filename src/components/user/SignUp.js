import React from "react";
import {Container, Grid, Typography, TextField, Button} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import ApiService from "../../service/ApiService";

function SignUp() {

    let navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);

        let params = {
            email: data.get("email"),
            password: data.get("password"),
            username: data.get("username"),
        }
        signUp(params);
    };

    const signUp = async (params) => {
        const result = await ApiService.user.signUp(params);
        if(result.code === 1) {
            goLogin();
        } else{
            alert("서버오류")
        }
    };

    const goLogin = () => {
        navigate('/');
    };

    return (
        <Container component="main" maxWidth="xs" style={{marginTop: "8%"}}>
            <form noValidate onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography component="h1" variant="h5">
                            계정 생성
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            autoComplete="fname"
                            name="email"
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            type="email"
                            label="email"
                            autoFocus
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
                        <TextField
                            autoComplete="fname"
                            name="username"
                            variant="outlined"
                            required
                            fullWidth
                            id="username"
                            label="이름"
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            계정 생성
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Link to="/login" variant="body2">
                            이미 계정이 있습니까? 로그인 하세요.
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default SignUp;