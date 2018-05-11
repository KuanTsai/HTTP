var NumberlogyCalcuator = (function () {
    function NumberlogyCalcuator(year, month, day) {
        this._birthYear = year;
        this._birthMonth = month;
        this._birthDay = day;
    }
    NumberlogyCalcuator.prototype.getLifeNumberology = function () {
        var str = this._birthYear.toString() + this._birthMonth.toString() + this._birthDay.toString();
        return this.getLifeNumerologyInternal(str);
    };
    NumberlogyCalcuator.prototype.getLifeNumerologyInternal = function (str) {
        var life = 0;
        for (var i = 0; i < str.length; i++) {
            life += parseInt(str[i]);
        }
        if (life > 9) {
            life = this.getLifeNumerologyInternal(life.toString());
        }
        return life;
    };
    NumberlogyCalcuator.prototype.getAstrologyConstellationName = function () {
        var mouth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        var constellation = ["aquarius", "pisces", "aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "sagittarius", "capricorn"];
        for (var _i = 0, mouth_1 = mouth; _i < mouth_1.length; _i++) {
            var i = mouth_1[_i];
            if (this._birthMonth - mouth[i] == 0) {
                console.log(mouth[i]);
                if (this._birthMonth == 1) {
                    if (this._birthDay >= 21) {
                        return constellation[0];
                    }
                    else {
                        return constellation[11];
                    }
                }
                else {
                    if (this._birthDay >= 21) {
                        console.log(">=21");
                        return constellation[i];
                    }
                    else {
                        console.log("<21");
                        return constellation[i - 1];
                    }
                }
            }
        }
    };
    return NumberlogyCalcuator;
}());
//# sourceMappingURL=Astrology.js.map