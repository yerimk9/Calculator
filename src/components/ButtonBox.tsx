import styles from "../styles/ButtonBox.module.css";
import Button from "./Button";

const buttonValue = [
  "AC",
  "DEL",
  "÷",
  7,
  8,
  9,
  "×",
  4,
  5,
  6,
  "-",
  1,
  2,
  3,
  "+",
  0,
  ".",
  "=",
];

function ButtonBox() {
  return (
    <div className={styles.btnBox}>
      {buttonValue.map((val) => (
        <Button key={val}>{val}</Button>
      ))}
    </div>
  );
}

export default ButtonBox;
