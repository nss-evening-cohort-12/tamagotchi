import '../styles/main.scss';
import eat from './components/eat/eat';
import events from './components/events/events';
import play from './components/play/play';

const init = () => {
  events.allEvents();
  eat.makeEatComponent();
  play.makeFunComponent();
};

init();
