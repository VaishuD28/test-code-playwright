# Playwright FinOps Dashboard Test

This project contains a Playwright end-to-end test for the FinOps demo dashboard:
<https://finops-demo.streamlit.app/>.

## What the test does

The `FinOps Dashboard test` in `tests/demo.spec.ts`:

1. Opens the FinOps dashboard in Chromium.
2. Finds the Streamlit app iframe and verifies that its heading contains
   **FinOps Dashboard**.
3. Waits for the first Plotly chart in the iframe to become visible.
4. Captures that chart as a PNG screenshot.

## Run the test

Install dependencies and the Chromium browser (the first time only):

```powershell
npm install
npx playwright install chromium
```

Run the test:

```powershell
npx playwright test tests/demo.spec.ts --project=chromium
```

The test runs with a visible browser window. It needs an internet connection to
reach the hosted dashboard.

## Screenshot

The chart screenshot is saved to:

```text
screenshots/chart.png
```

This path is relative to the project root (the terminal's current directory when
the test is run). The screenshot is explicitly captured by the test after the
chart is visible, so it is created on a successful run as well as a failed run
that reaches that step. Each run overwrites the previous `chart.png`.

Playwright is also configured to take an automatic page screenshot only when a
test fails; those test artifacts are stored with the test results, separately
from `screenshots/chart.png`.
