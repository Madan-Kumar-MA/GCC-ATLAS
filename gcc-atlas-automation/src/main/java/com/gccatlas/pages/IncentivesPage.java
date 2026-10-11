package com.gccatlas.pages;

import com.gccatlas.base.BasePage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.List;

public class IncentivesPage extends BasePage {

    // Locators
    private final By incentivesView = By.cssSelector("[data-testid='incentives-view']");
    private final By filterStateSelect = By.cssSelector("[data-testid='filter-state-select']");
    private final By filterTypeSelect = By.cssSelector("[data-testid='filter-type-select']");
    private final By filterRelevanceSelect = By.cssSelector("[data-testid='filter-relevance-select']");
    private final By btnResetIncentives = By.cssSelector("[data-testid='btn-reset-incentives']");
    private final By incentiveCards = By.cssSelector("[data-testid^='incentive-card-']");

    public IncentivesPage(WebDriver driver) {
        super(driver);
    }

    public boolean isIncentivesLoaded() {
        return isElementDisplayed(incentivesView);
    }

    public void filterByState(String state) {
        logger.info("Filtering incentives by state: {}", state);
        selectByVisibleText(filterStateSelect, state);
    }

    public void filterByType(String type) {
        logger.info("Filtering incentives by type: {}", type);
        selectByVisibleText(filterTypeSelect, type);
    }

    public void filterByRelevance(String relevance) {
        logger.info("Filtering incentives by relevance: {}", relevance);
        selectByVisibleText(filterRelevanceSelect, relevance);
    }

    public void resetFilters() {
        logger.info("Resetting incentives filters");
        click(btnResetIncentives);
    }

    public int getIncentiveCardsCount() {
        List<WebElement> cards = findElements(incentiveCards);
        return cards.size();
    }

    public boolean isIncentiveDisplayed(String policyName) {
        logger.info("Checking if policy '{}' is displayed", policyName);
        By policyTitle = By.xpath("//*[@data-testid='incentives-view']//h3[contains(text(), '" + policyName + "')]");
        return isElementPresent(policyTitle);
    }
}
