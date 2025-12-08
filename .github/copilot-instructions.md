# Copilot Instructions

## Project Overview
This is a web-based business tools workspace with two main components:
- **Root app** (`index.html`, `main.js`, `style.css`): Insurance/quote calculation tool with calculator, premium calculations, and text copying utilities
- **Tracker app** (`tracker/`): Real-time conversion metrics dashboard with localStorage persistence and Google Charts integration

## Architecture & Data Flow

### Root Application - Quote Calculator
**Purpose**: Calculation and quote management interface for insurance/premium workflows.

**Key Functions** (in `main.js`):
- Calculator: `appendDigit()`, `appendOperator()`, `calculate()`, `clearDisplay()`
- Premium Calculations: `calculateOverride()`, `calculateExtraMonths()`, `calculateDiscount()`, `calculateDivision()`, `calculateDiffInprice()`
- Utilities: Copy-to-clipboard functions (`myFunction()` through `myFunction5()`) for predetermined messages
- Real-time clock display via `updateTime()` (ticks every 1s)

**Data Patterns**:
- DOM element values stored directly (no framework state management)
- Display-focused calculations with `.toFixed(2)` for currency formatting
- `eval()` used for calculator input evaluation (security consideration for future)

### Tracker Application - Conversion Dashboard
**Purpose**: Real-time tracking of daily sales metrics with month-to-date aggregation.

**Key Functions** (in `tracker/index.js`):
- Session management: `getLocalStorageData()` - loads persisted metrics on page load
- Metrics updates: `updateUnits()`, `updateNegativeDisposition()`, `updateConversion()`
- Dashboard: `updateDailyTarget()`, `updateDailyUnits()` - visual progress with emoji van animation
- Visualization: Google Charts gauge chart with 3-second refresh intervals

**Data Persistence**:
- localStorage keys: `"month to date units"`, `"Month to date negative disposition"`, `"month to date conversion"`
- Data persists across sessions - critical for MTD (month-to-date) reporting
- Conversion formula: `(dailyUnits / (dailyUnits + negativeDisposition)) * 100`

**UI Elements**:
- Manual bar chart with 9 time-slot bars (`#bar1`-`#bar9`)
- Target progress with range slider (0-40 range)
- Live emoji van animation that shifts right by `daily_units * 5px`

## Development Patterns & Conventions

### DOM Interaction
- Direct `document.getElementById()` throughout (no DOM query libraries)
- Form inputs as primary data source, updated via `value` property
- Event handlers inline in HTML (`onclick`, `onload`, `onkeyup`, `onmousemove`)

### Styling
- CSS embedded in `<style>` tag in HTML and external `style.css`
- Helvetica/sans-serif font family
- Color scheme: purples and blues (`rgb(84, 84, 239)`, `rgb(214, 224, 239)`)
- CSS scoped to minimal selectors (body, nav, .btn, .bar classes)

### JavaScript Patterns
- Global variables for state (e.g., `unit`, `negativeDisposition`, `monthToDateUnits`)
- `setInterval()` for real-time updates (calculator clock, gauge chart)
- No async/await - synchronous DOM manipulation
- Console logging for debugging (preserved `console.log()` statements)

### External Dependencies
- **Google Charts API**: Gauge visualization in tracker (loads from `https://www.gstatic.com/charts/loader.js`)
- **Bootstrap** & **jQuery**: Commented out in root `index.html` (legacy, not active)

## Important Files & Their Role
- **`index.html`**: Root layout with embedded CSS and calculator UI
- **`main.js`**: 327 lines of utility functions; primary business logic (premium calculations)
- **`style.css`**: Root styling (87 lines, deprecated by inline styles in HTML)
- **`tracker/index.html`**: Dashboard layout with bar chart skeleton, buttons, and gauge container
- **`tracker/index.js`**: 329 lines of metrics logic, localStorage sync, and Google Charts initialization
- **`tracker/style.css`**: Dashboard-specific styling (bar charts, progress visualization)

## Before Making Changes
1. **localStorage keys are constants**: When modifying tracker storage, update all references (check `getLocalStorageData()` for current key names)
2. **Real-time intervals**: `setInterval()` calls in tracker recalculate metrics every 1-3 seconds—modifications may cause inconsistent updates
3. **Calculation precision**: Use `.toFixed(2)` for currency display (already established pattern)
4. **External API dependency**: Google Charts loads async; verify chart initialization timing if modifying tracker startup
5. **State consistency**: Root app mixes global variables with DOM values; sync both when adding calculations

## Suggested Improvements (Non-Blocking)
- Migrate state to centralized objects (currently scattered across globals)
- Replace `eval()` in calculator with `Function()` or math parser for security
- Deactivate Bootstrap/jQuery imports or remove if unused
