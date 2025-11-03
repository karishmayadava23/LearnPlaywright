const { expect, test } = require('@playwright/test');
import repl from 'repl';

test('AssertionsSoftAndHard', async ({ page }) => {
    await page.goto("https://letcode.in/edit");
    //await page.pause();

    //Hard Assertions
    // await expect(page).toHaveURL('https://letcode.in/edit');
    // await expect(page).toHaveURL('https://letcode.in/editor');

    // await expect(page.locator("#fullName")).toBeEditable();
    // await expect(page.locator('#getMe')).toHaveValue('ortonikc');

    // //Soft Assertions
    // await expect.soft(page).toHaveURL('https://letcode.in/editor');
    // await expect.soft(page.locator("#fullName")).toBeEditable();
    // await expect.soft(page.locator('#getMe')).toHaveValue('ortonikc');

    //Negating matchers -In general, we can expect the opposite to be true by adding a .not to the front of the matchers:
    // await expect.soft(page.locator('#getMe')).not.toHaveValue('ortonikc');
    // await expect(page.locator('#getMe')).not.toHaveValue('ortonikcll');

    // //Non-retrying assertions
    // expect.soft(10).toBeGreaterThan(10);
    // expect.soft(10).toBeGreaterThan(8);

    //Custom expect message
    await expect(page).toHaveURL('https://letcode.in/edit');
    // await expect(page, 'URL validation').toHaveURL('https://letcode.in/edit');









})
