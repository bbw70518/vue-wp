module.exports = {
	get : function(key){
		var spcks = document.cookie.split('; ');
		for (var i = 0; i < spcks.length; i++) {
			var spck =  spcks[i].split('=');
			if(spck[0]==key) return spck[1];
		}
		return null;
	},
	set : function (cname, cvalue, exdays) {
	    var d = new Date();
	    d.setTime(d.getTime() + (exdays*86400000));
	    var expires = "expires="+d.toUTCString();
	    document.cookie = cname + "=" + cvalue + "; " + expires;
	}
};