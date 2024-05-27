---

# Geospatial Distribution of Pre-Natal and Post-Natal Health Care: Intelligent Mapping of Maternal and Infant Health Outcomes in Rural and Urban Areas of Tamil Nadu

## Project Overview

This project aims to visualize the distribution of pre-natal and post-natal health care services and outcomes in Tamil Nadu, India, using geospatial mapping techniques. The project categorizes the health data into three main categories: Pre-Natal, Post-Natal, and Infrastructure. This intelligent mapping helps in understanding the maternal and infant health outcomes in both rural and urban areas of Tamil Nadu for the years 2019-2021.

## Categories and Data

### Pre-Natal
- **Infant Deaths**
- **Maternal Deaths**

### Post-Natal
- **Percentage who had four or more ANC District visits**
- **Percentage of births delivered in a public health facility**
- **Percentage of births delivered in a private health facility**
- **MCV/Measles/MMR/MR**
- **All basic vaccinations**
- **All age appropriate vaccinations**
- **No vaccinations**
- **Percentage of children having any anaemia (<11.0 g/dl)**
- **Percentage of women with BMI <18.5 (total thin)**
- **Percentage of women with BMI >=25.0 (Overweight or obese)**

### Infrastructure
- **Number of Primary Health Centers (PHC)**

## Folder and File Structure

### HTML Files
- `index.html` (main file for the project)

### JavaScript Files
The JavaScript files for different layers are located in the `layers` directory.

- `layers/Districts/`
  - `TAMILNADU_DISTRICTS_0.js` (common map for Tamil Nadu districts)
- `layers/ageapp_vaccinations/`
  - `TAMILNADU_DISTRICTS_0.js` (All age appropriate vaccinations)
- `layers/All_basic_vacc/`
  - `TAMILNADU_DISTRICTS_0.js` (All basic vaccinations)
- `layers/ANC_visit/`
  - `TAMILNADU_DISTRICTS_0.js` (Percentage who had four or more ANC District visits)
- `layers/birth_private_health_facility/`
  - `TAMILNADU_DISTRICTS_0.js` (Percentage of births delivered in a private health facility)
- `layers/birth_public_health_facility/`
  - `TAMILNADU_DISTRICTS_0.js` (Percentage of births delivered in a public health facility)
- `layers/bmi18/`
  - `TAMILNADU_DISTRICTS_0.js` (Percentage of women with BMI <18.5 (total thin))
- `layers/bmi25/`
  - `TAMILNADU_DISTRICTS_0.js` (Percentage of women with BMI >=25.0 (Overweight or obese))
- `layers/children_anaemia/`
  - `TAMILNADU_DISTRICTS_0.js` (Percentage of children having any anaemia (<11.0 g/dl))
- `layers/infant_deaths/`
  - `TAMILNADU_DISTRICTS_0.js` (Infant Deaths)
- `layers/maternal_death/`
  - `TAMILNADU_DISTRICTS_0.js` (Maternal Deaths)
- `layers/measles_MMR/`
  - `TAMILNADU_DISTRICTS_0.js` (MCV/Measles/MMR/MR)
- `layers/no_of_phc/`
  - `TAMILNADU_DISTRICTS_0.js` (Number of PHCs)
- `layers/no_vaccination/`
  - `TAMILNADU_DISTRICTS_0.js` (No vaccinations)

### Resources
All necessary libraries and resources are located in the `resources` directory.

- `resources/ol.css`
- `resources/fontawesome-all.min.css`
- `resources/ol-layerswitcher.css`
- `resources/qgis2web.css`
- `resources/ol.js`
- `resources/ol-layerswitcher.js`
- `resources/ol-geocoder.js`
- `resources/qgis2web_expressions.js`
- `resources/polyfills.js`
- `resources/functions.js`
- `resources/Autolinker.min.js`

## Merits of the Project

1. **Comprehensive Visualization:** Provides a detailed geospatial visualization of maternal and infant health outcomes in Tamil Nadu, facilitating better understanding and analysis.
2. **Data-Driven Insights:** Helps identify areas with inadequate health services or poor health outcomes, enabling targeted interventions.
3. **User-Friendly Interface:** The interactive map allows users to easily switch between different health indicators and view the corresponding geospatial distribution.
4. **Support for Policy Making:** Assists policymakers in making informed decisions by providing a clear visual representation of health data across different regions.
5. **Promotes Public Awareness:** Raises awareness about the disparities in health care and outcomes between rural and urban areas.

## Usage

To use the interactive map, open the `index.html` file in a web browser. Use the dropdown menu to select different health indicators and view their geospatial distribution on the map.

For a common map view of all other indicators, open the `index.html` file in a web browser.

---
