package com.gccatlas.tests;

import com.gccatlas.base.BaseTest;
import com.gccatlas.pages.DashboardPage;
import org.testng.Assert;
import org.testng.annotations.Test;

public class DashboardTest extends BaseTest {

    @Test(priority = 1, description = "TC001: Verify dashboard overview loads with title and hero elements")
    public void testDashboardLoadsSuccessfully() {
        logger.info("Executing testDashboardLoadsSuccessfully");
        DashboardPage dashboardPage = new DashboardPage(getDriver());

        Assert.assertTrue(dashboardPage.isDashboardLoaded(), "Dashboard view should be loaded");
        String heroHeading = dashboardPage.getHeroHeadingText();
        logger.info("Dashboard hero heading: '{}'", heroHeading);
        Assert.assertTrue(heroHeading.contains("Global Capability Centres"), "Hero heading should mention Global Capability Centres");
    }

    @Test(priority = 2, description = "TC002: Verify ecosystem KPI statistic cards and values render correctly")
    public void testEcosystemKpiStatistics() {
        logger.info("Executing testEcosystemKpiStatistics");
        DashboardPage dashboardPage = new DashboardPage(getDriver());

        Assert.assertTrue(dashboardPage.areKpiCardsDisplayed(), "All 4 KPI statistic cards should be visible");

        String totalGcc = dashboardPage.getTotalGccValue();
        String workforce = dashboardPage.getWorkforceValue();
        String marketSize = dashboardPage.getMarketSizeValue();
        String tier1Hubs = dashboardPage.getTier1HubsValue();

        logger.info("Captured KPIs -> Total GCC: {}, Workforce: {}, Market Size: {}, Tier-1 Hubs: {}",
                totalGcc, workforce, marketSize, tier1Hubs);

        Assert.assertTrue(totalGcc.contains("1,620+"), "Total GCC count should display 1,620+");
        Assert.assertTrue(workforce.contains("1.9"), "Workforce estimate should display 1.9");
        Assert.assertTrue(marketSize.contains("60"), "Market size should display 60");
        Assert.assertTrue(tier1Hubs.contains("6"), "Tier-1 Hubs count should display 6");
    }

    @Test(priority = 3, description = "TC003: Verify distribution charts and market signals sections render correctly")
    public void testChartsAndMarketSignals() {
        logger.info("Executing testChartsAndMarketSignals");
        DashboardPage dashboardPage = new DashboardPage(getDriver());

        Assert.assertTrue(dashboardPage.areChartsDisplayed(), "City share and Industry maturity charts should be displayed");
        Assert.assertTrue(dashboardPage.isFeaturedCompaniesSectionDisplayed(), "Featured GCCs section should be displayed");
        Assert.assertTrue(dashboardPage.isMarketSignalsSectionDisplayed(), "Market signals and regulatory feed should be displayed");
    }
}
