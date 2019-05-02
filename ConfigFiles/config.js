var jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');


exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //specs:['../SpecFiles/end_to_end_spec.js'],
    //specs:['../SpecFiles/end_to_end_spec.js', '../SpecFiles/FirstSpec.js'],
    //specs:['../SpecFiles/*.js'],
    //specs:['../SpecFiles/TC_001.js'],
    specs: ['../SpecFiles/LoginSpec.js'],/*
    multiCapabilities:[{
       'browserName': 'firefox'
    },
        {
            'browserName': 'chrome'
        }]*/
    //params:
    //    {
    //       // url: "http://amasik.com/demo/angularjs/angular-app",
    //        //email: "hello@testing.com"
    //        common:
    //            {
    //                //url: "http://amasik.com/demo/angularjs/angular-app"
    //                browserDetails:
    //                    {
    //                        url: "http://amasik.com/demo/angularjs/angular-app"
    //                    }
    //            },
    //
    //        registeration:
    //            {
    //                firstName: "Testing",
    //                lastName: "World",
    //                email: "testingworld@test.com",
    //                password: "Password1",
    //                confirmsPassword: "Password1"
    //            },
    //
    //        login:
    //            {
    //                username: "testingworld@test.com",
    //                password: "Password1"
    //            }
    //
    //    }

    params:
        {
            common:
                {
                    //url: "http://amasik.com/demo/angularjs/angular-app"
                    browserDetails:
                        {
                            url: "http://amasik.com/demo/angularjs/angular-app"
                        }
                },

            testdata: require('../ElementLocators/Elements.json')
        },
    onPrepare: function () {
        jasmine.getEnv().addReporter(new jasmine2HtmlReporter({
            savePath: 'target/screenshots'
        }));

    }
}