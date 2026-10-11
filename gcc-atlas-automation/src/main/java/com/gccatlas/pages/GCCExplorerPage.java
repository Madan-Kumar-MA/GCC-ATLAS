package com.gccatlas.pages;

import com.gccatlas.base.BasePage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.List;

public class GCCExplorerPage extends BasePage {

    // Locators
    private final By explorerView = By.cssSelector("[data-testid='explorer-view']");
    private final By explorerSearchInput = By.cssSelector("[data-testid='explorer-search-input']");
    private final By filterCitySelect = By.cssSelector("[data-testid='filter-city-select']");
    private final By filterIndustrySelect = By.cssSelector("[data-testid='filter-industry-select']");
    private final By filterScaleSelect = By.cssSelector("[data-testid='filter-scale-select']");
    private final By filterFunctionSelect = By.cssSelector("[data-testid='filter-function-select']");
    private final By btnResetFilters = By.cssSelector("[data-testid='btn-reset-filters']");
    private final By btnGridView = By.cssSelector("[data-testid='btn-grid-view']");
    private final By btnTableView = By.cssSelector("[data-testid='btn-table-view']");
    private final By resultsCount = By.cssSelector("[data-testid='results-count']");
    private final By emptyResultsState = By.cssSelector("[data-testid='empty-results-state']");
    private final By companyCards = By.cssSelector("[data-testid^='company-card-']");
    private final By companiesTable = By.cssSelector("[data-testid='companies-table']");

    // Modal locators
    private final By companyModal = By.cssSelector("[data-testid='company-modal']");
    private final By btnCloseCompanyModal = By.cssSelector("[data-testid='btn-close-company-modal']");

    public GCCExplorerPage(WebDriver driver) {
        super(driver);
    }

    public boolean isExplorerLoaded() {
        return isElementDisplayed(explorerView);
    }

    public void searchCompany(String companyName) {
        logger.info("Searching for company: {}", companyName);
        clearAndType(explorerSearchInput, companyName);
    }

    public void filterByCity(String city) {
        logger.info("Applying city filter: {}", city);
        selectByVisibleText(filterCitySelect, city);
    }

    public void filterByIndustry(String industry) {
        logger.info("Applying industry filter: {}", industry);
        selectByVisibleText(filterIndustrySelect, industry);
    }

    public void filterByScale(String scale) {
        logger.info("Applying scale filter: {}", scale);
        selectByVisibleText(filterScaleSelect, scale);
    }

    public void filterByFunction(String function) {
        logger.info("Applying primary function filter: {}", function);
        selectByVisibleText(filterFunctionSelect, function);
    }

    public void resetFilters() {
        logger.info("Clicking reset filters button");
        click(btnResetFilters);
    }

    public void switchToGridView() {
        logger.info("Switching to Grid view");
        click(btnGridView);
    }

    public void switchToTableView() {
        logger.info("Switching to Table view");
        click(btnTableView);
    }

    public String getResultsCountText() {
        return getText(resultsCount);
    }

    public boolean isCompanyDisplayed(String companyName) {
        logger.info("Checking if company '{}' is displayed in results", companyName);
        String xpath = "//*[contains(@data-testid, 'company-card-') or contains(@data-testid, 'company-row-')]//*[contains(text(), '" + companyName + "')]";
        return isElementPresent(By.xpath(xpath));
    }

    public void clickCompanyCard(String companyId) {
        logger.info("Clicking company card: {}", companyId);
        By card = By.cssSelector("[data-testid='company-card-" + companyId + "']");
        scrollToElement(card);
        click(card);
    }

    public boolean isCompanyModalDisplayed() {
        return isElementDisplayed(companyModal);
    }

    public void closeCompanyModal() {
        logger.info("Closing Company Details modal");
        click(btnCloseCompanyModal);
        waitForElementDisappear(companyModal);
    }

    public boolean isEmptyResultsDisplayed() {
        return isElementDisplayed(emptyResultsState);
    }

    public int getDisplayedCompanyCardsCount() {
        List<WebElement> elements = findElements(companyCards);
        return elements.size();
    }
}
