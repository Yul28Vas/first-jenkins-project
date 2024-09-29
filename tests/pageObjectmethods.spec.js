import { test } from "@playwright/test";

test("Getting the title of the page", async ({ page }) => {
    // go to 
    await page.goto("https://practice.cydeo.com/");

    // get the title of the page
    let actualTitle = await page.title();

    console.log(actualTitle);

});


test("Getting the current URL of the page", async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
    
    let actualURL = page.url();

    console.log(actualURL);

});


test("Set the window size", async ({ page }) => {

    await page.setViewportSize({ width: 1850, height: 1000 });

    await page.goto("https://practice.cydeo.com/");

    //await page.waitForTimeout(3000);


});
