import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { Container, Row, Col } from "reactstrap";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardHeader } from "@material-ui/core";

const QuestionView = ({
  id,
  data,
  stateController,
  isDecision,
  goNext,
  goBack,
}) => {
  const [value, setValue] = useState("");
  const [option, setOption] = useState();

  const modifyState = (impact) => {
    for (const [key, value] of Object.entries(impact)) {
      const curVal = stateController[key].val;
      if (Array.isArray(curVal)) {
        curVal.push(value);
        stateController[key].setVal(curVal);
      } else stateController[key].setVal(curVal + value);
    }
  };

  const nextID = (potential) => {
    const random = Math.random();
    let randomID;
    for (const [key, value] of Object.entries(potential)) {
      randomID = value;
      if (value >= random) break;
    }
    return randomID;
  };

  return (
    <Card style={{ minWidth: "600px" }}>
      <CardContent>
        <Typography variant="h6">{data.text}</Typography>
        {isDecision ? (
          <>
            <FormControl style={{ paddingTop: "12px" }}>
              <RadioGroup value={value}>
                {data.options.map((opt) => (
                  <FormControlLabel
                    onClick={() => {
                      setValue(opt.text);
                      setOption(opt);
                    }}
                    value={opt.text}
                    control={<Radio />}
                    label={opt.text}
                  />
                ))}
              </RadioGroup>
            </FormControl>
            <Row>
              {id !== "d-1" && (
                <Button disabled={id === "d-1"} onClick={() => goBack()}>
                  Previous
                </Button>
              )}
              <Button
                disabled={!option}
                onClick={() => {
                  modifyState(option.impact);
                  goNext(nextID(option.potential));
                }}
              >
                Continue
              </Button>
            </Row>
          </>
        ) : (
          <></>
        )}
      </CardContent>
    </Card>
  );
};

export default QuestionView;
