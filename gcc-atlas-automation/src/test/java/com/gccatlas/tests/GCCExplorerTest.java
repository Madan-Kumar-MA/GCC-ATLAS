package com.gccatlas.tests;

import com.gccatlas.base.BaseTest;
import com.gccatlas.pages.GCCExplorerPage;
import com.gccatlas.pages.NavbarPage;
import org.testng.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class GCCExplorerTest extends BaseTest {

    private GCCExplorerPage explorerPage;

    @BeforeMethod
    public void navigateToExplorer() {
        NavbarPage navbar = new NavbarPage(getDriver());
        navbar.clickExplorerTab();
        explorerPage = new GCCExplorerPage(getDriver());
        Assert.assertTrue(explorerPage.isExplorerLoaded(), "GCC Explorer page must be loaded before test execution");
    }

    @Test(priority = 1, description = "TC008: Search for Microsoft and verify correct company card returns")
    public void testSearchMicrosoft() {
        logger.info("Executing testSearchMicrosoft");
        explorerPage.searchCompany("Microsoft");
        Assert.assertTrue(explorerPage.isCompanyDisplayed("Microsoft"), "Microsoft card should be displayed in search results");
    }

    @Test(priority = 2, description = "TC009: Search for Google and verify correct company card returns")
    public void testSearchGoogle() {
        logger.info("Executing testSearchGoogle");
        explorerPage.searchCompany("Google");
        Assert.assertTrue(explorerPage.isCompanyDisplayed("Google"), "Google card should be displayed in search results");
    }

    @Test(priority = 3, description = "TC010: Search for Amazon and verify correct company card returns")
    public void testSearchAmazon() {
        logger.info("Executing testSearchAmazon");
        explorerPage.searchCompany("Amazon");
        Assert.assertTrue(explorerPage.isCompanyDisplayed("Amazon"), "Amazon card should be displayed in search results");
    }

    @Test(priority = 4, description = "TC011: Search for IBM and verify correct company card returns")
    public void testSearchIBM() {
        logger.info("Executing testSearchIBM");
        explorerPage.searchCompany("IBM");
        Assert.assertTrue(explorerPage.isCompanyDisplayed("IBM"), "IBM card should be displayed in search results");
    }

    @Test(priority = 5, description = "TC012: Negative Search - Verify non-existent query displays zero results empty state")
    public void testNegativeNonExistentCompanySearch() {
        logger.info("Executing testNegativeNonExistentCompanySearch");
        explorerPage.searchCompany("XYZ_NON_EXISTENT_COMPANY_123");
        Assert.assertTrue(explorerPage.isEmptyResultsDisplayed(), "Empty results state should be displayed for non-existent company");
        Assert.assertFalse(explorerPage.isCompanyDisplayed("Microsoft"), "No regular company cards should be visible");
    }

    @Test(priority = 6, description = "TC013: Filter by City (Bengaluru) and verify results correspond to city")
    public void testFilterByCity() {
        logger.info("Executing testFilterByCity");
        explorerPage.filterByCity("Bengaluru");
        Assert.assertTrue(explorerPage.getDisplayedCompanyCardsCount() > 0, "Bengaluru should return multiple GCC entries");
        Assert.assertTrue(explorerPage.isCompanyDisplayed("Microsoft"), "Microsoft should be in Bengaluru results");
    }

    @Test(priority = 7, description = "TC014: Filter by Industry (BFSI) and verify relevant companies return")
    public void testFilterByIndustry() {
        logger.info("Executing testFilterByIndustry");
        explorerPage.filterByIndustry("BFSI");
        Assert.assertTrue(explorerPage.getDisplayedCompanyCardsCount() > 0, "BFSI filter should return GCC entries");
        Assert.assertTrue(explorerPage.isCompanyDisplayed("JPMorgan Chase") || explorerPage.isCompanyDisplayed("Goldman Sachs"),
                "BFSI results should include marquee banks like JPMorgan Chase or Goldman Sachs");
    }

    @Test(priority = 8, description = "TC015: Multi-filter combination (City + Industry) and Reset Filters")
    public void testMultiFilterAndReset() {
        logger.info("Executing testMultiFilterAndReset");
        explorerPage.filterByCity("Hyderabad");
        explorerPage.filterByIndustry("Technology");

        int filteredCount = explorerPage.getDisplayedCompanyCardsCount();
        logger.info("Filtered count for Hyderabad + Technology: {}", filteredCount);
        Assert.assertTrue(filteredCount > 0, "Should have matching companies for Hyderabad + Technology");

        explorerPage.resetFilters();
        int resetCount = explorerPage.getDisplayedCompanyCardsCount();
        logger.info("Count after resetting filters: {}", resetCount);
        Assert.assertTrue(resetCount >= filteredCount, "Reset filters should restore all company cards");
    }

    @Test(priority = 9, description = "TC016: Toggle view modes between Grid and Table")
    public void testToggleViewModes() {
        logger.info("Executing testToggleViewModes");
        explorerPage.switchToTableView();
        Assert.assertTrue(explorerPage.isElementPresent(org.openqa.selenium.By.cssSelector("[data-testid='companies-table']")),
                "Table view should be visible");

        explorerPage.switchToGridView();
        Assert.assertTrue(explorerPage.getDisplayedCompanyCardsCount() > 0, "Grid cards should be visible");
    }

    @Test(priority = 10, description = "TC017: Open and close Company Details Modal")
    public void testCompanyDetailsModal() {
        logger.info("Executing testCompanyDetailsModal");
        explorerPage.searchCompany("Microsoft");
        explorerPage.clickCompanyCard("microsoft");
        Assert.assertTrue(explorerPage.isCompanyModalDisplayed(), "Company modal should be displayed");

        explorerPage.closeCompanyModal();
        Assert.assertFalse(explorerPage.isCompanyModalDisplayed(), "Company modal should be closed");
    }
}
