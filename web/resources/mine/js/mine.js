String.prototype.format = function () {
    var args = arguments;
    return this.replace(/\{(\d+)\}/g, function (m, i) { return args[i]; });
}
String.prototype.apply = function (obj) {
    return this.replace(/\{([^\}]+)\}/g, function (m, i) {
        //return obj[i];
        with (obj) {
            try {
                var v = eval(i);
                return v === null ? '' : v;
            }
            catch (e) {
                return '';
            }
        }
    });
}