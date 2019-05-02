// Create First spec in Protractor

describe("Login functionality", function () {

    it("Login functionality with valid credentials", function() {

        //This code is for maximizing the browser window
        browser.get("http://amasik.com/demo/angularjs/angular-app")
        browser.driver.manage().window().maximize()

        // For locating Element - Syntax - 1
        //element(by.id('Field')).getWebElement().click()

        browser.driver.sleep(5000)

        // For locating Element - Syntax - 2
       //browser.driver.findElement(by.id('Field')).click()

        // For locating Element - Syntax - 3 by.id
        //browser.findElement(by.name('Field')).click()

        // For locating element by  linkText
       // browser.findElement(by.linkText("Don't have an account?")).click()

        // For locating element by partialLinkText
       // browser.findElement(by.partialLinkText("have an account?")).click()

        // For locating Element className
        //browser.findElement(by.className("field login-checkbox")).click()


        //For locating element by tagName
        //browser.findElement(by.tagName('a')).click()

        // Locator by css
        //browser.findElement(by.css('input#Field')).click()

        // Locator by class
        //browser.findElement(by.css('input.field.login-checkbox')).click()

        // Locator by tabIndex
        //browser.findElement(by.css("input[tabIndex='4']")).click()

        // Locator by class attribute
        //browser.findElement(by.css("input.field.login-checkbox[tabIndex='4']")).click()

        //Loctaor by xpath single attribute
        //browser.findElement(by.xpath("//input[@value='First Choice']")).click()

        //Loctaor by xpath mulitple attributes using 'or'
        //browser.findElement(by.xpath("//input[@value='First Choice' or @tabindex='4']")).click()

        //Loctaor by xpath mulitple attributes using 'and'
       // browser.findElement(by.xpath("//input[@value='First Choice' and @tabindex='4']")).click()

        //Loctaor by xpath mulitple attributes using '*'
       // browser.findElement(by.xpath("//*[@value='First Choice' and @tabindex='4']")).click()

        //Loctaor by xpath mulitple attributes using 'text'
        //browser.findElement(by.xpath('//a[contains(text(),"Don\'t have an account?")]')).click()

        //Loctaor by xpath mulitple attributes using 'value'
        //browser.findElement(by.xpath('//input[contains(@value,"Choice")]')).click()

        //Loctaor by xpath attributes
        //browser.findElement(by.xpath('//div[@class="login-actions"]/span/input')).click()

        //Locators AngulkarJS elements by ng-model
        //browser.findElement(by.model('login.email')).sendKeys('Testing@test.com')

        //Locators AngulkarJS elements by ng-repeat
        //browser.findElement(by.repeater('recentNews in data.response')).click()

        //Locator by buttonText
        //browser.findElement(by.buttonText('Sign In')).click()

        //Locator by partialButtonText
        //browser.findElement(by.partialButtonText('Sign')).click()


        //Locator to enterText
        //browser.findElement(by.model('login.email')).sendKeys('Testing@test.com')

        //Locator to clear text inside the textbox
        //browser.findElement(by.name('email')).clear()
        //browser.findElement(by.model('login.email')).sendKeys('Testing@test.com')


        //Enter URL to the browser
        //browser.navigate().to("https://www.google.co.uk")
        //browser.driver.sleep(4000)

        //click back button on browser
        //browser.navigate().back()

        //click forward button on browser
        //browser.navigate().forward() // we can use browser.driver.forward() as well

        //clcik refresh button from browser
        //browser.navigate().refresh()


        browser.driver.sleep(5000)



    });

});