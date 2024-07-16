import style from "./cards.module.scss";
import bgCardBack from "./bgCardBack.png";
import bgCardFront from "./bgCardFront.png";
import { useCardProvider } from "../../context/CardContext";

export const CardBack = () => {
  const { valueCVC } = useCardProvider();

  return (
    <div>
      <div className={style.cardBackContainer}>
        <img src={bgCardBack} alt="Credit Card Back" />
        <div className={style.cardBackCVV}>{valueCVC}</div>
      </div>
    </div>
  );
};

export const CardFront = () => {
  const { valueCreditNumber, valueName, valueEXPMonth, valueEXPYear } =
    useCardProvider();

  return (
    <div>
      <div className={style.cardFrontContainer}>
        <img src={bgCardFront} alt="Credit Card Front" />
        <div className={style.creditNum}>{valueCreditNumber}</div>
        <div className={style.nameInput}>{valueName}</div>
        <div className={style.expMMInput}>{valueEXPMonth}</div>
        <div className={style.barDiv}>/</div>
        <div className={style.expYYInput}>{valueEXPYear}</div>
      </div>
    </div>
  );
};

export const Card = () => {
  return (
    <div className={style.cardContainerMain}>
      <div className={style.cardFrontContainerChild}>
        <CardFront />
      </div>
      <div className={style.cardBackContainerChild}>
        <CardBack />
      </div>
    </div>
  );
};
