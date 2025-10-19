const { test, expect } = require('@playwright/test')

test('AssertionTest', async ({ page }) => {


  //open app url
  // await page.goto("https://demoblaze.com/");

  //click on Home link
  // await page.getByText('Home').click();
  // console.log("Home Link Is Clicked");

  //1. await expect(page).toHaveURL() => Page has a URL
  //exact URL match
  // await expect(page).toHaveURL("https://demoblaze.com/index.html");

  //Partial URL Match with Regex - Sometimes the URL may contain dynamic values (e.g., session IDs, query params). In that case, use regex or substring match:
  //  await expect(page).toHaveURL(/.*index.html/);

  // This checks that the URL contains index.html, ignoring other parts.

  //Negative Assertion- Confirms that the page is NOT redirected to that URL
  //await expect(page).not.toHaveURL('https://demoblaze.com/#category=phone');
  //await expect(page).not.toHaveURL('https://demoblaze.com/index.html');

  //2.  await expect(page).toHaveTitle() - Page has Title
  // await expect(page).toHaveTitle("STORED");

  //3. await expect(locator).toBeVisible()	- Element is visible
  //const logoElement = await page.locator('#nava');
  // const logoElement = await page.locator('.navbar-brand');
  // await expect(logoElement).toBeVisible();

  // 4. await expect(locator).toBeEnabled() - Element is enabled
  //await expect(locator).toBeDisabled() - Element is disabled
  //  await page.locator("//a[contains(text(),'Log in')]").click();
  //await expect(page.locator('#loginusername')).toBeEnabled();
  // await expect(page.locator('#loginusername')).toBeDisabled();

  // 5. await expect(locator).toBeChecked
  //checkbox
  // await page.goto("https://letcode.in/radio");
  // const checkbox1 = page.locator('.card-content .checkbox').nth(0);
  // await expect(checkbox1).toBeChecked();

  //radiobutton
  // const radiobuttonnotfoo = page.locator('#notfoo');
  // const radiobuttonfoo = page.locator('#foo');
  // await expect(radiobuttonnotfoo).toBeChecked();
  // await expect(radiobuttonfoo).toBeChecked();




});