import { Grid, Typography } from "@mui/material";
import React from "react";
import CustomButton from "./CustomButton/CustomButton";
import "./RadioButtons.css";

const RadioButton = ({ radio }) => {
  const { name, choices, id } = radio;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Typography sx={{ fontWeight: "600", mt: "13px", mb: "5px" }}>
        {name}
      </Typography>
      {choices.map(({ Icon, choice }, index) => {
        return (
          <label key={index} style={{ width: "140px", display: "flex" }}>
            <CustomButton id={id} choice={choice} />

            <Typography>{Icon}</Typography>
            <Typography sx={{ display: "flex", marginLeft: "7px" }}>
              {choice}
            </Typography>
          </label>
        );
      })}
    </Grid>
  );
};

export default RadioButton;
