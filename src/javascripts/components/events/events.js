import eat from '../eat/eat';
import play from '../play/play';
import fight from '../fight/fight';
import sleep from '../sleep/sleep';

const eatEvents = () => {
  $('#eat').on('click', '#eat-big', eat.eatBig);
  $('#eat').on('click', '#eat-small', eat.eatSmall);
};

const playEvents = () => {
  $('#play').on('click', '#fun-big', play.funBig);
  $('#play').on('click', '#fun-small', play.funSmall);
};

const fightEvents = () => {
  $('#fight').on('click', '#fight-add', fight.fightAdd);
  $('#fight').on('click', '#fight-sub', fight.fightSub);
};

const sleepEvents = () => {
  $('#sleep').on('click', '#sleep-big', sleep.sleepBig);
  $('#sleep').on('click', '#sleep-small', sleep.sleepSmall);
};

const allEvents = () => {
  eatEvents();
  playEvents();
  fightEvents();
  sleepEvents();
};

export default { allEvents };
