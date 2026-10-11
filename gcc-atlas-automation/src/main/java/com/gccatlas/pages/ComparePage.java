package com.gccatlas.pages;

import com.gccatlas.base.BasePage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class ComparePage extends BasePage {

    // Locators
    private final By compareView = By.cssSelector("[data-testid='compare-view']");
    private final By presetBalanced = By.cssSelector("[data-testid='preset-balanced']");
    private final By presetCost = By.cssSelector("[data-testid='preset-cost']");
    private final By presetDeeptech = By.cssSelector("[data-testid='preset-deeptech']");
    private final By presetRapidscale = By.cssSelector("[data-testid='preset-rapidscale']");
    private final By aiRecommendationBox = By.cssSelector("[data-testid='ai-recommendation-box']");
    private final By comparisonTable = By.cssSelector("[data-testid='comparison-table']");

    public ComparePage(WebDriver driver) {
        super(driver);
    }

    public boolean isCompareLoaded() {
        return isElementDisplayed(compareView);
    }

    public void toggleCity(String cityId) {
        logger.info("Toggling city selection: {}", cityId);
        By chip = By.cssSelector("[data-testid='compare-chip-" + cityId.toLowerCase().replace(" ", "-") + "']");
        click(chip);
    }

    public void selectPresetBalanced() {
        logger.info("Selecting comparison preset: Balanced");
        click(presetBalanced);
    }

    public void selectPresetCost() {
        logger.info("Selecting comparison preset: Cost Optimized");
        click(presetCost);
    }

    public void selectPresetDeepTech() {
        logger.info("Selecting comparison preset: Deep Tech");
        click(presetDeeptech);
    }

    public void selectPresetRapidScale() {
        logger.info("Selecting comparison preset: Rapid Scale");
        click(presetRapidscale);
    }

    public boolean isAiRecommendationDisplayed() {
        return isElementDisplayed(aiRecommendationBox);
    }

    public String getAiRecommendationText() {
        return getText(aiRecommendationBox);
    }

    public boolean isComparisonTableDisplayed() {
        return isElementDisplayed(comparisonTable);
    }

    public boolean isCityPresentInTable(String cityName) {
        By cityHeader = By.xpath("//*[@data-testid='comparison-table']//th[contains(., '" + cityName + "')]");
        return isElementPresent(cityHeader);
    }
}
