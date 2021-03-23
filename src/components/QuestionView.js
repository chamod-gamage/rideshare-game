import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const QuestionView = ({ title, options, setOption, index }) => {
  const [value, setValue] = useState("");
  return (
    <FormControl>
      <FormLabel>{title}</FormLabel>
      <RadioGroup value={value}>
        {options.map((opt) => (
          <FormControlLabel
            onClick={() => {
              setValue(opt.title);
              setOption({ index: index, option: opt });
            }}
            value={opt.title}
            control={<Radio />}
            label={opt.title}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default QuestionView;
