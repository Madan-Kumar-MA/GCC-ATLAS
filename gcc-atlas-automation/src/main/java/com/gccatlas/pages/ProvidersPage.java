package com.gccatlas.pages;

import com.gccatlas.base.BasePage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.List;

public class ProvidersPage extends BasePage {

    // Locators
    private final By providersView = By.cssSelector("[data-testid='providers-view']");
    private final By btnAskAiVendors = By.cssSelector("[data-testid='btn-ask-ai-vendors']");
    private final By filterProviderCategory = By.cssSelector("[data-testid='filter-provider-category']");
    private final By filterProviderEvidence = By.cssSelector("[data-testid='filter-provider-evidence']");
    private final By filterProviderCity = By.cssSelector("[data-testid='filter-provider-city']");
    private final By btnResetProviders = By.cssSelector("[data-testid='btn-reset-providers']");
    private final By providerCards = By.cssSelector("[data-testid^='provider-card-']");

    public ProvidersPage(WebDriver driver) {
        super(driver);
    }

    public boolean isProvidersLoaded() {
        return isElementDisplayed(providersView);
    }

    public void filterByCategory(String category) {
        logger.info("Filtering providers by category: {}", category);
        selectByVisibleText(filterProviderCategory, category);
    }

    public void filterByEvidenceStrength(String evidence) {
        logger.info("Filtering providers by evidence strength: {}", evidence);
        selectByVisibleText(filterProviderEvidence, evidence);
    }

    public void filterByCityPresence(String city) {
        logger.info("Filtering providers by city footprint: {}", city);
        selectByVisibleText(filterProviderCity, city);
    }

    public void resetFilters() {
        logger.info("Resetting service provider filters");
        click(btnResetProviders);
    }

    public int getProviderCardsCount() {
        List<WebElement> cards = findElements(providerCards);
        return cards.size();
    }

    public boolean isProviderDisplayed(String providerName) {
        logger.info("Checking if provider '{}' is displayed", providerName);
        By nameLocator = By.xpath("//*[@data-testid='providers-view']//*[@data-testid='provider-company-name'][contains(text(), '" + providerName + "')]");
        return isElementPresent(nameLocator);
    }

    public void clickAskAiAboutVendors() {
        logger.info("Clicking 'Ask Atlas AI About Vendors' button");
        click(btnAskAiVendors);
    }
}
