import eat from '../eat/eat';

const eatEvents = () => {
  $('#eat').on('click', '#eat-big', eat.eatBig);
  $('#eat').on('click', '#eat-small', eat.eatSmall);
};

const allEvents = () => {
  eatEvents();
};

export default { allEvents };
