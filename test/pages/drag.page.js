class DragPage {
    get dragImgs() {
        return [
            this.l1DragImg,
            this.l2DragImg,
            this.l3DragImg,
            this.c1DragImg,
            this.c2DragImg,
            this.c3DragImg,
            this.r1DragImg,
            this.r2DragImg,
            this.r3DragImg
        ];
    }

    get dropImgs() {
        return [
            this.l1DropImg,
            this.l2DropImg,
            this.l3DropImg,
            this.c1DropImg,
            this.c2DropImg,
            this.c3DropImg,
            this.r1DropImg,
            this.r2DropImg,
            this.r3DropImg
        ];
    }

    get dragTab() {
        return $('//android.widget.TextView[@text="󰇛"]');
    }

    get l1DragImg() {
        return $('//android.view.ViewGroup[@content-desc="drag-l1"]/android.widget.ImageView');
    }

    get l2DragImg() {
        return $('//android.view.ViewGroup[@content-desc="drag-l2"]/android.widget.ImageView');
    }

    get l3DragImg() {
        return $('//android.view.ViewGroup[@content-desc="drag-l3"]/android.widget.ImageView');
    }

    get c1DragImg() {
        return $('//android.view.ViewGroup[@content-desc="drag-c1"]/android.widget.ImageView');
    }

    get c2DragImg() {
        return $('//android.view.ViewGroup[@content-desc="drag-c2"]/android.widget.ImageView');
    }

    get c3DragImg() {
        return $('//android.view.ViewGroup[@content-desc="drag-c3"]/android.widget.ImageView');
    }

    get r1DragImg() {
        return $('//android.view.ViewGroup[@content-desc="drag-r1"]/android.widget.ImageView');
    }

    get r2DragImg() {
        return $('//android.view.ViewGroup[@content-desc="drag-r2"]/android.widget.ImageView');
    }

    get r3DragImg() {
        return $('//android.view.ViewGroup[@content-desc="drag-r3"]/android.widget.ImageView');
    }

    get l1DropImg() {
        return $('//android.view.ViewGroup[@content-desc="drop-l1"]/android.view.ViewGroup');
    }

    get l2DropImg() {
        return $('//android.view.ViewGroup[@content-desc="drop-l2"]/android.view.ViewGroup');
    }
    
    get l3DropImg() {
        return $('//android.view.ViewGroup[@content-desc="drop-l3"]/android.view.ViewGroup');
    }

    get c1DropImg() {
        return $('//android.view.ViewGroup[@content-desc="drop-c1"]/android.view.ViewGroup');
    }

    get c2DropImg() {
        return $('//android.view.ViewGroup[@content-desc="drop-c2"]/android.view.ViewGroup');
    }

    get c3DropImg() {
        return $('//android.view.ViewGroup[@content-desc="drop-c3"]/android.view.ViewGroup');
    }

    get r1DropImg() {
        return $('//android.view.ViewGroup[@content-desc="drop-r1"]/android.view.ViewGroup');
    }

    get r2DropImg() {
        return $('//android.view.ViewGroup[@content-desc="drop-r2"]/android.view.ViewGroup');
    }

    get r3DropImg() {
        return $('//android.view.ViewGroup[@content-desc="drop-r3"]/android.view.ViewGroup');
    }

    async openDragTab() {
        await this.dragTab.click();
    }

    async dragAndDrop() {
        const randomIndex = Math.floor(Math.random() * this.dragImgs.length);
        const dragElement = await (this.dragImgs[randomIndex]);
        const dropElement = await (this.dropImgs[randomIndex]);
        const dragElementLocation = await dragElement.getLocation();
        const dropElementLocation = await dropElement.getLocation();

        await driver.touchPerform([
            {
              action: "press",
              options: { x: dragElementLocation.x + 50, y: dragElementLocation.y + 50 },
            },
            {
              action: "wait",
              options: { ms: 500 },
            },
            {
              action: "moveTo",
              options: { x: dropElementLocation.x + 50, y: dropElementLocation.y + 50 },
            },
            {
              action: "release",
            },
          ]);
        return dragElement;
    }
}

module.exports = new DragPage();
