import { CHALLENGES_STATUS_FILTER } from '../../utils/globals';

const dateIsOlder = (newerDate, olderDate) => {
  console.log(newerDate);
  console.log(olderDate);
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

const statusFilter = (
  status,
  challengesAll,
  challengesToRender,
  setChallenges
) => {
  let result = challengesAll;
  const date = new Date();
  const currentDate = {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDay(),
  };
  switch (status) {
    case CHALLENGES_STATUS_FILTER.CLOSED:
      result = challengesAll.filter((challenge) =>
        dateIsOlder(
          currentDate,
          challenge.deadline ? getDeadlineTime(challenge.deadline) : false
        )
      );
      break;
    case CHALLENGES_STATUS_FILTER.ACTIVE:
      result = challengesAll.filter(
        (challenge) =>
          !dateIsOlder(
            currentDate,
            challenge.deadline ? getDeadlineTime(challenge.deadline) : false
          )
      );
      break;
    default:
      result = challengesAll;
      break;
  }
  //   result = result.filter((elem) => {
  //     return !challengesToRender.includes(elem);
  //   });
  setChallenges(result);
};

export default statusFilter;
