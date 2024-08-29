const SwipePage = require('../pages/swipe.page');

describe('Swipes testing', () => {
    it('Should display webdriver logo and text "You found me"', async () => {
        await SwipePage.openSwipeTab();
        await SwipePage.swipeDown();
        await expect(SwipePage.webdriverLogo).toBeDisplayed();
        await expect(SwipePage.hidenText).toBeDisplayed();
        await expect(SwipePage.hidenText).toHaveTextContaining('You found me!!!');
    });
});