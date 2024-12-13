#!/bin/bash
### for Chapter 10 Server-side Web GIS: Raster Data
### Shell script name: getImages.sh
### to run the script, it needs admin-level privildge
### to run the script, use the following command: sudo bash ./getImages.sh
### create a new folder for the raster dataset if it doesn't exist
dir_raster=/var/lib/tomcat9/webapps/geoserver/data/data/santee/raster
mkdir -p $dir_raster

### enter this folder, then download the raster dataset (includes 9 geotiff images) from the github repository of the book vi wget
cd $dir_raster

n=9
for (( i=1; i <= $n; ++i ))
do
    echo "$i"
    wget https://github.com/wenwu-tang/webgis-handson/blob/main/data/SanteeRasters/USDA_santee_$i.tif
done
