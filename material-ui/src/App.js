import Navbar from "./components/Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import { Grid } from "@mui/material";
import Header from "./components/common/Header/Header";

function App() {
  const location = useLocation();
  const title = location.pathname.replace("/", "");

  return (
    <Grid container>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Navbar />
      <Outlet />
    </Grid>
  );
}

export default App;
