package com.gccatlas.pages;

import com.gccatlas.base.BasePage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class CityIntelligencePage extends BasePage {

    // Locators
    private final By citiesView = By.cssSelector("[data-testid='cities-view']");
    private final By btnCompareActiveCity = By.cssSelector("[data-testid='btn-compare-active-city']");
    private final By activeCityCard = By.cssSelector("[data-testid='active-city-card']");
    private final By activeCityName = By.cssSelector("[data-testid='active-city-name']");
    private final By officeRentalValue = By.cssSelector("[data-testid='office-rental-value']");
    private final By talentEcosystemSection = By.cssSelector("[data-testid='talent-ecosystem-section']");
    private final By costRealEstateSection = By.cssSelector("[data-testid='cost-real-estate-section']");
    private final By infrastructureSection = By.cssSelector("[data-testid='infrastructure-section']");
    private final By policyIncentivesSection = By.cssSelector("[data-testid='policy-incentives-section']");
    private final By strengthsSection = By.cssSelector("[data-testid='strengths-section']");
    private final By tradeoffsSection = By.cssSelector("[data-testid='tradeoffs-section']");
    private final By marqueeTenantsSection = By.cssSelector("[data-testid='marquee-tenants-section']");

    public CityIntelligencePage(WebDriver driver) {
        super(driver);
    }

    public boolean isCityIntelligenceLoaded() {
        return isElementDisplayed(citiesView);
    }

    public void selectCityTab(String cityId) {
        logger.info("Selecting city tab: {}", cityId);
        By tabLocator = By.cssSelector("[data-testid='city-tab-" + cityId.toLowerCase().replace(" ", "-") + "']");
        click(tabLocator);
    }

    public String getActiveCityName() {
        return getText(activeCityName);
    }

    public String getOfficeRentalValue() {
        return getText(officeRentalValue);
    }

    public boolean areKeyCitySectionsDisplayed() {
        return isElementDisplayed(talentEcosystemSection)
                && isElementDisplayed(costRealEstateSection)
                && isElementDisplayed(infrastructureSection)
                && isElementDisplayed(policyIncentivesSection)
                && isElementDisplayed(strengthsSection)
                && isElementDisplayed(tradeoffsSection);
    }

    public boolean isMarqueeTenantsDisplayed() {
        return isElementDisplayed(marqueeTenantsSection);
    }

    public void clickCompareCityButton() {
        logger.info("Clicking 'Compare in Multi-City Matrix' button");
        click(btnCompareActiveCity);
    }
}
