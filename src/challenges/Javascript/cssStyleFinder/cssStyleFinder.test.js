import { getElementsByStyle } from './cssStyleFinder';

// Tests
describe('getElementsByStyle', () => {
  let root;

  beforeEach(() => {
    root = document.createElement('div');
    document.body.appendChild(root);
  });

  afterEach(() => {
    document.body.removeChild(root);
  });

  it('should return an empty array if no elements match the style', () => {
    const elements = getElementsByStyle('color', 'rgb(255, 255, 255)');

    expect(elements).toEqual([]);
  });

  it('should return an array of elements if elements match the style (color)', () => {
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');

    div1.style.color = 'rgb(255, 255, 255)';
    div2.style.color = 'rgb(255, 255, 255)';
    div3.style.color = 'rgb(255, 255, 255)';

    root.appendChild(div1);
    root.appendChild(div2);
    root.appendChild(div3);

    const elements = getElementsByStyle('color', 'rgb(255, 255, 255)');

    expect(elements).toEqual([div1, div2, div3]);
  });

  it('should not return elements that do not match the style', () => {
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');

    div1.style.color = 'rgb(255, 255, 255)';
    div2.style.color = 'rgb(255, 255, 255)';
    div3.style.color = 'rgb(255, 255, 255)';

    root.appendChild(div1);
    root.appendChild(div2);
    root.appendChild(div3);

    const elements = getElementsByStyle('color', 'rgb(0, 0, 0)');

    expect(elements).toEqual([]);
  });

  // text-align: center
  it('should return elements that match the style (text-align)', () => {
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');

    div1.style.textAlign = 'center';
    div2.style.textAlign = 'center';
    div3.style.textAlign = 'center';

    root.appendChild(div1);
    root.appendChild(div2);
    root.appendChild(div3);

    const elements = getElementsByStyle('text-align', 'center');

    expect(elements).toEqual([div1, div2, div3]);
  });

  // if parent has a style, child should inherit it
  it('should return elements that match the style from parent', () => {
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');

    div1.style.textAlign = 'center';
    div2.style.textAlign = 'center';
    div3.style.textAlign = 'center';

    root.appendChild(div1);
    div1.appendChild(div2);
    div2.appendChild(div3);

    const elements = getElementsByStyle('text-align', 'center');

    expect(elements).toEqual([div1, div2, div3]);
  });
});
