import metricIco from '../assets/metric_ico.svg';
import coinsIco from '../assets/coins_ico.svg';
import baselineIco from '../assets/baseline_ico.svg';
import clockIco from '../assets/clock_ico.svg';
import cupIco from '../assets/cup_ico.svg';
import textIco from '../assets/text_ico.svg';
import imageIco from '../assets/image_ico.svg';
import tabularIco from '../assets/tabular_ico.svg';
import React from 'react';
import textTypeImg from "../assets/text_type.svg";
import imageTypeImg from "../assets/image_type.svg";
import tabularTypeImg from "../assets/tabular_type.svg";
import {FlexRow, Svg} from "./containers";
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
import {Switch} from "@mui/material";
import {ThemeProvider} from "@mui/material/styles";
import customTheme from "./customTheme";
import userRightsUpdate from "../api/userRightsUpdate";

dayjs.extend(utc);

export const ELEMENTS_PER_PAGE = 3;
export const MINI_DESCRIPTION_LENGTH = 70;
export const API = process.env.REACT_APP_API;

export const ROOT_PAGE = '/';
export const CHALLENGES_PAGE = '/challenges';
export const CHALLENGE_PAGE = '/challenge';
export const CHALLENGE_CREATE_PAGE = '/challenge-create';
export const CHALLENGE_CREATE_HOW_TO_PAGE = '/challenge-create-how-to';
export const PROFILE_PAGE = '/profile';
export const EDIT_PROFILE_PAGE = '/profile/edit';
export const ADMIN_PANEL_PAGE = '/admin-panel';
export const POLICY_PRIVACY_PAGE = '/policy-privacy';
export const YOUR_CHALLENGES_PAGE = `/your-challenges`;
export const RESET_TOKEN_TIME = 86400000;
export const CHECK_TOKEN_TIME = 1500;

export const MENU_CHALLENGE_SECTIONS_NO_LOGIN = [
    'Overview',
    'How To',
    'Leaderboard',
    'Submissions',
];

export const MENU_CHALLENGE_SECTIONS_WITH_LOGIN = [
    'Overview',
    'How To',
    'Leaderboard',
    'Submissions',
    'My Submissions',
    'Add Submission',
];

export const MENU_CHALLENGE_SECTIONS_MY_CHALLENGE_OR_ADMIN = [
    'Overview',
    'How To',
    'Leaderboard',
    'Submissions',
    'My Submissions',
    'Add Submission',
    'Edit',
];

export const CHALLENGE_SECTIONS = {
    OVERVIEW: 0,
    HOW_TO: 1,
    LEADERBOARD: 2,
    SUBMISSIONS: 3,
    MY_SUBMISSIONS: 4,
    ADD_SUBMISSION: 5,
    EDIT: 6,
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

export const SET_PAGE = (pageNr, setPage) => {
    setPage(pageNr);
};

export const RENDER_WHEN = (when) => {
    return dayjs.utc(when).local().format('YYYY-MM-DD HH:mm');
};

export const RENDER_METRIC_VALUE = (value) => {
  if (value <= -999999999 ) return 'N/A';
  else return value.toFixed(4);
};

export const RENDER_PLACE = (place) => {
    if (place <= 3) {
        let color = '#D6AF36';
        if (place === 2) color = '#A7A7AD';
        else if (place === 3) color = '#A77044';
        return (
            <>
                <FlexRow alignmentX="start" gap="64px">
                    {place}<Svg width="16px" height="16px" backgroundColor={color} src={cupIco}/>
                </FlexRow>
            </>
        );
    }
    return place;
};

export const RENDER_ROLE = (username, roleName, roleValue, otherRoleValue, setRightsUpdateResult) => {
    return (
        <>
            <div className="roleTable">
                <ThemeProvider theme={customTheme}>
                    <Switch
                        checked={roleValue}
                        inputProps={{ 'aria-label': 'controlled' }}
                        onChange={(event) =>
                            userRightsUpdate(
                                {
                                    username: username,
                                    is_admin: roleName === 'admin' ? event.target.checked : otherRoleValue,
                                    is_author: roleName === 'author' ? event.target.checked : otherRoleValue,
                                },
                                setRightsUpdateResult
                            )
                    }
                    />
                </ThemeProvider>
            </div>
        </>
    );
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

export const getChallengeImage = (type) => {
    if (type === 'text') return textTypeImg;
    else if (type === 'image') return imageTypeImg;
    else return tabularTypeImg;
};

export const formatDateString = (dateString, inputFormat, outputFormat) => {
    return dayjs(dateString, inputFormat).format(outputFormat);
};

export const challengeDeadlineHasPassed = (deadline) => {
    return new Date() > new Date(deadline);
};

export const COMMON_METRICS = [
    "accuracy",
    "precision",
    "recall",
    "f1_score",
    "fbeta_score",
    "rmse",
    "mse",
    "mean_absolute_error",
    "mean_percentage_absolute_error",
    "median_absolute_error",
    "r2",
    "dcg",
    "ndcg",
    "bleu"
];
