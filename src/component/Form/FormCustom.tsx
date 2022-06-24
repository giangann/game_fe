import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
} from "@mui/material";
import { Input } from "./Input";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface FormInput {
  username: string;
  password: string;
  captcha: string;
}
interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

const FormCustom = () => {
  const [values, setValues] = React.useState<State>({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const {
    control,
    setValue,
    handleSubmit,
    setError,
    watch,
    getValues,
    clearErrors,
  } = useForm<any>({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data);
  };
  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const grid = { xs: 12, md: 12 };
  return (
    <Stack direction="row" justifyContent="center">
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ width: "50%" }}
      >
        <Grid container rowGap={2}>
          <Grid item {...grid}>
            <Input
              fullWidth
              placeholder="User Name"
              name="username"
              label="User Name"
              control={control}
            />
          </Grid>
          <Grid item {...grid}>
            <Input
              fullWidth
              placeholder="Password"
              name="password"
              label="Password"
              control={control}
              value={values.weight}
              onChange={handleChange("weight")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </Grid>
          <Grid item {...grid}>
            <Input
              fullWidth
              placeholder="Captcha"
              name="captcha"
              label="Captcha"
              control={control}
            />
          </Grid>
          <Grid item {...grid}>
            <Button variant="outlined" type="submit" sx={{ color: "white" }}>
              Đăng nhập
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
};
export default FormCustom;
