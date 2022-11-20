import { Box, Container, Typography } from "@mui/material";
import { Field } from "formik";
import React from "react";
import "./InteractionNotification.css";

const InteractionNotification = ({ errors, touched }) => {
  return (
    <Box sx={{}} className="bot_shadow_box">
      <Container sx={{ backgroundColor: "black" }}>
        <Typography
          align="center"
          color="white"
          sx={{ fontWeight: "500", fontSize: "30px" }}
        >
          Interaction Notification
        </Typography>
      </Container>
      <Container sx={{ border: "1px solid grey", pt: "10px", pb: "20px" }}>
        <label style={{ fontWeight: "600" }}>Report sent to Extra Email</label>
        <Field
          type="text"
          name="Report2Mail"
          style={{
            display: "block",
            width: "98.6%",
            height: "35px",
            border: "1px solid grey",
            marginTop: "8px",
            marginBottom: "8px",
            padding: "3px",
            fontSize: "17px",
          }}
        />
        {errors.Report2Mail && touched.Report2Mail ? (
          <div style={{ color: "red" }}>{errors.Report2Mail}</div>
        ) : null}

        <label style={{ fontWeight: "600" }}>Report sent to User</label>
        <Field
          component="select"
          name="Report2User"
          placeholder="select"
          style={{
            display: "block",
            width: "100%",
            height: "40px",
            border: "1px solid grey",
            padding: "8px",
            marginTop: "8px",
            marginBottom: "8px",
          }}
        >
          <option value="" disabled>
            Select...
          </option>
          <option value="user1">User 1</option>
          <option value="user2">User 2</option>
        </Field>
        {errors.Report2User && touched.Report2User ? (
          <div style={{ color: "red" }}>{errors.Report2User}</div>
        ) : null}
      </Container>
    </Box>
  );
};

export default InteractionNotification;
