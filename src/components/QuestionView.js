import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardHeader } from "@material-ui/core";

const QuestionView = ({ data, stateController, isDecision }) => {
  const [value, setValue] = useState("");

  console.log(data);
  const nextID = ({ potential }) => {
    const random = Math.random();
    let randomID;
    for (const [key, value] of Object.entries(potential)) {
      if (value >= random) {
        randomID = key;
        break;
      }
    }
    return randomID;
  };

  return isDecision ? (
    <Card style={{ minWidth: "600px" }}>
      <CardContent>
        <Typography variant="h6">{data.text}</Typography>
        <FormControl style={{ paddingTop: "12px" }}>
          <RadioGroup value={value}>
            {data.options.map((opt) => (
              <FormControlLabel
                onClick={() => {
                  setValue(opt.text);
                  // setOption({ index: index, option: opt });
                }}
                value={opt.text}
                control={<Radio />}
                label={opt.text}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </CardContent>
    </Card>
  ) : (
    <div></div>
  );
};

export default QuestionView;
