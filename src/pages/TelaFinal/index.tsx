import * as React from 'react';


import { Link } from 'react-router-dom';

import { useCart } from "../../hooks/useCart";
import { formatPrice } from "../../util/format";
import { Container, ProductTable, Total } from "../Confirm&Pay/styles";

const Finish =(): JSX.Element => {
  
  return (
    
      <Container>
        <h1> Pedido Realizado com Sucesso </h1>


        <footer>
          <Link to="/confirm">
            <div>
            <button type="button">Voltar</button>
            </div>
          </Link>
      </footer>
      </Container>

      )
}
   
export default Finish;

