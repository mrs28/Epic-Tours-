import { useState } from "react";
import styles from "./AuthLogin.module.css";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import Button from "../../Components/Button/Button";
// import "@fontsource/roboto/300.css";
import "@fontsource/roboto/700.css";
import { Typography, CssBaseline } from "@mui/material";

// import {
//   Grid,
//   Container,
//   Paper,
//   Avatar,
//   Typography,
//   TextField,
//   Button,
//   CssBaseline
// } from "@mui/material";
// import { makeStyles } from "@mui/styles";
// import fondo from "../../../../images/auth/fondo.jpg";
// import LockIcon from "@mui/icons-material/Lock";
// import { useHistory } from "react-router-dom";

const AuthLogin = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  console.log(userData);

  const handelSubmit = (e)=> {
    e.preventDefault();
    
  }

  return (
    <div className={styles.containerLogin}>
      <CssBaseline />
      <div className={styles.containerLoginElements}>
        <div>
          <div className={styles.title}>
            <Typography className={styles.h1} component="h1" variant="h2">
              <TravelExploreIcon
                className={styles.icon}
                fontSize="extra-large"
              />
              Travels
            </Typography>
          </div>

          <Typography className={styles.h3} component="h3" variant="h4">
            Nuevos destinos
          </Typography>
        </div>

        <form onSubmit={handelSubmit} className={styles.form}>
          <label for="idLoginEmail" className={styles.label}>
            Dirección de correo electrónico
          </label>
          <input
            className={styles.input}
            id="idLoginEmail"
            type="text"
            placeholder=" Correo electrónico"
            required
            name="email"
            onChange={handleChange}
          />

          <label className={styles.label} for="idLoginPassword">
            Contraseña
          </label>
          <input
            className={styles.input}
            id="idLoginPassword"
            type="password"
            placeholder=" ********"
            required
            name="password"
            onChange={handleChange}
          />
          <Button />
        </form>
      </div>
    </div>

    // <Grid container component="main">
    //   <CssBaseline />
    //   <Container
    //     component={Paper}
    //     elevation={5}
    //     // variant={outlined}
    //     maxWidth="xs"
    //     className={styles.container}
    //   >
    //     <div className={styles.div}>
    //       <Avatar className={styles.avatar}>
    //         {/* <LockIcon /> */}
    //       </Avatar>
    //       <Typography className={styles.h1} component="h1" variant="h8">
    //         Travels
    //       </Typography>
    //       <Typography className={styles.h2} component="h2" variant="h5">
    //         Inicia sesión
    //       </Typography>
    //       <form className={styles.form}>
    //         <TextField
    //           fullWidth
    //           autoFocus
    //           type="email"
    //           color="primary"
    //           margin="normal"
    //           variant="outlined"
    //           label="E-mail"
    //           name="nickname"
    //           className="textField"
    //           // value={body.nickname}
    //           // onChange={handleChange}
    //         />
    //         <TextField
    //           fullWidth
    //           type="password"
    //           color="primary"
    //           margin="normal"
    //           variant="outlined"
    //           label="Password"
    //           name="password"
    //           className="textField"
    //           // value={body.password}
    //           // onChange={handleChange}
    //         />
    //         <Button
    //           fullWidth
    //           variant="circular"
    //           color="secondary"
    //           className={styles.button}

    //           // onClick={() => onSubmit()}
    //         >
    //           Ingresar
    //         </Button>
    //       </form>
    //     </div>
    //   </Container>
    // </Grid>
  );
};

export default AuthLogin;
