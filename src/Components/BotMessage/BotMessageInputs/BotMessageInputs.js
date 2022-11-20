import { Field } from "formik";
import React from "react";

const BotMessageInputs = ({ errors, touched, field }) => {
  const { fieldName, fieldValue } = field;
  return (
    <>
      <label style={{ fontWeight: "600" }}>{fieldName}</label>
      <Field
        as="textarea"
        name={fieldValue}
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
      {errors[`${fieldValue}`] && touched[`${fieldValue}`] ? (
        <div style={{ color: "red" }}>{errors[`${fieldValue}`]}</div>
      ) : null}
    </>
  );
};

export default BotMessageInputs;
