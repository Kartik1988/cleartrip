package com.cucumber.stepdefinition;

import com.cucumber.util.base;
import cucumber.api.java.After;
import cucumber.api.java.Before;

import java.net.MalformedURLException;

public class Hooks {

    base b = new base();

    @Before
    public void beforeHookfunction() throws MalformedURLException, InterruptedException {
        b.createDriver();


    }

    @After
    public void afterHookfunction() {
        b.teardown();

    }
}
