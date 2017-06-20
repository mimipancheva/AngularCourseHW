import { ComponentsDatabindingDeepDivePage } from './app.po';

describe('components-databinding-deep-dive App', () => {
  let page: ComponentsDatabindingDeepDivePage;

  beforeEach(() => {
    page = new ComponentsDatabindingDeepDivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
