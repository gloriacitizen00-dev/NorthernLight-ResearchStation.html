# NorthernLight-ResearchStation.html
An interactive digital laboratory for space observation and data visualization. Explore space weather, auroral activity, satellite observations, Earth imagery, and orbital data through scientific datasets and interactive tools. Developed by SkyCortex.

# Space Research Station

**A Digital Laboratory for Space Observation**

Developed by **SkyCortex**

## About the Project

Space Research Station is an independent digital project focused on space observation, scientific data visualization, and interactive web technologies.

The platform is being developed to explore different areas of space science through publicly available datasets, satellite imagery, data processing, and interactive visualizations.

The project is currently in an early development stage. Its first implemented module is **Northern Light Research Station**, an experimental dashboard focused on space weather and auroral activity indicators.

This repository documents what is currently implemented, what remains experimental, and what is planned for future development.

---

## 1. What the Project Currently Does

The current prototype includes the following features:

### Space Weather Monitoring

The dashboard makes requests to publicly available NOAA Space Weather Prediction Center (SWPC) data endpoints.

The implemented requests target:

- Solar wind measurements.
- Proton speed.
- Proton density.
- Proton temperature.
- Planetary Kp index.
- Interplanetary Magnetic Field (IMF Bz).

The application is designed to refresh these datasets approximately every 60 seconds.

**Important:** Successful data retrieval, correct parsing, and data freshness must be verified independently for each source. The current implementation still requires improvements to its error handling and data validation.

### Experimental Aurora Activity Indicator

The prototype includes a custom JavaScript calculation that assigns a score based on:

- Solar wind speed.
- Solar wind density.
- Planetary Kp index.
- IMF Bz.

The result is displayed as a percentage.

This is an experimental, rule-based score created for the project. It is **not a scientifically calibrated aurora probability model**, nor does it guarantee that an aurora will be visible at a particular location.

### Satellite Imagery

The Earth Observation section loads a publicly accessible GOES-16 full-disk imagery product from NOAA.

The image is used as a visual element within the interface.

The current implementation does not provide an independent 3D Earth model or interactive geographic satellite observation system.

### Geographic Visualization

The prototype includes a world map with decorative aurora-zone overlays.

These overlays are visual elements. They are not dynamically calculated geographic predictions or a validated real-time auroral boundary model.

### Observation Reference Location

The current interface displays Tromsø, Norway, as a fixed reference location for aurora observation.

It does not currently calculate personalized visibility conditions using a user's geographic coordinates, local weather, cloud coverage, or local darkness.

### Data Display and Debugging

The prototype includes:

- A dashboard for displaying selected measurements.
- A connection status area.
- A raw-data debugging panel.
- Timestamps received from the data source.

---

## 2. What the Project Does NOT Currently Do

To avoid confusion, the following capabilities are not yet implemented:

- No real-time orbital tracking of artificial satellites.
- No satellite trajectory calculations.
- No interactive satellite positioning system.
- No independent 3D Earth visualization engine.
- No global real-time aurora visibility prediction.
- No scientifically validated aurora probability forecasting model.
- No local cloud-cover or atmospheric visibility analysis.
- No personalized observation forecasts based on user location.
- No independent solar observation or solar imaging system.
- No historical space-weather database or long-term analytical engine.
- No automated scientific research or discovery system.
- No integration of astrology, tarot, or symbolic interpretation into scientific measurements.

The presence of a visual element, a dashboard label, or a calculated score does not mean that the corresponding scientific system has been implemented.

---

## 3. Current Technical Stack

The current prototype uses:

- **HTML5** — page structure.
- **CSS3** — interface design, layout, and visual effects.
- **JavaScript (ES6+)** — API requests, data handling, calculations, and dynamic interface updates.
- **NOAA SWPC Data Services** — external space-weather datasets.
- **GOES-16 NOAA Imagery** — satellite imagery.

The project is currently a browser-based web application.

---

## 4. Current Development Limitations

The existing prototype requires additional engineering work before its measurements and visualizations can be considered reliable research tools.

Known areas requiring attention include:

- Validation of NOAA response formats and data parsing.
- Independent connection monitoring for each data source.
- Better handling of missing, invalid, or outdated measurements.
- Scientific documentation of the parameters used in calculations.
- Clear distinction between measured data, derived values, and decorative visualizations.
- More accurate geographic and satellite imagery representation.
- Accessibility, responsive design, and code organization.

The experimental aurora score must not be presented as an official NOAA forecast or a validated scientific probability.

---

## 5. Planned Development

The long-term objective is to expand Space Research Station into a modular space observation and data visualization platform.

Potential development areas include:

### Space Environment
Solar activity, solar wind, geomagnetic conditions, and auroral observations.

### Orbital Intelligence
Artificial satellite identification, orbital information, position visualization, and trajectory analysis.

### Earth Observation
Satellite imagery, atmospheric observations, and geographic data visualization.

### Scientific Data Laboratory
Data processing, historical datasets, analytical tools, and interactive scientific visualizations.

These are development objectives, not claims about currently available functionality. Each module will be documented as it is actually implemented and tested.

---

## 6. Data Sources and Attribution

The current prototype uses publicly accessible data services provided by NOAA's Space Weather Prediction Center and satellite imagery hosted by NOAA.

Data availability, update frequency, formats, and usage conditions are determined by the respective providers.

Space Research Station is an independent project and is not an official NOAA product. NOAA does not endorse this project.

---

## 7. Project Status

**Status: Early Development / Experimental Prototype**

Space Research Station is an evolving independent project developed by SkyCortex.

Its purpose is to build a technically grounded platform for exploring space-related datasets, scientific visualization, and interactive observation tools.

Features will only be described as implemented after their functionality has been developed and tested.

---

**Developed by SkyCortex**  
Costa Rica
