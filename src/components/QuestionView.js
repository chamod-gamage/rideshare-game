import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { Container, Row, Col } from "reactstrap";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardMedia } from "@material-ui/core";
import ReplayIcon from "@material-ui/icons/Replay";
import { useHistory } from "react-router-dom";
import { RestaurantTwoTone } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    borderRadius: "12px",
    marginTop: "36px",
  },
});

const QuestionView = ({
  id,
  data,
  modifyState,
  isDecision,
  showPrev,
  goNext,
  goBack,
  restart,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = useState("");
  const [option, setOption] = useState();
  const nextID = (potential) => {
    const random = Math.random();
    let randomID;
    for (const [key, value] of Object.entries(potential)) {
      if (key >= random) break;
      randomID = value;
    }
    return randomID;
  };

  return (
    <Card className={classes.root}>
      {data.picture && (
        <CardMedia style={{ height: "275px" }} image={data.picture} />
      )}
      <CardContent style={{ padding: "20px 32px" }}>
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
          </>
        ) : (
          <>
            <Typography style={{ padding: "12px 0" }} variant="body1">
              {data.subtext}
            </Typography>
          </>
        )}

        <Row style={{ justifyContent: "flex-end", margin: 0 }}>
          <Button
            style={{ color: "gray" }}
            onClick={() => {
              restart();
            }}
          >
            Restart
          </Button>
          {false && (
            <>
              <Button
                onClick={() => {
                  goBack();
                }}
              >
                Undo
              </Button>
              <ReplayIcon
                style={{
                  cursor: "pointer",
                  color: "lightgray",
                  margin: "4px 8px 0 0",
                }}
                onClick={() => {
                  restart();
                }}
              />
            </>
          )}

          <Button
            disabled={isDecision && !option}
            onClick={() => {
              setOption();
              setValue("");
              if (isDecision) {
                goNext(nextID(option.potential));
                modifyState(option.impact);
              } else {
                if (data.impact) modifyState(data.impact);
                goNext(data.next);
              }
            }}
          >
            Continue
          </Button>
        </Row>
      </CardContent>
    </Card>
  );
};

export default QuestionView;
