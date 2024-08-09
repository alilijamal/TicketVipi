const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Admin Cancel Event', function() {
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
  it('Admin Cancel Event', async function() {
    await driver.get("https://www.ticketvipi.com/?page=1")
    await driver.manage().window().setRect(1294, 1032)
    await driver.findElement(By.css(".bg-rt-light-blue:nth-child(1)")).click()
    await driver.findElement(By.css("div:nth-child(1) > .bg-rt-white > .py-6 .inline-flex")).click()
    await driver.executeScript("window.scrollTo(0,322)")
    await driver.findElement(By.css(".rounded-none:nth-child(1) > .font-poppins")).click()
    await driver.findElement(By.name("cancel_reason")).click()
    await driver.findElement(By.name("cancel_reason")).sendKeys("Not suitable for children")
    await driver.findElement(By.css(".mt-8 > .inline-flex:nth-child(2) > .font-poppins")).click()
  })
})
