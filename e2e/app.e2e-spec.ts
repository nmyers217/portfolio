import { PortfolioPage } from './app.po';

describe('portfolio App', function() {
  let page: PortfolioPage;

  beforeEach(() => {
    page = new PortfolioPage();
  });

  it('should display message saying under construction.', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Under Construction!');
  });
});
