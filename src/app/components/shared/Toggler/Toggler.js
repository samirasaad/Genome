import * as React from "react";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { I18N_CONFIG_KEY } from "./../../../../utilis/constants";
import "./Toggler.scss";

export default function CustomizedSwitches({ handleChange, isChecked }) {
  console.log(
    JSON.parse(localStorage.getItem(I18N_CONFIG_KEY)).selectedLang === "ar"
  );
  const Android12Switch = styled(Switch)(({ theme }) => ({
    padding: 8,
    "& .MuiSwitch-track": {
      borderRadius: 22 / 2,
      backgroundColor: "#efefef",
      "&:before, &:after": {
        content: '""',
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        width: 16,
        height: 16,
      },
      "&:before": {
        content: `"En"`,
        left: 22,
        fontFamily: "Cairo-SemiBold",
      },
      "&:after": {
        content: `"Ar"`,
        right: 19,
        fontFamily: "Cairo-SemiBold",
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: "#6a2a53",
      boxShadow: "none",
      top: "9px",
      left: "8px",
      zIndex: "0",
      width: "37px",
      height: "37px",
      margin: "2px",
      position: "absolute",
      "&:after": {
        content: `"${JSON.parse(
          localStorage.getItem(I18N_CONFIG_KEY)
        ).selectedLang.toUpperCase()}"`,
        color: "white",
        fontFamily: "Cairo-SemiBold",
        position: "absolute",
        top: "9px",
        right: "10px",
        fontSize: "13px",
      },
    },
  }));

  return (
    <FormGroup className="test">
      <FormControlLabel
        control={
          <Android12Switch checked={isChecked} onChange={handleChange} />
        }
        label=""
      />
    </FormGroup>
  );
}
