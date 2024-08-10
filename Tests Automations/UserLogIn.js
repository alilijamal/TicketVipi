const {Builder, By, Key} = require ("selenium-webdriver");

async function userlogin() {
    
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://www.ticketvipi.com/login")

    await driver.findElement(By.name("email")).sendKeys("alihayan4@gmail.com");
    await driver.findElement(By.name("password")).sendKeys("Ali123", Key.RETURN);



}
userlogin()