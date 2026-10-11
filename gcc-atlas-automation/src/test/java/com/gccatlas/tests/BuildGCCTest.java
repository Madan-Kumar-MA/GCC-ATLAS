package com.gccatlas.tests;

import com.gccatlas.base.BaseTest;
import com.gccatlas.pages.BuildGCCPage;
import com.gccatlas.pages.NavbarPage;
import org.testng.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class BuildGCCTest extends BaseTest {

    private BuildGCCPage wizardPage;

    @BeforeMethod
    public void navigateToWizard() {
        NavbarPage navbar = new NavbarPage(getDriver());
        navbar.clickBuildWizardTab();
        wizardPage = new BuildGCCPage(getDriver());
        Assert.assertTrue(wizardPage.isWizardLoaded(), "Build My GCC wizard must be loaded");
    }

    @Test(priority = 1, description = "TC035: Complete end-to-end Setup Advisor flow for 500-seat Technology GCC")
    public void testCompleteSetupAdvisorFlow() {
        logger.info("Executing testCompleteSetupAdvisorFlow");

        // Step 1: Industry
        wizardPage.selectIndustry("Technology & Software");
        wizardPage.clickContinue();

        // Step 2: Scale
        wizardPage.selectScalePreset("Medium (300-800)");
        wizardPage.clickContinue();

        // Step 3: Cost Sensitivity
        wizardPage.selectCostSensitivity("Balanced Growth");
        wizardPage.clickContinue();

        // Step 4: Talent Focus
        wizardPage.selectTalentFocus("Product Engineering");
        wizardPage.clickGenerateRecommendation();

        // Verify Results
        Assert.assertTrue(wizardPage.isResultsCardDisplayed(), "Wizard results card should be displayed");
        String topCity = wizardPage.getTopRecommendedCity();
        logger.info("Advisor Top Recommended City: {}", topCity);
        Assert.assertTrue(topCity.equalsIgnoreCase("Bengaluru") || topCity.equalsIgnoreCase("Hyderabad"),
                "Top recommended city for 500 tech GCC should be Bengaluru or Hyderabad");
    }

    @Test(priority = 2, description = "TC036: Negative Validation - Entering -100 employees triggers error message")
    public void testNegativeScaleNegativeNumber() {
        logger.info("Executing testNegativeScaleNegativeNumber");

        wizardPage.selectIndustry("Technology & Software");
        wizardPage.clickContinue();

        wizardPage.enterCustomHeadcount("-100");
        Assert.assertTrue(wizardPage.isScaleErrorDisplayed(), "Error message should be displayed for negative employee headcount");
        String errorMsg = wizardPage.getScaleErrorMessage();
        logger.info("Scale Error Message: {}", errorMsg);
        Assert.assertTrue(errorMsg.contains("positive integer"), "Error message should enforce positive integer");
    }

    @Test(priority = 3, description = "TC037: Negative Validation - Entering 0 employees triggers error message")
    public void testNegativeScaleZeroEmployees() {
        logger.info("Executing testNegativeScaleZeroEmployees");

        wizardPage.selectIndustry("Financial Services & BFSI");
        wizardPage.clickContinue();

        wizardPage.enterCustomHeadcount("0");
        Assert.assertTrue(wizardPage.isScaleErrorDisplayed(), "Error message should be displayed for 0 headcount");
        String errorMsg = wizardPage.getScaleErrorMessage();
        logger.info("Scale Error Message: {}", errorMsg);
        Assert.assertTrue(errorMsg.contains("greater than 0"), "Error message should enforce greater than 0");
    }

    @Test(priority = 4, description = "TC038: Negative Validation - Entering 'abc' non-numeric employees triggers error message")
    public void testNegativeScaleNonNumeric() {
        logger.info("Executing testNegativeScaleNonNumeric");

        wizardPage.selectIndustry("Healthcare & Life Sciences");
        wizardPage.clickContinue();

        wizardPage.enterCustomHeadcount("abc");
        Assert.assertTrue(wizardPage.isScaleErrorDisplayed(), "Error message should be displayed for non-numeric headcount");
    }

    @Test(priority = 5, description = "TC039: Verify Back and Continue buttons allow full step navigation")
    public void testWizardStepNavigationBackAndContinue() {
        logger.info("Executing testWizardStepNavigationBackAndContinue");

        wizardPage.selectIndustry("Technology & Software");
        wizardPage.clickContinue(); // Now on Step 2

        wizardPage.clickBack(); // Back to Step 1
        Assert.assertTrue(wizardPage.isWizardLoaded(), "Should navigate back to Step 1 seamlessly");

        wizardPage.clickContinue(); // Back to Step 2
        wizardPage.selectScalePreset("Small (100-300)");
        wizardPage.clickContinue(); // Step 3

        wizardPage.clickBack(); // Back to Step 2
        Assert.assertTrue(wizardPage.isWizardLoaded(), "Should navigate back from Step 3 to Step 2");
    }

    @Test(priority = 6, description = "TC040: Verify Re-run Advisor button resets wizard to Step 1")
    public void testRerunAdvisorReset() {
        logger.info("Executing testRerunAdvisorReset");

        wizardPage.selectIndustry("Technology & Software");
        wizardPage.clickContinue();
        wizardPage.selectScalePreset("Medium (300-800)");
        wizardPage.clickContinue();
        wizardPage.selectCostSensitivity("Balanced Growth");
        wizardPage.clickContinue();
        wizardPage.selectTalentFocus("Product Engineering");
        wizardPage.clickGenerateRecommendation();

        Assert.assertTrue(wizardPage.isResultsCardDisplayed(), "Results card should be visible");
        wizardPage.clickRerunAdvisor();

        Assert.assertFalse(wizardPage.isResultsCardDisplayed(), "Results card should no longer be visible after reset");
    }
}
