import { SHOW_NAV, HIDE_NAV, TOGGLE_NAV } from '../actions/navAction';

export default function(state = {}, action) {
  switch (action.type) {
    case SHOW_NAV:
      return Object.assign({}, state, { show: true });
    case HIDE_NAV:
      return Object.assign({}, state, { show: false });
    case TOGGLE_NAV:
      return Object.assign({}, state, { show: !state.show });
    default:
      return state;
  }
}
