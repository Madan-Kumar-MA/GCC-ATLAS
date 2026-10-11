package com.gccatlas.tests;

import com.gccatlas.base.BaseTest;
import com.gccatlas.pages.DashboardPage;
import com.gccatlas.pages.NavbarPage;
import org.openqa.selenium.Dimension;
import org.testng.Assert;
import org.testng.annotations.Test;

public class UITest extends BaseTest {

    @Test(priority = 1, description = "TC071: Verify UI layout rendering at 1920x1080 (Desktop FHD)")
    public void testDesktopFhdViewport() {
        logger.info("Executing testDesktopFhdViewport (1920x1080)");
        getDriver().manage().window().setSize(new Dimension(1920, 1080));

        NavbarPage navbar = new NavbarPage(getDriver());
        DashboardPage dashboard = new DashboardPage(getDriver());

        Assert.assertTrue(navbar.isBrandLogoDisplayed(), "Brand logo must be visible at 1920x1080");
        Assert.assertTrue(dashboard.isDashboardLoaded(), "Dashboard must be loaded at 1920x1080");
        Assert.assertTrue(dashboard.areKpiCardsDisplayed(), "KPI cards must be visible at 1920x1080");
    }

    @Test(priority = 2, description = "TC072: Verify UI layout rendering at 1366x768 (Standard Laptop)")
    public void testStandardLaptopViewport() {
        logger.info("Executing testStandardLaptopViewport (1366x768)");
        getDriver().manage().window().setSize(new Dimension(1366, 768));

        NavbarPage navbar = new NavbarPage(getDriver());
        DashboardPage dashboard = new DashboardPage(getDriver());

        Assert.assertTrue(navbar.isBrandLogoDisplayed(), "Brand logo must be visible at 1366x768");
        Assert.assertTrue(dashboard.isDashboardLoaded(), "Dashboard must be loaded at 1366x768");
        Assert.assertTrue(dashboard.areChartsDisplayed(), "Charts must render at 1366x768");
    }

    @Test(priority = 3, description = "TC073: Verify UI layout rendering at 390x844 (Mobile)")
    public void testMobileViewport() {
        logger.info("Executing testMobileViewport (390x844)");
        getDriver().manage().window().setSize(new Dimension(390, 844));

        NavbarPage navbar = new NavbarPage(getDriver());
        DashboardPage dashboard = new DashboardPage(getDriver());

        Assert.assertTrue(navbar.isBrandLogoDisplayed(), "Brand logo must be visible at mobile viewport");
        Assert.assertTrue(dashboard.isDashboardLoaded(), "Dashboard container must load without clipping at 390x844");
    }
}
