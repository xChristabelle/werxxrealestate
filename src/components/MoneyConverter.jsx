import React from 'react';

function MoneyConverter({ amount }) {
  // Assuming amount is a number
  const formattedMoney = amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <>
      {formattedMoney}
    </>
  );
}

export default MoneyConverter;