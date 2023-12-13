import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import sideImage from "@img/studying-background.png";
import planinLogo from "@img/logo.svg";
import botaoGLogin from "@img/botao-login-google.png";

const Login: React.FC = () => {
  return (
    <Container
      component="main"
      sx={{ width: "100dvw", height: "100dvh" }}
      disableGutters
    >
      {/*<Box*/}
      {/*  sx={{*/}
      {/*    display: "flex",*/}
      {/*    flexDirection: "column",*/}
      {/*    alignItems: "center",*/}
      {/*    justifyContent: "center",*/}
      {/*    backgroundColor: "white",*/}
      {/*  }}*/}
      {/*>*/}
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "100%",
            }}
          >
            <img
              src={sideImage}
              alt="Imagem Lateral"
              style={{ maxWidth: "100%", maxHeight: "100%", marginLeft: "-15rem" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              height: "100%",
              width: "100%",
            }}
          >
            <Box
              component="img"
              src={planinLogo}
              alt="Logo"
              sx={{
                width: "80%",
                maxWidth: 400,
                marginBottom: "1rem",
                marginTop: "3rem",
              }}
            />
            <Box
              component="img"
              src={botaoGLogin}
              alt="Logo"
              sx={{ width: "80%", maxWidth: 300, marginBottom: "10rem" }}
            />
            <Box
              sx={{
                width: "100%",
                padding: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h4"
                style={{
                  color: "#2D8FEB",
                  fontWeight: "bold",
                  textAlign: "center",
                  marginTop: "-11rem",
                  whiteSpace: "nowrap",
                }}
              >
                Planeje as suas atividades com <br /> mais facilidade e
                eficiência
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/*</Box>*/}
    </Container>
  );
};

export default Login;
