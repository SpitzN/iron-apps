import { Fragment } from "react";
import Input from "../UI/Input";
import classes from "./IronForm.module.css";


interface MultiCheckboxProps {
  options: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const MultiCheckbox: React.FC<MultiCheckboxProps> = (props) => {
  const { options, onChange } = props;

  return (
    <Fragment>
      <div className={classes["categories-container"]}>
        {options.map((option) => (
          <div key={option}>
            <Input
              type="checkbox"
              className={classes["category-input"]}
              name={option}
              value={option}
              onChange={onChange}
              label={option}
              //   checked={value.indexOf(option.value) !== -1}
            />
          </div>
        ))}
      </div>
      {/* {error && <div className="alert alert-danger">{error}</div>} */}
    </Fragment>
  );
};

export default MultiCheckbox;
