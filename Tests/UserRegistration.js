const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('User Registration', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('User Registration', async function() {
    await driver.get("https://www.ticketvipi.com/?period=upcoming")
    await driver.manage().window().setRect(1294, 1032)
    await driver.findElement(By.css(".bg-rt-white > .font-poppins")).click()
    await driver.findElement(By.name("name")).click()
    await driver.findElement(By.name("name")).sendKeys("Shimakhokho")
    await driver.findElement(By.name("email")).click()
    await driver.findElement(By.name("email")).sendKeys("shimakhokho@gmail.com")
    await driver.findElement(By.name("phone_number")).click()
    await driver.findElement(By.name("phone_number")).sendKeys("+254112130190")
    await driver.findElement(By.name("password")).click()
    await driver.findElement(By.name("password")).sendKeys("ALI123")
    await driver.findElement(By.name("password_confirmation")).click()
    await driver.findElement(By.name("password_confirmation")).sendKeys("ALI123")
    await driver.findElement(By.css(".bg-gradient-to-r")).click()
  })
})
