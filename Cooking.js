var Cooking = /** @class */ (function () {
    function Cooking(title, meal, element) {
        this.title = title;
        this.meal = meal;
        this.element = element;
    }
    return Cooking;
}());
var cooking = new Cooking(" S\u01B0\u01A1\u0300n xa\u0300o chua ngo\u0323t", 2, ["400 g s\u01B0\u1EDDn th\u0103n", "4 tbsp n\u01B0\u1EDBc m\u1EAFm", "5 tsp \u0111\u01B0\u1EDDng", "5 tsp n\u01B0\u1EDBc c\u1ED1t chanh", "1/3 b\u00E1t n\u01B0\u1EDBc s\u00F4i", "H\u00E0nh kh\u00F4, t\u1ECFi, \u1EDBt, h\u00E0nh l\u00E1", "2 qu\u1EA3 c\u00E0 chua", "H\u00E0nh t\u00E2y (\u1EDBt chu\u00F4ng)"]);
console.log("Ten mon an" + cooking.title);
console.log("Khau phan an " + cooking.meal);
console.log("Thanh phan: ");
for (var i = 0; i < cooking.element.length; i++) {
    console.log(" - " + cooking.element[i]);
}
