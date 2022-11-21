import { Box } from "@mui/material";
import { Field } from "formik";
import React, { useState } from "react";
import "./CustomButton.css";

const CustomButton = ({ id, choice }) => {
  return (
    <div className="container">
      <Field
        className="radioButton"
        type="radio"
        name={id}
        value={choice}
        style={{ marginRight: "10px", display: "flex" }}
      ></Field>
      <span className="checkmark"></span>
    </div>
  );
};

export default CustomButton;

// <Box
//         onClick={() => setSelected((prevValue) => !prevValue)}
//         sx={{
//           width: "13px",
//           height: "13px",
//           backgroundColor: "grey",
//           mt: "6px",
//           mr: "8px",
//         }}
//       >
//         {selected ? (
//           <Box
//             sx={{
//               width: "6px",
//               height: "6px",
//               backgroundColor: "white",
//               display: "flex",
//               justifyContent: "center",
//               alignContent: "center",
//               borderRadius: "50%",
//               mx: "3.5px",
//               my: "3.5px",
//             }}
//           ></Box>
//         ) : null}
//       </Box>
