package com.gccatlas.base;

import com.gccatlas.utils.ConfigReader;
import com.gccatlas.utils.DriverFactory;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeSuite;

import java.time.Duration;

public abstract class BaseTest {
    protected final Logger logger = LogManager.getLogger(getClass());
    protected WebDriver driver;

    @BeforeSuite(alwaysRun = true)
    public void setupSuite() {
        logger.info("===============================================================================");
        logger.info("   GCC ATLAS AUTOMATION SUITE INITIALIZATION - SENIOR QA AUTOMATION FRAMEWORK   ");
        logger.info("   Base URL: {}", ConfigReader.getBaseUrl());
        logger.info("   Browser: {}", ConfigReader.getBrowser());
        logger.info("   Headless: {}", ConfigReader.isHeadless());
        logger.info("===============================================================================");
    }

    @BeforeMethod(alwaysRun = true)
    public void setup() {
        logger.info("Initializing WebDriver session for test method");
        driver = DriverFactory.initDriver();
        driver.manage().window().setSize(new org.openqa.selenium.Dimension(1920, 1080));
        String baseUrl = ConfigReader.getBaseUrl();
        logger.info("Navigating to application URL: {}", baseUrl);
        driver.get(baseUrl);

        // Wait until React root/navbar is visible to ensure hydration
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(ConfigReader.getExplicitWait()));
        wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("#root, [data-testid='navbar']")));
        logger.info("Application hydrated and ready for test execution");
    }

    @AfterMethod(alwaysRun = true)
    public void teardown() {
        logger.info("Cleaning up WebDriver session");
        DriverFactory.quitDriver();
    }

    @AfterSuite(alwaysRun = true)
    public void teardownSuite() {
        logger.info("===============================================================================");
        logger.info("               GCC ATLAS AUTOMATION SUITE EXECUTION COMPLETED                  ");
        logger.info("===============================================================================");
    }

    public WebDriver getDriver() {
        return driver != null ? driver : DriverFactory.getDriver();
    }
}
