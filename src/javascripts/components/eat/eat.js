import utils from '../../helpers/utils';

import './eat.scss';

let full = 100;

const makeEatComponent = () => {
  const domString = `
    <div class="eat">
      <h2>Eat</h2>
      <p>${full}</p>
      <div class="eat__buttons">
        <button id="eat-big">Add 10</button>
        <button id="eat-small">Sub 3</button>
      </div>
    </div>
  `;

  utils.printToDom('#eat', domString);
};

const fullCheck = () => {
  if (full > 100) full = 100;
  if (full < 0) full = 0;

  makeEatComponent();
};

const eatBig = () => {
  if (full >= 100) return;
  full += 10;
  fullCheck();
};

const eatSmall = () => {
  if (full <= 0) return;
  full -= 3;
  fullCheck();
};

export default { makeEatComponent, eatBig, eatSmall };
