import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = ({ type = "big" }) => {
  return (
    <div className={classes.loading_spinner}>
      <div className={classes[`spinner_${type}`]}></div>
    </div>
  );
};

export default LoadingSpinner;
