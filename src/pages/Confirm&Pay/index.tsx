import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import { Link } from 'react-router-dom';

import { useCart } from "../../hooks/useCart";
import { formatPrice } from "../../util/format";
import { Container, ProductTable, Total } from "./styles";

const ConfirmPay =(): JSX.Element => {
  const {cart,compraTotal} = useCart();

  const cartFormatted = cart.map(product => ({
    ...product,
    priceFormatted: formatPrice(product.price),
    subtotal: formatPrice(product.price * product.amount)
 }))

//  const total = 
//  formatPrice(
//  cart.reduce((sumTotal, product) => {
//    return sumTotal + product.price * product.amount
//  }, 0)
//  )
  return (
    <Container>
    <React.Fragment>

     
        <h1>Revisar Pedido</h1>
        <ProductTable>
        <thead>
          <tr>
            <th aria-label="product image" />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th aria-label="delete icon" />
          </tr>
        </thead>
        <tbody>
          {cartFormatted.map(product =>(
            
            <tr key={product.id} data-testid="product">
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
              </td>
              <td>
                <div>
                  <input
                    type="text"
                    data-testid="product-amount"
                    readOnly
                    value={product.amount}
                  />
                </div>
              </td>
              <td>
                <strong>{product.subtotal}</strong>
              </td>
            </tr>
          ))}
        </tbody>
        </ProductTable>
    

      <Container>
        <Total>
            <span>TOTAL </span>
            <strong> {compraTotal}</strong>
        </Total>
      </Container>

      <Typography variant="h6" gutterBottom>
       Cartão de Crédito
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
        <footer>
          <Link to="/form">
            <div>
            <button type="button">Voltar</button>
            </div>
          </Link>
          <Link to="/final">
            <div>
            <button type="button">Confirmar</button>
            </div>
          </Link>
      </footer>
        </Grid>
      </Grid>
    </React.Fragment>
  </Container>
  );
}
   
export default ConfirmPay;

