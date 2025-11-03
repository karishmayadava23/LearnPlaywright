const { test, expect } = require('@playwright/test');
const { type } = require('os');

test('Handle Input Text Box', async ({ page }) => {

    await page.goto('https://letcode.in/edit');
    const firstName = await page.locator('#fullName');
    //Validations

    await expect(firstName, 'visible validation').toBeVisible();
    await expect(firstName, 'empty validation').toBeEmpty();
    await expect(firstName, 'editable validation').toBeEditable();

    // action 
    await firstName.fill('Karishma');

    // Another Input box

    const appendTextBoxSelector = '#join';
    const value = await page.inputValue(appendTextBoxSelector);
    console.log(value);
    if (value.trim() === '') {
        await page.locator(appendTextBoxSelector).fill('Learn');

    } else {
        await page.locator(appendTextBoxSelector).clear();
        await page.fill(appendTextBoxSelector, 'Learn New');
    }
    await page.waitForTimeout(5000);
});
