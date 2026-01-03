const { test, expect } = require('@playwright/test');

test("HandleSelectorTagDropdown", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //1. Multiple ways to select the options from the dropdown 
    // await page.locator("#country").selectOption({ label: 'India' });// Most Popular Way to select using lable/visible text
    // await page.locator("#country").selectOption('India');// Visible text
    // await page.locator("#country").selectOption({ value: 'uk' });// By Value 
    // await page.locator("#country").selectOption({ index: 1 }); //By Index
    //another way for writing code/approach 
    //  await page.selectOption("#country", 'India'); //by text

    //2. Assertions

    //1. check number of options in dropdown 
    // Approach 1
    //await page.locator('#country')  //this will return element number
    // const options = await page.locator('#country option') //this will return all options
    // console.log(options);
    // await expect(options).toHaveCount(10);  //expect is assertion function

    // Approach 2
    // const options = await page.$$("#country option");
    // console.log("Number of options:", options.length);
    // await expect(options.length).toBe(10);

    //2. check presence of value in the dropdown 
    //Approach 1
    // const content = await page.locator("#country").textContent(); //it will return all options in the form of string
    // console.log(content);
    //  await expect(content.includes("India")).toBeTruthy();
    //negative testing
    //  await expect(content.includes("Xyz")).toBeTruthy();

    //Approach 2 - Using Looping - Sometimes selector tag is not present such that in bootstrap dropdown we use this approach
    // const options = await page.$$("#country option");
    // let status = false;
    // for (const option of options) {  //option is element and to get text we will use textContent
    //     // console.log(option); //first element
    //     //    console.log(await option.textContent()); //to get text of element we call textContent()
    //     let value = await option.textContent();
    //     if (value.includes("France")) {
    //         status = true;
    //         break
    //     }
    // }
    // await expect(status).toBeTruthy();


    // Use looping statement to select value as sometimes we do not have selector tag
    //It is action
    const options = await page.$$("#country option");
    for (const option of options) {
        let value = await option.textContent();
        if (value.includes("France")) {
            await page.selectOption("#country", option);
            break
        }
    }

    // Get the selected visible text (what the user sees)
    //  const selectedValue = await page.locator("#country").inputValue();// by Value which will be france
    const selectedValue = (await page.locator("#country option:checked").textContent()).trim(); //Byvisible text
    await expect(selectedValue).toBe("France");
    await page.waitForTimeout(5000);

});