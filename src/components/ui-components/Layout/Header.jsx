import classes from "./Layout.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <h1 className={classes.header_title}>React Movies</h1>
      {props.children}
    </header>
  );
};

export default Header;
