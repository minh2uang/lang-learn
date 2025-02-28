"use client";
import React from "react";
import { AppBar, Toolbar, Box, Typography, Button, Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import UserContextProvider from "@/app/setup/UserProvider";
type Props = { children: JSX.Element };

const Layout = ({ children }: Props) => {
  const router = useRouter();

  return (
    <UserContextProvider>
      <>
        <AppBar sx={{ boxShadow: 0 }} position="absolute">
          <Toolbar disableGutters>
            <Box ml={2}>
              <Typography variant="h6">Lang Learn</Typography>
            </Box>
            <Box ml={5} />
            <Button
              onClick={() => router.push("/learningView")}
              variant="text"
              sx={{ color: "white" }}
            >
              Study Zone
            </Button>
            <Button
              onClick={() => router.push("/addCard")}
              variant="text"
              sx={{ color: "white" }}
            >
              Add Card
            </Button>
          </Toolbar>
        </AppBar>
        <Grid container mt={10}>
          <Grid lg={3} xs={1} item />
          <Grid lg={6} xs={10} item>
            {children}
          </Grid>
          <Grid item lg={3} xs={1} />
        </Grid>
      </>
    </UserContextProvider>
  );
};

export default Layout;
