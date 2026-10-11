package com.gccatlas.tests;

import com.gccatlas.base.BaseTest;
import com.gccatlas.pages.ComparePage;
import com.gccatlas.pages.NavbarPage;
import org.testng.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class CompareTest extends BaseTest {

    private ComparePage comparePage;

    @BeforeMethod
    public void navigateToCompare() {
        NavbarPage navbar = new NavbarPage(getDriver());
        navbar.clickCompareTab();
        comparePage = new ComparePage(getDriver());
        Assert.assertTrue(comparePage.isCompareLoaded(), "City Compare page must be loaded");
    }

    @Test(priority = 1, description = "TC028: Verify Bengaluru vs Hyderabad side-by-side comparison matrix")
    public void testBengaluruVsHyderabadComparison() {
        logger.info("Executing testBengaluruVsHyderabadComparison");
        // Ensure Bengaluru and Hyderabad are selected
        Assert.assertTrue(comparePage.isComparisonTableDisplayed(), "Comparison table should be displayed");
        Assert.assertTrue(comparePage.isCityPresentInTable("Bengaluru"), "Bengaluru column should be present in matrix");
        Assert.assertTrue(comparePage.isCityPresentInTable("Hyderabad"), "Hyderabad column should be present in matrix");

        Assert.assertTrue(comparePage.isAiRecommendationDisplayed(), "AI recommendation box should be visible");
        String recommendation = comparePage.getAiRecommendationText();
        logger.info("AI Matrix Recommendation text: {}", recommendation);
        Assert.assertFalse(recommendation.isEmpty(), "Recommendation text should not be empty");
    }

    @Test(priority = 2, description = "TC029: Verify 'Cost Optimized' comparison preset")
    public void testPresetCostOptimized() {
        logger.info("Executing testPresetCostOptimized");
        comparePage.selectPresetCost();
        Assert.assertTrue(comparePage.isComparisonTableDisplayed(), "Comparison table should be displayed for Cost preset");
        Assert.assertTrue(comparePage.isCityPresentInTable("Hyderabad"), "Hyderabad should be in Cost preset");
    }

    @Test(priority = 3, description = "TC030: Verify 'Deep Tech & AI' comparison preset")
    public void testPresetDeepTech() {
        logger.info("Executing testPresetDeepTech");
        comparePage.selectPresetDeepTech();
        Assert.assertTrue(comparePage.isComparisonTableDisplayed(), "Comparison table should be displayed for Deep Tech preset");
        Assert.assertTrue(comparePage.isCityPresentInTable("Bengaluru"), "Bengaluru should be in Deep Tech preset");
    }

    @Test(priority = 4, description = "TC031: Verify 'Rapid Scale' comparison preset")
    public void testPresetRapidScale() {
        logger.info("Executing testPresetRapidScale");
        comparePage.selectPresetRapidScale();
        Assert.assertTrue(comparePage.isComparisonTableDisplayed(), "Comparison table should be displayed for Rapid Scale preset");
    }
}
