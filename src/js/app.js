import Tooltip from './tooltip.js';

const form = document.querySelector('.form');
console.log(form.className);
const popoverButton = document.querySelector('.popover-button');

const tooltipsFactory = new Tooltip();

form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  if (document.querySelector('.tooltip')) {
    tooltipsFactory.removeTooltip();
  } else {
    tooltipsFactory.showTooltip(popoverButton);
  }
});
