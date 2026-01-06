---
sidebar_position: 7
title: Widget Configuration
description: Configure booking widget appearance and behavior
---

# Widget Configuration

## Feature Overview

The Widget Configuration feature allows administrators to customize how the booking/search widget appears and behaves on the company website. Using this feature, admins can control visible sections, language, currency, search behavior, UI theme, and input fields shown to end users. This ensures the widget matches both business requirements and website branding.

---

## Navigation Path

**System Administration → Configuration → Widget**

---

## Step-by-Step: Configure Widget

### Step 1: Access Widget Configuration

1. Log in to the admin dashboard
2. Navigate to **System Administration** from the left sidebar
3. Click on **Configuration**
4. Select the **Widget** tab

![Widget Configuration Tab](/img/screenshots/widget-tab.png)

---

### Step 2: Configure Basic Settings

1. Scroll to the **Basic Configuration** section
2. Select **Widget language** from the dropdown menu
3. Choose **Currency code** (e.g., USD, EUR, BDT)
4. Set **Trips to display per page** (recommended: 15-20)
5. Select **Default date format** (e.g., DD/MM/YYYY)
6. Toggle **Show all tours by default** (ON/OFF)
7. Enter **Class name prefix** if you need custom CSS styling

<!-- ![Basic Configuration Section](/img/screenshots/widget-basic-config.png) -->

:::tip Best Practice
Set "Trips to display per page" to 15-20 for optimal user experience on both desktop and mobile.
:::

---

### Step 3: Set Up Redirect URLs (QA Configuration)

1. Scroll to the **QA Configuration** section
2. Enter **Search redirect URL** (where users go after searching)
3. Enter **Booking redirect URL** (where users go to complete booking)
4. Enter **Booking success redirect URL** (where users go after successful booking)
5. Click **Save** or **Update** button

<!-- ![QA Configuration Section](/img/screenshots/widget-qa-config.png) -->

:::caution Important
Test all redirect URLs before saving to ensure they work correctly. Broken URLs will disrupt the user journey.
:::

---

### Step 4: Configure Search Parameters

1. Scroll to the **Search Parameters Configuration** section
2. Review the list of available search inputs
3. **Drag & drop** to reorder inputs based on priority
4. **Toggle ON/OFF** switches to show/hide specific inputs
5. Consider which fields are most important for your users
6. Click **Save**

<!-- ![Search Parameters Configuration](/img/screenshots/widget-search-params.png) -->

:::note
Hiding search parameters can impact user search experience—review carefully before disabling inputs.
:::

---

### Step 5: Customize Theme Colors

1. Scroll to the **Theme Configuration** section
2. Click on the **Theme color** field
3. Use the color picker or enter hex code (e.g., #2E7D32)
4. Repeat for all color settings:
   - Text color
   - Secondary text color
   - Background color
   - Foreground color
   - Border color
5. Preview changes if available
6. Click **Save**

<!-- ![Theme Configuration Section](/img/screenshots/widget-theme-config.png) -->

:::tip Design Tip
Use a color contrast checker to ensure text remains readable with your chosen color scheme.
:::

---

### Step 6: Set Font Preferences

1. Scroll to the **Font Configuration** section
2. Select **Regular font** family from dropdown
3. Select **Heading font** family from dropdown
4. Adjust font sizes if needed:
   - Heading font size (default: 30px)
   - Title font size (default: 20px)
   - Regular font size (default: 16px)
   - Default font size (default: 13px)
5. Click **Save**

<!-- ![Font Configuration Section](/img/screenshots/widget-font-config.png) -->

:::warning
Font and color changes should be tested on both desktop and mobile views before going live.
:::

---



## Field Descriptions

### Basic Configuration Fields

| Field | Description | Accepted Values | Example |
|-------|-------------|-----------------|---------|
| **Widget language** | The default language in which the widget will be displayed to users | Language codes | English, Swedish, Bengali |
| **Currency code** | The currency used to display prices in the widget | ISO currency codes | USD, EUR, BDT, SEK |
| **Trips to display per page** | Number of tours shown per page in widget search results | Number (1-100) | 20 |
| **Default date format** | Format used to display dates throughout the widget | Date format patterns | DD/MM/YYYY, MM/DD/YYYY |
| **Show all tours by default** | When enabled, displays all available tours on widget load without filters | Boolean (ON/OFF) | ON |
| **Class name prefix** | Prefix added to CSS classes for custom styling purposes | Text string | vaylo-widget- |
| **Search redirect URL** | URL where users are redirected after performing a search in the widget | Full URL with protocol | https://example.com/search-results |
| **Booking redirect URL** | URL where users are sent when proceeding to book a tour from the widget | Full URL with protocol | https://example.com/booking |
| **Booking success redirect URL** | URL where users land after successfully completing a booking | Full URL with protocol | https://example.com/booking-confirmation |

:::caution URL Requirements
- Must include protocol (https://)
- Must be valid and accessible
- Should point to pages on your domain
- Test before saving
:::

---

### Search Parameters

Control which search inputs appear on the widget and their order.

| Parameter | Purpose | User Input Type |
|-----------|---------|-----------------|
| **Departure date** | Date when tour begins | Date picker |
| **Tour tag** | Category or classification of tour | Dropdown/Multi-select |
| **Country** | Destination country | Dropdown |
| **Location** | Specific city or region | Dropdown |
| **Number of passengers** | How many people are traveling | Number input |
| **Tags** | Additional tour characteristics | Multi-select |
| **Destination** | Final destination point | Dropdown |
| **To departure date** | End date range for departure | Date picker |
| **From departure date** | Start date range for departure | Date picker |
| **Category** | Tour type classification | Dropdown |
| **Passenger types** | Adult, child, infant, etc. | Multi-select |
| **Pick-up location** | Where passengers will be picked up | Dropdown |

**Reordering:** Drag parameters up or down to change display order  
**Visibility:** Toggle switch to show/hide each parameter

:::note Usage Recommendation
Essential parameters (usually shown):
- Departure date
- Number of passengers
- Destination/Location

Optional parameters (show based on needs):
- Tour tags, categories
- Pick-up locations
- Passenger types
:::

---

### Theme Configuration Fields

#### Color Settings

| Color Field | Where It's Used | Recommended Value |
|-------------|-----------------|-------------------|
| **Theme color** | Primary buttons, links, active states | Your brand's main color |
| **Text color** | Main body text, headings | Dark gray (#333333) or black |
| **Secondary text color** | Supporting text, labels, descriptions | Medium gray (#666666) |
| **Background color** | Widget main background | White (#FFFFFF) or light color |
| **Foreground color** | Cards, panels, content containers | Off-white (#F5F5F5) |
| **Border color** | Dividers, input borders, separators | Light gray (#E0E0E0) |

**Color Format:** Hex codes (e.g., #2E7D32) or RGB values

:::tip Color Best Practices
- Maintain sufficient contrast (WCAG AA standard minimum)
- Test colors in both light and dark environments
- Ensure brand consistency
- Consider color blindness accessibility
:::

---

### Font Configuration Fields

#### Font Families

| Field | Description | Applies To | Examples |
|-------|-------------|------------|----------|
| **Regular font** | Font used for body text and general content | Paragraphs, descriptions, labels | Arial, Open Sans, Roboto |
| **Heading font** | Font used for titles and section headers | H1, H2, H3 tags, titles | Montserrat, Poppins, Playfair |

#### Font Sizes

| Field | Default Size | Where It's Used | Recommended Range |
|-------|--------------|-----------------|-------------------|
| **Heading font size** | 30px | Main page titles, primary headings | 24px - 36px |
| **Title font size** | 20px | Section titles, card titles | 18px - 24px |
| **Regular font size** | 16px | Body text, descriptions | 14px - 18px |
| **Default font size** | 13px | Labels, small text, metadata | 12px - 14px |

:::warning Font Size Considerations
- Larger sizes improve readability but take more space
- Mobile devices may need adjusted sizes
- Test across different screen sizes
- Keep hierarchy clear (heading > title > regular > default)
:::

---

## Screenshots Reference

All screenshots should be taken from the Vaylo Admin Dashboard with realistic example data:

| Screenshot | Shows | Section |
|------------|-------|---------|
| `widget-tab.png` | Widget tab location in Configuration menu | Navigation |
| `widget-basic-config.png` | Basic configuration form fields | Basic Settings |
| `widget-qa-config.png` | Redirect URL input fields | QA Configuration |
| `widget-search-params.png` | Drag-and-drop search parameter list | Search Parameters |
| `widget-theme-config.png` | Color picker and theme settings | Theme Configuration |
| `widget-font-config.png` | Font family dropdowns and size inputs | Font Configuration |

---
