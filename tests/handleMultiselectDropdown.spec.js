const { test, expect } = require('@playwright/test');

test("Handle Multiselect", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  //select multiple options from  multi select dropdown directly

  //1st way
  // const selector = page.locator("#animals");
  // await selector.selectOption(["Cat", "Deer", "Dog"]);

  //  2nd way
  //  await page.selectOption("#animals", ["Cat", "Deer", "Dog"]);


  // Assertions
  // 1. check number of options in the multiselect dropdown
  // const optionLocator = page.locator("#animals option");
  // // toHaveCount() only works with Locator objects, not plain numbers
  // await expect(optionLocator).toHaveCount(5);
  // expect(optionLocator).toBe(10);



  //2nd way - check number of options in dropdown using JS array
  //toBe() is for comparing primitive values (numbers, strings, booleans) using strict equality (===)
  // const options = await page.$$("#animals option");
  // const optionLength = options.length;
  // console.log(optionLength);
  //expect(optionLength).toBe(10);
  //await expect(optionLength).toHaveCount(10);




  //2. check the presence of value in the dropdown
  const textAnimals = await page.locator("#animals").textContent();
  console.log(textAnimals);
  //expect(textAnimals.includes("Karishma")).toBeTruthy();
  expect(textAnimals.includes("Dog")).toBeFalsy();




})