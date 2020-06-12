import utils from '../../helpers/utils';

import './sleep.scss';

let energy = 50;

const makeSleepComponent = () => {
  const domString = `
    <div class="sleep">
      <h2>Sleep</h2>
      <p>${energy}</p>
      <div class="sleep__buttons">
        <button id="sleep-small">Add 50</button>
        <button id="sleep-big">Add 60</button>
      </div>
    </div>
  `;

  utils.printToDom('#sleep', domString);
};

const energyCheck = () => {
  if (energy > 100) energy = 100;

  makeSleepComponent();
};

const sleepBig = () => {
  if (energy >= 100) return;
  energy += 60;
  energyCheck();
};

const sleepSmall = () => {
  if (energy >= 100) return;
  energy += 50;
  energyCheck();
};

export default { makeSleepComponent, sleepBig, sleepSmall };
