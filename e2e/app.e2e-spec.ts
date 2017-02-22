import { OrahiDashBoardPage } from './app.po';

describe('orahi-dash-board App', () => {
  let page: OrahiDashBoardPage;

  beforeEach(() => {
    page = new OrahiDashBoardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
