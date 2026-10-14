import { test, expect } from '@playwright/test';

//Solution for Interview code task
test("FinOps Dashboard test", async ({ page }) =>
{
    await test.step("Navigate to finops dashboard", async () => {
        test.setTimeout(160_000);

        await page.goto("https://finops-demo.streamlit.app/",
            {
                waitUntil: 'domcontentloaded',
                timeout: 120_000,
            }
        )
    }
    )

    await test.step("Charts visiblity and screenshot", async () => {
        const frame = page.frameLocator('iframe[title="streamlitApp"]');
        
        await expect(frame.locator('h1')).toContainText(/FinOps Dashboard/i,
             {
               timeout: 60000,
             });

        const MonthlySpendChart = frame.locator('[data-testid="stPlotlyChart"]').first();
        await expect(MonthlySpendChart).toBeVisible({ timeout: 120000 });
        await MonthlySpendChart.screenshot({ path: './screenshots/chart.png' });
    })

}) ;