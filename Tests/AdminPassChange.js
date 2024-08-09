const {Builder} = require ("selenium-webdriver");

async function adminpasschange() {
    
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://www.ticketvipi.com/login")

    await driver.get("https://www.ticketvipi.com/?period=upcoming")
    await driver.manage().window().setRect(974, 1032)
    await driver.findElement(By.css(".bg-gradient-to-r > .font-poppins:nth-child(1)")).click()
    await driver.findElement(By.name("email")).sendKeys("alijamal.abdi04@gmail.com")
    await driver.findElement(By.name("password")).sendKeys("ALI123")
    await driver.findElement(By.css(".forgot-password > .font-poppins")).click()
    await driver.findElement(By.name("email")).click()
    await driver.findElement(By.name("email")).sendKeys("alijamal.abdi04@gmail.com")
    await driver.findElement(By.css(".w-full:nth-child(1) > .font-poppins")).click()


}
adminpasschange()