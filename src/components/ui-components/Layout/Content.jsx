import classes from "./Layout.module.css";

const Content = ({ children }) => {
  return <main className={classes.content}>{children}</main>;
};

export default Content;