import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss'
import './index.scss';
import Homepage from 'routes/home/home'

import { Header } from "components/header/header";
import { Footer } from "components/footer/footer";
import Category from 'routes/category/category'
import { ProductDetail } from 'routes/product-detail/product-detail'
import { Thanhtoan } from 'routes/thanhtoan/thanhtoan'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { RootReducer } from 'redux/reducer'

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

const store = createStore(
  RootReducer
)
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Header />
          
          <Route path="/" exact component={Thanhtoan} />
          <Route path="/category" exact component={Category} />
          <Route path="/product-detail" exact component={ProductDetail} />
          {/* <Route path="/thanhtoan" exact component={Thanhtoan} /> */}

          <Footer />
          
        </div>
      </Router>
    </Provider>
  );
}

export default App;
