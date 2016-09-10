// check if running on device
var isCordovaApp = (document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1);
 

/// Uploads a binary file (base64) using browser API, without Cordova
function uploadBinaryHelper(datasource, imageBase64Data, name, type) {

    if (imageBase64Data) {
        var byteCharacters = atob(imageBase64Data.substring(imageBase64Data.indexOf(',') + 1));
        var byteNumbers = new Array(byteCharacters.length);
        for (var i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        var byteArray = new Uint8Array(byteNumbers);
        var imageType = type || 'jpeg';
        var imageName = name || new Date().getTime();
        imageType = (imageType == 'png') ? imageType : 'jpeg';
        var blob = new Blob([byteArray.buffer], {
            type: 'image/' + imageType
        });
        
        var formData = new FormData();
        var sendGridFileName = imageName + "."+imageType;
        formData.append("files[" + sendGridFileName +"]", blob); // files[name] - format that SendGrid expects
        
        if (datasource && datasource.service) {
            try {
                datasource.execute({
                    'allowDataModification': false,
                    'processData': false,
                    'contentType': false,
                    'body': formData,
                    'cache': false
                });
                
            } catch (exception) {
                console.log(exception.name + ' ' + exception.message);
                hideSpinner();
            }
        } else {
            console.warn('This data source is not correct.');
        }
    } else {
        console.warn('Image data is empty or has a wrong format.');
    }
    
}