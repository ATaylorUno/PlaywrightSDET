import {test, expect} from "@playwright/test";
test.describe('Home', () => {
  test('Open HomePage and Verify Title', async ({ page }) => {
    // open URL
    await page.goto("https://practice.sdetunicorns.com");

    // verify title
    await expect(page).toHaveTitle("Practice E-Commerce Site – SDET Unicorns");
  }); 

   test('Open About and Verify Title', async ({ page }) => {
    // open URL
    await page.goto("https://practice.sdetunicorns.com/about/");

    // verify title
    await expect(page).toHaveTitle("About – Practice E-Commerce Site");
  });

  test('Click get started button w/ CSS', async ({ page }) => {
    // open URL
    await page.goto("https://practice.sdetunicorns.com");

    // click button
    await page.locator('#get-started').click()

    // verify title is now #get-started
    await expect(page).toHaveURL(/.*#get-started/)
  });

  test('Check page for text - ', async ({ page }) => {
    // open URL
    await page.goto("https://practice.sdetunicorns.com");

    // find the text locator
    const headingText = await page.locator('text=Think different. Make different.')

    // verify heading text is visible
    await expect(headingText).toBeVisible()
  });

  test('Verify home link is enabled using text & CSS selector ', async ({ page }) => {
    // open URL
    await page.goto("https://practice.sdetunicorns.com");

    // find the home text
    const homeText = await page.locator('#zak-primary-menu >> text=Home')

    // verify heading text is visible
    await expect(homeText).toBeEnabled()
  });

  test('Verify search icon is visible using the xpath selector ', async ({ page }) => {
    // open URL
    await page.goto("https://practice.sdetunicorns.com");

    // find the home text
    const searchIcon = await page.locator('//*[@class="zak-header-actions zak-header-actions--desktop"]//*[@class="zak-header-search__toggle"]')

    // verify heading text is visible
    await expect(searchIcon).toBeVisible()
  });

  //#zak-primary-menu li[id*=menu]

  test('Verify the text for all nav links', async ({ page }) => {
    // open URL
    await page.goto("https://practice.sdetunicorns.com");

    // find the nav links
    const searchIcon = await page.locator('//*[@class="zak-header-actions zak-header-actions--desktop"]//*[@class="zak-header-search__toggle"]')

    // verify heading text is visible
    await expect(searchIcon).toBeVisible()
  });
});

//div[@class='zak-header-actions zak-header-actions--desktop']//a[@class='zak-header-search__toggle']