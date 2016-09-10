/**
 * Data models
 */
Apperyio.Entity = new Apperyio.EntityFactory({
    "Number": {
        "type": "number"
    },
    "invitation": {
        "type": "object",
        "properties": {
            "status": {
                "type": "string"
            },
            "Inviting_user_id": {
                "type": "string"
            },
            "invitation_id": {
                "type": "string"
            },
            "user_pitch": {
                "type": "string"
            },
            "user_expertise": {
                "type": "string"
            },
            "user_seeking": {
                "type": "string"
            },
            "user_nickname": {
                "type": "string"
            }
        }
    },
    "user_list_arr": {
        "type": "array",
        "items": {
            "type": "user_list_obj"
        }
    },
    "user_list_obj": {
        "type": "object",
        "properties": {
            "user_pitch": {
                "type": "string"
            },
            "user_invitations": {
                "type": "string"
            },
            "user_nickname": {
                "type": "string"
            },
            "user_id": {
                "type": "string"
            },
            "user_intro_email": {
                "type": "string"
            },
            "user_expertise": {
                "type": "string"
            },
            "user_seeking": {
                "type": "string"
            }
        }
    },
    "invitation_list": {
        "type": "array",
        "items": {
            "type": "invitation"
        }
    },
    "Boolean": {
        "type": "boolean"
    },
    "String": {
        "type": "string"
    },
    "user": {
        "type": "object",
        "properties": {
            "token": {
                "type": "string"
            },
            "client_ip": {
                "type": "string"
            },
            "longitude": {
                "type": "string"
            },
            "client_device_id": {
                "type": "string"
            },
            "invitation_id": {
                "type": "string"
            },
            "user_id": {
                "type": "string"
            },
            "email": {
                "type": "string"
            },
            "password": {
                "type": "string"
            },
            "cfwm_id": {
                "type": "string"
            },
            "latitude": {
                "type": "string"
            },
            "client_location": {
                "type": "string"
            }
        }
    },
    "profile": {
        "type": "object",
        "properties": {
            "id": {
                "type": "string"
            },
            "lastName": {
                "type": "string"
            },
            "firstName": {
                "type": "string"
            },
            "profileUrl": {
                "type": "string"
            },
            "pictureUrl": {
                "type": "string"
            },
            "email": {
                "type": "string"
            }
        }
    },
    "acceptInvitation": {
        "type": "object",
        "properties": {
            "email_body": {
                "type": "string"
            },
            "user_intro_email": {
                "type": "string"
            },
            "Invited_user_id": {
                "type": "string"
            },
            "invitation_status": {
                "type": "string"
            },
            "Invited_user_intro_email": {
                "type": "string"
            },
            "Inviting_user_intro_email": {
                "type": "string"
            },
            "invitation_id": {
                "type": "string"
            },
            "email_subject": {
                "type": "string"
            },
            "Inviting_user_id": {
                "type": "string"
            }
        }
    }
});
Apperyio.getModel = Apperyio.Entity.get.bind(Apperyio.Entity);

/**
 * Data storage
 */
Apperyio.storage = {

    "id_token": new $a.LocalStorage("id_token", "String"),

    "access_token": new $a.LocalStorage("access_token", "String"),

    "session_token": new $a.LocalStorage("session_token", "String"),

    "token": new $a.LocalStorage("token", "String"),

    "User": new $a.LocalStorage("User", "user"),

    "User_list_arr": new $a.LocalStorage("User_list_arr", "user_list_arr"),

    "User_list_id": new $a.LocalStorage("User_list_id", "Number"),

    "ProfileDetails_page_ip": new $a.LocalStorage("ProfileDetails_page_ip", "Number"),

    "User_list_obj": new $a.LocalStorage("User_list_obj", "user_list_obj"),

    "Invitation": new $a.LocalStorage("Invitation", "invitation"),

    "Invitation_List": new $a.LocalStorage("Invitation_List", "invitation_list"),

    "newi": new $a.LocalStorage("newi", "String"),

    "ProfileLN": new $a.LocalStorage("ProfileLN", "profile"),

    "resp": new $a.LocalStorage("resp", "String"),

    "image_uri": new $a.LocalStorage("image_uri", "String"),

    "image_base64": new $a.LocalStorage("image_base64", "String"),

    "sendAttachment": new $a.LocalStorage("sendAttachment", "Boolean"),

    "AcceptInvitation": new $a.LocalStorage("AcceptInvitation", "acceptInvitation"),

    "logged": new $a.LocalStorage("logged", "Boolean"),

    "pushNotificationDeviceID": new $a.LocalStorage("pushNotificationDeviceID", "String"),

    "pushNotificationToken": new $a.LocalStorage("pushNotificationToken", "String")
};

/**
 * Push Notification specific data storage
 */
Apperyio.storage.pushNotificationToken = new $a.LocalStorage("pushNotificationToken", "String");
Apperyio.storage.pushNotificationDeviceID = new $a.LocalStorage("pushNotificationDeviceID", "String");
Apperyio.storage.deviceTimeZone = new $a.LocalStorage("deviceTimeZone", "String");