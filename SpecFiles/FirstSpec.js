// Create First spec in Protractor

describe("Login functionality", function () {

    it("Login functionality with valid credentials", function() {

        //This code is for maximizing the browser window
        browser.get("http://amasik.com/demo/angularjs/angular-app")
        browser.driver.manage().window().maximize()
        browser.driver.sleep(5000)

        //Fetch URL of the Page

        expect(browser.getCurrentUrl()).toBe("http://amasik.com/demo/angularjs/angular-app/#/login")
        expect(browser.getTitle()).toBe("AngularJS POC")

        //Fetch Page Source Code
        //expect(browser.getPageSource()).toBe("Testing")

    });

});