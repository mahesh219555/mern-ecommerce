import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProductScreen from './screens/ProductScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderDetailsScreen from './screens/OrderDetailsScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/admin/user/:id/edit" component={UserEditScreen} />
          <Route path="/admin/userlist" component={UserListScreen} />
          <Route path="/order/:id" component={OrderDetailsScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/" component={HomeScreen} exact />
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
