import { IronAppType } from "../../types";
import { useState } from "react";
import classes from "./IronApp.module.css";

interface IronAppProps {
  app: IronAppType;
  onClick?: (app: IronAppType) => void;
}

const IronApp: React.FC<IronAppProps> = (props: any) => {
  const { app } = props;
  const {
    name,
    category,
    rating,
    icon,
    publisher,
    external_id,
    install_count,
    description,
    url,
  } = app;
  const [isExpened, setIsExpened] = useState(false);
  const parsedDescription = description.replace(/<\/?[^>]+(>|$)/g, "");
  const installCount = install_count.toLocaleString();

  const toggleExpend = () => {
    setIsExpened(!isExpened);
  };

  return (
    <div className={classes["card-container"]} onClick={toggleExpend}>
      <div className={classes["card-icon"]}>
        <img src={icon} alt="icon" />
      </div>
      <div className={classes["card-header"]}>
        <h2>{name}</h2>
        <h2>Category: {category}</h2>
        <h2>Rating: {rating}</h2>
        <div className={classes["expend-btn"]}>More Info</div>
      </div>

      {isExpened && (
        <div className={classes["card-details"]}>
          <ul>
            <li>
              <p>App Publisher: {publisher}</p>
            </li>
            <li>
              <p>Downloaded: {installCount}</p>
            </li>
            <li>
              <p>External ID: {external_id}</p>
            </li>
            <li>
              <p>
                <a href={url}>Link To App</a>
              </p>
            </li>
          </ul>
        </div>
      )}
      {isExpened && (
        <div className={classes.description}>
          <h2>Description</h2>
          {parsedDescription}
        </div>
      )}
    </div>
  );
};

export default IronApp;
