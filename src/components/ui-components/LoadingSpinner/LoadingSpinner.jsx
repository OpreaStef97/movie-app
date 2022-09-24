import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className={classes.loading_spinner}>
      <div className={classes.spinner_big}></div>
    </div>
  );
};

export default LoadingSpinner;
