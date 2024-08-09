const {Builder, By, Key} = require ("selenium-webdriver");

async function registeruser() {
    
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://www.ticketvipi.com/?period=upcoming")

    await driver.findElement(By.className("inline-flex px-4 py-2 text-sm flex-row justify-center items-center rounded-md transform transition-transform duration-200 hover:scale-105 bg-rt-white border border-rt-violet text-rt-violet")).sendKeys(Key.RETURN);


    await driver.findElement(By.name("name")).sendKeys("Shakahola");
    await driver.findElement(By.name("email")).sendKeys("shakaholaVictim@gmail.com");
    await driver.findElement(By.name("phone_number")).sendKeys("0727649898");
    await driver.findElement(By.name("password")).sendKeys("ALI123");
    await driver.findElement(By.name("password_confirmation")).sendKeys("ALI123", Key.RETURN);





}
registeruser()