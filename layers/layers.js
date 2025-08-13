ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:25832").setExtent([686935.389724, 6152882.401145, 690788.150240, 6155513.397001]);
var wms_layers = [];

var format_EjbyMose_besigtigelsesarealer_2022_0 = new ol.format.GeoJSON();
var features_EjbyMose_besigtigelsesarealer_2022_0 = format_EjbyMose_besigtigelsesarealer_2022_0.readFeatures(json_EjbyMose_besigtigelsesarealer_2022_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_EjbyMose_besigtigelsesarealer_2022_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EjbyMose_besigtigelsesarealer_2022_0.addFeatures(features_EjbyMose_besigtigelsesarealer_2022_0);
var lyr_EjbyMose_besigtigelsesarealer_2022_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EjbyMose_besigtigelsesarealer_2022_0, 
                style: style_EjbyMose_besigtigelsesarealer_2022_0,
                popuplayertitle: 'EjbyMose_besigtigelsesarealer_2022',
                interactive: true,
                title: '<img src="styles/legend/EjbyMose_besigtigelsesarealer_2022_0.png" /> EjbyMose_besigtigelsesarealer_2022'
            });
var format_Fokusomrder_Kge2022_1 = new ol.format.GeoJSON();
var features_Fokusomrder_Kge2022_1 = format_Fokusomrder_Kge2022_1.readFeatures(json_Fokusomrder_Kge2022_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_Fokusomrder_Kge2022_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fokusomrder_Kge2022_1.addFeatures(features_Fokusomrder_Kge2022_1);
var lyr_Fokusomrder_Kge2022_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fokusomrder_Kge2022_1, 
                style: style_Fokusomrder_Kge2022_1,
                popuplayertitle: 'Fokusområder_Køge2022',
                interactive: true,
                title: '<img src="styles/legend/Fokusomrder_Kge2022_1.png" /> Fokusområder_Køge2022'
            });
var format_Projektafgrnsning_2 = new ol.format.GeoJSON();
var features_Projektafgrnsning_2 = format_Projektafgrnsning_2.readFeatures(json_Projektafgrnsning_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_Projektafgrnsning_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Projektafgrnsning_2.addFeatures(features_Projektafgrnsning_2);
var lyr_Projektafgrnsning_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Projektafgrnsning_2, 
                style: style_Projektafgrnsning_2,
                popuplayertitle: 'Projektafgrænsning',
                interactive: true,
                title: '<img src="styles/legend/Projektafgrnsning_2.png" /> Projektafgrænsning'
            });
var format_Projektafgrnsning_3 = new ol.format.GeoJSON();
var features_Projektafgrnsning_3 = format_Projektafgrnsning_3.readFeatures(json_Projektafgrnsning_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_Projektafgrnsning_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Projektafgrnsning_3.addFeatures(features_Projektafgrnsning_3);
var lyr_Projektafgrnsning_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Projektafgrnsning_3, 
                style: style_Projektafgrnsning_3,
                popuplayertitle: 'Projektafgrænsning',
                interactive: true,
                title: '<img src="styles/legend/Projektafgrnsning_3.png" /> Projektafgrænsning'
            });

        var lyr_GoogleSatelithybrid_4 = new ol.layer.Tile({
            'title': 'Google Satelit hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_2025projektomrde_5 = new ol.format.GeoJSON();
var features_2025projektomrde_5 = format_2025projektomrde_5.readFeatures(json_2025projektomrde_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_2025projektomrde_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2025projektomrde_5.addFeatures(features_2025projektomrde_5);
var lyr_2025projektomrde_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2025projektomrde_5, 
                style: style_2025projektomrde_5,
                popuplayertitle: '2025 - projektområde',
                interactive: false,
                title: '<img src="styles/legend/2025projektomrde_5.png" /> 2025 - projektområde'
            });
var format_fremgangsoversigttilwebkort_6 = new ol.format.GeoJSON();
var features_fremgangsoversigttilwebkort_6 = format_fremgangsoversigttilwebkort_6.readFeatures(json_fremgangsoversigttilwebkort_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_fremgangsoversigttilwebkort_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fremgangsoversigttilwebkort_6.addFeatures(features_fremgangsoversigttilwebkort_6);
var lyr_fremgangsoversigttilwebkort_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fremgangsoversigttilwebkort_6, 
                style: style_fremgangsoversigttilwebkort_6,
                popuplayertitle: 'fremgangsoversigt - til webkort',
                interactive: true,
    title: 'fremgangsoversigt - til webkort<br />\
    <img src="styles/legend/fremgangsoversigttilwebkort_6_0.png" /> Sø<br />\
    <img src="styles/legend/fremgangsoversigttilwebkort_6_1.png" /> Mose<br />\
    <img src="styles/legend/fremgangsoversigttilwebkort_6_2.png" /> Eng<br />\
    <img src="styles/legend/fremgangsoversigttilwebkort_6_3.png" /> Overdrev<br />\
    <img src="styles/legend/fremgangsoversigttilwebkort_6_4.png" /> Hede<br />\
    <img src="styles/legend/fremgangsoversigttilwebkort_6_5.png" /> Potentiel ny eng<br />\
    <img src="styles/legend/fremgangsoversigttilwebkort_6_6.png" /> Potentiel ny mose<br />\
    <img src="styles/legend/fremgangsoversigttilwebkort_6_7.png" /> Potentiel ny sø<br />\
    <img src="styles/legend/fremgangsoversigttilwebkort_6_8.png" /> Potentiel ny overdrev<br />' });
var group_2024 = new ol.layer.Group({
                                layers: [lyr_Projektafgrnsning_3,],
                                fold: 'close',
                                title: '2024'});
var group_2023 = new ol.layer.Group({
                                layers: [lyr_Projektafgrnsning_2,],
                                fold: 'close',
                                title: '2023'});
var group_2022 = new ol.layer.Group({
                                layers: [lyr_EjbyMose_besigtigelsesarealer_2022_0,lyr_Fokusomrder_Kge2022_1,],
                                fold: 'close',
                                title: '2022'});

lyr_EjbyMose_besigtigelsesarealer_2022_0.setVisible(true);lyr_Fokusomrder_Kge2022_1.setVisible(true);lyr_Projektafgrnsning_2.setVisible(true);lyr_Projektafgrnsning_3.setVisible(true);lyr_GoogleSatelithybrid_4.setVisible(true);lyr_2025projektomrde_5.setVisible(true);lyr_fremgangsoversigttilwebkort_6.setVisible(true);
var layersList = [group_2022,group_2023,group_2024,lyr_GoogleSatelithybrid_4,lyr_2025projektomrde_5,lyr_fremgangsoversigttilwebkort_6];
lyr_EjbyMose_besigtigelsesarealer_2022_0.set('fieldAliases', {});
lyr_Fokusomrder_Kge2022_1.set('fieldAliases', {});
lyr_Projektafgrnsning_2.set('fieldAliases', {});
lyr_Projektafgrnsning_3.set('fieldAliases', {});
lyr_2025projektomrde_5.set('fieldAliases', {'id': 'id', });
lyr_fremgangsoversigttilwebkort_6.set('fieldAliases', {'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Polygon areal', 'Shape_leng': 'Shape_leng', 'Natyp_kode': 'Naturtype kode', 'Natyp_navn': 'Naturtype', 'Besig_dato': 'Besigtigelsesdato', 'layer': 'layer', 'path': 'path', 'Note': 'Note', 'M.O': 'Mulige overtrædelser', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Afstand': 'Afstand', 'Polygon_Na': 'Felt ID', });
lyr_EjbyMose_besigtigelsesarealer_2022_0.set('fieldImages', {});
lyr_Fokusomrder_Kge2022_1.set('fieldImages', {});
lyr_Projektafgrnsning_2.set('fieldImages', {});
lyr_Projektafgrnsning_3.set('fieldImages', {});
lyr_2025projektomrde_5.set('fieldImages', {'id': 'TextEdit', });
lyr_fremgangsoversigttilwebkort_6.set('fieldImages', {'Temakode': 'TextEdit', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'TextEdit', 'Systid_til': 'TextEdit', 'Oprettet': 'TextEdit', 'Oprindkode': 'TextEdit', 'Oprindelse': 'TextEdit', 'Statuskode': 'TextEdit', 'Status': 'TextEdit', 'Off_kode': 'TextEdit', 'Offentlig': 'TextEdit', 'CVR_kode': 'TextEdit', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_leng': 'TextEdit', 'Natyp_kode': 'TextEdit', 'Natyp_navn': 'TextEdit', 'Besig_dato': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Note': 'TextEdit', 'M.O': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Afstand': 'TextEdit', 'Polygon_Na': 'TextEdit', });
lyr_EjbyMose_besigtigelsesarealer_2022_0.set('fieldLabels', {});
lyr_Fokusomrder_Kge2022_1.set('fieldLabels', {});
lyr_Projektafgrnsning_2.set('fieldLabels', {});
lyr_Projektafgrnsning_3.set('fieldLabels', {});
lyr_2025projektomrde_5.set('fieldLabels', {'id': 'no label', });
lyr_fremgangsoversigttilwebkort_6.set('fieldLabels', {'Temakode': 'hidden field', 'Temanavn': 'hidden field', 'Objekt_id': 'inline label - always visible', 'Version_id': 'hidden field', 'Systid_fra': 'hidden field', 'Systid_til': 'hidden field', 'Oprettet': 'inline label - always visible', 'Oprindkode': 'hidden field', 'Oprindelse': 'hidden field', 'Statuskode': 'hidden field', 'Status': 'hidden field', 'Off_kode': 'hidden field', 'Offentlig': 'hidden field', 'CVR_kode': 'hidden field', 'CVR_navn': 'inline label - always visible', 'Bruger_id': 'hidden field', 'Link': 'inline label - always visible', 'Shape_area': 'inline label - always visible', 'Shape_leng': 'hidden field', 'Natyp_kode': 'hidden field', 'Natyp_navn': 'inline label - always visible', 'Besig_dato': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'Note': 'no label', 'M.O': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Afstand': 'hidden field', 'Polygon_Na': 'inline label - always visible', });
lyr_fremgangsoversigttilwebkort_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});