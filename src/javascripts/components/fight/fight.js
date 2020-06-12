import utils from '../../helpers/utils';

let strength = 100;

const makeFightComponent = () => {
  const domString = `
    <div class="fight">
      <h2>Fight</h2>
      <p>${strength}</p>
      <div class="fight__buttons">
        <button id="fight-add">Add 1</button>
        <button id="fight-sub">Sub 10</button>
      </div>
    </div>
  `;

  utils.printToDom('#fight', domString);
};

const strengthCheck = () => {
  if (strength > 100) strength = 100;
  if (strength < 0) strength = 0;

  makeFightComponent();
};

const fightAdd = () => {
  if (strength >= 100) return;
  strength += 1;
  strengthCheck();
};

const fightSub = () => {
  if (strength <= 0) return;
  strength -= 10;
  strengthCheck();
};

export default { makeFightComponent, fightAdd, fightSub };
