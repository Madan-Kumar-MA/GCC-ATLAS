package com.gccatlas.pages;

import com.gccatlas.base.BasePage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class NavbarPage extends BasePage {

    // Locators
    private final By navbar = By.cssSelector("[data-testid='navbar']");
    private final By navBrandLogo = By.cssSelector("[data-testid='nav-brand-logo']");
    private final By navItemOverview = By.cssSelector("[data-testid='nav-item-overview']");
    private final By navItemExplorer = By.cssSelector("[data-testid='nav-item-explorer']");
    private final By navItemCities = By.cssSelector("[data-testid='nav-item-cities']");
    private final By navItemCompare = By.cssSelector("[data-testid='nav-item-compare']");
    private final By navItemWizard = By.cssSelector("[data-testid='nav-item-wizard']");
    private final By navItemIncentives = By.cssSelector("[data-testid='nav-item-incentives']");
    private final By navItemProviders = By.cssSelector("[data-testid='nav-item-providers']");
    private final By navItemAi = By.cssSelector("[data-testid='nav-item-ai']");
    private final By globalSearchInput = By.cssSelector("[data-testid='global-search-input']");
    private final By globalSearchClear = By.cssSelector("[data-testid='global-search-clear']");
    private final By btnTopMethodology = By.cssSelector("[data-testid='btn-top-methodology']");
    private final By methodologyModal = By.cssSelector("[data-testid='methodology-modal']");
    private final By btnCloseMethodologyModal = By.cssSelector("[data-testid='btn-close-methodology-modal']");

    public NavbarPage(WebDriver driver) {
        super(driver);
    }

    public boolean isNavbarDisplayed() {
        return isElementDisplayed(navbar);
    }

    public boolean isBrandLogoDisplayed() {
        return isElementDisplayed(navBrandLogo);
    }

    private void clickNavTab(String tabId) {
        By desktopLocator = By.cssSelector("[data-testid='nav-item-" + tabId + "']");
        By mobileToggle = By.cssSelector("[data-testid='mobile-menu-toggle']");
        By mobileLocator = By.cssSelector("[data-testid='mobile-nav-item-" + tabId + "']");

        if (isElementPresent(desktopLocator) && driver.findElement(desktopLocator).isDisplayed()) {
            click(desktopLocator);
        } else if (isElementPresent(mobileToggle) && driver.findElement(mobileToggle).isDisplayed()) {
            click(mobileToggle);
            click(mobileLocator);
        } else {
            jsClick(desktopLocator);
        }
    }

    public void clickOverviewTab() {
        logger.info("Navigating to Overview tab");
        clickNavTab("overview");
    }

    public void clickExplorerTab() {
        logger.info("Navigating to GCC Explorer tab");
        clickNavTab("explorer");
    }

    public void clickCityIntelligenceTab() {
        logger.info("Navigating to City Intelligence tab");
        clickNavTab("cities");
    }

    public void clickCompareTab() {
        logger.info("Navigating to City Comparison tab");
        clickNavTab("compare");
    }

    public void clickBuildWizardTab() {
        logger.info("Navigating to Build My GCC tab");
        clickNavTab("wizard");
    }

    public void clickIncentivesTab() {
        logger.info("Navigating to State Incentives tab");
        clickNavTab("incentives");
    }

    public void clickProvidersTab() {
        logger.info("Navigating to Service Providers tab");
        clickNavTab("providers");
    }

    public void clickAtlasAITab() {
        logger.info("Navigating to Atlas AI tab");
        clickNavTab("ai");
    }

    public void searchGlobal(String query) {
        logger.info("Performing global navbar search for: {}", query);
        clearAndType(globalSearchInput, query);
    }

    public void clearGlobalSearch() {
        logger.info("Clearing global search input");
        if (isElementDisplayed(globalSearchClear)) {
            click(globalSearchClear);
        } else {
            clearAndType(globalSearchInput, "");
        }
    }

    public void openMethodologyModal() {
        logger.info("Opening Methodology modal from navbar");
        click(btnTopMethodology);
        waitForElementVisible(methodologyModal);
    }

    public void closeMethodologyModal() {
        logger.info("Closing Methodology modal");
        click(btnCloseMethodologyModal);
        waitForElementDisappear(methodologyModal);
    }

    public boolean isMethodologyModalDisplayed() {
        return isElementDisplayed(methodologyModal);
    }
}
