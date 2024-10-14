import { test, expect } from '@playwright/test';
import {saucedemoLogin}  from   './pom'


test ("loginPage", async ({page}) => {


    const sdLogin = new  saucedemoLogin (page);
    await sdLogin.goto ();
    await sdLogin.loginCredentials ();
    


})