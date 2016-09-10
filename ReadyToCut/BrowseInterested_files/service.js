/*
 * Service settings
 */
var COFound_Settings = {
    "api_key": "nu3uMusE",
    "token": "AQWhIwOpsyYBwM8FFEjSZ1EG3TKTiVK1j2-7b49OFLohOZbRgjBh_f9o5gSML10IDqw8WpeDNyaYKoD6_GB2pYBos7RMt85rBHbUrES-J8IHPEuoH7MQzkKwp0QPZbFukVNG0l-htNY7YM5dRIbXdjzwJP7Pf6GtUgYu9UY_ZZEeMWPBiZY"
}

/*
 * Services
 */

var display_invitations = new Apperyio.RestService({
    'url': 'http://www.kmitserver.com/rest/user/cofwm_display_invitations',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': COFound_Settings

    ,
    'defaultRequest': {
        "headers": {},
        "parameters": {
            "api_key": "{api_key}"
        },
        "body": null
    }
});

var CameraService = new Apperyio.CameraService({
    'defaultRequest': {
        "data": {
            "quality": 80,
            "destinationType": "Data URL",
            "sourceType": "Camera",
            "allowEdit": true,
            "encodingType": "JPEG",
            "targetWidth": 1024,
            "targetHeight": 768
        }
    }
});

var social_user_remove = new Apperyio.RestService({
    'url': 'http://www.kmitserver.com/rest/user/cofwm_system_user_account_remove',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': COFound_Settings

    ,
    'defaultRequest': {
        "headers": {},
        "parameters": {
            "api_key": "{api_key}"
        },
        "body": null
    }
});

var display_users_list = new Apperyio.RestService({
    'url': 'http://www.kmitserver.com/rest/user/cofwm_display_users_list',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': COFound_Settings

    ,
    'defaultRequest': {
        "headers": {},
        "parameters": {
            "api_key": "{api_key}"
        },
        "body": null
    }
});

var display_user_data = new Apperyio.RestService({
    'url': 'http://www.kmitserver.com/rest/user/cofwm_display_user_data',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': COFound_Settings

    ,
    'defaultRequest': {
        "headers": {},
        "parameters": {
            "api_key": "{api_key}"
        },
        "body": null
    }
});

var social_user_login = new Apperyio.RestService({
    'url': 'http://www.kmitserver.com/rest/user/cofwm_social_user_login',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': COFound_Settings

    ,
    'defaultRequest': {
        "headers": {},
        "parameters": {
            "api_key": "{api_key}"
        },
        "body": null
    }
});

var invitation_accept = new Apperyio.RestService({
    'url': 'http://www.kmitserver.com/rest/user/cofwm_invitation_accept',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': COFound_Settings

    ,
    'defaultRequest': {
        "headers": {},
        "parameters": {
            "api_key": "{api_key}"
        },
        "body": null
    }
});

var SendGrid_Mail = new Apperyio.RestService({
    'url': 'https://api.sendgrid.com/api/mail.send.json',
    'dataType': 'json',
    'type': 'post',
    'contentType': false,

    'defaultRequest': {
        "headers": {},
        "parameters": {
            "api_key": "b3369521b3369521",
            "api_user": "ecotov"
        },
        "body": null
    }
});

var invitation_decline = new Apperyio.RestService({
    'url': 'http://www.kmitserver.com/rest/user/cofwm_invitation_decline',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': COFound_Settings

    ,
    'defaultRequest': {
        "headers": {},
        "parameters": {
            "api_key": "{api_key}"
        },
        "body": null
    }
});

var user_data = new Apperyio.RestService({
    'url': 'http://www.kmitserver.com/rest/user/cofwm_user_data',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': COFound_Settings

    ,
    'defaultRequest': {
        "headers": {},
        "parameters": {
            "api_key": "{api_key}"
        },
        "body": null
    }
});

var email_sent = new Apperyio.RestService({
    'url': 'http://www.kmitserver.com/rest/user/cofwm_email_sent',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': COFound_Settings

    ,
    'defaultRequest': {
        "headers": {},
        "parameters": {
            "api_key": "{api_key}"
        },
        "body": null
    }
});

var add_social_user = new Apperyio.RestService({
    'url': 'http://www.kmitserver.com/rest/user/cofwm_add_social_user',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': COFound_Settings

    ,
    'defaultRequest': {
        "headers": {},
        "parameters": {
            "api_key": "{api_key}"
        },
        "body": null
    }
});

var user_list = new Apperyio.RestService({
    'url': 'http://www.kmitserver.com/rest/user/cofwm_users_list',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': COFound_Settings

    ,
    'defaultRequest': {
        "headers": {},
        "parameters": {
            "api_key": "{api_key}"
        },
        "body": null
    }
});

var COFound_landingInfo_read_service = new Apperyio.RestService({
    'url': 'http://www.kmitserver.com/rest/user/cofwm_landing_page_info',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': COFound_Settings

    ,
    'defaultRequest': {
        "headers": {},
        "parameters": {
            "api_key": "{api_key}"
        },
        "body": null
    }
});

SendMail_generic_service = new Apperyio.SendMail_generic_service_Impl({

    "serviceName": "SendMail_generic_service"

    ,
    'defaultRequest': {
        "data": null
    }
});

var GeolocationService = new Apperyio.GeolocationService({
    'defaultRequest': {
        "data": {
            "options": {
                "maximumAge": 3000,
                "timeout": 5000,
                "enableHighAccuracy": true,
                "watchPosition": false
            }
        }
    }
});

var cofwm_device_user_login = new Apperyio.RestService({
    'url': 'http://www.kmitserver.com/rest/user/cofwm_device_user_login',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': COFound_Settings

    ,
    'defaultRequest': {
        "headers": {
            "Content-Type": "application/json"
        },
        "parameters": {
            "api_key": "{api_key}"
        },
        "body": null
    }
});

var social_user_registration = new Apperyio.RestService({
    'url': 'http://www.kmitserver.com/rest/user/cofwm_social_user_signup',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': COFound_Settings

    ,
    'defaultRequest': {
        "headers": {},
        "parameters": {
            "api_key": "{api_key}"
        },
        "body": null
    }
});

var update_social_user = new Apperyio.RestService({
    'url': 'http://www.kmitserver.com/rest/user/cofwm_update_social_user',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': COFound_Settings

    ,
    'defaultRequest': {
        "headers": {},
        "parameters": {
            "api_key": "{api_key}"
        },
        "body": null
    }
});

var invitation_send = new Apperyio.RestService({
    'url': 'http://www.kmitserver.com/rest/user/cofwm_invitation_send',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': COFound_Settings

    ,
    'defaultRequest': {
        "headers": {},
        "parameters": {
            "api_key": "{api_key}"
        },
        "body": null
    }
});

var update_user_data = new Apperyio.RestService({
    'url': 'http://www.kmitserver.com/rest/user/cofwm_update_user_data',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': COFound_Settings

    ,
    'defaultRequest': {
        "headers": {},
        "parameters": {
            "api_key": "{api_key}"
        },
        "body": null
    }
});