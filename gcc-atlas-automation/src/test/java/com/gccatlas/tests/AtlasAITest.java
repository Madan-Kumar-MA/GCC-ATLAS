package com.gccatlas.tests;

import com.gccatlas.base.BaseTest;
import com.gccatlas.pages.AtlasAIPage;
import com.gccatlas.pages.NavbarPage;
import org.openqa.selenium.By;
import org.testng.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class AtlasAITest extends BaseTest {

    private AtlasAIPage aiPage;

    @BeforeMethod
    public void navigateToAtlasAI() {
        NavbarPage navbar = new NavbarPage(getDriver());
        navbar.clickAtlasAITab();
        aiPage = new AtlasAIPage(getDriver());
        Assert.assertTrue(aiPage.isAtlasAILoaded(), "Atlas AI page must be loaded");
    }

    @Test(priority = 1, description = "TC054: Query - Why should a technology company consider Hyderabad for a GCC?")
    public void testHyderabadTechQuery() {
        logger.info("Executing testHyderabadTechQuery");
        aiPage.sendPrompt("Why should a technology company consider Hyderabad for a GCC?");
        String reply = aiPage.getLatestAIResponseText();
        logger.info("Atlas AI response for Hyderabad: {}", reply);

        Assert.assertTrue(reply.toLowerCase().contains("hyderabad"), "Response should discuss Hyderabad");
        Assert.assertTrue(
                reply.toLowerCase().contains("cost") || reply.toLowerCase().contains("talent")
                        || reply.toLowerCase().contains("rent"),
                "Response should include empirical factors like cost, talent, or rent");
    }

    @Test(priority = 2, description = "TC055: Query - Compare Bengaluru and Hyderabad for a 500-person technology GCC")
    public void testCompareCitiesQuery() {
        logger.info("Executing testCompareCitiesQuery");
        aiPage.sendPrompt("Compare Bengaluru and Hyderabad for a 500-person technology GCC.");
        String reply = aiPage.getLatestAIResponseText();
        logger.info("Atlas AI response for 500-person comparison: {}", reply);

        Assert.assertTrue(reply.toLowerCase().contains("bengaluru") && reply.toLowerCase().contains("hyderabad"),
                "Response must compare both Bengaluru and Hyderabad");
    }

    @Test(priority = 3, description = "TC056: Query - What incentives are available in Karnataka?")
    public void testKarnatakaIncentivesQuery() {
        logger.info("Executing testKarnatakaIncentivesQuery");
        aiPage.sendPrompt("What incentives are available in Karnataka?");
        String reply = aiPage.getLatestAIResponseText();
        logger.info("Atlas AI response for Karnataka incentives: {}", reply);

        Assert.assertTrue(reply.toLowerCase().contains("karnataka"), "Response should reference Karnataka");
    }

    @Test(priority = 4, description = "TC057: Hallucination Prevention - Test unsupported future inquiry (2032 rent prediction)")
    public void testUnsupportedFuturePredictionHallucination() {
        logger.info("Executing testUnsupportedFuturePredictionHallucination");
        aiPage.sendPrompt("What will Bengaluru office rent exactly be on January 15, 2032?");
        String reply = aiPage.getLatestAIResponseText();
        logger.info("Atlas AI response for unsupported future query: {}", reply);

        // Grounded assistant must not invent a fabricated number with fake precision
        Assert.assertTrue(
                reply.toLowerCase().contains("verified") ||
                        reply.toLowerCase().contains("speculat") ||
                        reply.toLowerCase().contains("not available") ||
                        reply.toLowerCase().contains("confidence") ||
                        reply.toLowerCase().contains("current") ||
                        reply.toLowerCase().contains("estimate") ||
                        reply.toLowerCase().contains("reasoning"),
                "AI assistant should indicate data boundaries and avoid unsubstantiated fabrication");
    }

    @Test(priority = 5, description = "TC058: Negative - Verify empty prompt cannot be submitted (submit button disabled)")
    public void testEmptyPromptSubmissionDisabled() {
        logger.info("Executing testEmptyPromptSubmissionDisabled");
        boolean isSubmitEnabled = getDriver().findElement(By.cssSelector("[data-testid='btn-submit-prompt']"))
                .isEnabled();
        Assert.assertFalse(isSubmitEnabled, "Submit Query button must be disabled when prompt input is empty");
    }

    @Test(priority = 6, description = "TC059: Negative - Very long AI prompt handling")
    public void testVeryLongPrompt() {
        logger.info("Executing testVeryLongPrompt");
        String longPrompt = "Evaluating multi-region campus strategies across India: "
                + "detailed analysis request ".repeat(25);
        aiPage.sendPrompt(longPrompt);
        String reply = aiPage.getLatestAIResponseText();
        Assert.assertFalse(reply.isEmpty(), "AI should handle long prompts without UI crash");
    }

    @Test(priority = 7, description = "TC060: Verify Clear Chat resets session to welcome message")
    public void testClearChatReset() {
        logger.info("Executing testClearChatReset");
        aiPage.clickSamplePrompt(0);
        int countBefore = aiPage.getAIMessageBubblesCount();

        aiPage.clearChat();
        int countAfter = aiPage.getAIMessageBubblesCount();
        logger.info("Bubbles before reset: {}, Bubbles after reset: {}", countBefore, countAfter);
        Assert.assertTrue(countAfter <= 2, "Clear chat should reset conversation to default welcome message");
    }
}
