import { Ng2CropperjsPage } from './app.po';

describe('ng2-cropperjs App', function() {
  let page: Ng2CropperjsPage;

  beforeEach(() => {
    page = new Ng2CropperjsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
