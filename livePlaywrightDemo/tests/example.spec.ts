import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('Selector Test', async ({ page }) => {
  await page.goto('https://www.letskodeit.com/practice');
  await page.locator('#bmwradioFAIL').check();
  await page.waitForTimeout(8000);

  // await page.screenshot({ path: 'screenshots/screenshotFile.png', fullPage: true });

    await page.locator('#benzcheck').screenshot({ path: 'screenshots/screenshotFile2.png'});

  // await page.locator('#hondacheck').check();
  // await page.waitForSelector('#hondacheck', { state: 'hidden});
  await page.waitForLoadState('load');
  await page.waitForLoadState('domcontentloaded');
  await page.waitForLoadState('networkidle');
  

 

  await page.locator('#benzcheck').check()
  await page.getByRole('button', { name: 'Open Window'}).click();
 // await expect(page.getByRole('button', { name: 'Open Window'})).toBeVisible();
  // await page.locator('#bmwradio').check()
 
 // await page.getByRole('button', { name: 'Open Window'}).toBeVisible()

  // await expect(page.getByRole('button', { name: 'Open Window'})).toBeVisible();

  // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('test 4', async ({ page })=> {
  await page.goto('htttps://playwrite.dev/');
  // Expect a title to contain a substring

})

test('Checkbox Test', async ({ page })=> {
  await page.goto('https://www.letskodeit.com/practice');
  await page.locator('#bmwcheck').check();
  await page.locator('#hondacheck').check();
  await page.locator('#benzcheck').check();


})

test('Switch Window Test', async ({ page })=> {
  await page.goto('https://www.letskodeit.com/practice');

  const switchWindow = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'open window' }).click();
  const popup = await switchWindow;

await expect(popup).toHaveURL('https://www.letskodeit.com/courses'); 

})

test.only('New Tab Test', async ({ page })=> {

await page.goto('https://www.letskodeit.com/practice');

const newTab = page.waitForEvent('popup');
await page.locator('#opentab').click();
const popup = await newTab;

await expect(popup).toHaveURL('https://www.letskodeit.com/courses'); 
await popup.getByRole('textbox', { name: 'Search Course'}).fill('Course example')
})

test.only('Switch Tab and Windows', async ({ page })=> {

await page.goto('https://www.letskodeit.com/practice');

// let [newTab] = await Promise.all()([
//   page.waitForEvent('popup'),
//   await page.getByRole()
// ]
// )
// await page.getByRole('link', { name: 'Open Tab '}).click()

// newTab = page.waitForEvent('popup');
// await page.locator('#opentab').click();
// const popup = await newTab;

// await expect(popup).toHaveURL('https://www.letskodeit.com/courses'); 

})

test('Drop down', async ({ page })=> {

await page.goto('https://www.letskodeit.com/practice');

const dropDown = page.getByLabel('carselect');
await dropDown.selectOption({ label: 'BMW' });

})

test.only('Iframe example', async ({ page })=> {
  await page.goto('https://www.letskodeit.com/practice');

  // get inside the iframe
  const frame = page.frameLocator('iframe#courses-iframe');

  // locate the search input

  await frame.locator('input[name="course"]').fill('Playwright test');
  await page.screenshot({ path: 'screenshots/screenshotIframe.png', fullPage: true });

  // click the search button
  await frame.locator('button.find-course').click();
  await page.screenshot({ path: 'screenshots/screenshotIframe2.png', fullPage: true });


})

