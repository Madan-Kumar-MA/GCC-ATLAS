# GCC Atlas

GCC Atlas is a data-driven dashboard for exploring India's Global Capability Centre (GCC) ecosystem. It includes city intelligence, company search, side-by-side comparisons, a site-selection wizard, state incentives, service providers, and an AI assistant.

## Technology

- Frontend: React 19, TypeScript, Vite, Tailwind CSS, Recharts, and Lucide icons
- Server: Node.js, Express, and TypeScript
- Browser automation: Java 21, Maven, TestNG, and Selenium WebDriver

## Prerequisites

- Node.js and npm
- Java 21 and Maven
- Google Chrome (Selenium Manager resolves the matching driver)

## Install and Run

From the project root:

```sh
npm ci
npm run dev -- --host 0.0.0.0 --port 3000
```

The app is served at <http://localhost:3000>. Keep the server running while executing browser tests.

To create a production build or run the TypeScript check:

```sh
npm run build
npm run lint
```

## Automated Tests

The Selenium/TestNG suite is in `gcc-atlas-automation`. It runs headless Chrome against `http://localhost:3000` and currently contains 51 tests across 10 test classes.

Run the complete regression suite from a second terminal at the project root:

```sh
cd gcc-atlas-automation
mvn test
```

To run one test class, for example:

```sh
mvn -Dtest=CompareTest test
```

### Test Coverage

| Test class | Cases | Coverage and test methods |
| --- | ---: | --- |
| `DashboardTest` | 3 | Dashboard load (`testDashboardLoadsSuccessfully`); KPI values (`testEcosystemKpiStatistics`); charts, featured companies, and market signals (`testChartsAndMarketSignals`). |
| `NavigationTest` | 4 | Module navigation (`testNavbarModuleNavigation`); global search (`testGlobalNavbarSearch`); methodology modal (`testMethodologyModal`); browser back/forward/refresh (`testBrowserBackForwardRefresh`). |
| `GCCExplorerTest` | 10 | Company search (`testSearchMicrosoft`, `testSearchGoogle`, `testSearchAmazon`, `testSearchIBM`); empty search (`testNegativeNonExistentCompanySearch`); city and industry filters (`testFilterByCity`, `testFilterByIndustry`); combined filters/reset (`testMultiFilterAndReset`); grid/table modes (`testToggleViewModes`); company details modal (`testCompanyDetailsModal`). |
| `CityIntelligenceTest` | 4 | Bengaluru (`testBengaluruCityIntelligence`); Hyderabad (`testHyderabadCityIntelligence`); six-city tab switching (`testAllMetrosTabSwitching`); navigation to comparison (`testNavigateToCompareFromCity`). |
| `CompareTest` | 4 | Bengaluru/Hyderabad matrix (`testBengaluruVsHyderabadComparison`); cost preset (`testPresetCostOptimized`); deep-tech preset (`testPresetDeepTech`); rapid-scale preset (`testPresetRapidScale`). |
| `BuildGCCTest` | 6 | Full advisor workflow (`testCompleteSetupAdvisorFlow`); negative, zero, and non-numeric headcount validation (`testNegativeScaleNegativeNumber`, `testNegativeScaleZeroEmployees`, `testNegativeScaleNonNumeric`); step navigation (`testWizardStepNavigationBackAndContinue`); reset (`testRerunAdvisorReset`). |
| `IncentivesTest` | 5 | State policies (`testKarnatakaIncentives`, `testTelanganaIncentives`, `testTamilNaduIncentives`); type filter (`testFilterByType`); reset (`testResetIncentivesFilters`). |
| `ProvidersTest` | 5 | Directory load (`testProvidersDirectoryLoads`); category, evidence-strength, and city filters (`testFilterByCategoryRealEstate`, `testFilterByEvidenceStrengthHigh`, `testFilterByCityFootprint`); reset (`testResetProvidersFilters`). |
| `AtlasAITest` | 7 | Grounded Hyderabad, city comparison, and Karnataka incentive queries (`testHyderabadTechQuery`, `testCompareCitiesQuery`, `testKarnatakaIncentivesQuery`); unsupported prediction handling (`testUnsupportedFuturePredictionHallucination`); empty/long prompts (`testEmptyPromptSubmissionDisabled`, `testVeryLongPrompt`); clear chat (`testClearChatReset`). |
| `UITest` | 3 | Desktop 1920x1080 (`testDesktopFhdViewport`); laptop 1366x768 (`testStandardLaptopViewport`); mobile 390x844 (`testMobileViewport`). |

### Test Configuration

Defaults are in `gcc-atlas-automation/src/test/resources/config.properties`:

- `baseUrl`: `http://localhost:3000`
- `browser`: `chrome`
- `headless`: `true`
- Explicit wait: 10 seconds
- Screenshot on failure: enabled; output directory: `gcc-atlas-automation/screenshots`

## Test Reports

Maven Surefire writes reports after `mvn test` to `gcc-atlas-automation/target/surefire-reports/`:

- [HTML report index](gcc-atlas-automation/target/surefire-reports/index.html)
- [Emailable HTML report](gcc-atlas-automation/target/surefire-reports/emailable-report.html)
- [Test suite XML report](gcc-atlas-automation/target/surefire-reports/TEST-TestSuite.xml)

The HTML reports are easiest to open in a browser. The XML report is suitable for CI tools. Maven regenerates these files on subsequent test runs.

## Latest Verification

The latest full regression run completed with **51 passed, 0 failed, 0 skipped**. The frontend production build also succeeded; Vite emitted a bundle-size advisory for the main JavaScript chunk.
