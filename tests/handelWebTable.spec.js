const { test, expect } = require('@playwright/test');
const { count } = require('console');

test("Handle Web Table", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    // const table = await page.locator("#productTable");

    // // get total number of rows and cols
    // const cols = await table.locator("thead tr th");
    // console.log("number of cols", await cols.count());

    //  const rows = await table.locator("tbody tr");
    // console.log("number of rows", await rows.count());
    // //1.assertion
    // expect(await rows.count()).toBe(5);
    // expect(await cols.count()).toBe(4);

    // 2.Filter particular row based on the name and click on check box
    //select checkbox for Smartwatch
    const table = await page.locator("#productTable");
    const rows = await table.locator("tbody tr");

    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: 'Smartwatch'
    })  //it returns matched row
    await matchedRow.locator("input").check();


    //     //3.To select the multiple name checkbox , create reusable function and we can call that function
    //     //create async function outside test selectName is created
    //     // await selectName(rows, page, 'Tablet');
    //     // await selectName(rows, page, 'Smartphone');
    //     // await page.waitForTimeout(5000);

    //     // //4. Print all name details using loop
    //     // for (let i = 0; i < await rows.count(); i++) {
    //     //     const row = rows.nth(i);
    //     //     const tds = row.locator("td");  //capture the td of first row which is 0th index here and here we get 4 tds
    //     //     console.log(await tds.count());
    //     //     for (let j = 0; j < await tds.count() - 1; j++) {
    //     //         console.log("column data", await tds.nth(j).textContent());

    //     //     }
    //     // }

    //     //5. Using Pagination
    //     const PaginationSelector = await page.locator("#pagination li a");
    //     console.log("Number of pagination: ", await PaginationSelector.count());
    //     for (let p = 0; p < await PaginationSelector.count(); p++) {
    //         if (p > 0) {
    //             await PaginationSelector.nth(p).click();
    //             for (let i = 0; i < await rows.count(); i++) {
    //                 const row = rows.nth(i);
    //                 const tds = row.locator("td");  //capture the td of first row which is 0th index here and here we get 4 tds
    //                 console.log(await tds.count());
    //                 for (let j = 0; j < await tds.count() - 1; j++) {
    //                     console.log("column data", await tds.nth(j).textContent());

    //                 }
    //             }

    //         }

    //     }
    //     await page.waitForTimeout(5000);




})

// async function selectName(rows, page, name) {
//     const matchedRow = rows.filter({
//         has: page.locator('td'),
//         hasText: name
//     })  //it returns matched row
//     await matchedRow.locator("input").check();
//     await page.waitForTimeout(5000);

// }