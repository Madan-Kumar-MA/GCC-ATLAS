package com.gccatlas.tests;

import com.gccatlas.base.BaseTest;
import com.gccatlas.pages.*;
import org.testng.Assert;
import org.testng.annotations.Test;

public class NavigationTest extends BaseTest {

    @Test(priority = 1, description = "TC004: Verify complete navbar tab switching workflow")
    public void testNavbarModuleNavigation() {
        logger.info("Executing testNavbarModuleNavigation");
        NavbarPage navbar = new NavbarPage(getDriver());
        DashboardPage dashboard = new DashboardPage(getDriver());
        GCCExplorerPage explorer = new GCCExplorerPage(getDriver());
        CityIntelligencePage cities = new CityIntelligencePage(getDriver());
        ComparePage compare = new ComparePage(getDriver());
        BuildGCCPage wizard = new BuildGCCPage(getDriver());
        IncentivesPage incentives = new IncentivesPage(getDriver());
        ProvidersPage providers = new ProvidersPage(getDriver());
        AtlasAIPage ai = new AtlasAIPage(getDriver());

        Assert.assertTrue(navbar.isNavbarDisplayed(), "Navbar must be visible");

        // 1. GCC Explorer
        navbar.clickExplorerTab();
        Assert.assertTrue(explorer.isExplorerLoaded(), "GCC Explorer should load");

        // 2. City Intelligence
        navbar.clickCityIntelligenceTab();
        Assert.assertTrue(cities.isCityIntelligenceLoaded(), "City Intelligence should load");

        // 3. Multi-City Compare
        navbar.clickCompareTab();
        Assert.assertTrue(compare.isCompareLoaded(), "City Comparison should load");

        // 4. Build My GCC
        navbar.clickBuildWizardTab();
        Assert.assertTrue(wizard.isWizardLoaded(), "Build My GCC should load");

        // 5. State Incentives
        navbar.clickIncentivesTab();
        Assert.assertTrue(incentives.isIncentivesLoaded(), "State Incentives should load");

        // 6. Service Providers
        navbar.clickProvidersTab();
        Assert.assertTrue(providers.isProvidersLoaded(), "Service Providers should load");

        // 7. Atlas AI
        navbar.clickAtlasAITab();
        Assert.assertTrue(ai.isAtlasAILoaded(), "Atlas AI should load");

        // 8. Return to Overview
        navbar.clickOverviewTab();
        Assert.assertTrue(dashboard.isDashboardLoaded(), "Overview Dashboard should load");
    }

    @Test(priority = 2, description = "TC005: Verify global navbar search routes to Explorer and filters records")
    public void testGlobalNavbarSearch() {
        logger.info("Executing testGlobalNavbarSearch");
        NavbarPage navbar = new NavbarPage(getDriver());
        GCCExplorerPage explorer = new GCCExplorerPage(getDriver());

        navbar.searchGlobal("Google");
        Assert.assertTrue(explorer.isExplorerLoaded(), "Global search should automatically navigate to Explorer view");
        Assert.assertTrue(explorer.isCompanyDisplayed("Google"), "Search results should display Google");

        navbar.clearGlobalSearch();
    }

    @Test(priority = 3, description = "TC006: Verify Methodology & Trust Architecture modal opens and closes cleanly")
    public void testMethodologyModal() {
        logger.info("Executing testMethodologyModal");
        NavbarPage navbar = new NavbarPage(getDriver());

        navbar.openMethodologyModal();
        Assert.assertTrue(navbar.isMethodologyModalDisplayed(), "Methodology modal should be visible");

        navbar.closeMethodologyModal();
        Assert.assertFalse(navbar.isMethodologyModalDisplayed(), "Methodology modal should be dismissed");
    }

    @Test(priority = 4, description = "TC007: Verify browser back, forward, and refresh during active session")
    public void testBrowserBackForwardRefresh() {
        logger.info("Executing testBrowserBackForwardRefresh");
        NavbarPage navbar = new NavbarPage(getDriver());
        DashboardPage dashboard = new DashboardPage(getDriver());

        navbar.clickExplorerTab();
        getDriver().navigate().refresh();
        Assert.assertTrue(navbar.isNavbarDisplayed(), "Navbar should remain visible and functional after page refresh");
        Assert.assertTrue(dashboard.isDashboardLoaded(), "Dashboard view reloads cleanly on single-page refresh");

        navbar.clickCityIntelligenceTab();
        getDriver().navigate().back();
        Assert.assertTrue(navbar.isNavbarDisplayed(), "Navbar should remain visible and functional after back navigation");
    }
}
