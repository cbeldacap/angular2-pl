import { Angular2PlPage } from './app.po';

describe('angular2-pl App', () => {
  let page: Angular2PlPage;

  beforeEach(() => {
    page = new Angular2PlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
