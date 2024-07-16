import Button from "../../components/Button";
import CompleteImg from "../../assets/Complete.svg";
import style from "./concluido.module.scss";

const Concluido = () => {
  return (
    <div className={style.containerConcluido}>
      <img src={CompleteImg} style={{ width: "86px" }} alt="Concluido" />
      <div>
        <h1>THANK YOU!</h1>
        <p>We’ve added your card details</p>
      </div>
      <Button styleButton={{ width: "100%" }}>Continuar</Button>
    </div>
  );
};

export default Concluido;
