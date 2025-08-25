ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:25832").setExtent([685718.305660, 6149548.962618, 695253.378113, 6156060.329209]);
var wms_layers = [];


        var lyr_GoogleSatelithybrid_0 = new ol.layer.Tile({
            'title': 'Google Satelit hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_2025projektomrde_1 = new ol.format.GeoJSON();
var features_2025projektomrde_1 = format_2025projektomrde_1.readFeatures(json_2025projektomrde_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_2025projektomrde_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2025projektomrde_1.addFeatures(features_2025projektomrde_1);
var lyr_2025projektomrde_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2025projektomrde_1, 
                style: style_2025projektomrde_1,
                popuplayertitle: '2025 - projektområde',
                interactive: false,
                title: '<img src="styles/legend/2025projektomrde_1.png" /> 2025 - projektområde'
            });
var format_fremgangsoversigttilwebkort_2 = new ol.format.GeoJSON();
var features_fremgangsoversigttilwebkort_2 = format_fremgangsoversigttilwebkort_2.readFeatures(json_fremgangsoversigttilwebkort_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_fremgangsoversigttilwebkort_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fremgangsoversigttilwebkort_2.addFeatures(features_fremgangsoversigttilwebkort_2);
var lyr_fremgangsoversigttilwebkort_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fremgangsoversigttilwebkort_2, 
                style: style_fremgangsoversigttilwebkort_2,
                popuplayertitle: 'fremgangsoversigt - til webkort',
                interactive: true,
    title: 'fremgangsoversigt - til webkort<br />\
    <img src="styles/legend/fremgangsoversigttilwebkort_2_0.png" /> Sø<br />\
    <img src="styles/legend/fremgangsoversigttilwebkort_2_1.png" /> Mose<br />\
    <img src="styles/legend/fremgangsoversigttilwebkort_2_2.png" /> Eng<br />\
    <img src="styles/legend/fremgangsoversigttilwebkort_2_3.png" /> Overdrev<br />\
    <img src="styles/legend/fremgangsoversigttilwebkort_2_4.png" /> Hede<br />\
    <img src="styles/legend/fremgangsoversigttilwebkort_2_5.png" /> Potentiel ny eng<br />\
    <img src="styles/legend/fremgangsoversigttilwebkort_2_6.png" /> Potentiel ny mose<br />\
    <img src="styles/legend/fremgangsoversigttilwebkort_2_7.png" /> Potentiel ny sø<br />\
    <img src="styles/legend/fremgangsoversigttilwebkort_2_8.png" /> Potentiel ny overdrev<br />' });

lyr_GoogleSatelithybrid_0.setVisible(true);lyr_2025projektomrde_1.setVisible(true);lyr_fremgangsoversigttilwebkort_2.setVisible(true);
var layersList = [lyr_GoogleSatelithybrid_0,lyr_2025projektomrde_1,lyr_fremgangsoversigttilwebkort_2];
lyr_2025projektomrde_1.set('fieldAliases', {'id': 'id', });
lyr_fremgangsoversigttilwebkort_2.set('fieldAliases', {'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Polygon areal', 'Shape_leng': 'Shape_leng', 'Natyp_kode': 'Naturtype kode', 'Natyp_navn': 'Naturtype', 'Besig_dato': 'Besigtigelsesdato', 'layer': 'layer', 'path': 'path', 'Note': 'Note', 'M.O': 'Mulige overtrædelser', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Afstand': 'Afstand', 'Polygon_Na': 'Felt ID', });
lyr_2025projektomrde_1.set('fieldImages', {'id': 'TextEdit', });
lyr_fremgangsoversigttilwebkort_2.set('fieldImages', {'Temakode': 'TextEdit', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'TextEdit', 'Systid_til': 'TextEdit', 'Oprettet': 'TextEdit', 'Oprindkode': 'TextEdit', 'Oprindelse': 'TextEdit', 'Statuskode': 'TextEdit', 'Status': 'TextEdit', 'Off_kode': 'TextEdit', 'Offentlig': 'TextEdit', 'CVR_kode': 'TextEdit', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_leng': 'TextEdit', 'Natyp_kode': 'TextEdit', 'Natyp_navn': 'TextEdit', 'Besig_dato': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Note': 'TextEdit', 'M.O': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Afstand': 'TextEdit', 'Polygon_Na': 'TextEdit', });
lyr_2025projektomrde_1.set('fieldLabels', {'id': 'no label', });
lyr_fremgangsoversigttilwebkort_2.set('fieldLabels', {'Temakode': 'hidden field', 'Temanavn': 'hidden field', 'Objekt_id': 'inline label - always visible', 'Version_id': 'hidden field', 'Systid_fra': 'hidden field', 'Systid_til': 'hidden field', 'Oprettet': 'inline label - always visible', 'Oprindkode': 'hidden field', 'Oprindelse': 'hidden field', 'Statuskode': 'hidden field', 'Status': 'hidden field', 'Off_kode': 'hidden field', 'Offentlig': 'hidden field', 'CVR_kode': 'hidden field', 'CVR_navn': 'inline label - always visible', 'Bruger_id': 'hidden field', 'Link': 'inline label - always visible', 'Shape_area': 'inline label - always visible', 'Shape_leng': 'hidden field', 'Natyp_kode': 'hidden field', 'Natyp_navn': 'inline label - always visible', 'Besig_dato': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'Note': 'no label', 'M.O': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Afstand': 'hidden field', 'Polygon_Na': 'inline label - always visible', });
lyr_fremgangsoversigttilwebkort_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});