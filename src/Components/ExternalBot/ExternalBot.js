import React from "react";
import Container from "@mui/material/Container";
import { Box, Button, Grid, Typography } from "@mui/material";
import "./ExternalBot.css";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import RadioButtons from "./RadioButtons/RadioButtons";
import InteractionNotification from "../InteractionNotification/InteractionNotification";
import BotMessage from "../BotMessage/BotMessage";

const ExternalBot = () => {
  const defaultValues = {
    initiate: "",
    Report2User: "",
    Report2Mail: "",
    WelcomeMessage: "",
    InstructionMessage: "",
    CompletionMessage: "",
    BotMessage: "",
    phoneNo: "",
  };

  const validationSchema = yup.object().shape({
    initiate: yup.string().required("Please select User."),
    Report2User: yup.string().required("Please Enter Email."),
    Report2Mail: yup
      .string()
      .required("This field cannot be Empty..")
      .email("Please enter valid Email."),
    WelcomeMessage: yup.string().required("Welcome Message cannot be Empty.."),
    InstructionMessage: yup
      .string()
      .required("Instruction Message cannot be Empty.."),
    CompletionMessage: yup
      .string()
      .required("Completion Message cannot be Empty.."),
    BotMessage: yup.string().required("Bot Message cannot be Empty.."),
    phoneNo: yup.string().required("Please Upload a Phone Number List.."),
  });

  const handleSubmit = (values) => {
    console.log("values", values);
    alert({ ...values });
  };
  return (
    <Container sx={{ mt: "50px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ fontWeight: "700", fontSize: "25px" }}>
          External Bot
        </Typography>
        <Typography sx={{ fontWeight: "400", color: "grey" }}>
          aCloud / External Bot
        </Typography>
      </Box>
      <Formik
        initialValues={defaultValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Container
              className="bot_shadow_box"
              sx={{
                mt: "35px",
                pb: "35px",
                mb: "22px",
              }}
            >
              <Grid
                container
                spacing={{ xs: 2, md: 2 }}
                columns={{ sm: 12, xs: 6 }}
                sx={{ marginBottom: "35px" }}
              >
                <Grid item xs={6}>
                  <label style={{ fontWeight: "600" }}>Who can Initiate?</label>
                  <Field
                    className="initiate-field"
                    component="select"
                    name="initiate"
                    placeholder="select"
                    style={{
                      display: "block",
                      width: "100%",
                      height: "35px",
                      border: "1px solid grey",
                      padding: "4px",
                      fontSize: "15px",
                    }}
                  >
                    <option value="" disabled>
                      Select...
                    </option>
                    <option value="user1">User 1</option>
                    <option value="user2">User 2</option>
                  </Field>
                  {errors.initiate && touched.initiate ? (
                    <div style={{ color: "red" }}>{errors.initiate}</div>
                  ) : null}
                </Grid>
                <Grid item xs={6}>
                  <label style={{ fontWeight: "600" }}>Phone Number List</label>
                  <Field
                    type="file"
                    name="phoneNo"
                    style={{
                      display: "block",
                      width: "100%",
                      height: "33px",
                      alignItems: "center",
                      border: "1px solid grey",
                      fontSize: "25px",
                    }}
                  />
                  {errors.phoneNo && touched.phoneNo ? (
                    <div
                      style={{
                        color: "red",
                        marginBottom: "5px",
                        marginTop: 0,
                      }}
                    >
                      {errors.phoneNo}
                    </div>
                  ) : null}
                  <Box sx={{ mt: "15px" }}>
                    <Button
                      variant="outlined"
                      sx={{
                        color: "grey",
                        border: "1px solid grey ",
                        mr: "5px",
                        "&:hover": {
                          border: " 1px solid black",
                          color: "black",
                          backgroundColor: "white",
                        },
                      }}
                    >
                      View List
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "black",
                        "&:hover": {
                          backgroundColor: "grey",
                        },
                      }}
                    >
                      Upload
                    </Button>
                  </Box>
                </Grid>
              </Grid>
              <RadioButtons />
            </Container>
            <Grid
              container
              spacing={{ xs: 2, md: 2 }}
              columns={{ sm: 12, xs: 6 }}
            >
              <Grid item xs={6}>
                <InteractionNotification errors={errors} touched={touched} />
              </Grid>
              <Grid item xs={6}>
                <BotMessage errors={errors} touched={touched} />
              </Grid>
            </Grid>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                mt: "30px",
                mb: "30px",
              }}
            >
              <Button
                variant="outlined"
                sx={{
                  color: "grey",
                  border: "1px solid grey ",
                  mr: "5px",
                  "&:hover": {
                    border: " 1px solid black",
                    color: "black",
                    backgroundColor: "white",
                  },
                }}
              >
                Back
              </Button>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "black",
                  ml: "10px",
                  "&:hover": {
                    backgroundColor: "grey",
                  },
                }}
              >
                Submit
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default ExternalBot;
