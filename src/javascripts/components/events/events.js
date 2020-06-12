import eat from '../eat/eat';
import play from '../play/play';

const eatEvents = () => {
  $('#eat').on('click', '#eat-big', eat.eatBig);
  $('#eat').on('click', '#eat-small', eat.eatSmall);
};

const playEvents = () => {
  $('#play').on('click', '#fun-big', play.funBig);
  $('#play').on('click', '#fun-small', play.funSmall);
};

const allEvents = () => {
  eatEvents();
  playEvents();
};

export default { allEvents };
