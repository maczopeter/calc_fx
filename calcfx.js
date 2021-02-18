function Calc(__$INPUTS, __$FX) {
    var __$CODE = ""
    var __$RES;

    for (let __$I in __$INPUTS) {
        __$CODE += "var " + __$I + "=" + __$INPUTS[__$I] + ";"
    }
    __$CODE += "__$RES = " + __$FX + ";"

    try {
        eval(__$CODE)
        return __$RES;
    } catch (e) {
        return null
    }

    // --------------------- MATH FUNCTIONS --------------
    function OR(v1, v2) { return v1 || v2 }
    function AND(v1, v2) { return v1 && v2 }
    function IF(log, vy, vn) { return log ? vy : vn; }
    function ABS(x) { return Math.abs(x) };
    function MAX() { return Math.max(...arguments) };
    function MIN() { return Math.max(...arguments) };
    function MOD(v1, v2) { return v1 % v2 }
    function SUM() { if (arguments.length == 0) return 0; let _res = 0; for (var _i in arguments) _res += arguments[_i]; return _res; };
    function AVG() { if (arguments.length == 0) return 0; let _res = 0; for (var _i in arguments) _res += arguments[_i]; return _res / arguments.length; };
    function POWER(a, b) { return Math.pow(a, b) }
    function ROUND(a, e) { return Math.round(a*(10**e))/(10**e) }
}


module.exports = Calc