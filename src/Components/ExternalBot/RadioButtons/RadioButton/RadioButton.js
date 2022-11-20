import { Grid, Typography } from "@mui/material";
import { Field } from "formik";
import React from "react";

const RadioButton = ({ radio }) => {
  const { name, choices } = radio;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Typography sx={{ fontWeight: "600", mt: "13px", mb: "5px" }}>
        {name}
      </Typography>
      {choices.map(({ Icon, choice }, index) => {
        return (
          <label key={index} style={{ width: "140px", display: "flex" }}>
            <Field
              type="radio"
              name={name}
              value={choice}
              style={{ marginRight: "10px", display: "flex" }}
            ></Field>
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
