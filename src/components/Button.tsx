import React from "react";
import styles from "../styles/Button.module.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { InputState, ResultSelector } from "../recoil";
import floatNum from "../utils/floatNum";

function Button({ children }: { children: React.ReactNode }) {
  const [input, setInput] = useRecoilState(InputState);
  let result = useRecoilValue(ResultSelector);

  const handleClick = (value: string) => {
    switch (value) {
      case "=":
        let totalValue = eval(result.replaceAll("×", "*").replaceAll("÷", "/"));
        setInput(String(floatNum(totalValue, result)));
        break;
      case "AC":
        setInput("");
        break;
      case "DEL":
        setInput((prev) => prev.slice(0, -1));
        break;
      case "0":
        if (input === "") {
          setInput("0.");
        } else {
          setInput((prev) => prev + value);
        }
        break;
      default:
        if ("+-÷×.".includes(input.slice(-1)) && "+-÷×.".includes(value))
          return;
        setInput((prev) => prev + value);
        break;
    }
  };

  let buttonClassName = styles.btn;
  if (children === "AC" || children === 0) {
    buttonClassName += ` ${styles.long}`;
  } else if (children === "=") {
    buttonClassName += ` ${styles.yellow}`;
  }

  return (
    <div
      className={buttonClassName}
      onClick={() => handleClick(String(children))}
    >
      {children}
    </div>
  );
}

export default Button;
