var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_TAMILNADU_DISTRICTS_1 = new ol.format.GeoJSON();
var features_TAMILNADU_DISTRICTS_1 = format_TAMILNADU_DISTRICTS_1.readFeatures(json_TAMILNADU_DISTRICTS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TAMILNADU_DISTRICTS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TAMILNADU_DISTRICTS_1.addFeatures(features_TAMILNADU_DISTRICTS_1);
var lyr_TAMILNADU_DISTRICTS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TAMILNADU_DISTRICTS_1,
maxResolution:28004.466152261964,
 
                style: style_TAMILNADU_DISTRICTS_1,
                popuplayertitle: "TAMIL NADU_DISTRICTS",
                interactive: true,
    title: 'TAMIL NADU_DISTRICTS<br />\
    <img src="styles/legend/TAMILNADU_DISTRICTS_1_0.png" /> 3.7 - 12.5<br />\
    <img src="styles/legend/TAMILNADU_DISTRICTS_1_1.png" /> 12.5 - 17.7<br />\
    <img src="styles/legend/TAMILNADU_DISTRICTS_1_2.png" /> 17.7 - 23.9<br />\
    <img src="styles/legend/TAMILNADU_DISTRICTS_1_3.png" /> 23.9 - 27.5<br />\
    <img src="styles/legend/TAMILNADU_DISTRICTS_1_4.png" /> 27.5 - 52.2<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_TAMILNADU_DISTRICTS_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_TAMILNADU_DISTRICTS_1];
lyr_TAMILNADU_DISTRICTS_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'dtname': 'dtname', 'stname': 'stname', 'stcode11': 'stcode11', 'dtcode11': 'dtcode11', 'year_stat': 'year_stat', 'test': 'test', 'Dist_LGD': 'Dist_LGD', 'State_LGD': 'State_LGD', 'Shape_Leng': 'Shape_Leng', 'Shape_STAr': 'Shape_STAr', 'Shape_STLe': 'Shape_STLe', 'id': 'id', 'finally_Data source': 'finally_Data source', 'finally_Infant Deaths': 'finally_Infant Deaths', 'finally_Maternal Deaths': 'finally_Maternal Deaths', 'finally_No of PHC\'s': 'finally_No of PHC\'s', 'finally_Percentage who had four or more ANC  District visits': 'finally_Percentage who had four or more ANC  District visits', 'finally_Percentage who had four or more ANC  District visits_1': 'finally_Percentage who had four or more ANC  District visits_1', 'finally_Percentage of births delivered  in a public health facility': 'finally_Percentage of births delivered  in a public health facility', 'finally_Percentage of births delivered in a private health facility': 'finally_Percentage of births delivered in a private health facility', 'finally_MCV/Measles/MMR/MR': 'finally_MCV/Measles/MMR/MR', 'finally_All basic vaccinations': 'finally_All basic vaccinations', 'finally_All age appropriate vaccinations': 'finally_All age appropriate vaccinations', 'finally_No vaccinations': 'finally_No vaccinations', 'finally_Percentage of children having any anaemia  (<11.0 g/dl )': 'finally_Percentage of children having any anaemia  (<11.0 g/dl )', 'finally_Percentage of women with BMI <18.5 (total thin)': 'finally_Percentage of women with BMI <18.5 (total thin)', 'finally_Percentage of women with BMI >=25.0 (Overweight or obese)': 'finally_Percentage of women with BMI >=25.0 (Overweight or obese)', 'finally_Percentage of births in a health facility receiving financial assistance under JSY scheme': 'finally_Percentage of births in a health facility receiving financial assistance under JSY scheme', });
lyr_TAMILNADU_DISTRICTS_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'dtname': 'TextEdit', 'stname': 'TextEdit', 'stcode11': 'TextEdit', 'dtcode11': 'TextEdit', 'year_stat': 'TextEdit', 'test': 'TextEdit', 'Dist_LGD': 'TextEdit', 'State_LGD': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_STAr': 'TextEdit', 'Shape_STLe': 'TextEdit', 'id': 'TextEdit', 'finally_Data source': 'TextEdit', 'finally_Infant Deaths': 'Range', 'finally_Maternal Deaths': 'Range', 'finally_No of PHC\'s': 'Range', 'finally_Percentage who had four or more ANC  District visits': 'TextEdit', 'finally_Percentage who had four or more ANC  District visits_1': 'TextEdit', 'finally_Percentage of births delivered  in a public health facility': 'TextEdit', 'finally_Percentage of births delivered in a private health facility': 'TextEdit', 'finally_MCV/Measles/MMR/MR': 'TextEdit', 'finally_All basic vaccinations': 'TextEdit', 'finally_All age appropriate vaccinations': 'TextEdit', 'finally_No vaccinations': 'TextEdit', 'finally_Percentage of children having any anaemia  (<11.0 g/dl )': 'TextEdit', 'finally_Percentage of women with BMI <18.5 (total thin)': 'TextEdit', 'finally_Percentage of women with BMI >=25.0 (Overweight or obese)': 'TextEdit', 'finally_Percentage of births in a health facility receiving financial assistance under JSY scheme': 'TextEdit', });
lyr_TAMILNADU_DISTRICTS_1.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'dtname': 'inline label - always visible', 'stname': 'inline label - always visible', 'stcode11': 'inline label - always visible', 'dtcode11': 'inline label - always visible', 'year_stat': 'inline label - always visible', 'test': 'inline label - always visible', 'Dist_LGD': 'inline label - always visible', 'State_LGD': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_STAr': 'inline label - always visible', 'Shape_STLe': 'inline label - always visible', 'id': 'inline label - always visible', 'finally_Data source': 'inline label - always visible', 'finally_Infant Deaths': 'inline label - always visible', 'finally_Maternal Deaths': 'inline label - always visible', 'finally_No of PHC\'s': 'inline label - always visible', 'finally_Percentage who had four or more ANC  District visits': 'inline label - always visible', 'finally_Percentage who had four or more ANC  District visits_1': 'inline label - always visible', 'finally_Percentage of births delivered  in a public health facility': 'inline label - always visible', 'finally_Percentage of births delivered in a private health facility': 'inline label - always visible', 'finally_MCV/Measles/MMR/MR': 'inline label - always visible', 'finally_All basic vaccinations': 'inline label - always visible', 'finally_All age appropriate vaccinations': 'inline label - always visible', 'finally_No vaccinations': 'inline label - always visible', 'finally_Percentage of children having any anaemia  (<11.0 g/dl )': 'inline label - always visible', 'finally_Percentage of women with BMI <18.5 (total thin)': 'inline label - always visible', 'finally_Percentage of women with BMI >=25.0 (Overweight or obese)': 'inline label - always visible', 'finally_Percentage of births in a health facility receiving financial assistance under JSY scheme': 'no label', });
lyr_TAMILNADU_DISTRICTS_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});