package com.gccatlas.tests;

import com.gccatlas.base.BaseTest;
import com.gccatlas.pages.NavbarPage;
import com.gccatlas.pages.ProvidersPage;
import org.testng.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class ProvidersTest extends BaseTest {

    private ProvidersPage providersPage;

    @BeforeMethod
    public void navigateToProviders() {
        NavbarPage navbar = new NavbarPage(getDriver());
        navbar.clickProvidersTab();
        providersPage = new ProvidersPage(getDriver());
        Assert.assertTrue(providersPage.isProvidersLoaded(), "Service Providers directory must be loaded");
    }

    @Test(priority = 1, description = "TC049: Verify Ecosystem Service Providers Directory loads with cards")
    public void testProvidersDirectoryLoads() {
        logger.info("Executing testProvidersDirectoryLoads");
        Assert.assertTrue(providersPage.getProviderCardsCount() > 0, "Provider cards must be present on page load");
    }

    @Test(priority = 2, description = "TC050: Filter by Category (Real Estate & Advisory) and verify top brokers return")
    public void testFilterByCategoryRealEstate() {
        logger.info("Executing testFilterByCategoryRealEstate");
        providersPage.filterByCategory("Real Estate & Advisory");
        Assert.assertTrue(providersPage.getProviderCardsCount() > 0, "Real Estate category should return providers");
        Assert.assertTrue(providersPage.isProviderDisplayed("JLL India") ||
                        providersPage.isProviderDisplayed("CBRE South Asia") ||
                        providersPage.isProviderDisplayed("Cushman & Wakefield"),
                "Top real estate advisory firms should be displayed");
    }

    @Test(priority = 3, description = "TC051: Filter by Evidence Strength (High) and verify vetted firms return")
    public void testFilterByEvidenceStrengthHigh() {
        logger.info("Executing testFilterByEvidenceStrengthHigh");
        providersPage.filterByEvidenceStrength("High (Public Named Case Studies / Filings)");
        Assert.assertTrue(providersPage.getProviderCardsCount() > 0, "High evidence strength should return vetted providers");
    }

    @Test(priority = 4, description = "TC052: Filter by India Office Footprint (Hyderabad)")
    public void testFilterByCityFootprint() {
        logger.info("Executing testFilterByCityFootprint");
        providersPage.filterByCityPresence("Hyderabad");
        Assert.assertTrue(providersPage.getProviderCardsCount() > 0, "Hyderabad presence should return providers");
    }

    @Test(priority = 5, description = "TC053: Verify Reset Filters restores full provider registry")
    public void testResetProvidersFilters() {
        logger.info("Executing testResetProvidersFilters");
        providersPage.filterByCategory("Consulting & Strategy");
        int countBefore = providersPage.getProviderCardsCount();

        providersPage.resetFilters();
        int countAfter = providersPage.getProviderCardsCount();
        logger.info("Count before reset: {}, Count after reset: {}", countBefore, countAfter);
        Assert.assertTrue(countAfter >= countBefore, "Reset should restore all providers");
    }
}
