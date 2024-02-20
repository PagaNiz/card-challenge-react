import { createContext, useContext, useState } from "react";

export const CardContext = createContext();

CardContext.displayName = "Card";

export const CardProvider = ({ children }) => {
    const [valueCVC, setValueCVC] = useState("000");
    const [valueName, setValueName] = useState("JANE APPLESEED");
    const [valueCreditNumber, setValueCreditNumber] = useState("0000 0000 0000 0000");
    const [valueEXPMonth, setValueEXPMonth] = useState("00");
    const [valueEXPYear, setValueEXPYear] = useState("00");

    return (
        <CardContext.Provider value={{
            valueCVC,
            valueName,
            valueCreditNumber,
            valueEXPMonth,
            valueEXPYear,
            setValueCVC,
            setValueName,
            setValueCreditNumber,
            setValueEXPMonth,
            setValueEXPYear
        }}>
            {children}
        </CardContext.Provider>
    )
}

export const useCardProvider = () => useContext(CardContext)
