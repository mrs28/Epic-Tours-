import styles from './AuthLogin.module.css';
import { Typography } from "@mui/material";
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
  return (

   <div className={styles.containerLogin}>
      <div className={styles.containerLoginElements}>
        <div className={styles.textCenter}>
          {/* <h1>
            <span>
              <img src="../../../assets/image/Vector (2).png" alt="block de notas "
            /></span>
            Note me
          </h1> */}
          <Typography className={styles.h1} component="h1" variant="h8">
              <span>
                <img src="../../../assets/image/Vector (2).png" alt="mundo "
              /></span>
              Travels
          </Typography>
          < Typography className={styles.h3} component="h3" variant="h5">
            Inicia sesión
            </Typography>
        </div>

      {/* <div class="text-center">
        <h3>Inicia sesión para <br/>recordarlo todo</h3>
      </div> */}

        <form className={styles.form}>
    
        <label for="idLoginEmail" className={styles.label}
          >Dirección de correo electrónico</label>
          <input className={styles.input}
            id="idLoginEmail"
            type="text"
            placeholder=" Correo electrónico"
            required
            formControlName="email"
          />
      
        <label className={styles.label} for="idLoginPassword" 
          >Contraseña</label>
          <input className={styles.input}
            id="idLoginPassword"
            type="password"
            placeholder=" ********"
            required
            formControlName="password"
          />
      

        <button className={styles.button}>Ingresar</button>
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
  )
}

export default AuthLogin
