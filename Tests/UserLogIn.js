const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('User LogIn', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('User LogIn', async function() {
    await driver.get("https://www.ticketvipi.com/?period=upcoming")
    await driver.manage().window().setRect(1294, 1032)
    await driver.findElement(By.css(".bg-gradient-to-r > .font-poppins:nth-child(1)")).click()
    await driver.findElement(By.name("email")).sendKeys("alihayan4@gmail.com")
    await driver.findElement(By.name("password")).sendKeys("Ali123")
    await driver.findElement(By.css(".bg-gradient-to-r")).click()
  })
})
