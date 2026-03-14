const { test, expect } = require("@playwright/test");

test("handle auto-suggest dropdown", async ({ page }) => {
    // Navigate to the page
    await page.goto('https://demoqa.com/auto-complete');

    // Fill input field to trigger auto-suggest
    await page.fill('#autoCompleteSingleContainer input', 'R');

    //Wait for dropdown to appear
    await page.waitForSelector('[role="listbox"]');

    //Click on a suggestion
    await page.getByRole('option', { name: /Green/ }).click();
    /**
     * page.getByRole('option', ...) – Uses Playwright's accessibility locator to find an element with the role "option" (typically an item in a dropdown/list)
      { name: /Green/ } – Filters the search to only match options whose accessible name contains "Green" (the regex pattern /Green/ means "contains Green")
     */

    await page.waitForTimeout(3000);

    // Verify selection
    await expect(page.locator('#autoCompleteSingleContainer')).toContainText('Green');
});