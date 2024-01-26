import metricIco from '../assets/metric_ico.svg';
import coinsIco from '../assets/coins_ico.svg';
import baselineIco from '../assets/baseline_ico.svg';
import clockIco from '../assets/clock_ico.svg';
import cupIco from '../assets/cup_ico.svg';
import textIco from '../assets/text_ico.svg';
import imageIco from '../assets/image_ico.svg';
import tabularIco from '../assets/tabular_ico.svg';
import React from 'react';

const ELEMENTS_PER_PAGE = 10;
const MINI_DESCRIPTION_LENGTH = 70;
const API = process.env.REACT_APP_API;
const ROOT_PAGE = '/';
const CHALLENGES_PAGE = '/challenges';
const CHALLENGE_PAGE = '/challenge';
const CHALLENGE_CREATE_PAGE = '/challenge-create';
const PROFILE_PAGE = '/profile';
const POLICY_PRIVACY_PAGE = '/policy-privacy';
const POLICY_PRIVACY_LOGIN_PAGE = `${POLICY_PRIVACY_PAGE}/login`;
const POLICY_PRIVACY_REGISTER_PAGE = `${POLICY_PRIVACY_PAGE}/register`;
const CSI_LINK = 'https://csi.amu.edu.pl/';
const ROOT_URL = window.location.origin;
const LOGIN_REQUIRED_PAGES = ['myentries', 'submit'];

const MENU_CHALLENGE_SECTIONS_NO_LOGIN = [
  'Leaderboard',
  'All entries',
  'Readme',
  'How to',
  'My entries',
  'Submit',
];
const MENU_CHALLENGE_SECTIONS_WITH_LOGIN = [
  'Leaderboard',
  'All entries',
  'Readme',
  'How to',
  'My entries',
  // 'Submit',
];

const CHALLENGE_SECTIONS = {
  LEADERBOARD: 0,
  ALL_ENTRIES: 1,
  README: 2,
  HOW_TO: 3,
  MY_ENTRIES: 4,
  SUBMIT: 5,
};

const CHALLENGES_STATUS_FILTER = {
  BOTH: 0,
  CLOSED: 1,
  ACTIVE: 2,
};

const MINI_DESCRIPTION_RENDER = (description) => {
  if (description) {
    if (description.length <= MINI_DESCRIPTION_LENGTH) return description;
    return `${description.slice(0, MINI_DESCRIPTION_LENGTH)}...`;
  }
  return 'xxx';
};

const RENDER_ICO = (type) => {
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

const CALC_PAGES = (objects, n = 1) => {
  if (objects.length === 0) return 1;
  return Math.ceil(objects.length / (ELEMENTS_PER_PAGE * n));
};

const RENDER_DEADLINE_TIME = (time) => {
  if (time) {
    const date = time.slice(0, 10);
    const hour = time.slice(11, 16);
    return `${date} ${hour}`;
  }
  return '';
};
const NEXT_PAGE = (elements, pageNr, setPage) => {
  if (pageNr !== CALC_PAGES(elements ? elements : [])) {
    let newPage = pageNr + 1;
    setPage(newPage);
  }
};

const PREVIOUS_PAGE = (pageNr, setPage) => {
  if (pageNr !== 1) {
    let newPage = pageNr - 1;
    setPage(newPage);
  }
};

const RENDER_WHEN = (when) => {
  return `${when.slice(0, 10)} ${when.slice(11, 16)}`;
};

const RENDER_METRIC_VALUE = (value) => {
  if (value <= -999999999) return 'N/A';
  else return value;
};

const EVALUATIONS_FORMAT = (evaluate) => {
  if (Object.hasOwn(evaluate, 'score')) return evaluate.score.slice(0, 7);
  return evaluate.slice(0, 7);
};

const IS_MOBILE = () => {
  return document.body.clientWidth <= 1024;
};

const CHILDREN_WITH_PROPS = (propsChildren, props) =>
  React.Children.map(propsChildren, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, props);
    }
    return child;
  });

export {
  ELEMENTS_PER_PAGE,
  API,
  ROOT_PAGE,
  CHALLENGES_PAGE,
  CHALLENGE_PAGE,
  MINI_DESCRIPTION_LENGTH,
  CSI_LINK,
  POLICY_PRIVACY_PAGE,
  POLICY_PRIVACY_LOGIN_PAGE,
  POLICY_PRIVACY_REGISTER_PAGE,
  ROOT_URL,
  LOGIN_REQUIRED_PAGES,
  CHALLENGE_SECTIONS,
  MENU_CHALLENGE_SECTIONS_NO_LOGIN,
  MENU_CHALLENGE_SECTIONS_WITH_LOGIN,
  CHALLENGES_STATUS_FILTER,
  PROFILE_PAGE,
  CHALLENGE_CREATE_PAGE,
  MINI_DESCRIPTION_RENDER,
  RENDER_ICO,
  CALC_PAGES,
  RENDER_DEADLINE_TIME,
  RENDER_METRIC_VALUE,
  IS_MOBILE,
  RENDER_WHEN,
  EVALUATIONS_FORMAT,
  PREVIOUS_PAGE,
  NEXT_PAGE,
  CHILDREN_WITH_PROPS,
};
