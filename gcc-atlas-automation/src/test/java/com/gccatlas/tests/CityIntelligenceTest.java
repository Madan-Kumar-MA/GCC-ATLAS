package com.gccatlas.tests;

import com.gccatlas.base.BaseTest;
import com.gccatlas.pages.CityIntelligencePage;
import com.gccatlas.pages.ComparePage;
import com.gccatlas.pages.NavbarPage;
import org.testng.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class CityIntelligenceTest extends BaseTest {

    private CityIntelligencePage cityPage;

    @BeforeMethod
    public void navigateToCities() {
        NavbarPage navbar = new NavbarPage(getDriver());
        navbar.clickCityIntelligenceTab();
        cityPage = new CityIntelligencePage(getDriver());
        Assert.assertTrue(cityPage.isCityIntelligenceLoaded(), "City Intelligence must be loaded");
    }

    @Test(priority = 1, description = "TC023: Verify Bengaluru intelligence, rental ranges, and ecosystem metrics")
    public void testBengaluruCityIntelligence() {
        logger.info("Executing testBengaluruCityIntelligence");
        cityPage.selectCityTab("bengaluru");

        String activeCity = cityPage.getActiveCityName();
        String rental = cityPage.getOfficeRentalValue();
        logger.info("Active city: {}, Rent: {}", activeCity, rental);

        Assert.assertTrue(activeCity.contains("Bengaluru"), "Active city should be Bengaluru");
        Assert.assertTrue(rental.contains("₹95 - ₹160"), "Bengaluru rent should reflect ₹95 - ₹160/sqft/mo");
        Assert.assertTrue(cityPage.areKeyCitySectionsDisplayed(), "All 6 key city intelligence sections should be displayed");
        Assert.assertTrue(cityPage.isMarqueeTenantsDisplayed(), "Marquee GCC tenants should be displayed");
    }

    @Test(priority = 2, description = "TC024: Verify Hyderabad intelligence and cost advantage metrics")
    public void testHyderabadCityIntelligence() {
        logger.info("Executing testHyderabadCityIntelligence");
        cityPage.selectCityTab("hyderabad");

        String activeCity = cityPage.getActiveCityName();
        String rental = cityPage.getOfficeRentalValue();
        logger.info("Active city: {}, Rent: {}", activeCity, rental);

        Assert.assertTrue(activeCity.contains("Hyderabad"), "Active city should be Hyderabad");
        Assert.assertTrue(rental.contains("₹70 - ₹105"), "Hyderabad rent should reflect ₹70 - ₹105/sqft/mo");
        Assert.assertTrue(cityPage.areKeyCitySectionsDisplayed(), "Key sections should be displayed for Hyderabad");
    }

    @Test(priority = 3, description = "TC025: Verify multi-city tab switching across all 6 Tier-1 metros")
    public void testAllMetrosTabSwitching() {
        logger.info("Executing testAllMetrosTabSwitching");
        String[] cities = {"pune", "chennai", "mumbai", "delhi-ncr"};

        for (String city : cities) {
            cityPage.selectCityTab(city);
            String activeCity = cityPage.getActiveCityName();
            logger.info("Verified active city tab switch to: {}", activeCity);
            Assert.assertFalse(activeCity.isEmpty(), "Active city name should not be empty for " + city);
            Assert.assertTrue(cityPage.areKeyCitySectionsDisplayed(), "Key sections should render for " + city);
        }
    }

    @Test(priority = 4, description = "TC026: Click 'Compare in Multi-City Matrix' and verify navigation to Compare view")
    public void testNavigateToCompareFromCity() {
        logger.info("Executing testNavigateToCompareFromCity");
        cityPage.selectCityTab("bengaluru");
        cityPage.clickCompareCityButton();

        ComparePage comparePage = new ComparePage(getDriver());
        Assert.assertTrue(comparePage.isCompareLoaded(), "Should successfully navigate to Compare view");
    }
}
