interface INumerologyCalculator {
    getLifeNumberology(): number;
    getAstrologyConstellationName(): string;
}

class NumberlogyCalcuator implements INumerologyCalculator {
    private _birthYear: number;
    private _birthMonth: number;
    private _birthDay: number;

    constructor(year: number, month: number, day: number) {
        this._birthYear = year;
        this._birthMonth = month;
        this._birthDay = day;
    }
    getLifeNumberology(): number {
        let str = this._birthYear.toString() + this._birthMonth.toString() + this._birthDay.toString();
        return this.getLifeNumerologyInternal(str);
    }

    private getLifeNumerologyInternal(str: string): number {
        let life=0;
            for (var i = 0; i < str.length; i++) {
                life += parseInt(str[i]);
            }
            if(life>9){
                life=this.getLifeNumerologyInternal(life.toString());
            }
        return life;
    }
    getAstrologyConstellationName(): string {
        let mouth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] ;
        let constellation =["aquarius", "pisces", "aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "sagittarius", "capricorn"];
        for(var i of mouth){
            if(this._birthMonth-mouth[i]==0){
                console.log(mouth[i]);
                if(this._birthMonth==1){
                    if(this._birthDay>=21){
                        return constellation[0];
                    }else{
                        return constellation[11];
                    }
                }else{
                    if(this._birthDay>=21){
                        console.log(">=21");
                        return constellation[i];
                    }else{
                        console.log("<21");
                        return constellation[i-1];
                    }
                }
            }
        }
    }
}