import { test, expect } from '@playwright/test'
import { user } from '../UTILI/utility';
import { LoginPage } from '../PAGE/loginPage';
import { inventoryPage } from '../PAGE/inventoryPage';
import { checkoutPage } from '../PAGE/checkoutPage';

test('CheckoutCart', async ({ page }) => {
    const login = new LoginPage(page);
    const invent = new inventoryPage(page);
    const checkout = new checkoutPage(page);

    await login.goto();
    await login.login(user.username, user.password);

    await invent.addtocart();
    await checkout.checkout();
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
    await page.waitForTimeout(2000)
    await page.close();

})
