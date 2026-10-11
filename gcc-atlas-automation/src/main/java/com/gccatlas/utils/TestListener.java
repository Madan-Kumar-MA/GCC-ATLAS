package com.gccatlas.utils;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.testng.ITestContext;
import org.testng.ITestListener;
import org.testng.ITestResult;

public class TestListener implements ITestListener {
    private static final Logger logger = LogManager.getLogger(TestListener.class);

    @Override
    public void onStart(ITestContext context) {
        logger.info("========== TEST SUITE STARTED: {} ==========", context.getName());
    }

    @Override
    public void onFinish(ITestContext context) {
        logger.info("========== TEST SUITE FINISHED: {} ==========", context.getName());
        logger.info("Total Passed: {}, Failed: {}, Skipped: {}",
                context.getPassedTests().size(),
                context.getFailedTests().size(),
                context.getSkippedTests().size());
    }

    @Override
    public void onTestStart(ITestResult result) {
        logger.info(">>> STARTING TEST: {}.{}()",
                result.getTestClass().getRealClass().getSimpleName(),
                result.getMethod().getMethodName());
    }

    @Override
    public void onTestSuccess(ITestResult result) {
        logger.info("<<< TEST PASSED: {}.{}() [Duration: {} ms]",
                result.getTestClass().getRealClass().getSimpleName(),
                result.getMethod().getMethodName(),
                (result.getEndMillis() - result.getStartMillis()));
    }

    @Override
    public void onTestFailure(ITestResult result) {
        logger.error("!!! TEST FAILED: {}.{}() [Duration: {} ms]",
                result.getTestClass().getRealClass().getSimpleName(),
                result.getMethod().getMethodName(),
                (result.getEndMillis() - result.getStartMillis()));
        if (result.getThrowable() != null) {
            logger.error("Failure Reason: {}", result.getThrowable().getMessage(), result.getThrowable());
        }

        WebDriver driver = DriverFactory.getDriver();
        if (driver != null) {
            String testName = result.getTestClass().getRealClass().getSimpleName() + "_" + result.getMethod().getMethodName() + "_FAIL";
            String path = ScreenshotUtil.captureScreenshot(driver, testName);
            if (path != null) {
                logger.info("Failure screenshot saved at: {}", path);
            }
        } else {
            logger.warn("WebDriver instance is null; cannot capture failure screenshot for {}", result.getMethod().getMethodName());
        }
    }

    @Override
    public void onTestSkipped(ITestResult result) {
        logger.warn("--- TEST SKIPPED: {}.{}()",
                result.getTestClass().getRealClass().getSimpleName(),
                result.getMethod().getMethodName());
        if (result.getThrowable() != null) {
            logger.warn("Skip Reason: {}", result.getThrowable().getMessage());
        }
    }
}
