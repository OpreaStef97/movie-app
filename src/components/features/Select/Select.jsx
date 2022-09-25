import { CaretDown, XCircle } from "phosphor-react";
import { useEffect, useRef, useState } from "react";
import { useClickOutside } from "../../../hooks";
import classes from "./Select.module.css";

const Select = ({ options, onChange, placeholder = "Select..", value }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState();
  const ref = useRef(null);

  useClickOutside(ref, () => {
    setShowOptions(false);
  });

  useEffect(() => {
    setSelectedOption(value);
  }, [value]);

  const showHandler = () => {
    setShowOptions(!showOptions);
  };

  const selectHandler = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
    onChange?.(option);
  };

  const deleteHandler = () => {
    setSelectedOption(null);
    onChange?.(null);
  };

  return (
    <div className={classes.select_wrapper}>
      <div className={`${classes.select} ${showOptions ? classes.active : ""}`} ref={ref}>
        <div className={classes.select_indicator}>
          <button
            onClick={() => deleteHandler(selectedOption?.id)}
            style={{ display: `${!selectedOption ? "none" : "flex"}` }}
            aria-label="select_delete"
            className={classes.select_delete}
          >
            <XCircle className={classes.select_delete_icon} />
          </button>
          <div onClick={showHandler} className={classes.select_value}>
            <p>{selectedOption?.label || placeholder}</p>
          </div>
          <button
            onClick={showHandler}
            aria-label="select_open"
            className={classes.select_open}
          >
            <CaretDown className={classes.select_icon} />
          </button>
        </div>
        <div className={classes.select_dropdown}>
          <ul className={classes.select_list}>
            {options.map((option, idx) => (
              <li
                key={`${option.value}-${idx}`}
                onClick={selectHandler.bind(this, option)}
                className={`${classes.select_option} ${
                  selectedOption?.value === option.value ? classes.selected : ""
                }
                `}
              >
                <span>{option.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Select;
