const { test, expect } = require('@playwright/test');

test("Handle BootStrapDropdown", async ({ page }) => {
    await page.goto("https://getbootstrap.com/docs/5.3/components/dropdowns/");
    await page.locator("#bd-theme").click();

    await page.waitForTimeout(5000);







})
