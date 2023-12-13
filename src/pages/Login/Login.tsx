// import React from "react";
// // import "@css/Login.css";
// import Grid from "@mui/material/Unstable_Grid2";
// import sideImage from "@img/studying-background.png";
// import planinLogo from "@img/logo.svg";
// import botaoGLogin from "@img/botao-login-google.png";
// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";
//
// const Login: React.FC = () => {
//   // return (
//   //   <div className="login-container">
//   //     <img src="../src/assets/img/logo.svg" alt="Logo" className="logo" />
//   //     <div className="login-content">
//   //       <img
//   //         src="../src/assets/img/studying-background.png"
//   //         alt="Imagem Lateral"
//   //         className="side-image"
//   //       />
//   //       <h1>
//   //         Planeje suas atividades com <br></br>mais facilidade e eficiência
//   //       </h1>
//   //     </div>
//   //   </div>
//   // );
//
//   return (
//     <Container component="main" maxWidth="md">
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           height: "100vh",
//           width: "100vw",
//           backgroundColor: "white",
//         }}
//       >
//         <Grid container spacing={3}>
//           <Grid item xs={12} md={8}>
//             <Box
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 height: 768,
//                 width: 768,
//               }}
//             >
//               <img
//                 src={sideImage}
//                 alt="Imagem Lateral"
//                 width={768}
//                 height={768}
//               />
//             </Box>
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <Box
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 height: 768,
//                 width: 590,
//               }}
//             >
//               <Box
//                 component="img"
//                 src={planinLogo}
//                 alt="Logo"
//                 sx={{
//                   width: 440,
//                   height: 138,
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               />
//               <Box
//                 component="img"
//                 src={botaoGLogin}
//                 alt="Logo"
//                 sx={{
//                   width: 311,
//                   height: 57,
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               />
//
//               <Box
//                 sx={{
//                   width: "100%",
//                   padding: 18,
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <Typography
//                   variant="h4"
//                   style={{ color: "#2D8FEB", fontWeight: "bold" }}
//                 >
//                   Planeje as suas atividades com
//                   <br />
//                   mais facilidade e eficiência
//                 </Typography>
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>
//       </Box>
//     </Container>
//   );
// };
//
// export default Login;

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
    <Container component="main" maxWidth="xl" disableGutters>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={5.86}>
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
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
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
                sx={{ width: "80%", maxWidth: 440, marginBottom: "1rem", marginTop: "3rem" }}
              />
              <Box
                component="img"
                src={botaoGLogin}
                alt="Logo"
                sx={{ width: "80%", maxWidth: 311, marginBottom: "10rem" }}
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
                    marginTop: "-13rem",
                  }}
                >
                  Planeje as suas atividades com <br /> mais facilidade e
                  eficiência
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Login;
