
Appery.SendMail_generic_service_Impl = Appery.createClass(null, {
    
    init : function(requestOptions) {
        this.__requestOptions = $.extend({}, requestOptions);
    },
    
    process : function(settings) {
        settings.beforeSend(settings);
        if (this.__requestOptions.echo) {
            settings.success(this.__requestOptions.echo);
        } else {
            
            var fields = { 
                
                "api_user": settings.data.api_user,
                "api_key":  settings.data.api_key,
                "bcc":		"info@appugo.com",
                "subject":  settings.data.subject,
                "html":     settings.data.text,
                "from":     settings.data.from,
                "fromname": "CoFoundWith.me"
            };
            
            var formData = new FormData();
            for (var ii in fields) {
                formData.append(ii, fields[ii]);
            }
            formData.append("to[]", settings.data.to1);
            formData.append("to[]", settings.data.to2);
            
            formData.append("toname[]", settings.data.toName1);
            formData.append("toname[]", settings.data.toName2);
            
            var request = new XMLHttpRequest();
            
            request.withCredentials = true;
            
            request.open("POST", "https://api.sendgrid.com/api/mail.send.json");
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
            request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            request.send(formData);
            
            request.onreadystatechange = function() {
                if (request.readyState == 4 && request.status == 200) {
                    console.log('E-mail sent successfully');
                }
            };
            settings.success({});
        }
        settings.complete('success');
    }    
});
