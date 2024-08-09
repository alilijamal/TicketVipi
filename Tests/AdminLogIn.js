const {Builder} = require ("selenium-webdriver");

async function adminlogin() {
    
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://www.ticketvipi.com/login")

    let emailInput = await driver.findElement(By.name('q'));
    await emailInput.sendKeys('alijamal.abdi04@gmail.com');

    let passwordInput = await driver.findElement(By.name('q'));
    await passwordInput.sendKeys('ALI123');

    let loginButton = await driver.findElement(By.css('button[type="submit"]'));
    await loginButton.click();



}
adminlogin()