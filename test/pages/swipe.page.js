class SwipePage {
  get swipeTab() {
    return $('//android.widget.TextView[@text="󰤼"]');
  }
  get webdriverLogo() {
    return $('//android.widget.ImageView[@content-desc="WebdriverIO logo"]');
  }
  get hidenText() {
    return $('//android.widget.TextView[@text="You found me!!!"]');
  }

  async openSwipeTab() {
    await this.swipeTab.click();
  }

  async swipeDown() {
    const { height } = await driver.getWindowRect();
    const startX = Math.floor(height * 0.5);
    const startY = Math.floor(height * 0.8);
    const endY = Math.floor(height * 0.2);

    await driver.touchPerform([
      {
        action: "press",
        options: { x: startX, y: startY },
      },
      {
        action: "wait",
        options: { ms: 500 },
      },
      {
        action: "moveTo",
        options: { x: startX, y: endY },
      },
      {
        action: "release",
      },
    ]);
  }
}

module.exports = new SwipePage();
