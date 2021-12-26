import { Fragment } from "react";
import { useState } from "react";
import { useAppSelector } from "../../app/hooks";

interface InputProps {
  label: string;
  type: string;
  value: string;
  className: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  step?: string;
  min?: string;
  max?: string;
  checked?: boolean;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = (props) => {
  const { label, type, value, className, onChange, name } = props;
  const [inputValue, setInputValue] = useState(value);
  const categoriesState = useAppSelector((state) => state.form.categories);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event) {
      const { value } = event.target;
      setInputValue(value);
      onChange(event);
    }
  };

  const renderInput = () => {
    const { name } = props;
    if (type === "date") {
      return (
        <input
          type="date"
          name={name}
          value={inputValue}
          onChange={onChangeHandler}
        />
      );
    }
    if (type === "range") {
      const { step, min, max } = props;
      return (
        <>
          <input
            list="tickmarks"
            type="range"
            name={name}
            value={inputValue}
            onChange={onChangeHandler}
            step={step}
            min={min}
            max={max}
          />
          <datalist id="tickmarks">
            <option value="1" label="1" />
            <option value="1.5" />
            <option value="2" />
            <option value="2.5" />
            <option value="3" label="3" />
            <option value="3.5" />
            <option value="4" />
            <option value="4.5" />
            <option value="5" label="5" />
          </datalist>
          <div>{inputValue}</div>
        </>
      );
    }
    if (type === "checkbox") {
      const shouldDisable =
        categoriesState.length === 3 && !categoriesState.includes(name);
      return (
        <input
          type="checkbox"
          name={name}
          value={inputValue}
          onChange={onChangeHandler}
          disabled={shouldDisable}
        />
      );
    }
  };

  return (
    <Fragment>
      <div className={className}>
        {renderInput()}
        {/* {error && <p>{error}</p>} */}
        <label htmlFor={name}>{label}</label>
      </div>
    </Fragment>
  );
};

export default Input;
