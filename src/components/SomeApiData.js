import {
  Box,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const useStyle = makeStyles((theme) => ({
  paper: {
    borderRadius: 20,
    background: "#1cc4fd",
    boxShadow: "2px 2px 10px #18a7d7, -2px -2px 10px #20e1ff",
    color: "#fff",
    padding: "10px",
  },
}));

const SomeApiData = () => {
  const classes = useStyle();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.publicapis.org/entries")
      .then((res) => res.json())
      .then((_data) => setData(_data?.entries || []))
      .catch(() => console.log("ERROR"));
  }, []);

  return (
    <Container>
      <Grid container spacing={3}>
        {data.map((item, i) => (
          <Grid item xs={4} key={i}>
            <Paper className={classes.paper}>
              <Typography>{item.Description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SomeApiData;
