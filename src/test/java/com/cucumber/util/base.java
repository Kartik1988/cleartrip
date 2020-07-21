package com.cucumber.util;

import java.util.concurrent.TimeUnit;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.WebDriverWait;


public class base {

    public static WebDriver driver;
    public static WebDriverWait waitVar;

    public void createDriver()
    {
        System.setProperty("webdriver.chrome.driver","F:/chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();

        driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
        waitVar = new WebDriverWait(driver,50);
        driver.get("https://www.cleartrip.ae/");

    }

    public void teardown()
    {
driver.quit();
    }

}
