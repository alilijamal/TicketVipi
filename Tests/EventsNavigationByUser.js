const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Events In calendar View', function() {
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
  it('Events In calendar View', async function() {
    await driver.get("https://www.ticketvipi.com/?period=upcoming")
    await driver.manage().window().setRect(1294, 1032)
    await driver.findElement(By.css(".hover\\3Atext-rt-white")).click()
    {
      const element = await driver.findElement(By.css(".hover\\3Atext-rt-white"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    await driver.findElement(By.css(".text-gray-700:nth-child(1)")).click()
    await driver.findElement(By.css(".hover\\3Atext-rt-white")).click()
    await driver.findElement(By.css(".w-full:nth-child(3)")).click()
    await driver.findElement(By.css(".hover\\3Atext-rt-white")).click()
    {
      const element = await driver.findElement(By.css(".hover\\3Atext-rt-white"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    await driver.findElement(By.css(".w-full:nth-child(4)")).click()
    await driver.findElement(By.css(".hover\\3Atext-rt-white")).click()
    {
      const element = await driver.findElement(By.css(".hover\\3Atext-rt-white"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    await driver.findElement(By.css(".w-full:nth-child(5)")).click()
    await driver.findElement(By.css(".hover\\3Atext-rt-white")).click()
    {
      const element = await driver.findElement(By.css(".hover\\3Atext-rt-white"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    await driver.findElement(By.css(".w-full:nth-child(6)")).click()
    await driver.findElement(By.css(".hover\\3Atext-rt-white")).click()
    await driver.findElement(By.css(".w-full:nth-child(7)")).click()
  })
})
