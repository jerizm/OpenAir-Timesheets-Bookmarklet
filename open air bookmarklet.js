(function(e, a, g, h, f, c, b, d) {
    if (! (f = e.jQuery) || g > f.fn.jquery || h(f)) {
        c = a.createElement("script");
        c.type = "text/javascript";
        c.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + g + "/jquery.min.js";
        c.onload = c.onreadystatechange = function() {
            if (!b && (!(d = this.readyState) || d == "loaded" || d == "complete")) {
                h((f = e.jQuery).noConflict(1), b = 1);
                f(c).remove()
            }
        };
        a.documentElement.childNodes[0].appendChild(c)
    }
})
(window, document, "1.7.1",
function($, L) {
	$('body').delegate('.dhx_combo_select','focus', function(){ $(this).attr("size",30); });
	var timesheetGrid = $('#timesheet_grid');
	timesheetGrid.width(1600);
	$(timesheetGrid.children('div')[1]).width(1600);
});