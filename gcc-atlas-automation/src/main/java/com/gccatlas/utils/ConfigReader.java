package com.gccatlas.utils;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.io.InputStream;
import java.util.Properties;

public class ConfigReader {
    private static final Logger logger = LogManager.getLogger(ConfigReader.class);
    private static final Properties properties = new Properties();

    static {
        try (InputStream inputStream = ConfigReader.class.getClassLoader().getResourceAsStream("config.properties")) {
            if (inputStream != null) {
                properties.load(inputStream);
                logger.info("Configuration loaded successfully from config.properties");
            } else {
                logger.warn("config.properties file not found in classpath; using default fallback values");
            }
        } catch (Exception e) {
            logger.error("Failed to load config.properties: {}", e.getMessage(), e);
        }
    }

    public static String getProperty(String key) {
        // Allow System property override (e.g., -DbaseUrl=http://...)
        String systemProp = System.getProperty(key);
        if (systemProp != null && !systemProp.trim().isEmpty()) {
            return systemProp.trim();
        }
        return properties.getProperty(key);
    }

    public static String getProperty(String key, String defaultValue) {
        String value = getProperty(key);
        return value != null ? value : defaultValue;
    }

    public static String getBaseUrl() {
        return getProperty("baseUrl", "http://localhost:3000");
    }

    public static String getBrowser() {
        return getProperty("browser", "chrome");
    }

    public static boolean isHeadless() {
        return Boolean.parseBoolean(getProperty("headless", "true"));
    }

    public static int getExplicitWait() {
        return Integer.parseInt(getProperty("explicitWait", "10"));
    }

    public static int getImplicitWait() {
        return Integer.parseInt(getProperty("implicitWait", "0"));
    }

    public static int getPageLoadTimeout() {
        return Integer.parseInt(getProperty("pageLoadTimeout", "30"));
    }
}
