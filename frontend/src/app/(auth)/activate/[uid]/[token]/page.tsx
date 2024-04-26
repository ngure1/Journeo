"use client";
import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography } from "@mui/material";
import { useUsersActivationMutation } from "@/redux/features/user/userApi";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";
import { useRouter } from "next/navigation";

const Activate = ({ params }: { params: { uid: string; token: string } }) => {
  //retrieving params from the url
    const uid = params.uid;
    const token = params.token;

    //mutation function to make the request
    const [activate] = useUsersActivationMutation();

    // material ui open state and handle close function
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };

    //request isSuccess state (also used for conditional rendering of alert)
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState(
        "Something went wrong with your acccount activation !"
    );
    const [isloading, setIsLoading] = useState(true);

    //router for redirection on isSuccess
    const router = useRouter();

    // use effect where we make the request
    useEffect(() => {
        const params = {
        uid: uid,
        token: token,
        };

        const response = activate(params)
        .unwrap()

        .then((res) => {
            setOpen(true);
            setIsSuccess(true);
            router.push("/login");
            setIsLoading(false);
        })

        //failed account activation
        .catch((err) => {
            setIsLoading(false);
            setIsSuccess(false);
            setOpen(true);

            if (err.data.uid) {
            setErrorMessage(err.data.uid.toString());
            } else if (err.data.token) {
            setErrorMessage(err.data.token.toString());
            }
        });
    }, [uid, token]);

    return (
        <div className="flex flex-col items-center justify-center py-10">
        {isloading ?
            <div>
                <Typography variant="h4">You're almost there.... </Typography>
                <Typography variant="h4" className="mb-5">
                    Kindly wait as we activate your account
                </Typography>
                <CircularProgress />
            </div>
            :isSuccess ?
            <div>
                <Typography variant="h4" className="mb-5">
                    Redirecting your to the login page....
                </Typography>
                <CircularProgress />
            </div>
            :<Typography variant="h5" className="w-[50rem]">
                Something went wrong with your account activation check your email and try again
            </Typography>
        }

        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
            {isSuccess ? (
            <Alert
                onClose={handleClose}
                severity="success"
                variant="filled"
                sx={{ width: "100%" }}
            >
                Account activated successfully !
            </Alert>
            ) : (
            <Alert
                onClose={handleClose}
                severity="error"
                variant="filled"
                sx={{ width: "100%" }}
            >
                {`${errorMessage} . Follow the link in your email again`}
            </Alert>
            )}
        </Snackbar>
        </div>
    );
    };

    export default Activate;
