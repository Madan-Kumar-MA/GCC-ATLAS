package com.gccatlas.pages;

import com.gccatlas.base.BasePage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class BuildGCCPage extends BasePage {

    // Locators
    private final By wizardView = By.cssSelector("[data-testid='wizard-view']");
    private final By customEmployeesInput = By.cssSelector("[data-testid='custom-employees-input']");
    private final By scaleErrorMessage = By.cssSelector("[data-testid='scale-error-message']");
    private final By btnWizardBack = By.cssSelector("[data-testid='btn-wizard-back']");
    private final By btnWizardContinue = By.cssSelector("[data-testid='btn-wizard-continue']");
    private final By btnWizardGenerate = By.cssSelector("[data-testid='btn-wizard-generate']");
    private final By btnWizardRerun = By.cssSelector("[data-testid='btn-wizard-rerun']");
    private final By wizardResultsCard = By.cssSelector("[data-testid='wizard-results-card']");
    private final By topRecommendedCity = By.cssSelector("[data-testid='top-recommended-city']");

    public BuildGCCPage(WebDriver driver) {
        super(driver);
    }

    public boolean isWizardLoaded() {
        return isElementDisplayed(wizardView);
    }

    public void selectIndustry(String industryName) {
        logger.info("Selecting wizard industry: {}", industryName);
        By option = By.xpath("//*[@data-testid='wizard-view']//h3[contains(text(), '" + industryName + "')]");
        click(option);
    }

    public void selectScalePreset(String scaleLabel) {
        logger.info("Selecting wizard scale preset: {}", scaleLabel);
        By option = By.xpath("//*[@data-testid='wizard-view']//span[contains(text(), '" + scaleLabel + "')]");
        click(option);
    }

    public void enterCustomHeadcount(String headcount) {
        logger.info("Entering custom employee headcount: {}", headcount);
        clearAndType(customEmployeesInput, headcount);
    }

    public boolean isScaleErrorDisplayed() {
        return isElementDisplayed(scaleErrorMessage);
    }

    public String getScaleErrorMessage() {
        return getText(scaleErrorMessage);
    }

    public void selectCostSensitivity(String costLabel) {
        logger.info("Selecting cost sensitivity: {}", costLabel);
        By option = By.xpath("//*[@data-testid='wizard-view']//h3[contains(text(), '" + costLabel + "')]");
        click(option);
    }

    public void selectTalentFocus(String talentLabel) {
        logger.info("Selecting talent focus: {}", talentLabel);
        By option = By.xpath("//*[@data-testid='wizard-view']//h3[contains(text(), '" + talentLabel + "')]");
        click(option);
    }

    public void clickContinue() {
        logger.info("Clicking wizard 'Continue' button");
        click(btnWizardContinue);
    }

    public void clickBack() {
        logger.info("Clicking wizard 'Back' button");
        click(btnWizardBack);
    }

    public void clickGenerateRecommendation() {
        logger.info("Clicking 'Generate Grounded GCC Recommendation' button");
        click(btnWizardGenerate);
    }

    public boolean isResultsCardDisplayed() {
        return isElementDisplayed(wizardResultsCard);
    }

    public String getTopRecommendedCity() {
        return getText(topRecommendedCity);
    }

    public void clickRerunAdvisor() {
        logger.info("Clicking 'Re-run Advisor with New Parameters'");
        click(btnWizardRerun);
    }
}
