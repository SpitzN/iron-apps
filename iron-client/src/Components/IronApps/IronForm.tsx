import Input from "../UI/Input";
import MultiCheckbox from "./MultiCheckbox";
import classes from "./IronForm.module.css";
import { convertBirthDateToCurrentAge } from "../../Utils/utils";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  setAge,
  setAppRating,
  setCategories,
  setIsValid,
  resetForm,
} from "../../features/formSlice";

const categories = [
  "House And Home",
  "Maps And Navigation",
  "Health And Fitness",
  "Travel And Local",
  "Music And Audio",
  "Communication",
  "Tools",
  "Entertainment",
  "News And Magazines",
  "Shopping",
  "Events",
  "Dating",
  "Lifestyle",
  "Books And Reference",
  "Weather",
  "Business",
  "Finance",
  "Social",
  "Photography",
  "Food And Drink",
  "Video Players",
  "Productivity",
  "Parenting",
  "Education",
  "Auto And Vehicles",
  "Medical",
  "Sports",
];

const IronForm: React.FC = (props) => {
  const today = new Date().toISOString().split("T")[0];
  const dispatch = useAppDispatch();
  const categoriesState = useAppSelector((state) => state.form.categories);
  const ageState = useAppSelector((state) => state.form.age);
  const ratingState = useAppSelector((state) => state.form.appRating);

  const onDateInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    dispatch(setAge(convertBirthDateToCurrentAge(value)));
  };

  const onRatingInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    dispatch(setAppRating(+value));
  };

  const onCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked && categoriesState.length === 0) {
      dispatch(setCategories([value]));
    }
    if (checked && categoriesState.length < 3) {
      dispatch(setCategories([...categoriesState, value]));
    }

    if (!checked && categoriesState.length > 0) {
      dispatch(
        setCategories(categoriesState.filter((category) => category !== value))
      );
    }
  };

  const onResetHandler = () => {
    dispatch(resetForm());
    window.location.reload();
  };

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted");
    if (categoriesState.length < 3) {
      alert("Please select at least one category");
      return;
    }
    if (ageState === 0) {
      alert("You have to be at least 1 year old");
      return;
    }
    if (ratingState === 0) {
      alert("You have to select app rating");
      return;
    }
    dispatch(setIsValid(true));
  };

  return (
    <div className={classes["form-container"]}>
      <form onSubmit={onSubmitForm}>
        <div className={classes["form-group"]}>
          <h3>Please Enter Your Birth Date</h3>
          <Input
            type="date"
            label="Date Of Birth"
            name="age"
            className={classes["dob-input"]}
            value={today}
            onChange={onDateInputChange}
          />
        </div>
        <div className={classes["form-group"]}>
          <h3>Move The Slider Left Or Right To Select Minimum App Rating</h3>
          <h4>The Scale is 1-5</h4>
          <Input
            type="range"
            label="Rating"
            name="rating"
            className={classes["rating-input"]}
            step="0.01"
            min="1"
            max="5"
            value="3"
            onChange={onRatingInputChange}
          />
        </div>
        <div className={classes["form-group"]}>
          <h3>Choose 3 Categories</h3>
          <MultiCheckbox options={categories} onChange={onCheckboxChange} />
        </div>
        <div className={classes["form-group"]}>
          <button className={classes["submit-button"]}>Submit</button>
          <div className={classes["reset-btn"]} onClick={onResetHandler}>
            Reset
          </div>
        </div>
      </form>
    </div>
  );
};

export default IronForm;
