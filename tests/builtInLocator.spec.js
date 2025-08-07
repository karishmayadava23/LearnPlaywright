const { expect, test } = require('@playwright/test');


test('BuiltIn-ByRoleTesting', async ({ page, context }) => {
    await context.clearCookies();
    await page.goto('https://the-internet.herokuapp.com/');
    const textLocator = await page.getByRole('link', { name: 'A/B Testing' }).click();
    const text = await page.locator('.example h3').textContent();
    console.log('🧪 A/B Test Heading:', text?.trim());
    await expect(text).toEqual('A/B Test Variation 1');


});

test('BuiltIn-ByTextTesting', async ({ page, context }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    const textLocator = await page.getByRole('link', { name: 'Add/Remove Elements' }).click();
    const footerText = page.getByText('Powered by');
    await expect(footerText).toBeVisible();


});


test('BuiltIn-AltTextTesting', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/');
    const siteLogo = await page.getByAltText('Fork me on GitHub');
    await expect(siteLogo).toBeVisible();

});

test('BuiltIn-PlaceHolderTesting', async ({ page }) => {

    await page.goto('https://demo.playwright.dev/todomvc');
    const textLocator = await page.getByPlaceholder('What needs to be done?');
    await textLocator.fill("Testing");

});

test('BuiltIn-ByLabelTesting', async ({ page, context }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.getByLabel('Username').fill("Testing")


});


test('BuiltIn-ByTitleTesting', async ({ page, context }) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    await page.getByTitle('React • TodoMVC').isVisible();


});



