export const SHOW_NAV = 'SHOW_NAV',
  HIDE_NAV = 'HIDE_NAV',
  TOGGLE_NAV = 'TOGGLE_NAV';

export function showNav() {
  return {
    type: SHOW_NAV
  };
}

export function hideNav() {
  return {
    type: HIDE_NAV
  };
}

export function toggleNav() {
  return {
    type: TOGGLE_NAV
  };
}
