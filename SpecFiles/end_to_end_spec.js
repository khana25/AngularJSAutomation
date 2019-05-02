// End to End Scenario
// - Registration
// - Login
// - Logout

describe("Registration and Login End to End Scenario", function () {

    it("Register new user to application", function() {

        //This code is for maximizing the browser window
        browser.get("http://amasik.com/demo/angularjs/angular-app")
        browser.driver.manage().window().maximize()
        browser.driver.sleep(4000)
        browser.findElement(by.partialLinkText('have an account?')).click()
        browser.findElement(by.name('firstname')).sendKeys('Hello')
        browser.findElement(by.name('lastname')).sendKeys('Tester')
        browser.findElement(by.name('email')).sendKeys('hello@tester.com')
        browser.findElement(by.name('password')).sendKeys('Password1')
        browser.findElement(by.id('confirm_password')).sendKeys('Password1')
        browser.driver.sleep(4000)
        browser.findElement(by.xpath("//label[contains(text(), 'Agree with the Terms')]")).click()
        browser.findElement(by.buttonText('Register')).click()
        browser.driver.sleep(5000)

    });

    it('Login to Application', function(){
        browser.findElement(by.name('email')).clear()
        browser.findElement(by.name('email')).sendKeys('hello@tester.com')
        browser.findElement(by.name('password')).clear()
        browser.findElement(by.name('password')).sendKeys('Password1')
        browser.findElement(by.id('Field')).click()
        browser.findElement(by.buttonText('Sign In')).click()
        browser.driver.sleep(4000)
        browser.findElement(by.xpath("//a[contains(text() , ' Welcome Asik!')]")).click()
        browser.findElement(by.xpath("//a[contains(text() , 'Logout')]")).click()
        browser.driver.sleep(2000)

    });

});