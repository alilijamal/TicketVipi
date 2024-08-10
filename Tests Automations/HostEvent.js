const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Create an Event', function() {
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
  it('Create an Event', async function() {
    await driver.get("https://www.ticketvipi.com/?period=upcoming")
    await driver.manage().window().setRect(1294, 1032)
    await driver.findElement(By.css(".capitalize:nth-child(1)")).click()
    await driver.findElement(By.name("name")).click()
    await driver.findElement(By.name("name")).sendKeys("Basketball")
    await driver.findElement(By.id("react-select-4-input")).sendKeys("kiamb")
    await driver.findElement(By.css(".focus\\3Aoutline-none")).click()
    await driver.findElement(By.id("react-select-4-option-0")).click()
    await driver.findElement(By.css(".focus\\3Aoutline-none")).click()
    await driver.findElement(By.css(".focus\\3Aoutline-none")).sendKeys("wohoooo")
    await driver.findElement(By.css(".css-t3ipsp-control .css-19bb58m")).click()
    await driver.findElement(By.id("react-select-5-option-1")).click()
    await driver.findElement(By.css(".react-datepicker-ignore-onclickoutside")).click()
    await driver.findElement(By.css(".react-datepicker__day--010")).click()
    await driver.findElement(By.css(".react-datepicker__time-list-item:nth-child(27)")).click()
    await driver.findElement(By.css(".react-datepicker-ignore-onclickoutside")).click()
    await driver.findElement(By.css(".react-datepicker__day--011")).click()
    await driver.findElement(By.css(".react-datepicker__time-list-item:nth-child(28)")).click()
    await driver.findElement(By.css(".mt-8")).click()
    await driver.findElement(By.name("name")).click()
    await driver.findElement(By.name("name")).sendKeys("Regular")
    await driver.findElement(By.name("price")).click()
    await driver.findElement(By.name("price")).sendKeys("1")
    await driver.findElement(By.name("seats")).click()
    await driver.findElement(By.name("seats")).sendKeys("10")
    await driver.findElement(By.css(".react-datepicker-ignore-onclickoutside")).click()
    await driver.findElement(By.css(".react-datepicker__time-list-item:nth-child(21)")).click()
    await driver.findElement(By.css(".react-datepicker-ignore-onclickoutside")).click()
    await driver.findElement(By.css(".react-datepicker__day--011")).click()
    await driver.findElement(By.css(".react-datepicker__day--010")).click()
    await driver.findElement(By.css(".react-datepicker__time-list-item--selected")).click()
    await driver.findElement(By.css(".w-full > .font-poppins")).click()
    await driver.findElement(By.css(".p-2:nth-child(1)")).click()
    await driver.findElement(By.css(".border-4")).click()
    await driver.findElement(By.name("name")).click()
    await driver.findElement(By.css(".mt-8")).click()
    await driver.findElement(By.css(".inline-flex:nth-child(1)")).click()
    {
      const element = await driver.findElement(By.css(".inline-flex:nth-child(1)"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
  })
})
