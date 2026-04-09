import { test, expect} from '@playwright/test'
import {user} from '../UTILI/utility'
import {LoginPage} from '../PAGE/loginPage'

test("Login", async ({page})=>{
const login = new LoginPage(page);
await login.goto();
await login.login(user.username,user.password);
await expect(page).toHaveTitle('Swag Labs')
})