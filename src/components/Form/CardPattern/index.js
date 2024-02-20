import React, { useState } from 'react';

const CreditCardInput = () => {
  const [creditCardNumber, setCreditCardNumber] = useState('');

  const handleCreditCardChange = (e) => {
    // Remove espaços em branco e caracteres não numéricos
    const sanitizedNumber = e.target.value.replace(/\D/g, '');

    // Aplica a formatação desejada (por exemplo, agrupando em conjuntos de 4 dígitos)
    const formattedNumber = sanitizedNumber.replace(/(\d{4})/g, '$1 ');

    // Atualiza o estado com o número formatado
    setCreditCardNumber(formattedNumber);
  };

  return (
    <input
      type="text"
      value={creditCardNumber}
      onChange={handleCreditCardChange}
      placeholder="Número do Cartão de Crédito"
    />
  );
};

export default CreditCardInput;