import '../styles/main.scss';
import eat from './components/eat/eat';
import events from './components/events/events';

const init = () => {
  events.allEvents();
  eat.makeEatComponent();
};

init();
