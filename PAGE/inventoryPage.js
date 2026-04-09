export class inventoryPage {
    constructor(page) {
        this.page = page;
        this.cartBtn = '#add-to-cart';
    }
    async addtocart() {
        await this.page.getByText('Sauce Labs Backpack').click();
        await this.page.click(this.cartBtn);
    }
}