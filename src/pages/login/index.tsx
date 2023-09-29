import Center from "../../components/Center";
import { Box, Button, Paper, TextField } from "@mui/material";
import Space from "../../components/Space";
import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../states/slices/authentication";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../constants/path";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const inputOnChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const loginClickHandler = () => {
    console.log(form);
    if (form.username !== "" && form.password !== "") {
      dispatch(login());
      navigate(PATH.home);
    }
  };

  return (
    <Center>
      <Paper>
        <Box sx={{ padding: 3 }}>
          <TextField
            label="Username"
            size="small"
            name="username"
            onChange={inputOnChangeHandler}
          />
          <Space h={3} />
          <TextField
            label="Password"
            size="small"
            type="password"
            name="password"
            onChange={inputOnChangeHandler}
          />
          <Space h={3} />
          <Button variant="contained" fullWidth onClick={loginClickHandler}>
            LOGIN
          </Button>
        </Box>
      </Paper>
    </Center>
  );
};

export default Login;
