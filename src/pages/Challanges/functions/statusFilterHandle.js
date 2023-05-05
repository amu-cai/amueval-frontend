import { CHALLENGES_STATUS_FILTER } from '../../../utils/globals';
import CHALLENGES_ACTION from '../model/ChallengesActionEnum';

const dateIsOlder = (newerDate, olderDate) => {
  if (newerDate.year > olderDate.year) return true;
  else if (newerDate.month > olderDate.month) return true;
  else if (newerDate.day > olderDate.day) return true;
  else return false;
};

const getDeadlineTime = (deadline) => {
  if (deadline) {
    return {
      year: deadline.slice(0, 10).split('-')[0],
      month: deadline.slice(0, 10).split('-')[1],
      day: deadline.slice(0, 10).split('-')[2],
    };
  }
};

const statusFilterHandle = (status, challenges, dispatch) => {
  let result = challenges;
  const date = new Date();
  const currentDate = {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDay(),
  };
  switch (status) {
    case CHALLENGES_STATUS_FILTER.CLOSED:
      result = challenges.filter((challenge) =>
        dateIsOlder(
          currentDate,
          challenge.deadline ? getDeadlineTime(challenge.deadline) : false
        )
      );
      break;
    case CHALLENGES_STATUS_FILTER.ACTIVE:
      result = challenges.filter(
        (challenge) =>
          !dateIsOlder(
            currentDate,
            challenge.deadline ? getDeadlineTime(challenge.deadline) : false
          )
      );
      break;
    default:
      result = challenges;
      break;
  }
  dispatch({
    type: CHALLENGES_ACTION.SET_CHALLENGES_FILTERED,
    payload: result,
  });
};

export default statusFilterHandle;
