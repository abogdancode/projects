var CoFoundHelper = {
    inviterEmail: "",
    isMobile: function() {
        return (/iphone|ipod|ipad|android/).test(navigator.userAgent.toLowerCase());
    },
    
    login:function () {
        
        var user = Apperyio.storage.User.get();
        if (user && user.password && user.email) {
            // make login and obtain token for future api calls
            
        } else {
            
        } 
    },
    
    initSocialGap: function() {
    },
    
    SocialGapSucc: function(accessToken) {
        //alert(accessToken);
        
        COFound_Settings.token = accessToken;
        var onSuccess = function(data) {
            
        };
    },
    
    SocialGapFail: function() {
    }
};

function getProfileData() {
}

function onLNLoad() {
}

