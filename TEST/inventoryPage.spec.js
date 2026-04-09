import {test,expect} from '@playwright/test'
import { user } from '../UTILI/utility'
import { LoginPage } from '../PAGE/loginPage';
import {inventoryPage} from '../PAGE/inventoryPage'

test('addtocart', async({page})=>{
    const login = new LoginPage(page);
    const invent = new inventoryPage(page);
    await login.goto();
    await login.login(user.username,user.password);
    await expect(page).toHaveURL(/inventory/);
    await invent.addtocart();
});