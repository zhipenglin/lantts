import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import { compose } from 'recompose';
import className from 'classnames';
import { connect } from 'react-redux';
import logo from './logo.png';
import './style.css';

export default compose(
  withRouter,
  connect((state = {}) => {
    const { nav } = state;
    return { nav };
  })
)(
  class Nav extends PureComponent {
    render() {
      const { nav } = this.props;
      return (
        <div
          className={className({
            'c-nav': nav.show,
            'c-nav--hide': !nav.show
          })}
        >
          <div className="c-nav__inner">
            <div className="c-nav__left">
              <img className="c-nav__logo" src={logo} alt="logo" />
              <span className="c-nav__text">天水·蓝天</span>
            </div>
            <div className="c-nav__list">
              <NavLink
                className="c-nav__link"
                activeClassName="active"
                exact
                to="/"
              >
                首页
              </NavLink>
              <NavLink
                className="c-nav__link"
                activeClassName="active"
                to="/about"
              >
                关于我们
              </NavLink>
              <NavLink
                className="c-nav__link"
                activeClassName="active"
                to="/product"
              >
                产品中心
              </NavLink>
              <NavLink
                className="c-nav__link"
                activeClassName="active"
                to="/success"
              >
                成功案例
              </NavLink>
              <NavLink
                className="c-nav__link"
                activeClassName="active"
                to="/contact"
              >
                联系我们
              </NavLink>
            </div>
          </div>
        </div>
      );
    }
  }
);
