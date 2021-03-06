package com.cucumber.option;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions
        (features ="src/test/java/com/cucumber/feature",
         glue = "com.cucumber.stepdefinition",
        plugin = {"pretty","html:target/cucumber"

        })
public class Runtest {
}
