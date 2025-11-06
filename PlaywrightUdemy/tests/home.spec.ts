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

  test('Click get started button w/ CSS selector', async ({ page }) => {
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

    // verify nav links text
    const expectedLinks = [
      'Home',
      'About',
      'Shop',
      'Blog',
      'Contact',
      'My account'
    ]

    // open URL
    await page.goto("https://practice.sdetunicorns.com");

    // find the nav links
    const navLinks = await page.locator('#zak-primary-menu li[id*=menu]')

    //Print out all the links

    for(const el of await navLinks.elementHandles())
      {
        console.log(await await el.textContent())

    }

    //await expect(await navLinks.allTextContents()).toEqual(expectedLinks)
    expect(await navLinks.allTextContents()).toEqual(expectedLinks)
  });



test.only('Verify navigate to the contact page and submit a message', async({ page }) =>
  {

    // Step 1 - open home page
    await page.goto("https://practice.sdetunicorns.com");

    // Step 2 - Navigate to contact

    await page.goto("https://practice.sdetunicorns.com/contact/")

    // Step 3 - fill in Name

    await page.getByRole('textbox', { name: /name/i }).fill('Andrew Taylor');

    // Step 4 - fill in email

    await page.getByRole('textbox', { name: /email/i }).fill("AndrewTaylor@gmail.com")

    // Step 5 - fill in phone

    await page.getByRole('textbox', { name: /phone/i }).fill("123")

    // Step 6 - fill in Message

    await page.getByRole('textbox', { name: /message/i }).fill('Andrew Taylor was here');

    // Step 7 - select submit

    await page.getByRole('button', { name: 'Submit' }).click();

    // Step 8 - Verify the pop up appears

    await expect(page.getByRole('alert')).toHaveText(
  'Thanks for contacting us! We will be in touch with you shortly'
);


    

});

});