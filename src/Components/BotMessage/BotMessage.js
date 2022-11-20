import { Box, Container, Typography } from "@mui/material";
import { Field } from "formik";
import React from "react";
import "./BotMessage.css";
import BotMessageInputs from "./BotMessageInputs/BotMessageInputs";

const BotMessage = ({ errors, touched }) => {
  const fields = [
    { fieldName: "Interaction Welcome Message", fieldValue: "WelcomeMessage" },
    {
      fieldName: "Interaction Instruction Message",
      fieldValue: "InstructionMessage",
    },
    {
      fieldName: "Interaction Completion Message",
      fieldValue: "CompletionMessage",
    },
    { fieldName: "Bot Message", fieldValue: "BotMessage" },
  ];
  return (
    <Box sx={{}} className="bot_shadow_box">
      <Container sx={{ backgroundColor: "black" }}>
        <Typography
          align="center"
          color="white"
          sx={{ fontWeight: "500", fontSize: "30px" }}
        >
          Bot Message
        </Typography>
      </Container>
      <Container sx={{ border: "1px solid grey", pt: "10px", pb: "20px" }}>
        {fields.map((field, index) => {
          return (
            <BotMessageInputs
              errors={errors}
              touched={touched}
              key={index}
              field={field}
            />
          );
        })}
      </Container>
    </Box>
  );
};

export default BotMessage;
