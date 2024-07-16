import { useCardProvider } from "../../context/CardContext";
import Button from "../Button";
import style from "./form.module.scss";

const Form = () => {
  const {
    setValueCVC,
    setValueName,
    setValueCreditNumber,
    setValueEXPMonth,
    setValueEXPYear,
  } = useCardProvider();

  const handleCreditCardChange = (e) => {
    // Remove espaços em branco e caracteres não numéricos
    const sanitizedNumber = e.target.value.replace(/\D/g, "");

    // Aplica a formatação desejada (por exemplo, agrupando em conjuntos de 4 dígitos)
    const formattedNumber = sanitizedNumber.replace(/(\d{4})/g, "$1 ");

    // Atualiza o estado com o número formatado
    setValueCreditNumber(formattedNumber);
  };

  return (
    <div style={{ width: "15%" }}>
      <form className={style.form}>
        <div>
          <label htmlFor="name">CARDHOLDER NAME</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="e.g. Jane Appleseed"
            onChange={(e) => setValueName(e.target.value)}
            required
          />
          <br />
        </div>
        <div>
          <label htmlFor="name">CARD NUMBER</label>
          <br />
          <input
            type="tel"
            inputmode="numeric"
            id="name"
            name="name"
            placeholder="e.g. 1234 5678 9123 0000"
            onChange={(e) => handleCreditCardChange(e)}
            maxLength={16}
            size={16}
            required
          />
          <br />
        </div>
        <div className={style.doubleInputContainer}>
          <div>
            <label htmlFor="name">EXP. DATE (MM/YY)</label>
            <br />
            <div className={style.EXPDateContainer}>
              <input
                type="tel"
                id="name"
                name="name"
                placeholder="MM"
                onChange={(e) => setValueEXPMonth(e.target.value)}
                maxLength={2}
                required
              />
              <br />
              <input
                type="tel"
                id="name"
                name="name"
                placeholder="YY"
                onChange={(e) => setValueEXPYear(e.target.value)}
                maxLength={2}
                required
              />
              <br />
            </div>
          </div>
          <div>
            <label htmlFor="name">CVC</label>
            <br />
            <input
              type="text"
              id="name"
              placeholder="e.g. 123"
              onChange={(e) => setValueCVC(e.target.value)}
              maxLength={3}
              required
            />
            <br />
          </div>
        </div>
      </form>
      <Button styleButton={{ width: "300px" }}>Confirmar</Button>
    </div>
  );
};

export default Form;
