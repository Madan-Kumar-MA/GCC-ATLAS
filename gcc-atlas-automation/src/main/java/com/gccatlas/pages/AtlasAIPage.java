package com.gccatlas.pages;

import com.gccatlas.base.BasePage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;

import java.util.List;

public class AtlasAIPage extends BasePage {

    // Locators
    private final By atlasAiChatView = By.cssSelector("[data-testid='atlas-ai-chat-view']");
    private final By btnClearChat = By.cssSelector("[data-testid='btn-clear-chat']");
    private final By chatMessagesContainer = By.cssSelector("[data-testid='chat-messages-container']");
    private final By aiMessageBubble = By.cssSelector("[data-testid='ai-message-bubble']");
    private final By userMessageBubble = By.cssSelector("[data-testid='user-message-bubble']");
    private final By aiLoadingIndicator = By.cssSelector("[data-testid='ai-loading-indicator']");
    private final By aiPromptInput = By.cssSelector("[data-testid='ai-prompt-input']");
    private final By btnSubmitPrompt = By.cssSelector("[data-testid='btn-submit-prompt']");

    public AtlasAIPage(WebDriver driver) {
        super(driver);
    }

    public boolean isAtlasAILoaded() {
        return isElementDisplayed(atlasAiChatView);
    }

    public void sendPrompt(String promptText) {
        logger.info("Submitting AI prompt: '{}'", promptText);
        clearAndType(aiPromptInput, promptText);
        click(btnSubmitPrompt);
        waitForAIResponse();
    }

    public void clickSamplePrompt(int index) {
        logger.info("Clicking sample prompt at index: {}", index);
        By sampleBtn = By.cssSelector("[data-testid='sample-prompt-btn-" + index + "']");
        click(sampleBtn);
        waitForAIResponse();
    }

    public void waitForAIResponse() {
        logger.info("Waiting for AI assistant response generation");
        // Wait for loading indicator if it appears, then wait for it to disappear
        try {
            wait.until(ExpectedConditions.invisibilityOfElementLocated(aiLoadingIndicator));
        } catch (Exception e) {
            logger.debug("Loading indicator wait finished: {}", e.getMessage());
        }
    }

    public String getLatestAIResponseText() {
        List<WebElement> bubbles = findElements(aiMessageBubble);
        if (!bubbles.isEmpty()) {
            WebElement latestBubble = bubbles.get(bubbles.size() - 1);
            return latestBubble.getText().trim();
        }
        return "";
    }

    public int getAIMessageBubblesCount() {
        return findElements(aiMessageBubble).size();
    }

    public void clearChat() {
        logger.info("Clearing chat history");
        click(btnClearChat);
    }
}
