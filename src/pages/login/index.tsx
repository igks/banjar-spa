import Center from "../../components/Center";
import { Box, Button, Paper, TextField } from "@mui/material";
import Space from "../../components/Space";
import { ChangeEvent, useState } from "react";

const Login = () => {
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
