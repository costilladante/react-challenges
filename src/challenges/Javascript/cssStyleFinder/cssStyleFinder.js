/**
 * @param {string} property
 * @param {string} value
 * @returns {HTMLElement[]}
 */
export function getElementsByStyle(property, value) {
  throw new Error('getElementsByStyle is not implemented');
}

export const runner = () => {
  const div = document.createElement('div');

  div.style.color = 'rgb(255, 255, 255)';
  div.style.textAlign = 'center';

  document.body.appendChild(div);

  const elements = getElementsByStyle('color', 'rgb(255, 255, 255)');

  console.log(elements);
};
