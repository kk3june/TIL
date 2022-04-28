import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";
import Header from "./components/common/Header/Header";

function App() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header title={"Authentification"} />
      </Grid>
      <Navbar />
      <Outlet />
    </Grid>
  );
}

export default App;
