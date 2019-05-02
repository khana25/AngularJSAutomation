describe('Login functionality', function(){

    beforeEach(function(){
        browser.get(browser.params.common.browserDetails.url)
        browser.driver.manage().window().maximize()
        browser.driver.sleep(4000)
        console.log("----------- Test Case Started ------------")
    });

    afterEach(function(){
        console.log("----------- Test Case Ended ------------")
    });

    it('Login to Application', function(){
        browser.findElement(by.name('email')).clear()
        browser.findElement(by.name('email')).sendKeys(browser.params.login.username)
        browser.findElement(by.name('password')).clear()
        browser.findElement(by.name('password')).sendKeys(browser.params.login.password)
        browser.findElement(by.id('Field')).click()
        browser.findElement(by.buttonText('Sign In')).click()
        browser.driver.sleep(4000)
        browser.findElement(by.xpath("//a[contains(text() , ' Welcome Asik!')]")).click()
        browser.findElement(by.xpath("//a[contains(text() , 'Logout')]")).click()
        browser.driver.sleep(2000)

    });

    it('Register Data', function(){
        browser.findElement(by.partialLinkText('have an account?')).click()
        browser.findElement(by.name('firstname')).sendKeys(browser.params.registeration.firstName)
        browser.findElement(by.name('lastname')).sendKeys(browser.params.registeration.lastName)
        browser.findElement(by.name('email')).sendKeys(browser.params.registeration.email)
        browser.findElement(by.name('password')).sendKeys(browser.params.registeration.password)
        browser.findElement(by.id('confirm_password')).sendKeys(browser.params.registeration.confirmsPassword)
        browser.driver.sleep(4000)
        browser.findElement(by.xpath("//label[contains(text(), 'Agree with the Terms')]")).click()
        browser.findElement(by.buttonText('Register')).click()
        browser.driver.sleep(5000)

    });
});