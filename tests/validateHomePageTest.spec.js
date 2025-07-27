// We need to import modules to get package test for writing scripts/test and expect to add validation
const {test,expect} = require('@playwright/test');

// start writing our test with test block with 2 parameters first title of test and second param would be annonymous function
test('Validate Titel of Home Page', async ({page})=>{
    const url = 'https://demoblaze.com/index.html';

    await page.goto(url);
   
   /**below command is optional just to see the actual page title */
    const actualPageTitle = await page.title();
    console.log(`Page title is ${actualPageTitle}`);

    await expect(page).toHaveTitle('STORE');
    await expect(page).toHaveURL(url);
    await page.close();
});