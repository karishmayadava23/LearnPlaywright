const { expect, test } = require('@playwright/test');

test('handle dropdown', async ({ page }) => {

    await page.goto('https://letcode.in/forms');
    //Action for dropdown
    const countryCodeDropdown = await page.locator('.select select').first();
    // //By Index
    // await countryCodeDropdown.selectOption({ index: 6 });
    // await page.waitForTimeout(2000);

    // //By Value
    // await countryCodeDropdown.selectOption({ value: '376' });
    // await page.waitForTimeout(2000);

    // const countryDropdown = await page.locator('.select select').last();

    // //By Label
    // await countryDropdown.selectOption({ label: 'India' });
    // await page.waitForTimeout(2000);
    // //By visible text
    // await countryDropdown.selectOption('Guyana');
    // await page.waitForTimeout(2000);

    //One more way to select option
    await page.selectOption('.select select:nth-of-type(2)', { label: 'India' });
    await page.waitForTimeout(2000);
});