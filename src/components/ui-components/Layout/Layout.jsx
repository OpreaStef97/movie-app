import Content from "./Content";
import Header from "./Header";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return <div className={classes.layout}>{props.children}</div>;
};

Layout.Header = Header;
Layout.Content = Content;

export default Layout;
