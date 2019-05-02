describe("Registration and Login End to End Scenario", function () {

    beforeEach(function(){
        browser.get(browser.params.common.browserDetails.url)
        browser.driver.manage().window().maximize()
        browser.driver.sleep(4000)
        console.log("----------- Test Case Started ------------")
    });

    afterEach(function(){
        console.log("----------- Test Case Ended ------------")
    });

    // Login functionality - 1
   // it('Login to Application', function(){
   //     var element = require('../ElementLocators/Elements.json')
   //     browser.findElement(by.name(element.login.login_username)).clear()
   //     browser.findElement(by.name(element.login.login_username)).sendKeys('hello@tester.com')
   //     browser.findElement(by.name(element.login.login_password)).clear()
   //     browser.findElement(by.name(element.login.login_password)).sendKeys('Password1')
   //     browser.findElement(by.id(element.login.login_keep_signin)).click()
   //     browser.findElement(by.buttonText(element.login.login_signin)).click()
   //     browser.driver.sleep(4000)
   //     browser.findElement(by.xpath(element.Logout.welcome_link)).click()
   //     browser.findElement(by.xpath(element.Logout.logout_link)).click()
   //     browser.driver.sleep(2000)
   //
   // });

    // Login functionality - 2
     it('Login to Application', function(){

         browser.findElement(by.name(browser.params.testdata.login.login_username)).clear()
         browser.findElement(by.name(browser.params.testdata.login.login_username)).sendKeys('hello@tester.com')
         browser.findElement(by.name(browser.params.testdata.login.login_password)).clear()
         browser.findElement(by.name(browser.params.testdata.login.login_password)).sendKeys('Password1')
         browser.findElement(by.id(browser.params.testdata.login.login_keep_signin)).click()
         browser.findElement(by.buttonText(browser.params.testdata.login.login_signin)).click()
         browser.driver.sleep(4000)
         browser.findElement(by.xpath(browser.params.testdata.Logout.welcome_link)).click()
         browser.findElement(by.xpath(browser.params.testdata.Logout.logout_link)).click()
         browser.driver.sleep(2000)
    
     });
});