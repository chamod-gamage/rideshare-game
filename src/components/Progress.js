import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    marginBottom: "-12px",
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: "#e7e7e7",
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#93b4f5",
  },
}))(LinearProgress);

const LinearProgressWithLabel = (props) => {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <BorderLinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography
          style={{ paddingTop: "5px" }}
          variant="body2"
          color="textSecondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
};

export default LinearProgressWithLabel;
