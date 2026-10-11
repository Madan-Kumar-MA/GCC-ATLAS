package com.gccatlas.utils;

import org.apache.commons.io.FileUtils;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class ScreenshotUtil {
    private static final Logger logger = LogManager.getLogger(ScreenshotUtil.class);

    public static String captureScreenshot(WebDriver driver, String screenshotName) {
        if (driver == null) {
            logger.warn("Driver is null; cannot capture screenshot for {}", screenshotName);
            return null;
        }

        try {
            String timestamp = new SimpleDateFormat("yyyyMMdd_HHmmss_SSS").format(new Date());
            String sanitizedName = screenshotName.replaceAll("[^a-zA-Z0-9_-]", "_");
            String fileName = sanitizedName + "_" + timestamp + ".png";

            String screenshotDir = ConfigReader.getProperty("screenshotPath", "screenshots");
            File directory = new File(screenshotDir);
            if (!directory.exists()) {
                boolean created = directory.mkdirs();
                if (created) {
                    logger.debug("Created screenshots directory: {}", directory.getAbsolutePath());
                }
            }

            File srcFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
            File destFile = new File(directory, fileName);
            FileUtils.copyFile(srcFile, destFile);

            logger.info("Screenshot successfully captured: {}", destFile.getAbsolutePath());
            return destFile.getAbsolutePath();
        } catch (IOException e) {
            logger.error("Failed to save screenshot {}: {}", screenshotName, e.getMessage());
            return null;
        } catch (Exception e) {
            logger.error("Unexpected error taking screenshot {}: {}", screenshotName, e.getMessage());
            return null;
        }
    }
}
