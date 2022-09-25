import { SmileyXEyes, WarningCircle } from "phosphor-react";
import LoadingSpinner from "../LoadingSpinner";
import classes from "./ViewStateIndicator.module.css";

const ViewStateIndicator = ({ loading, error, warning }) => {
  if (error && warning)
    console.warn(
      "ViewStateIndicator: Both error and warning props are set. Error will be displayed."
    );

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className={classes.indicator}>
      <span className={classes.indicator_text}>
        {error ? (
          <WarningCircle className={classes.indicator_icon} />
        ) : (
          <SmileyXEyes className={classes.indicator_icon} />
        )}
        <br />
        {error
          ? typeof error === "string"
            ? error
            : error?.message ?? "Something went wrong"
          : warning}
      </span>
    </div>
  );
};

export default ViewStateIndicator;
