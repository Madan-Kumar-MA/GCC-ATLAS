package com.gccatlas.pages;

import com.gccatlas.base.BasePage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class DashboardPage extends BasePage {

    // Locators
    private final By overviewView = By.cssSelector("[data-testid='overview-view']");
    private final By heroHeading = By.cssSelector("[data-testid='hero-heading']");
    private final By btnHeroExplore = By.cssSelector("[data-testid='btn-hero-explore']");
    private final By btnHeroCompare = By.cssSelector("[data-testid='btn-hero-compare']");
    private final By btnHeroWizard = By.cssSelector("[data-testid='btn-hero-wizard']");

    private final By kpiTotalGcc = By.cssSelector("[data-testid='kpi-tracked-gccs']");
    private final By kpiTotalGccVal = By.cssSelector("[data-testid='kpi-tracked-gccs-value']");
    private final By kpiTier1Hubs = By.cssSelector("[data-testid='kpi-tier1-cities']");
    private final By kpiTier1HubsVal = By.cssSelector("[data-testid='kpi-tier1-cities-value']");
    private final By kpiWorkforce = By.cssSelector("[data-testid='kpi-talent-pool']");
    private final By kpiWorkforceVal = By.cssSelector("[data-testid='kpi-talent-pool-value']");
    private final By kpiMarketSize = By.cssSelector("[data-testid='kpi-export-value']");
    private final By kpiMarketSizeVal = By.cssSelector("[data-testid='kpi-export-value-value']");

    private final By chartCityShare = By.cssSelector("[data-testid='city-presence-chart-container']");
    private final By chartIndustryMaturity = By.cssSelector("[data-testid='industry-pie-chart-container']");
    private final By featuredCompaniesSection = By.cssSelector("[data-testid='featured-gccs-section']");
    private final By marketSignalsSection = By.cssSelector("[data-testid='recent-signals-section']");

    public DashboardPage(WebDriver driver) {
        super(driver);
    }

    public boolean isDashboardLoaded() {
        return isElementDisplayed(overviewView);
    }

    public String getHeroHeadingText() {
        return getText(heroHeading);
    }

    public void clickExploreAllCentres() {
        logger.info("Clicking hero button 'Explore All 1,620+ Centres'");
        click(btnHeroExplore);
    }

    public void clickCompareHubs() {
        logger.info("Clicking hero button 'Compare Tier-1 Hubs'");
        click(btnHeroCompare);
    }

    public void clickLaunchSetupAdvisor() {
        logger.info("Clicking hero button 'Launch Setup Advisor'");
        click(btnHeroWizard);
    }

    public boolean areKpiCardsDisplayed() {
        return isElementDisplayed(kpiTotalGcc)
                && isElementDisplayed(kpiWorkforce)
                && isElementDisplayed(kpiMarketSize)
                && isElementDisplayed(kpiTier1Hubs);
    }

    public String getTotalGccValue() {
        return getText(kpiTotalGccVal);
    }

    public String getWorkforceValue() {
        return getText(kpiWorkforceVal);
    }

    public String getMarketSizeValue() {
        return getText(kpiMarketSizeVal);
    }

    public String getTier1HubsValue() {
        return getText(kpiTier1HubsVal);
    }

    public boolean areChartsDisplayed() {
        return isElementDisplayed(chartCityShare) && isElementDisplayed(chartIndustryMaturity);
    }

    public boolean isFeaturedCompaniesSectionDisplayed() {
        return isElementDisplayed(featuredCompaniesSection);
    }

    public boolean isMarketSignalsSectionDisplayed() {
        return isElementDisplayed(marketSignalsSection);
    }

    public void clickFeaturedCompany(String companyId) {
        By companyCard = By.cssSelector("[data-testid='featured-company-card-" + companyId + "']");
        logger.info("Clicking featured company card: {}", companyId);
        scrollToElement(companyCard);
        click(companyCard);
    }
}
