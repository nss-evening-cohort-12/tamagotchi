import utils from '../../helpers/utils';

let fun = 50;

const makeFunComponent = () => {
  const domString = `
    <div class="fun">
      <h2>Fun</h2>
      <p>${fun}</p>
      <div class="fun__buttons">
        <button id="fun-big">Add 50</button>
        <button id="fun-small">Add 2</button>
      </div>
    </div>
  `;

  utils.printToDom('#play', domString);
};

const funCheck = () => {
  if (fun > 100) fun = 100;
  if (fun < 0) fun = 0;

  makeFunComponent();
};

const funBig = () => {
  if (fun >= 100) return;
  fun += 50;
  funCheck();
};

const funSmall = () => {
  if (fun >= 100) return;
  fun += 2;
  funCheck();
};

export default { makeFunComponent, funBig, funSmall };
