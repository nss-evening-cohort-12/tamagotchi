import '../styles/main.scss';
import eat from './components/eat/eat';
import events from './components/events/events';
import play from './components/play/play';
import fight from './components/fight/fight';
import sleep from './components/sleep/sleep';

const init = () => {
  events.allEvents();
  eat.makeEatComponent();
  play.makeFunComponent();
  fight.makeFightComponent();
  sleep.makeSleepComponent();
};

init();
