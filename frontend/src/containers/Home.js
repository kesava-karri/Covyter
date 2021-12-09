import React from "react";
import "../styles/Home.css";
import { Grid, Button } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";

const Home = (props) => {
  return (
    <div id="background">
      <Grid
        style={{ height: "100%" }}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            startIcon={<DashboardIcon />}
            style={{
              margin: "10px"
            }}
            onClick={() => props.history.push("/dashboard")}
          >
            Go to Dashboard
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
