var wms_layers = [];

        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSMStandard_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>'})],
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var lyr_DTM_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "DTM",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DTM_1.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [3392534.342181, 6493155.543627, 3393979.534115, 6493819.353087]
                            })
                        });var lyr_RGB_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "RGB",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/RGB_2.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [3392534.930307, 6493156.100496, 3393979.236744, 6493819.274967]
                            })
                        });var format_Export_Output_3 = new ol.format.GeoJSON();
var features_Export_Output_3 = format_Export_Output_3.readFeatures(json_Export_Output_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Export_Output_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Export_Output_3.addFeatures(features_Export_Output_3);var lyr_Export_Output_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Export_Output_3, 
                style: style_Export_Output_3,
    title: 'Export_Output<br />\
    <img src="styles/legend/Export_Output_3_0.png" /> 1<br />\
    <img src="styles/legend/Export_Output_3_1.png" /> 2<br />\
    <img src="styles/legend/Export_Output_3_2.png" /> 3<br />\
    <img src="styles/legend/Export_Output_3_3.png" /> 4<br />'
        });var lyr_NDVI_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI_4.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [3392853.777620, 6493286.372802, 3393944.149898, 6493757.563252]
                            })
                        });

lyr_DTM_1.setVisible(true);lyr_RGB_2.setVisible(true);lyr_Export_Output_3.setVisible(true);lyr_NDVI_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_DTM_1,lyr_RGB_2,lyr_Export_Output_3,lyr_NDVI_4];
lyr_Export_Output_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DN': 'DN', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Export_Output_3.set('fieldImages', {'OBJECTID': '', 'DN': 'Range', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Export_Output_3.set('fieldLabels', {'OBJECTID': 'no label', 'DN': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Export_Output_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});