import metricIco from '../assets/metric_ico.svg';
import coinsIco from '../assets/coins_ico.svg';
import baselineIco from '../assets/baseline_ico.svg';
import clockIco from '../assets/clock_ico.svg';
import cupIco from '../assets/cup_ico.svg';
import textIco from '../assets/text_ico.svg';
import imageIco from '../assets/image_ico.svg';
import tabularIco from '../assets/tabular_ico.svg';
import React from 'react';

export const ELEMENTS_PER_PAGE = 10;
export const MINI_DESCRIPTION_LENGTH = 70;
export const API = process.env.REACT_APP_API;

export const ROOT_PAGE = '/';
export const CHALLENGES_PAGE = '/challenges';
export const CHALLENGE_PAGE = '/challenge';
export const CHALLENGE_CREATE_PAGE = '/challenge-create';
export const CHALLENGE_CREATE_HOW_TO_PAGE = '/challenge-create-how-to';
export const PROFILE_PAGE = '/profile';
export const ADMIN_PANEL_PAGE = '/admin-panel';
export const POLICY_PRIVACY_PAGE = '/policy-privacy';
export const POLICY_PRIVACY_LOGIN_PAGE = `${POLICY_PRIVACY_PAGE}/login`;
export const POLICY_PRIVACY_REGISTER_PAGE = `${POLICY_PRIVACY_PAGE}/register`;
export const LOGIN_PAGE = `/login`;
export const REGISTER_PAGE = `/register`;

export const CSI_LINK = 'https://csi.amu.edu.pl/';
export const ROOT_URL = window.location.origin;
export const LOGIN_REQUIRED_PAGES = ['my-submissions', 'submit'];

export const RESET_TOKEN_TIME = 900000;
export const CHECK_TOKEN_TIME = 1500;

export const MENU_CHALLENGE_SECTIONS_NO_LOGIN = [
  'Leaderboard',
  'All submissions',
  'Readme',
  'How to',
];

export const MENU_CHALLENGE_SECTIONS_WITH_LOGIN = [
  'Leaderboard',
  'All submissions',
  'Readme',
  'How to',
  'My entries',
  'Submit',
];

export const MENU_CHALLENGE_SECTIONS_MY_CHALLENGE_OR_ADMIN = [
  'Leaderboard',
  'All submissions',
  'Readme',
  'How to',
  'My entries',
  'Submit',
  'Settings',
];

export const CHALLENGE_SECTIONS = {
  LEADERBOARD: 0,
  ALL_ENTRIES: 1,
  README: 2,
  HOW_TO: 3,
  MY_ENTRIES: 4,
  SUBMIT: 5,
  SETTINGS: 6,
};

export const CHALLENGES_STATUS_FILTER = {
  BOTH: 0,
  CLOSED: 1,
  ACTIVE: 2,
};

export const MINI_DESCRIPTION_RENDER = (description) => {
  if (description) {
    if (description.length <= MINI_DESCRIPTION_LENGTH) return description;
    return `${description.slice(0, MINI_DESCRIPTION_LENGTH)}...`;
  }
  return 'xxx';
};

export const RENDER_ICO = (type) => {
  switch (type) {
    case 'metric':
      return metricIco;
    case 'award':
      return coinsIco;
    case 'baseline':
      return baselineIco;
    case 'deadline':
      return clockIco;
    case 'bestScore':
      return cupIco;
    case 'text':
      return textIco;
    case 'image':
      return imageIco;
    case 'tabular':
      return tabularIco;
    default:
      return '';
  }
};

export const CALC_PAGES = (objects, n = 1) => {
  if (objects.length === 0) return 1;
  return Math.ceil(objects.length / (ELEMENTS_PER_PAGE * n));
};

export const RENDER_DEADLINE_TIME = (time) => {
  if (time) {
    const date = time.slice(0, 10);
    const hour = time.slice(11, 16);
    return `${date} ${hour}`;
  }
  return '';
};

export const NEXT_PAGE = (elements, pageNr, setPage) => {
  if (pageNr !== CALC_PAGES(elements ? elements : [])) {
    let newPage = pageNr + 1;
    setPage(newPage);
  }
};

export const PREVIOUS_PAGE = (pageNr, setPage) => {
  if (pageNr !== 1) {
    let newPage = pageNr - 1;
    setPage(newPage);
  }
};

export const RENDER_WHEN = (when) => {
  return `${when.slice(0, 10)} ${when.slice(11, 16)}`;
};

export const RENDER_METRIC_VALUE = (value) => {
  if (value <= -999999999) return 'N/A';
  else return value;
};

export const EVALUATIONS_FORMAT = (evaluate) => {
  if (Object.hasOwn(evaluate, 'score')) return evaluate.score.slice(0, 7);
  return evaluate.slice(0, 7);
};

export const IS_MOBILE = () => {
  return document.body.clientWidth <= 1024;
};

export const CHILDREN_WITH_PROPS = (propsChildren, props) =>
  React.Children.map(propsChildren, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, props);
    }
    return child;
  });

export const REDIRECT_TO_ROOT_PAGE = (navigate) => {
  if (window.location?.pathname) {
    const pageName = window.location.pathname.split(ROOT_PAGE).at(-1);
    if (pageName) {
      navigate(ROOT_PAGE);
    }
  }
};

export const USE_PREVIOUS = (value) => {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};
