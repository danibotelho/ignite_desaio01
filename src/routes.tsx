import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import AndressForm from './pages/Cadastro';
import ConfirmPay from './pages/Confirm&Pay';
import Finish from './pages/TelaFinal'

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/form" component={AndressForm} />
      <Route path="/confirm" component={ConfirmPay} />
      <Route path="/final" component={Finish} />
    </Switch>
  );
};

export default Routes;
