import express from "express";
import shapefile from "shapefile";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// ✅ Serve static frontend files from /static folder (not whole project directory)
app.use(express.static(path.join(__dirname, "front")));

// ✅ API endpoint to serve shapefile as GeoJSON
app.get("/api/counties", async (req, res) => {
  const shpPath = path.join(__dirname, "data", "NC_Counties", "NC_Counties.shp");
  const dbfPath = path.join(__dirname, "data", "NC_Counties", "NC_Counties.dbf");

  // Check that files exist before trying to open them
  if (!fs.existsSync(shpPath) || !fs.existsSync(dbfPath)) {
    return res.status(404).json({ error: "Shapefile not found" });
  }

  try {
    const source = await shapefile.open(shpPath, dbfPath);
    const features = [];

    while (true) {
      const result = await source.read();
      if (result.done) break;
      features.push({
        type: "Feature",
        geometry: result.value.geometry,
        properties: result.value.properties,
      });
    }

    const geojson = { type: "FeatureCollection", features };
    res.json(geojson);
  } catch (err) {
    console.error("Error reading shapefile:", err);
    res.status(500).json({ error: "Failed to read shapefile" });
  }
});

const PORT = 3030;
const HOST = "0.0.0.0";

app.listen(PORT, HOST, () => {
  console.log(`✅ Server running at http://${HOST}:${PORT}`);
});
