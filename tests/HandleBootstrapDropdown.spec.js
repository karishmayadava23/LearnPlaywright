const { test, expect } = require('@playwright/test');

test("Handle BootStrapDropdown", async ({ page }) => {
    await page.goto("https://getbootstrap.com/docs/5.3/components/dropdowns/");
    await page.locator("#bd-theme").click();
    // const themeOption = await page.locator("ul .dropdown-menu.show li button");
    //expect(themeOption).toHaveCount(3);
    //   await page.waitForTimeout(5000);


    //by array
    const themeOption = await page.$$("ul .dropdown-menu.show li button");
    const optionLength = themeOption.length;
    expect(optionLength).toBe(3);


    //select the option
    for (let option of themeOption) {
        console.log(await option.textContent());
        const text = await option.textContent();
        if (text.includes("Dark")) {
            await option.click();

        }

        await page.waitForTimeout(5000);




    }







})
