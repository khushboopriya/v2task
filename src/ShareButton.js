import React from "react";
// import HourglassEmptyIcon from '@materialui/icons/HourglassEmpty';
import { Typography } from "@material-ui/core";
import Button from "@mui/material/Button";
// import Button from "@material-ui/core/Button";
// import { makeStyles } from "@material-ui/core/styles";
import ShareIcon from "@material-ui/icons/Share";

// const useStyles = makeStyles((theme) => ({
//   button: {
//     margin: theme.spacing(1)
//   },
//   leftIcon: {
//     marginRight: theme.spacing(1)
//   },
//   rightIcon: {
//     marginLeft: theme.spacing(1)
//   },
//   iconSmall: {
//     fontSize: 20
//   }
// }));

const ShareButton = ({ shareClicked }) => {
  // const classes = useStyles();

  return (
    <Typography variant="h5">
      <Button variant="contained" onClick={shareClicked}>
        Share
        <ShareIcon />
      </Button>
    </Typography>
  );
};

export default ShareButton;
