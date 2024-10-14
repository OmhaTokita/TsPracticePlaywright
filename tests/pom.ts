import { expect, type Locator, type Page } from '@playwright/test';



export class saucedemoLogin {
    readonly page: Page;
    readonly userName: Locator;
    readonly passWord: Locator;
    readonly loginButton: Locator;
    readonly tocList: Locator;
  
    constructor(page: Page) {
      this.page = page;
      this.userName = page.locator ("//input[@name='user-name']")
      this.passWord = page.locator("//input[@name='password']");
      this.loginButton = page.locator("//input[@name='login-button']");
    } 

  
    async goto() {

        await this.page.goto ("https://www.saucedemo.com/")
        
    }

    async loginCredentials () {

        await this.userName.fill ("Admin")
        await this.passWord.fill ("Admin123")
        await this.loginButton.click();

    }
    
} 
