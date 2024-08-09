const {Builder, By, Key} = require ("selenium-webdriver");

async function adminpasschange() {
    
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://www.ticketvipi.com/login")

    //Click reset password
    await driver.findElement(By.className("font-poppins font-semibold capitalize text-[14px]")).click();

    //Enter Email to proceed
    await driver.findElement(By.name("email")).sendKeys("alihayan4@gmail.com", Key.RETURN);

    //succeful if it shows the message "An email has been sent to your mailbox"


}
adminpasschange()