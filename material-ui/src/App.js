<<<<<<< HEAD
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";
=======
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { Grid } from '@mui/material';
>>>>>>> 4d4299774d94aa7d55798ff845630259863a004e

function App() {
  return (
    <Grid container>
      <Navbar />
      <Outlet />
    </Grid>
  );
}

export default App;
