package com.gccatlas.base;

import com.gccatlas.utils.ConfigReader;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;
import java.util.List;

public abstract class BasePage {
    protected final Logger logger = LogManager.getLogger(getClass());
    protected WebDriver driver;
    protected WebDriverWait wait;

    public BasePage(WebDriver driver) {
        this.driver = driver;
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(ConfigReader.getExplicitWait()));
    }

    public WebElement waitForElementVisible(By locator) {
        logger.debug("Waiting for element to be visible: {}", locator);
        return wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
    }

    public WebElement waitForElementClickable(By locator) {
        logger.debug("Waiting for element to be clickable: {}", locator);
        return wait.until(ExpectedConditions.elementToBeClickable(locator));
    }

    public WebElement waitForElementPresence(By locator) {
        logger.debug("Waiting for element presence: {}", locator);
        return wait.until(ExpectedConditions.presenceOfElementLocated(locator));
    }

    public boolean waitForElementDisappear(By locator) {
        logger.debug("Waiting for element to disappear: {}", locator);
        return wait.until(ExpectedConditions.invisibilityOfElementLocated(locator));
    }

    public void click(By locator) {
        logger.info("Clicking on element: {}", locator);
        try {
            waitForElementClickable(locator).click();
        } catch (ElementClickInterceptedException e) {
            logger.warn("Click intercepted for {}, retrying via JavaScript click", locator);
            jsClick(locator);
        }
    }

    public void type(By locator, String text) {
        logger.info("Typing '{}' into element: {}", text, locator);
        WebElement element = waitForElementVisible(locator);
        element.sendKeys(text);
    }

    public void clearAndType(By locator, String text) {
        logger.info("Clearing and typing '{}' into element: {}", text, locator);
        WebElement element = waitForElementVisible(locator);
        element.sendKeys(Keys.chord(Keys.CONTROL, "a"), Keys.BACK_SPACE);
        element.clear();
        element.sendKeys(text);
    }

    public String getText(By locator) {
        logger.debug("Getting text from element: {}", locator);
        return waitForElementVisible(locator).getText().trim();
    }

    public String getAttribute(By locator, String attribute) {
        logger.debug("Getting attribute '{}' from element: {}", attribute, locator);
        return waitForElementPresence(locator).getAttribute(attribute);
    }

    public boolean isElementDisplayed(By locator) {
        try {
            return waitForElementVisible(locator).isDisplayed();
        } catch (TimeoutException | NoSuchElementException e) {
            return false;
        }
    }

    public boolean isElementPresent(By locator) {
        try {
            return !driver.findElements(locator).isEmpty();
        } catch (Exception e) {
            return false;
        }
    }

    public List<WebElement> findElements(By locator) {
        logger.debug("Finding all elements for locator: {}", locator);
        return driver.findElements(locator);
    }

    public void selectByVisibleText(By locator, String text) {
        logger.info("Selecting visible text '{}' from dropdown: {}", text, locator);
        WebElement selectElement = waitForElementVisible(locator);
        Select select = new Select(selectElement);
        select.selectByVisibleText(text);
    }

    public String getSelectedOptionText(By locator) {
        WebElement selectElement = waitForElementVisible(locator);
        Select select = new Select(selectElement);
        return select.getFirstSelectedOption().getText().trim();
    }

    public void scrollToElement(By locator) {
        logger.debug("Scrolling to element: {}", locator);
        WebElement element = waitForElementPresence(locator);
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView({block: 'center', inline: 'nearest'});", element);
    }

    public void jsClick(By locator) {
        logger.info("Performing JavaScript click on: {}", locator);
        WebElement element = waitForElementPresence(locator);
        ((JavascriptExecutor) driver).executeScript("arguments[0].click();", element);
    }

    public String getCurrentUrl() {
        return driver.getCurrentUrl();
    }

    public String getPageTitle() {
        return driver.getTitle();
    }
}
