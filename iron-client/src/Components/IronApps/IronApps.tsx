import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { useFetchRandomAppsQuery } from "../../features/ironAppsAPI";
import IronApp from "./IronApp";
import classes from "./IronApps.module.css";
import { resetForm } from "../../features/formSlice";

const Iron: React.FC = () => {
  const { age, appRating, categories } = useAppSelector((state) => state.form);
  const { data, isFetching, isLoading } = useFetchRandomAppsQuery({
    age,
    appRating,
    categories,
  });

  const dispatch = useAppDispatch();

  const renderIronApps = () => {
    if (data) {
      return data.map((app) => <IronApp key={app.id} app={app} />);
    }
  };

  const onEditHandler = () => {
    console.log("onEditHandler");
  };

  const onResetHandler = () => {
    dispatch(resetForm());
    window.location.reload();
  };

  console.log(data);
  return (
    <div className={classes["apps-list"]}>
      <h1>3 Random Apps</h1>
      <div className={classes["list-controls"]}>
        <div className={classes["random-btn"]} onClick={onResetHandler}>
          Reset
        </div>
        <div className={classes["edit-btn"]} onClick={onEditHandler}>
          Edit
        </div>
      </div>

      {isFetching || isLoading ? <div>Loading...</div> : renderIronApps()}
    </div>
  );
};

export default Iron;
