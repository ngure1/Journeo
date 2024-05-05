"use client";
import * as React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { useJwtCreateMutation } from "@/redux/features/auth/authApi";
import { useRouter } from "next/navigation";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setIsAuthenticated } from "@/redux/features/auth/authSlice";

import {
	Avatar,
	Button,
	TextField,
	FormControlLabel,
	Checkbox,
	Link,
	Grid,
	Box,
	Typography,
	Container,
} from "@mui/material";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { Resolver } from "react-hook-form";

function Copyright(props: any) {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}
		>
			{"Copyright © "}
			<Link
				color="inherit"
				href="https://mui.com/"
			>
				Journeo
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}
const loginSchema = z.object({
	email: z.string().email(),
	password: z
		.string()
		.regex(
			/^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$/,
			"Password must contain at least 1 uppercase letter"
		),
});
type loginData = z.infer<typeof loginSchema>;

const Login = () => {
	const { register, handleSubmit, formState } = useForm();
	const router = useRouter();
	const [login] = useJwtCreateMutation();

	const dispatch = useDispatch();

	const onSubmit = async (data: loginData) => {
		const response = login(data)
			.unwrap()
			.then((res) => {
				console.log(res);
				dispatch(setIsAuthenticated(true));
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<Container
			component="main"
			maxWidth="xs"
		>
			<Box
				sx={{
					marginTop: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography
					component="h1"
					variant="h5"
				>
					Sign in
				</Typography>
				<Box
					component="form"
					onSubmit={handleSubmit(onSubmit)}
					noValidate
					sx={{ mt: 1 }}
				>
					<TextField
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
					/>
					<FormControlLabel
						control={
							<Checkbox
								value="remember"
								color="primary"
							/>
						}
						label="Remember me"
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						disableElevation
						size="large"
						sx={{ mt: 3, mb: 2 }}
					>
						Sign In
					</Button>
					<Grid container>
						<Grid
							item
							xs
						>
							<Link
								href="#"
								variant="body2"
							>
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
							<Link
								href="/signup"
								variant="body2"
							>
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
			<Copyright sx={{ mt: 8, mb: 4 }} />
		</Container>
	);
};

export default Login;
