import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Container} from './styles';

import { Link } from 'react-router-dom';

const AndressForm =(): JSX.Element => {
  
// <span>TOTAL</span>
// <strong>{total}</strong>
  return (
    <Container>
      <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Nome"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Sobrenome"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Endereço / Complemento"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="Cidade"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="UF*"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Cep"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="telefone"
            name="telefone"
            label="Telefone*"
            fullWidth
            variant="standard"
          />
          </Grid>
        <Grid item xs={12}>
        <footer>
          <Link to="/cart">
            <div>
            <button type="button">Voltar</button>
            </div>
          </Link>
          <Link to="/confirm">
            <div>
            <button type="button">Pagamento</button>
            </div>
          </Link>
      </footer>
        </Grid>
      </Grid>
      </React.Fragment>
    </Container>
  )
}
export default AndressForm;