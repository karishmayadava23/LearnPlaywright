import { test, expect } from '@playwright/test';

test('LocateElement', async ({ page }) => {
    await page.goto("https://demoblaze.com/");

    //click on login button 
    await page.locator('id=login2').click(); //one way
    //page.click('id=login2'); // another way 

    //Enter user details
    await page.locator('#loginusername').fill('KY');  // we can use type aslo in place of fill
    await page.type('input#loginpassword', 'pass123');
    await page.click("//button[contains(text(),'Log in')]");

    //Validate that logout button is visible or not
    const logoutSelector = page.locator("//a[contains(text(),'Log out')]");
    await expect((logoutSelector)).toBeVisible();
    await page.close();
});