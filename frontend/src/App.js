import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  return <Router>
    <Header />
    <main className="py-3">
      <Container>
        <Route component={HomeScreen} path='/' exact />
        <Route component={ProductDetailScreen} path='/product/:id' />
        <Route component={CartScreen} path='/cart/:id?' />
        <Route component={LoginScreen} path='/login' />
        <Route component={RegisterScreen} path='/register' />
        <Route component={ProfileScreen} path='/profile' />
      </Container>
    </main>
    <Footer />
  </Router>
}

export default App;
