package com.cucumber.stepdefinition;

import com.cucumber.page.HomePage;
import com.cucumber.util.base;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Before;
import org.openqa.selenium.By;

import static com.cucumber.util.base.driver;
import static java.lang.Thread.*;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class HomepageSD {

    HomePage hp = new HomePage();
    base b = new base();



    @Given("^I am on a screen$")
    public void I_am_on_landing_page()
    {
        //assertTrue(driver.getPageSource().contains("Search Flights"));
        String xyz= hp.home();
        assertEquals(xyz,"Search flights");
    }

    @Then("^I select trip button$")
    public void I_Select_Round_Trip()
    {
        //assertTrue(driver.getPageSource().contains("Search Flights"));

        hp.RoundTrip();
    }
    @When("^I select from station \"([^\"]*)\" into screen$")
    public void I_Select_From_Station(String arg1) throws InterruptedException {
        //assertTrue(driver.getPageSource().contains("Search Flights"));
        hp.FromStation(arg1);
        sleep(3000);
    }
    @When("^I select to station \"([^\"]*)\" into screen$")
    public void I_Select_to_Station(String arg1) throws InterruptedException {
        //assertTrue(driver.getPageSource().contains("Search Flights"));
        hp.ToStation(arg1);
        sleep(3000);
    }
    @When("^I select Departure Date \"([^\"]*)\" into screen$")
    public void I_Select_Dept_Date(String arg1) throws InterruptedException {
        //assertTrue(driver.getPageSource().contains("Search Flights"));
        hp.DeptDate(arg1);
        sleep(10000);
    }
    @When("^I select Return Date \"([^\"]*)\" into screen$")
    public void I_Select_Return_Date(String arg1) throws InterruptedException {
        //assertTrue(driver.getPageSource().contains("Search Flights"));
        hp.ReturnDate(arg1);
        sleep(30000);
    }
    @When("^I select Passenger \"([^\"]*)\" into screen$")
    public void I_Select_Passenger(String arg1) throws InterruptedException {
        //assertTrue(driver.getPageSource().contains("Search Flights"));
        hp.Adult(arg1);
        sleep(3000);
    }
    @Then("^I click on Search Button$")
    public void I_Select_Search() throws InterruptedException {
        //assertTrue(driver.getPageSource().contains("Search Flights"));
        hp.search();
        sleep(30000);
    }

}
