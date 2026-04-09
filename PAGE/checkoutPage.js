export class checkoutPage {
    constructor(page) {
        this.page = page;
        this.cart = '.shopping_cart_badge';
    }
    async checkout() {
        await this.page.click(this.cart);
        await this.page.getByText('Remove').click();
        
    }
}