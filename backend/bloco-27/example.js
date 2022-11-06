var Tv = /** @class */ (function () {
    function Tv(b, s, r, c) {
        var _this = this;
        this.turnOn = function () {
            console.log(_this.brand);
            console.log(_this.size);
            console.log(_this.resolution);
            console.log(_this.connections);
        };
        this.brand = b;
        this.size = s;
        this.resolution = r;
        this.connections = c;
    }
    return Tv;
}());
var newTv = new Tv("lg", 100, 49, "hdmi");
newTv.turnOn();
