import eat from '../eat/eat';
import play from '../play/play';
import fight from '../fight/fight';
import sleep from '../sleep/sleep';
import progress from '../progress/progress';

const makeProgress = () => {
  const avg = (eat.getFull() + play.getFun() + fight.getStrength() + sleep.getEnergy()) / 4;
  progress.progressBarComponent(avg);
};

const eatEvents = () => {
  $('#eat').on('click', '#eat-big', () => {
    eat.eatBig();
    makeProgress();
  });
  $('#eat').on('click', '#eat-small', () => {
    eat.eatSmall();
    makeProgress();
  });
};

const playEvents = () => {
  $('#play').on('click', '#fun-big', () => {
    play.funBig();
    makeProgress();
  });
  $('#play').on('click', '#fun-small', () => {
    play.funSmall();
    makeProgress();
  });
};

const fightEvents = () => {
  $('#fight').on('click', '#fight-add', () => {
    fight.fightAdd();
    makeProgress();
  });
  $('#fight').on('click', '#fight-sub', () => {
    fight.fightSub();
    makeProgress();
  });
};

const sleepEvents = () => {
  $('#sleep').on('click', '#sleep-big', () => {
    sleep.sleepBig();
    makeProgress();
  });
  $('#sleep').on('click', '#sleep-small', () => {
    sleep.sleepSmall();
    makeProgress();
  });
};

const allEvents = () => {
  eatEvents();
  playEvents();
  fightEvents();
  sleepEvents();
};

export default { allEvents, makeProgress };
