const express = require('express');
const got = require('got');

const app = express();
const port = 8080;

const bitcoinValue = async () => {
  const value = await got.get('https://api.coingate.com/v2/rates/merchant/BTC/USD');
  return value.body;
}

app.get('/', async (req, res) => {
  const value = await bitcoinValue();
  res.json({ 'dollarPerBitcoin': value});
})

app.listen(port, () => {
  console.log(`Serving bit-service app listening on port ${port}`);
})
