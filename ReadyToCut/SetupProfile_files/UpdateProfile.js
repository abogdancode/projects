/*
 * JS for UpdateProfile generated by Appery.io
 */

Apperyio.getProjectGUID = function() {
    return 'a4cc3150-80d9-438a-9c96-e11154eb1f48';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}

// Appery.io push registration service
var _pushRegistrationApperyService = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/push/reg',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',
});

Apperyio.AppPages = [{
    "name": "ConfirmInvite",
    "location": "ConfirmInvite.html"
}, {
    "name": "LandingPage",
    "location": "LandingPage.html"
}, {
    "name": "BrowsingInterested",
    "location": "BrowsingInterested.html"
}, {
    "name": "Main",
    "location": "Main.html"
}, {
    "name": "BrowsingCofounders",
    "location": "BrowsingCofounders.html"
}, {
    "name": "UpdateProfile",
    "location": "UpdateProfile.html"
}, {
    "name": "Contact",
    "location": "Contact.html"
}, {
    "name": "Swipe",
    "location": "Swipe.html"
}];

function UpdateProfile_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilebutton_12': 'UpdateProfile_mobilebutton_12',
        'mobilelabel_2': 'UpdateProfile_mobilelabel_2',
        'user_handle': 'UpdateProfile_user_handle',
        'user_expertise': 'UpdateProfile_user_expertise',
        'user_expertise-0': 'UpdateProfile_user_expertise-0',
        'user_pitch': 'UpdateProfile_user_pitch',
        'user_seeking': 'UpdateProfile_user_seeking',
        'user_seeking-0': 'UpdateProfile_user_seeking-0',
        'introEmail_input': 'UpdateProfile_introEmail_input',
        'area_selectmenu': 'UpdateProfile_area_selectmenu',
        'area_selectmenu-0': 'UpdateProfile_area_selectmenu-0',
        'button_continue': 'UpdateProfile_button_continue',
        'mobilelabel_4': 'UpdateProfile_mobilelabel_4',
        'mobilelabel_3': 'UpdateProfile_mobilelabel_3'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    /*
     * Nonvisual components
     */

    Apperyio.mappings = Apperyio.mappings || {};

    Apperyio.mappings["UpdateProfile_update_user_onbeforesend_mapping_0"] = {
        "homeScreen": "UpdateProfile",
        "directions": [

        {
            "from_name": "token",
            "from_type": "LOCAL_STORAGE",

            "to_name": "update_user",
            "to_type": "SERVICE_REQUEST",

            "to_default": {
                "headers": {},
                "parameters": {
                    "api_key": "{api_key}"
                },
                "body": null
            },

            "mappings": [

            {

                "source": "$",
                "target": "$['parameters']['token']"

            }

            ]
        },

        {
            "from_name": "User",
            "from_type": "LOCAL_STORAGE",

            "to_name": "update_user",
            "to_type": "SERVICE_REQUEST",

            "to_default": {
                "headers": {},
                "parameters": {
                    "api_key": "{api_key}"
                },
                "body": null
            },

            "mappings": [

            {

                "source": "$['client_location']",
                "target": "$['parameters']['client_location']"

            },

            {

                "source": "$['client_ip']",
                "target": "$['parameters']['client_ip']"

            },

            {

                "source": "$['client_device_id']",
                "target": "$['parameters']['client_device_id']"

            }

            ]
        },

        {
            "from_name": "UpdateProfile",
            "from_type": "UI",

            "to_name": "update_user",
            "to_type": "SERVICE_REQUEST",

            "to_default": {
                "headers": {},
                "parameters": {
                    "api_key": "{api_key}"
                },
                "body": null
            },

            "mappings": [

            {

                "source": "$['user_handle:text']",
                "target": "$['parameters']['user_nickname']"

            },

            {

                "source": "$['user_pitch:text']",
                "target": "$['parameters']['user_pitch']"

            },

            {

                "source": "$['user_expertise:selectedMenuItem']",
                "target": "$['parameters']['user_expertise']"

            },

            {

                "source": "$['introEmail_input:text']",
                "target": "$['parameters']['user_intro_email']"

            },

            {

                "source": "$['area_selectmenu:selectedMenuItem']",
                "target": "$['parameters']['user_area']"

            },

            {

                "source": "$['user_seeking:selectedMenuItem']",
                "target": "$['parameters']['user_seeking']"

            }

            ]
        }

        ]
    };

    Apperyio.mappings["UpdateProfile_update_user_onsuccess_mapping_0"] = {
        "homeScreen": "UpdateProfile",
        "directions": []
    };

    Apperyio.mappings["UpdateProfile_display_data_user_onbeforesend_mapping_0"] = {
        "homeScreen": "UpdateProfile",
        "directions": [

        {
            "from_name": "token",
            "from_type": "LOCAL_STORAGE",

            "to_name": "display_data_user",
            "to_type": "SERVICE_REQUEST",

            "to_default": {
                "headers": {},
                "parameters": {
                    "api_key": "{api_key}"
                },
                "body": null
            },

            "mappings": [

            {

                "source": "$",
                "target": "$['parameters']['token']"

            }

            ]
        },

        {
            "from_name": "User",
            "from_type": "LOCAL_STORAGE",

            "to_name": "display_data_user",
            "to_type": "SERVICE_REQUEST",

            "to_default": {
                "headers": {},
                "parameters": {
                    "api_key": "{api_key}"
                },
                "body": null
            },

            "mappings": [

            {

                "source": "$['client_location']",
                "target": "$['parameters']['client_location']"

            },

            {

                "source": "$['client_ip']",
                "target": "$['parameters']['client_ip']"

            },

            {

                "source": "$['client_device_id']",
                "target": "$['parameters']['client_device_id']"

            },

            {

                "source": "$['user_id']",
                "target": "$['parameters']['user_id']"

            }

            ]
        }

        ]
    };

    Apperyio.mappings["UpdateProfile_display_data_user_onsuccess_mapping_0"] = {
        "homeScreen": "UpdateProfile",
        "directions": [

        {
            "from_name": "display_data_user",
            "from_type": "SERVICE_RESPONSE",

            "to_name": "UpdateProfile",
            "to_type": "UI",

            "mappings": [

            {

                "source": "$['body']['user_nickname']",
                "target": "$['user_handle:text']"

            },

            {

                "source": "$['body']['user_pitch']",
                "target": "$['user_pitch:text']"

            },

            {

                "source": "$['body']['user_expertise']",
                "target": "$['user_expertise:selectedMenuItem']"

            },

            {

                "source": "$['body']['user_seeking']",
                "target": "$['user_seeking:selectedMenuItem']"

            },

            {

                "source": "$['body']['user_intro_email']",
                "target": "$['introEmail_input:text']"

            },

            {

                "source": "$['body']['user_area']",
                "target": "$['area_selectmenu:selectedMenuItem']"

            }

            ]
        },

        {
            "from_name": "display_data_user",
            "from_type": "SERVICE_RESPONSE",

            "to_name": "User",
            "to_type": "LOCAL_STORAGE",

            "mappings": [

            {

                "source": "$['body']['user_intro_email']",
                "target": "$['email']"

            }

            ]
        }

        ]
    };

    Apperyio.mappings["UpdateProfile_ProfileDetails_displayUsers_onbeforesend_mapping_0"] = {
        "homeScreen": "UpdateProfile",
        "directions": [

        {
            "from_name": "token",
            "from_type": "LOCAL_STORAGE",

            "to_name": "ProfileDetails_displayUsers",
            "to_type": "SERVICE_REQUEST",

            "to_default": {
                "headers": {},
                "parameters": {
                    "api_key": "{api_key}"
                },
                "body": null
            },

            "mappings": [

            {

                "source": "$",
                "target": "$['parameters']['token']"

            }

            ]
        },

        {
            "from_name": "User",
            "from_type": "LOCAL_STORAGE",

            "to_name": "ProfileDetails_displayUsers",
            "to_type": "SERVICE_REQUEST",

            "to_default": {
                "headers": {},
                "parameters": {
                    "api_key": "{api_key}"
                },
                "body": null
            },

            "mappings": [

            {

                "source": "$['client_location']",
                "target": "$['parameters']['client_location']"

            },

            {

                "source": "$['client_ip']",
                "target": "$['parameters']['client_ip']"

            },

            {

                "source": "$['latitude']",
                "target": "$['parameters']['latitude']"

            },

            {

                "source": "$['longitude']",
                "target": "$['parameters']['longitude']"

            }

            ]
        }

        ]
    };

    Apperyio.mappings["UpdateProfile_ProfileDetails_displayUsers_onsuccess_mapping_1"] = {
        "homeScreen": "UpdateProfile",
        "directions": [

        {
            "from_name": "ProfileDetails_displayUsers",
            "from_type": "SERVICE_RESPONSE",

            "to_name": "User_list_arr",
            "to_type": "LOCAL_STORAGE",

            "mappings": [

            {

                "source": "$['body']",
                "target": "$"

            },

            {

                "source": "$['body'][i]['user_id']",
                "target": "$[i]['user_id']"

            },

            {

                "source": "$['body'][i]['user_expertise']",
                "target": "$[i]['user_expertise']"

            },

            {

                "source": "$['body'][i]['user_nickname']",
                "target": "$[i]['user_nickname']"

            },

            {

                "source": "$['body'][i]['user_pitch']",
                "target": "$[i]['user_pitch']"

            },

            {

                "source": "$['body'][i]['user_seeking']",
                "target": "$[i]['user_seeking']"

            }

            ]
        }

        ]
    };

    Apperyio.datasources = Apperyio.datasources || {};

    window.update_user = Apperyio.datasources.update_user = new Apperyio.DataSource(update_user_data, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["UpdateProfile_update_user_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {

        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["UpdateProfile_update_user_onsuccess_mapping_0"]);
            Apperyio.storage.ProfileDetails_page_ip.set(0);
            Apperyio.storage.logged.set(true);
            try {
                ProfileDetails_displayUsers.execute({});
            } catch (e) {
                console.error(e);
                hideSpinner();
            };
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });

    window.display_data_user = Apperyio.datasources.display_data_user = new Apperyio.DataSource(display_user_data, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["UpdateProfile_display_data_user_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {

        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["UpdateProfile_display_data_user_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });

    window.ProfileDetails_displayUsers = Apperyio.datasources.ProfileDetails_displayUsers = new Apperyio.DataSource(display_users_list, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["UpdateProfile_ProfileDetails_displayUsers_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {

        },
        "onSuccess": function(data) {
            if (data.code == "602") {

            } else {
                Apperyio.storage.User_list_arr.set(data);
                Apperyio.navigateTo('Main');
            };
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });

    /*
     * Appery.io Push-notification registration service
     */
    Apperyio.mappings["_pushRegistrationApperyService_onbeforesend"] = {
        "homeScreen": "UpdateProfile",
        "directions": [{
            "from_name": "pushNotificationToken",
            "from_type": "LOCAL_STORAGE",
            "to_name": "_registerPushApperyDS",
            "to_type": "SERVICE_REQUEST",
            "mappings": [{
                "source": "$",
                "target": "$['body']['token']"
            }]
        }, {
            "from_name": "pushNotificationDeviceID",
            "from_type": "LOCAL_STORAGE",
            "to_name": "_registerPushApperyDS",
            "to_type": "SERVICE_REQUEST",
            "mappings": [{
                "source": "$",
                "target": "$['body']['deviceID']"
            }]
        }, {
            "from_name": "deviceTimeZone",
            "from_type": "LOCAL_STORAGE",
            "to_name": "_registerPushApperyDS",
            "to_type": "SERVICE_REQUEST",
            "mappings": [{
                "source": "$",
                "target": "$['body']['timeZone']"
            }]
        }, {
            "to_name": "_registerPushApperyDS",
            "to_type": "SERVICE_REQUEST",
            "mappings": [{
                "target_transformation": function(value) {
                    return Apperyio.getProjectGUID();
                },
                "target": "$['headers']['X-Appery-App-Id']"
            }, {
                "target_transformation": function(value) {
                    return Apperyio.getTargetPlatform();
                },
                "target": "$['body']['type']"
            }]
        }]
    };

    var _registerPushApperyDS = Apperyio.datasources._registerPushApperyDS = new Apperyio.DataSource(_pushRegistrationApperyService, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["_pushRegistrationApperyService_onbeforesend"]);
        },
        'onComplete': function(jqXHR, textStatus) {},
        'onSuccess': function(data) {
            console.info('App successfully registered with Appery.io Push service');
            $(document).trigger('pushregistrationsuccess');
        },
        'onError': function(jqXHR, textStatus, errorThrown) {
            $(document).trigger('pushregistrationfail');
        }
    });

    Apperyio.CurrentScreen = 'UpdateProfile';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var UpdateProfile_onLoad = function() {
            UpdateProfile_elementsExtraJS();

            var Index = Apperyio.storage.ProfileDetails_page_ip.get();
            if (Index == 1) {
                display_data_user.execute();
            }

            Apperyio('user_pitch').attr("maxlength", 160);

            UpdateProfile_deviceEvents();
            UpdateProfile_windowEvents();
            UpdateProfile_elementsEvents();
        };

    // screen window events


    function UpdateProfile_windowEvents() {

        $('#UpdateProfile').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    };

    // device events


    function UpdateProfile_deviceEvents() {
        document.addEventListener("deviceready", function() {

            $(document).bind("pushinit", function() {
                localStorage.setItem('pushNotificationToken', arguments[1].registrationId);
                _registerPushApperyDS.execute({});
            });

            localStorage.setItem('pushNotificationDeviceID', device.uuid);

            var offset = new Date().getTimezoneOffset();
            var hr = parseInt(offset / (-60));
            var min = -offset - hr * 60;
            var tmin = '' + min;
            var timezone = 'UTC' + (hr > 0 ? '+' + hr : hr) + ':' + (tmin.length > 1 ? tmin : '0' + tmin);
            localStorage.setItem('deviceTimeZone', timezone);

            var push = PushNotification.init({
                ios: {
                    alert: false,
                    badge: false,
                    sound: false
                },
                android: {
                    senderID: ''
                }
            });

            push.on('registration', function(data) {
                $(document).trigger('pushinit', data);
            });

            push.on('notification', function(data) {
                $(document).trigger('push-notification', data);
            });

            push.on('error', function(e) {
                console.log("Error: " + e.message);
            });

        });
    };

    // screen elements extra js


    function UpdateProfile_elementsExtraJS() {
        // screen (UpdateProfile) extra code

        /* user_expertise */

        $("#UpdateProfile_user_expertise").parent().find("a.ui-btn").attr("tabindex", "6");

        /* user_seeking */

        $("#UpdateProfile_user_seeking").parent().find("a.ui-btn").attr("tabindex", "7");

        /* area_selectmenu */

        $("#UpdateProfile_area_selectmenu").parent().find("a.ui-btn").attr("tabindex", "10");

        /* popup_expertise */
        $("#UpdateProfile_popup_expertise").popup("option", "positionTo", "window");

        /* popup_seeking */
        $("#UpdateProfile_popup_seeking").popup("option", "positionTo", "window");

    };

    // screen elements handler


    function UpdateProfile_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#UpdateProfile_mobilecontainer [name="button_continue"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    if (Apperyio('user_expertise').val() == 'Expertise') {
                        Apperyio('popup_expertise').popup("open");
                    } else if (Apperyio('user_seeking').val() == 'Seeking') {
                        Apperyio('popup_seeking').popup("open");
                    } else if (Apperyio("user_handle").val() == "") {
                        alert("Please input your username");
                    } else if (Apperyio("user_handle").val() == "") {
                        alert("Please input your elevator pitch");
                    } else {
                        if (!Apperyio("user_handle").val() || !Apperyio("user_pitch").val() || !Apperyio("introEmail_input").val()) {
                            alert("Please fill all fields");
                        } else {
                            update_user.execute();
                        }
                    };

                }
            },
        }, '#UpdateProfile_mobilecontainer [name="button_continue"]');

    };

    $(document).off("pagebeforeshow", "#UpdateProfile").on("pagebeforeshow", "#UpdateProfile", function(event, ui) {
        Apperyio.CurrentScreen = "UpdateProfile";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    UpdateProfile_onLoad();
};

$(document).off("pagecreate", "#UpdateProfile").on("pagecreate", "#UpdateProfile", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    UpdateProfile_js();
});