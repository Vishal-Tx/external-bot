import { Grid } from "@mui/material";
import React from "react";
import RadioButton from "./RadioButton/RadioButton";
import { FaTelegram } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import { BsSlack } from "react-icons/bs";
import { FaWpforms } from "react-icons/fa";
const RadioButtons = () => {
  const radios = [
    {
      name: "Collect Email",
      id: "CollectEmail",
      choices: [
        { Icon: null, choice: "Yes" },
        { Icon: null, choice: "No" },
      ],
    },
    {
      name: "Collect Resume",
      id: "CollectResume",
      choices: [
        { Icon: null, choice: "Yes" },
        { Icon: null, choice: "No" },
      ],
    },
    {
      name: "Candidate Feedback Message",
      id: "CollectFeedback",
      choices: [
        { Icon: null, choice: "Yes" },
        { Icon: null, choice: "No" },
      ],
    },
    {
      name: "Channel",
      id: "Channel",
      choices: [
        { Icon: <FaTelegram color="#0088cc" />, choice: "Telegram" },
        { Icon: <ImWhatsapp color="#25D366" />, choice: "Whatsapp" },
        { Icon: <BsSlack color="#E01E5A" />, choice: "Slack" },
        { Icon: <FaWpforms />, choice: "Form" },
      ],
    },
    {
      name: "Collect Candidate ID",
      id: "CollectCandidateID",
      choices: [
        { Icon: null, choice: "Yes" },
        { Icon: null, choice: "No" },
      ],
    },
  ];
  return (
    <Grid container spacing={{ sm: 2, md: 3 }}>
      {radios.map((radio, index) => (
        <RadioButton key={index} radio={radio} />
      ))}
    </Grid>
  );
};

export default RadioButtons;
