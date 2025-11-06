

import { title } from "process";
import { Page } from "@playwright/test";

/*
HomePage - Page object model for the home page
*/
export class HomePage {
  page: Page;
  practiceLink: Locator;
  allCoursesLink: Locator;
  signInLink: Locator;
  startLearningButton: Locator;
  newsletterInput: Locator;
  subscribeButton: Locator;
  featuredCourses: Locator;
  
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    this.practiceLink = page.locator('a[href="/practice"]');
    this.allCoursesLink = page.getByRole('link', { name: 'All Courses' });
    this.signInLink = page.getByRole('link', { name: 'Sign In' });
    this.startLearningButton = page.getByRole('link', { name: 'Start Learning' });
    this.newsletterInput = page.locator('input[name="email"]');
    this.subscribeButton = page.getByRole('button', { name: 'Subscribe' });
    this.featuredCourses = page.getByRole('heading', { name: 'Featured Courses' });
  }

  /**
   * Navigate to the home page
   */
  async goToHomePage() {
    await this.page.goto('https://www.letskodeit.com/home');
  }

  /**
   * Navigate to the practice page
   */
  async goToPracticePage() {
    await this.page.goto('https://www.letskodeit.com/practice');
  }

   /**
   * Click on all Courses
   */
  async goToAllCourses() {
    await this.allCoursesLink.click();
  }

  /**
   * Click on sign in
   */
  async goToSignIn() {
    await this.signInLink.click();
  }

  /**
   * Subscribe to newsletter
   * @param {string} email - Email address to subscribe
   */
  async subscribeToNewsletter(email) {
    await this.newsletterInput.fill(email);
    await this.subscribeButton.click();
  }

   /**
   * Get the page title
   * @returns {Promise<string>}
   */
  async getPageTitle() {
    return await this.page.title();
  }

   /**
   * Verify homepage
   * @returns {Promise<boolean>}
   */
  async verifyHomePage () {
    return await this.page.url().includes('/home')
  }

}
