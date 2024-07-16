import style from "./Button.module.scss";

const Button = ({ children, styleButton }) => {
  return (
    <button
      className={style.button}
      style={styleButton}
      onSubmit={(e) => e.preventDefault()}
    >
      {children}
    </button>
  );
};

export default Button;
