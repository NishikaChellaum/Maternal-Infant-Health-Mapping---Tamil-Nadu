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
    <img src="styles/legend/TAMILNADU_DISTRICTS_1_0.png" /> Ariyalur<br />\
    <img src="styles/legend/TAMILNADU_DISTRICTS_1_1.png" /> Chengalpattu<br />\
    <img src="styles/legend/TAMILNADU_DISTRICTS_1_2.png" /> Chennai<br />\
    <img src="styles/legend/TAMILNADU_DISTRICTS_1_3.png" /> Coimbatore<br />\
    <img src="styles/legend/TAMILNADU_DISTRICTS_1_4.png" /> Cuddalore<br />\
    <img src="styles/legend/TAMILNADU_DISTRICTS_1_5.png" /> Dharmapuri<br />\
    <img src="styles/legend/TAMILNADU_DISTRICTS_1_6.png" /> Dindigul<br />\
    <img src="styles/legend/TAMILNADU_DISTRICTS_1_7.png" /> Erode<br />\
    <img src="styles/legend/TAMILNADU_DISTRICTS_1_8.png" /> Kallakurichchi<br />\
    <img src="styles/legend/TAMILNADU_DISTRICTS_1_9.png" /> Kancheepuram<br />\
    <img src="styles/legend/TAMILNADU_DISTRICTS_1_10.png" /> Kanniyakumari<br />\
    <img src="styles/legend/TAMILNADU_DISTRICTS_1_11.png" /> Karur<br />\
    <img src="styles/legend/TAMILNADU_DISTRICTS_1_12.png" /> Krishnagiri<br />\
    <img src="styles/legend/TAMILNADU_DISTRICTS_1_13.png" /> Madurai<br />\
    <img src="styles/legend/TAMILNADU_DISTRICTS_1_14.png" /> Nagapattinam<br />\
    <img src="styles/legend/TAMILNADU_DISTRICTS_1_15.png" /> Namakkal<br />\
    <img src="styles/legend/TAMILNADU_DISTRICTS_1_16.png" /> Perambalur<br />\
    <img src="styles/legend/TAMILNADU_DISTRICTS_1_17.png" /> Pudukkottai<br />\
    <img src="styles/legend/TAMILNADU_DISTRICTS_1_18.png" /> Ramanathapuram<br />\
    <img src="styles/legend/TAMILNADU_DISTRICTS_1_19.png" /> Ranipet<br />\
    <img src="styles/legend/TAMILNADU_DISTRICTS_1_20.png" /> Salem<br />\
    <img src="styles/legend/TAMILNADU_DISTRICTS_1_21.png" /> Sivaganga<br />\
    <img src="styles/legend/TAMILNADU_DISTRICTS_1_22.png" /> Tenkasi<br />\
    <img src="styles/legend/TAMILNADU_DISTRICTS_1_23.png" /> Thanjavur<br />\
    <img src="styles/legend/TAMILNADU_DISTRICTS_1_24.png" /> The Nilgiris<br />\
    <img src="styles/legend/TAMILNADU_DISTRICTS_1_25.png" /> Theni<br />\
    <img src="styles/legend/TAMILNADU_DISTRICTS_1_26.png" /> Thiruvallur<br />\
    <img src="styles/legend/TAMILNADU_DISTRICTS_1_27.png" /> Thiruvarur<br />\
    <img src="styles/legend/TAMILNADU_DISTRICTS_1_28.png" /> Thoothukkudi<br />\
    <img src="styles/legend/TAMILNADU_DISTRICTS_1_29.png" /> Tiruchirappalli<br />\
    <img src="styles/legend/TAMILNADU_DISTRICTS_1_30.png" /> Tirunelveli<br />\
    <img src="styles/legend/TAMILNADU_DISTRICTS_1_31.png" /> Tiruppattur<br />\
    <img src="styles/legend/TAMILNADU_DISTRICTS_1_32.png" /> Tiruppur<br />\
    <img src="styles/legend/TAMILNADU_DISTRICTS_1_33.png" /> Tiruvannamalai<br />\
    <img src="styles/legend/TAMILNADU_DISTRICTS_1_34.png" /> Vellore<br />\
    <img src="styles/legend/TAMILNADU_DISTRICTS_1_35.png" /> Viluppuram<br />\
    <img src="styles/legend/TAMILNADU_DISTRICTS_1_36.png" /> Virudhunagar<br />\
    <img src="styles/legend/TAMILNADU_DISTRICTS_1_37.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_TAMILNADU_DISTRICTS_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_TAMILNADU_DISTRICTS_1];
lyr_TAMILNADU_DISTRICTS_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'dtname': 'dtname', 'stname': 'stname', 'stcode11': 'stcode11', 'dtcode11': 'dtcode11', 'year_stat': 'year_stat', 'test': 'test', 'Dist_LGD': 'Dist_LGD', 'State_LGD': 'State_LGD', 'Shape_Leng': 'Shape_Leng', 'Shape_STAr': 'Shape_STAr', 'Shape_STLe': 'Shape_STLe', 'id': 'id', 'finally_field_1': 'finally_field_1', 'finally_Data source': 'finally_Data source', 'finally_Infant Deaths': 'finally_Infant Deaths', 'finally_Maternal Deaths': 'finally_Maternal Deaths', 'finally_No of PHC\'s': 'finally_No of PHC\'s', 'finally_Percentage who had four or more ANC  District visits': 'finally_Percentage who had four or more ANC  District visits', 'finally_Percentage who had four or more ANC  District visits_1': 'finally_Percentage who had four or more ANC  District visits_1', 'finally_Percentage of births delivered  in a public health facility': 'finally_Percentage of births delivered  in a public health facility', 'finally_Percentage of births delivered in a private health facility': 'finally_Percentage of births delivered in a private health facility', 'finally_MCV/Measles/MMR/MR': 'finally_MCV/Measles/MMR/MR', 'finally_All basic vaccinations': 'finally_All basic vaccinations', 'finally_All age appropriate vaccinations': 'finally_All age appropriate vaccinations', 'finally_No vaccinations': 'finally_No vaccinations', 'finally_Percentage of children having any anaemia  (<11.0 g/dl )': 'finally_Percentage of children having any anaemia  (<11.0 g/dl )', 'finally_Percentage of women with BMI <18.5 (total thin)': 'finally_Percentage of women with BMI <18.5 (total thin)', 'finally_Percentage of women with BMI >=25.0 (Overweight or obese)': 'finally_Percentage of women with BMI >=25.0 (Overweight or obese)', });
lyr_TAMILNADU_DISTRICTS_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'dtname': 'TextEdit', 'stname': 'TextEdit', 'stcode11': 'TextEdit', 'dtcode11': 'TextEdit', 'year_stat': 'TextEdit', 'test': 'TextEdit', 'Dist_LGD': 'TextEdit', 'State_LGD': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_STAr': 'TextEdit', 'Shape_STLe': 'TextEdit', 'id': 'TextEdit', 'finally_field_1': 'TextEdit', 'finally_Data source': 'TextEdit', 'finally_Infant Deaths': 'Range', 'finally_Maternal Deaths': 'Range', 'finally_No of PHC\'s': 'Range', 'finally_Percentage who had four or more ANC  District visits': 'TextEdit', 'finally_Percentage who had four or more ANC  District visits_1': 'TextEdit', 'finally_Percentage of births delivered  in a public health facility': 'TextEdit', 'finally_Percentage of births delivered in a private health facility': 'TextEdit', 'finally_MCV/Measles/MMR/MR': 'TextEdit', 'finally_All basic vaccinations': 'TextEdit', 'finally_All age appropriate vaccinations': 'TextEdit', 'finally_No vaccinations': 'TextEdit', 'finally_Percentage of children having any anaemia  (<11.0 g/dl )': 'TextEdit', 'finally_Percentage of women with BMI <18.5 (total thin)': 'TextEdit', 'finally_Percentage of women with BMI >=25.0 (Overweight or obese)': 'TextEdit', });
lyr_TAMILNADU_DISTRICTS_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'dtname': 'header label - visible with data', 'stname': 'header label - visible with data', 'stcode11': 'hidden field', 'dtcode11': 'hidden field', 'year_stat': 'hidden field', 'test': 'hidden field', 'Dist_LGD': 'hidden field', 'State_LGD': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_STAr': 'hidden field', 'Shape_STLe': 'hidden field', 'id': 'hidden field', 'finally_field_1': 'hidden field', 'finally_Data source': 'hidden field', 'finally_Infant Deaths': 'hidden field', 'finally_Maternal Deaths': 'hidden field', 'finally_No of PHC\'s': 'hidden field', 'finally_Percentage who had four or more ANC  District visits': 'hidden field', 'finally_Percentage who had four or more ANC  District visits_1': 'hidden field', 'finally_Percentage of births delivered  in a public health facility': 'hidden field', 'finally_Percentage of births delivered in a private health facility': 'hidden field', 'finally_MCV/Measles/MMR/MR': 'hidden field', 'finally_All basic vaccinations': 'hidden field', 'finally_All age appropriate vaccinations': 'hidden field', 'finally_No vaccinations': 'hidden field', 'finally_Percentage of children having any anaemia  (<11.0 g/dl )': 'hidden field', 'finally_Percentage of women with BMI <18.5 (total thin)': 'hidden field', 'finally_Percentage of women with BMI >=25.0 (Overweight or obese)': 'hidden field', });
lyr_TAMILNADU_DISTRICTS_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});