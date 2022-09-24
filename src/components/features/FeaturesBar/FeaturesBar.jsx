import classes from "./FeaturesBar.module.css";

const FeaturesBar = ({ children }) => {
  return <div className={classes.feature_bar}>{children}</div>;
};

export default FeaturesBar;
