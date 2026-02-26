# UNCC OSM Data Metadata

- **Scope:** UNCC building footprints and road polylines
- **Data source:** OpenStreetMap Overpass API (`https://overpass-api.de/api/interpreter`)
- **Spatial reference:** EPSG:4326 (WGS84)
- **Reference feature:** OSM Way ID `168664114`
- **Generated:** 2026-02-25 (Eastern Time, ~19:57 local)
- **Layers included:**
  - `building_footprints` (Polygon)
  - `internal_roads` (LineString)
- **Feature counts:**
  - Building footprints: **286**
  - Internal roads: **170**
- **Fields:**
  - `building_footprints`: `osm_id`, `osm_type`, `name`, `building`, `levels`, `material`, `geometry`
  - `internal_roads`: `osm_id`, `name`, `ref`, `highway`, `oneway`, `surface`, `lanes`, `maxspeed`, `geometry`
- **Notes:**
  - Some building names are missing in source tags (`name` may be null).
  - Road classes include `tertiary`, `residential`, `path`, `cycleway`, `primary`, `unclassified`, `service`, `primary_link`.
