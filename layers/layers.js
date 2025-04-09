ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([112.286292, -7.981954, 112.768445, -7.680790]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_RekomendasiKawasanAgrowsiata_1 = new ol.format.GeoJSON();
var features_RekomendasiKawasanAgrowsiata_1 = format_RekomendasiKawasanAgrowsiata_1.readFeatures(json_RekomendasiKawasanAgrowsiata_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RekomendasiKawasanAgrowsiata_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RekomendasiKawasanAgrowsiata_1.addFeatures(features_RekomendasiKawasanAgrowsiata_1);
var lyr_RekomendasiKawasanAgrowsiata_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RekomendasiKawasanAgrowsiata_1, 
                style: style_RekomendasiKawasanAgrowsiata_1,
                popuplayertitle: 'Rekomendasi Kawasan Agrowsiata',
                interactive: true,
    title: 'Rekomendasi Kawasan Agrowsiata<br />\
    <img src="styles/legend/RekomendasiKawasanAgrowsiata_1_0.png" /> Sangat Direkomendasikan<br />\
    <img src="styles/legend/RekomendasiKawasanAgrowsiata_1_1.png" /> Cukup Direkomendasikan<br />\
    <img src="styles/legend/RekomendasiKawasanAgrowsiata_1_2.png" /> Kurang Direkomendasikan<br />\
    <img src="styles/legend/RekomendasiKawasanAgrowsiata_1_3.png" /> Tidak Direkomendasikan<br />\
    <img src="styles/legend/RekomendasiKawasanAgrowsiata_1_4.png" /> Tidak Boleh<br />'
        });
var format_PersebaranKomoditasBuahUnggulan_2 = new ol.format.GeoJSON();
var features_PersebaranKomoditasBuahUnggulan_2 = format_PersebaranKomoditasBuahUnggulan_2.readFeatures(json_PersebaranKomoditasBuahUnggulan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PersebaranKomoditasBuahUnggulan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PersebaranKomoditasBuahUnggulan_2.addFeatures(features_PersebaranKomoditasBuahUnggulan_2);
var lyr_PersebaranKomoditasBuahUnggulan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PersebaranKomoditasBuahUnggulan_2, 
                style: style_PersebaranKomoditasBuahUnggulan_2,
                popuplayertitle: 'Persebaran Komoditas Buah Unggulan',
                interactive: true,
    title: 'Persebaran Komoditas Buah Unggulan<br />\
    <img src="styles/legend/PersebaranKomoditasBuahUnggulan_2_0.png" /> Alpukat<br />\
    <img src="styles/legend/PersebaranKomoditasBuahUnggulan_2_1.png" /> Durian<br />\
    <img src="styles/legend/PersebaranKomoditasBuahUnggulan_2_2.png" /> Jambu Air<br />\
    <img src="styles/legend/PersebaranKomoditasBuahUnggulan_2_3.png" /> Jambu Biji<br />\
    <img src="styles/legend/PersebaranKomoditasBuahUnggulan_2_4.png" /> Jeruk Siam<br />\
    <img src="styles/legend/PersebaranKomoditasBuahUnggulan_2_5.png" /> Mangga<br />\
    <img src="styles/legend/PersebaranKomoditasBuahUnggulan_2_6.png" /> Nangka<br />\
    <img src="styles/legend/PersebaranKomoditasBuahUnggulan_2_7.png" /> Pepaya<br />\
    <img src="styles/legend/PersebaranKomoditasBuahUnggulan_2_8.png" /> Pisang<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_RekomendasiKawasanAgrowsiata_1.setVisible(true);lyr_PersebaranKomoditasBuahUnggulan_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_RekomendasiKawasanAgrowsiata_1,lyr_PersebaranKomoditasBuahUnggulan_2];
lyr_RekomendasiKawasanAgrowsiata_1.set('fieldAliases', {'ITBX': 'ITBX', 'KP2B': 'KP2B', 'Status': 'Status', 'Kesesuaian': 'Kesesuaian', 'KRB': 'KRB', 'RESAIR': 'RESAIR', 'KSMPDN': 'KSMPDN', 'Kelas': 'Kelas', 'Area': 'Area', 'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', });
lyr_PersebaranKomoditasBuahUnggulan_2.set('fieldAliases', {'id': 'id', 'Jenis': 'Jenis', });
lyr_RekomendasiKawasanAgrowsiata_1.set('fieldImages', {'ITBX': 'TextEdit', 'KP2B': 'TextEdit', 'Status': 'TextEdit', 'Kesesuaian': 'TextEdit', 'KRB': 'TextEdit', 'RESAIR': 'TextEdit', 'KSMPDN': 'TextEdit', 'Kelas': 'TextEdit', 'Area': 'TextEdit', 'KECAMATAN': 'TextEdit', 'DESA': 'TextEdit', });
lyr_PersebaranKomoditasBuahUnggulan_2.set('fieldImages', {'id': 'TextEdit', 'Jenis': 'TextEdit', });
lyr_RekomendasiKawasanAgrowsiata_1.set('fieldLabels', {'ITBX': 'inline label - visible with data', 'KP2B': 'inline label - visible with data', 'Status': 'inline label - visible with data', 'Kesesuaian': 'inline label - visible with data', 'KRB': 'inline label - visible with data', 'RESAIR': 'inline label - visible with data', 'KSMPDN': 'inline label - visible with data', 'Kelas': 'header label - always visible', 'Area': 'inline label - visible with data', 'KECAMATAN': 'inline label - visible with data', 'DESA': 'inline label - visible with data', });
lyr_PersebaranKomoditasBuahUnggulan_2.set('fieldLabels', {'id': 'hidden field', 'Jenis': 'inline label - visible with data', });
lyr_PersebaranKomoditasBuahUnggulan_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});