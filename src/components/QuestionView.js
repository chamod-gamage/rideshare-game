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

const useStyles = makeStyles({
  root: {
    borderRadius: "12px",
    width: "600px",
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
}) => {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const [option, setOption] = useState();
  const nextID = (potential) => {
    const random = Math.random();
    let randomID;
    for (const [key, value] of Object.entries(potential)) {
      randomID = value;
      if (key >= random) break;
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
            <Typography style={{ paddingTop: "12px" }} variant="body1">
              {data.subtext}
            </Typography>
          </>
        )}

        <Row style={{ justifyContent: "flex-end", margin: 0 }}>
          {showPrev && (
            <Button
              onClick={() => {
                goBack();
              }}
            >
              Undo
            </Button>
          )}
          <Button
            disabled={isDecision && !option}
            onClick={() => {
              setOption();
              setValue("");
              if (isDecision) {
                goNext(nextID(option.potential));
                modifyState(option.impact);
              } else goNext(data.next);
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
