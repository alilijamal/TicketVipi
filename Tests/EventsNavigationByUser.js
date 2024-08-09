const {Builder, By, Key} = require ("selenium-webdriver");

async function navigationbyuser() {
    
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://www.ticketvipi.com/login")

    //A user Logs in to the site
    await driver.findElement(By.name("email")).sendKeys("alihayan4@gmail.com");
    await driver.findElement(By.name("password")).sendKeys("Ali123", Key.RETURN);

    //Navigation through the website
    //1.Conferences


    //AN ERROR OCCURS AT THIS POINT BECAUSE THE BUTTONS WERE NOT DEFINED BY THE PROGRAMMERS. I WILL CONFIRM WITH JOHN AND GET BACK TO THIS


}
navigationbyuser()