from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.staticfiles import StaticFiles
from functools import lru_cache
import os
import json
import pyogrio

import pandas as pd

app = FastAPI()

# __dirname equivalent in Python
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
static_path = os.path.join(BASE_DIR, "front")


@lru_cache(maxsize=1)
def load_counties(shp_path: str):
    gdf = pyogrio.read_dataframe(shp_path) 
    for col in gdf.columns:
        if col != "geometry":
            gdf[col] = gdf[col].apply(
                lambda v: v.isoformat() if isinstance(v, (pd.Timestamp)) else v
            )
    return json.loads(gdf.to_json())


@app.get("/api/counties")
def get_counties():
    shp_path = os.path.join(BASE_DIR, "data", "NC_Counties", "NC_Counties.shp")
    geojson =load_counties(shp_path) 
    return JSONResponse(content=geojson)
   
app.mount("/", StaticFiles(directory=static_path, html=True), name="static")