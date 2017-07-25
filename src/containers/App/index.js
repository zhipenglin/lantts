import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router';
import store, { history } from '../../store';
import Nav from '../Nav';
import Footer from '../Footer';
import page from '../../hoc/page';
import './style.css';

const Home = page(() => import('../Home')),
  About = page(() => import('../About')),
  Product = page(() => import('../Product')),
  Success = page(() => import('../Success')),
  Contact = page(() => import('../Contact')),
  NoMatch = page(() => import('../NoMatch'), {
    title: '404'
  });

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="app">
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/product" component={Product} />
              <Route path="/success" component={Success} />
              <Route path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
            <Footer />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}
