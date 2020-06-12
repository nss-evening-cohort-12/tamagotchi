import '../styles/main.scss';
import eat from './components/eat/eat';
import events from './components/events/events';
import play from './components/play/play';
import fight from './components/fight/fight';

const init = () => {
  events.allEvents();
  eat.makeEatComponent();
  play.makeFunComponent();
  fight.makeFightComponent();
};

init();
