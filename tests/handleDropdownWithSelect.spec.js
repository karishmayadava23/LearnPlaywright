const { test, expect } = require('@playwright/test');

test("Handle Dropdown with Select tag", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Select tag ****

    //1. By Visible Text
    // await page.locator("#country").selectOption({ label: 'Japan' });

    //2. By Value Attribute
    //await page.locator("#country").selectOption("germany");
    // await page.locator("#country").selectOption({ value: "germany" });
    // await page.locator("#country").selectOption('Japan');

    //3. select by index
    //  await page.locator("#country").selectOption({ index: 5 });

    //4. Another way to select option by calling selectOption  from page fixture itself
    // await page.selectOption("#country", "Japan");

    //Assertions
    //Validate number of options present in the dropdown
    //1st Approach
    // const option = page.locator("#country option");
    // console.log(await option.count());
    // await expect(option).toHaveCount(10);

    //2nd Approach - We can store the option in array
    // const optionArray = page.$$("#country option");
    // console.log((await optionArray).length);
    // await expect((await optionArray).length).toBe(10);

    //Validate presesence of option in the dropdown

    //1st Approach
    // const optionData = await page.locator("#country").textContent(); //textContent returns the text present in provided locator in the form of String
    // console.log(optionData);
    // expect(optionData.includes("Japan")).toBeTruthy();

    //2nd Approach
    // const optionDataArray = await page.$$("#country option");
    // let isPresent = false;

    // for (const option of optionDataArray) {
    //     let optionValue = await option.textContent();
    //     if (optionValue.includes("Japan")) {
    //         isPresent = true;
    //         break;
    //     }
    // }
    // expect(isPresent).toBeTruthy();


    //Select the value from dropdown
    const optionDataArray = await page.$$("#country option");
    for (const option of optionDataArray) {
        let optionValue = (await option.textContent()).trim();
        if (optionValue.includes("Japan")) {
            await page.locator("#country").selectOption(optionValue);
            break;
        }
    }










    await page.waitForTimeout(4000);



});