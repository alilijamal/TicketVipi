const {Builder, By, Key} = require ("selenium-webdriver");

async function adminlogin() {
    
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://www.ticketvipi.com/login")

    await driver.findElement(By.name("email")).sendKeys("alijamal.abdi04@gmail.com");
    await driver.findElement(By.name("password")).sendKeys("ALI123", Key.RETURN);



}
adminlogin()