package com.gccatlas.tests;

import com.gccatlas.base.BaseTest;
import com.gccatlas.pages.IncentivesPage;
import com.gccatlas.pages.NavbarPage;
import org.testng.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class IncentivesTest extends BaseTest {

    private IncentivesPage incentivesPage;

    @BeforeMethod
    public void navigateToIncentives() {
        NavbarPage navbar = new NavbarPage(getDriver());
        navbar.clickIncentivesTab();
        incentivesPage = new IncentivesPage(getDriver());
        Assert.assertTrue(incentivesPage.isIncentivesLoaded(), "State Incentives page must be loaded");
    }

    @Test(priority = 1, description = "TC043: Filter by Karnataka state and verify gazetted policies render")
    public void testKarnatakaIncentives() {
        logger.info("Executing testKarnatakaIncentives");
        incentivesPage.filterByState("Karnataka");
        Assert.assertTrue(incentivesPage.getIncentiveCardsCount() > 0, "Karnataka should have active incentives listed");
        Assert.assertTrue(incentivesPage.isIncentiveDisplayed("Karnataka Digital Economy Mission") ||
                        incentivesPage.isIncentiveDisplayed("Beyond Bengaluru"),
                "Karnataka policy cards should be displayed");
    }

    @Test(priority = 2, description = "TC044: Filter by Telangana state and verify ICT Policy incentives render")
    public void testTelanganaIncentives() {
        logger.info("Executing testTelanganaIncentives");
        incentivesPage.filterByState("Telangana");
        Assert.assertTrue(incentivesPage.getIncentiveCardsCount() > 0, "Telangana should have active incentives listed");
        Assert.assertTrue(incentivesPage.isIncentiveDisplayed("Telangana ICT Policy") ||
                        incentivesPage.isIncentiveDisplayed("GRID"),
                "Telangana policy cards should be displayed");
    }

    @Test(priority = 3, description = "TC045: Filter by Tamil Nadu state and verify R&D / GCC Policy incentives render")
    public void testTamilNaduIncentives() {
        logger.info("Executing testTamilNaduIncentives");
        incentivesPage.filterByState("Tamil Nadu");
        Assert.assertTrue(incentivesPage.getIncentiveCardsCount() > 0, "Tamil Nadu should have active incentives listed");
    }

    @Test(priority = 4, description = "TC046: Filter by Type (Capital Subsidy) and verify filtered count")
    public void testFilterByType() {
        logger.info("Executing testFilterByType");
        incentivesPage.filterByType("Capital Subsidy");
        Assert.assertTrue(incentivesPage.getIncentiveCardsCount() > 0, "Capital Subsidy filter should return policies");
    }

    @Test(priority = 5, description = "TC047: Verify Reset Filters restores all state incentive policies")
    public void testResetIncentivesFilters() {
        logger.info("Executing testResetIncentivesFilters");
        incentivesPage.filterByState("Maharashtra");
        int countBefore = incentivesPage.getIncentiveCardsCount();

        incentivesPage.resetFilters();
        int countAfter = incentivesPage.getIncentiveCardsCount();
        logger.info("Count before reset: {}, Count after reset: {}", countBefore, countAfter);
        Assert.assertTrue(countAfter > countBefore, "Reset should restore full list of state policies");
    }
}
