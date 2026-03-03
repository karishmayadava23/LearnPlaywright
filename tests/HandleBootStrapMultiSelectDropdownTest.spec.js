const { test, expect } = require("@playwright/test");

test("Handle Multiselect Bootstrap Dropdown", async ({ page }) => {

    await page.goto("https://davidstutz.github.io/bootstrap-multiselect/");
    const button = page.getByTitle("Option 2, Option 3").first();
    await button.click();

    // const textOption = await page.$$("div .multiselect-container.show button");
    const textOption = await page.$$("div .multiselect-container.show button span");

    //select
    // for (const option of textOption) {
    //     const value = await option.textContent();

    //     if (value.includes("Option 5") || value.includes("Option 6")) {
    //         await option.click()
    //     }
    // }



    // //deselect
    for (const option of textOption) {
        const value = await option.textContent();

        if (value.includes("Option 3") || value.includes("Option 2")) {
            await option.click()
        }
    }

    await page.waitForTimeout(5000);





})