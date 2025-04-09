var size = 0;
var placement = 'point';
function categories_PersebaranKomoditasBuahUnggulan_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Alpukat':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [500, 500],
                  scale: 0.038,
                  anchor: [9, 9],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/9.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Durian':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [500, 500],
                  scale: 0.038,
                  anchor: [9, 9],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/8.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Jambu Air':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [500, 500],
                  scale: 0.038,
                  anchor: [9, 9],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/2.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Jambu Biji':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [500, 500],
                  scale: 0.038,
                  anchor: [9, 9],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/1.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Jeruk Siam':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [500, 500],
                  scale: 0.038,
                  anchor: [9, 9],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/5.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Mangga':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [500, 500],
                  scale: 0.038,
                  anchor: [9, 9],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/4.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Nangka':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [500, 500],
                  scale: 0.038,
                  anchor: [9, 9],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/7.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Pepaya':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [500, 500],
                  scale: 0.038,
                  anchor: [9, 9],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/3.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Pisang':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [500, 500],
                  scale: 0.038,
                  anchor: [9, 9],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/6.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_PersebaranKomoditasBuahUnggulan_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("Jenis");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_PersebaranKomoditasBuahUnggulan_2(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
