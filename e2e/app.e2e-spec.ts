import { WorldTravelerPage } from './app.po';

describe('world-traveler App', function() {
  let page: WorldTravelerPage;

  beforeEach(() => {
    page = new WorldTravelerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
