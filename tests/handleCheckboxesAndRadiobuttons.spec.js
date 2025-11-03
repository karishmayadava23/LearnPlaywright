const { expect, test } = require('@playwright/test');

test("Handle checkboxes", async ({ page }) => {

    //open browser with AUT
    await page.goto('https://letcode.in/radio');

    //Handle Checkboxes

    //single checkbox
    const checkBoxes = await page.locator('//input[@type="checkbox"]');
    // await checkBoxes.check();
    // //validation and Actions

    // if (await checkBoxes.nth(0).isChecked()) {
    //     await checkBoxes.nth(0).uncheck();

    // }
    // await expect(checkBoxes.nth(0)).not.toBeChecked();


    // // Second checkbox
    // await checkBoxes.nth(1).check();
    // await expect(checkBoxes.nth(1)).toBeChecked();
    // await page.waitForTimeout(5000);

    //   const checkBoxLength = await checkBoxes.count();
    // await checkBoxes.first().check();
    // await checkBoxes.last().check();
    // await checkBoxes.nth(1).check();
    //await checkBoxes.nth(checkBoxLength - 1).check();

    // await page.waitForTimeout(5000);

    //Handle Multiple Checkboxes
    // console.log(await checkBoxes.count())  //2

    // for (let i = 0; i < await checkBoxes.count(); i++) {
    //     if (!(checkBoxes.nth(i).isChecked())) {
    //         await checkBoxes.nth(i).check();
    //     }

    //     await expect(checkBoxes.nth(i).isChecked()).toBeTruthy();
    //     //  await page.waitForTimeout(5000);

    // }
    // await page.waitForTimeout(5000);

    //Handle Radiobuttons
    const findTheBugRadiobutton = await page.locator('#nobug');
    await findTheBugRadiobutton.check();
    await expect(findTheBugRadiobutton.isChecked()).toBeTruthy();
    //   await expect(await page.locator('#one').isChecked()).toBeFalsy();
    await expect(findTheBugRadiobutton.isChecked()).toBeFalsy();
    await page.waitForTimeout(5000);



})