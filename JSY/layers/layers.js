var wms_layers = [];

var format_TAMILNADU_DISTRICTS_0 = new ol.format.GeoJSON();
var features_TAMILNADU_DISTRICTS_0 = format_TAMILNADU_DISTRICTS_0.readFeatures(json_TAMILNADU_DISTRICTS_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TAMILNADU_DISTRICTS_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TAMILNADU_DISTRICTS_0.addFeatures(features_TAMILNADU_DISTRICTS_0);
var lyr_TAMILNADU_DISTRICTS_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TAMILNADU_DISTRICTS_0, 
                style: style_TAMILNADU_DISTRICTS_0,
                popuplayertitle: "TAMIL NADU_DISTRICTS",
                interactive: true,
    title: 'TAMIL NADU_DISTRICTS<br />\
    <img src="styles/legend/TAMILNADU_DISTRICTS_0_0.png" /> 3.7 - 12.5<br />\
    <img src="styles/legend/TAMILNADU_DISTRICTS_0_1.png" /> 12.5 - 17.7<br />\
    <img src="styles/legend/TAMILNADU_DISTRICTS_0_2.png" /> 17.7 - 23.9<br />\
    <img src="styles/legend/TAMILNADU_DISTRICTS_0_3.png" /> 23.9 - 27.5<br />\
    <img src="styles/legend/TAMILNADU_DISTRICTS_0_4.png" /> 27.5 - 52.2<br />'
        });

lyr_TAMILNADU_DISTRICTS_0.setVisible(true);
var layersList = [lyr_TAMILNADU_DISTRICTS_0];
lyr_TAMILNADU_DISTRICTS_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'dtname': 'dtname', 'stname': 'stname', 'stcode11': 'stcode11', 'dtcode11': 'dtcode11', 'year_stat': 'year_stat', 'test': 'test', 'Dist_LGD': 'Dist_LGD', 'State_LGD': 'State_LGD', 'Shape_Leng': 'Shape_Leng', 'Shape_STAr': 'Shape_STAr', 'Shape_STLe': 'Shape_STLe', 'id': 'id', 'end_Data source': 'end_Data source', 'end_Infant Deaths': 'end_Infant Deaths', 'end_Maternal Deaths': 'end_Maternal Deaths', 'end_No of PHC\'s': 'end_No of PHC\'s', 'end_Percentage who had four or more ANC  District visits': 'end_Percentage who had four or more ANC  District visits', 'end_Percentage who had four or more ANC  District visits_1': 'end_Percentage who had four or more ANC  District visits_1', 'end_Percentage of births delivered  in a public health facility': 'end_Percentage of births delivered  in a public health facility', 'end_Percentage of births delivered in a private health facility': 'end_Percentage of births delivered in a private health facility', 'end_MCV/Measles/MMR/MR': 'end_MCV/Measles/MMR/MR', 'end_All basic vaccinations': 'end_All basic vaccinations', 'end_All age appropriate vaccinations': 'end_All age appropriate vaccinations', 'end_No vaccinations': 'end_No vaccinations', 'end_Percentage of children having any anaemia  (<11.0 g/dl )': 'end_Percentage of children having any anaemia  (<11.0 g/dl )', 'end_Percentage of women with BMI <18.5 (total thin)': 'end_Percentage of women with BMI <18.5 (total thin)', 'end_Percentage of women with BMI >=25.0 (Overweight or obese)': 'end_Percentage of women with BMI >=25.0 (Overweight or obese)', 'end_Percentage of births in a health facility receiving financial assistance under JSY scheme': 'end_Percentage of births in a health facility receiving financial assistance under JSY scheme', });
lyr_TAMILNADU_DISTRICTS_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'dtname': 'TextEdit', 'stname': 'TextEdit', 'stcode11': 'TextEdit', 'dtcode11': 'TextEdit', 'year_stat': 'TextEdit', 'test': 'TextEdit', 'Dist_LGD': 'TextEdit', 'State_LGD': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_STAr': 'TextEdit', 'Shape_STLe': 'TextEdit', 'id': 'TextEdit', 'end_Data source': 'TextEdit', 'end_Infant Deaths': 'Range', 'end_Maternal Deaths': 'Range', 'end_No of PHC\'s': 'Range', 'end_Percentage who had four or more ANC  District visits': 'TextEdit', 'end_Percentage who had four or more ANC  District visits_1': 'TextEdit', 'end_Percentage of births delivered  in a public health facility': 'TextEdit', 'end_Percentage of births delivered in a private health facility': 'TextEdit', 'end_MCV/Measles/MMR/MR': 'TextEdit', 'end_All basic vaccinations': 'TextEdit', 'end_All age appropriate vaccinations': 'TextEdit', 'end_No vaccinations': 'TextEdit', 'end_Percentage of children having any anaemia  (<11.0 g/dl )': 'TextEdit', 'end_Percentage of women with BMI <18.5 (total thin)': 'TextEdit', 'end_Percentage of women with BMI >=25.0 (Overweight or obese)': 'TextEdit', 'end_Percentage of births in a health facility receiving financial assistance under JSY scheme': 'TextEdit', });
lyr_TAMILNADU_DISTRICTS_0.set('fieldLabels', {'OBJECTID': 'hidden field', 'dtname': 'inline label - visible with data', 'stname': 'hidden field', 'stcode11': 'hidden field', 'dtcode11': 'hidden field', 'year_stat': 'hidden field', 'test': 'hidden field', 'Dist_LGD': 'hidden field', 'State_LGD': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_STAr': 'hidden field', 'Shape_STLe': 'hidden field', 'id': 'hidden field', 'end_Data source': 'hidden field', 'end_Infant Deaths': 'hidden field', 'end_Maternal Deaths': 'hidden field', 'end_No of PHC\'s': 'hidden field', 'end_Percentage who had four or more ANC  District visits': 'hidden field', 'end_Percentage who had four or more ANC  District visits_1': 'hidden field', 'end_Percentage of births delivered  in a public health facility': 'hidden field', 'end_Percentage of births delivered in a private health facility': 'hidden field', 'end_MCV/Measles/MMR/MR': 'hidden field', 'end_All basic vaccinations': 'hidden field', 'end_All age appropriate vaccinations': 'hidden field', 'end_No vaccinations': 'hidden field', 'end_Percentage of children having any anaemia  (<11.0 g/dl )': 'hidden field', 'end_Percentage of women with BMI <18.5 (total thin)': 'hidden field', 'end_Percentage of women with BMI >=25.0 (Overweight or obese)': 'hidden field', 'end_Percentage of births in a health facility receiving financial assistance under JSY scheme': 'inline label - visible with data', });
lyr_TAMILNADU_DISTRICTS_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});