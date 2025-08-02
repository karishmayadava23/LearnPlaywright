const { expect, test } = require('@playwright/test');

test('locate multiple elements', async ({ page }) => {
    await page.goto("https://demoblaze.com/");
    const links = await page.$$('a');
    for (const link of links) {
        const linkText = await link.textContent();
        console.log(linkText);
    }
});

test('Find And Enter Product Name', async ({ page }) => {
    await page.goto("https://demoblaze.com/");
    const prodSelector = "//div[@id='tbodyid']//div//h4//a";
    await page.waitForSelector(prodSelector);
    const prodLocator = await page.$$(prodSelector);
    for (const prod of prodLocator) {
        const prodName = await prod.textContent();
        console.log(prodName);
    }
    await page.close();
});

