import React, { PureComponent } from 'react';
import Loadable from 'react-loadable';
import { connect } from 'react-redux';
import action from '../actions/pageAction';
import { toggleNav } from '../actions/navAction';
import fetch from '../util/fetch';
import setTittle from '../util/setTittle';

const originTitle = document.title;

export default function(Component, options) {
  options = Object.assign(
    {
      loading: () => null,
      url: '',
      data: {},
      nav: true,
      title: originTitle
    },
    options
  );
  const LoadableComponent = Loadable({
    loading: options.loading,
    loader: Component,
    timeout: 10000
  });

  return connect((state = {}) => {
    const { page, nav } = state;
    return { page, nav };
  })(
    class Page extends PureComponent {
      componentWillMount() {
        const { dispatch, location, nav } = this.props;
        setTittle(options.title);

        if (options.url) {
          let search = fetch.stringify(
            Object.assign({}, fetch.parse(location.search), options.data)
          );
          dispatch(
            action.fetchData(`${options.url}${search ? '?' + search : ''}`)
          );
        }

        if (options.nav !== nav.show) {
          dispatch(toggleNav());
        }
      }

      render() {
        const { page } = this.props;
        return (
          <div className="app__page">
            <LoadableComponent {...this.props} page={page} />
          </div>
        );
      }
    }
  );
}
