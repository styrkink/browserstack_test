const DragPage = require('../pages/drag.page');

describe('Drag and drop testing', () => {
    it('Should drag and drop image"', async () => {
        await DragPage.openDragTab();
        const dragElement = await DragPage.dragAndDrop();
        const isDragElementDisplayed = await dragElement.isDisplayed();
        await expect(isDragElementDisplayed).toBe(false);
    });
});