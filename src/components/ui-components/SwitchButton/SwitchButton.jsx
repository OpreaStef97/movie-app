import classes from "./SwitchButton.module.css";

const SwitchButton = ({ checked, onChange, ...props }) => {
  return (
    <div className={classes.switch_button}>
      <input
        className={classes.switch_button_checkbox}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <label className={classes.switch_button_label} htmlFor="">
        <span>Movies</span>
      </label>
    </div>
  );
};
export default SwitchButton;
