package com.cucumber.page;

import com.cucumber.util.base;
import org.junit.Before;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;
import java.util.concurrent.TimeUnit;

public class HomePage extends base {

By title = By.xpath("//*[@id=\"SearchForm\"]/h1");
By radioButton = By.id("OneWay");
By fromStation = By.id("FromTag");
By toStation = By.id("ToTag");
By DeptDate = By.id("DepartDate");
By ReturnDate = By.id("ReturnDate");
By Adult = By.id("Adults");
By Search = By.id("SearchBtn");


  base b = new base();
  JavascriptExecutor js = (JavascriptExecutor) driver;

public String home()
{

  return driver.findElement(title).getText();
}
  public void RoundTrip()
  {
    driver.findElement(radioButton).click();
  }
  public void FromStation(String Text)
  {
    driver.findElement(fromStation).sendKeys(Text);
  }
  public void ToStation(String Text)
  {
    driver.findElement(toStation).sendKeys(Text);
  }
  public void DeptDate(String Text)
  {

/*

    driver.findElement(By.xpath("//input[@id='DepartDate']")).click();

    List<WebElement> departurelist = driver.findElements(By.xpath("//div[contains(@class,'monthBlockfirst')]//td//a"));
    int departurecount = departurelist.size();

    for(int i=0;i<departurecount;i++){

      String departurevalue = departurelist.get(i).getText();



      if(departurevalue.equalsIgnoreCase("30"))

      {

        departurelist.get(i).click();

        break;

      }

    }*/

   driver.findElement(DeptDate).sendKeys(Text);
  }

  public void ReturnDate(String Text)
  {
    driver.findElement(ReturnDate).sendKeys(Text);
  }
  public void Adult(String Text)
  {

    js.executeScript("window.scrollBy(0,1000)");
    waitVar.until(ExpectedConditions.presenceOfElementLocated(Adult));
    Select Adults = new Select(driver.findElement(Adult));
    Adults.selectByVisibleText(Text);
  }
  public void search()
  {

    js.executeScript("window.scrollBy(0,1000)");
    waitVar.until(ExpectedConditions.presenceOfElementLocated(Search));
    driver.findElement(Search).click();


  }
}
