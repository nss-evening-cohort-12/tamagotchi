import utils from '../../helpers/utils';

import './progress.scss';

const progressBarComponent = (avg) => {
  const domString = `
    <progress class="progress-bar" max="100" value="${avg}"></progress>
  `;

  utils.printToDom('#progress', domString);
};

export default { progressBarComponent };
