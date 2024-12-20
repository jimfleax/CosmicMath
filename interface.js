
var $$ = [];
function waitForElement(selector) {
    return new Promise((resolve) => {
      const element = document.querySelector(selector);
      if (element) {
        resolve(element);
      } else {
        const observer = new MutationObserver(() => {
          const element = document.querySelector(selector);
          if (element) {
            observer.disconnect();
            resolve(element);
          }
        });

        observer.observe(document.body, { childList: true, subtree: true });
      }
    });
  }
  
class Button {
    constructor(label = 'Submit', css = '', id = 'btn') {
        this.code = function () {
            var bn = document.createElement('button');
            bn.id = (id) ? id : 'btn';
            bn.ariaLabel = (label) ? label : 'Submit';
            bn.style.cssText = (css) ? css : '';
            bn.innerText = (label) ? label : 'Submit';
            return bn;
        };
        return this.code();
    }
};
class Input {
    constructor(id = 'response', css = '', placeholder) {
        this.code = function () {
            var txt = document.createElement('input');
            txt.id = (id) ? id : 'response';
            txt.placeholder = (placeholder) ? placeholder : '';
            txt.autofocus = true;
            txt.style.cssText = (css) ? css : '';
            return txt;
        };
        return this.code();
    }
};
class Break {
    constructor() {
        this.code = function () {
            var br = document.createElement('br');
            return br;
        };
        return this.code();
    }
};
class Text {
    constructor(text, css) {
        this.code = function () {
            var txt = document.createElement('span');
            txt.innerText = text;
            txt.style.cssText = 'font-family:KaTeX_Main;' + css;
            return txt;
        };
        return this.code();
    }
}
;
class Line {
    constructor(css) {
        this.code = function () {
            var line = document.createElement('hr');
            line.style.cssText = (css) ? css : '';
            return line;
        }
        return this.code();
    }
}
;
class Select {
    constructor(css, ...options) {
        this.code = () => {
            var select = document.createElement('select');
            select.id = 'response';
            select.style.cssText = (css) ? css : '';
            options.forEach((a) => {
                var option = document.createElement('option');
                option.innerHTML = a;
                select.append(option);
            });
            return select;
        }
        return this.code();
    }
}
class Coordinates {
    constructor(...points) {
        this.points = [...points];
        this.length = points.length;
        this.toString = () => {
            return this.points.map((a)=>{return a.join(",")}).map((a,b)=>{return (b===this.length-1) ? (a.concat(")")):(b ? (a):(("("+a)))}).join("), (");
        };
        this.getPoints = () =>{
            return this.points;
        }
        this.getX = () =>{
            return this.points.map((a)=>{return a[0]});
        };
        this.getY = () => {
            return this.points.map((a)=>{return a[1]});
        };
    }
}
var gcd = (a, b) => {
    if (!b)
        return a;
    return gcd(b, a % b);
}
class Frac {
    constructor (numerator = null, denominator = null, decimal = null) {
        this.decimal = (decimal) ? decimal : (numerator/denominator);
        try {
            if (!numerator && !denominator) {
                if (decimal.toFixed(7).toString().split('.')[1].slice(-4, -1).split('').reduce((a, b) => { return (a[0] === b) ? [b, true] : [b, false] }, [0, false])[1]) {
                    return frac(parseFloat(parseFloat((parseFloat((decimal).toFixed(4)) * 100).toFixed(2)) - ((decimal).toFixed(2))), 99);
                } else {
                    var numerat = decimal.toFixed(10) * Math.pow(10, 10);
                    var denominat = Math.pow(10, 10);
                    return frac(numerat, denominat);
                }
            } else {
                var lcm = Math.abs(gcd(numerator, denominator));
                numerator = numerator / lcm;
                denominator = denominator / lcm;
                if (denominator == 1) {
                    this.fraction =  numerator;
                } else if (numerator === 0 || denominator === 0) {
                    this.fraction =  0;
                } else {
                    this.fraction = numerator + '/' + denominator;
                }
            }
        } catch (errrr) {
            console.log(errrr, ' ', numerator, denominator, decimal);
        }
        return this.fraction;
    }
    valueOf() {
        return this.decimal;
    }
}
var toFrac = (sign=0,a, b) => {
  return `
    <math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>${!sign || "-"}</mo>
  <mfrac>
    <mi>${a}</mi>
    <mi>${b}</mi>
  </mfrac>
</math>

    `;
};
Array.prototype.any = function() {
    return this[$.random(this.length-1, true)];
}
var frac = (numerator = null, denominator = null, decimal = null) => {
    try {
        if (!numerator && !denominator) {
            if (parseFloat(decimal).toFixed(10).toString().split('.')[1].slice(-7, -1).split('').reduce((a, b) => { return (a[0] === b) ? [b, true] : [b, false] }, [0, false])[1]) {
                return frac(parseFloat(parseFloat((parseFloat(parseFloat(decimal).toFixed(4)) * 100).toFixed(2)) - (parseFloat(decimal).toFixed(2))), 99);
            } else {
                var numerat = decimal.toFixed(10) * Math.pow(10, 10);
                var denominat = Math.pow(10, 10);
                return frac(numerat, denominat);
            }
        } else {
            var lcm = Math.abs(gcd(numerator, denominator));
            numerator = numerator / lcm;
            denominator = denominator / lcm;
            if (denominator == 1) {
                return numerator;
            } else if (numerator === 0 || denominator === 0) {
                return 0;
            } else {
                return numerator + '/' + denominator;
            }
        }
    } catch (errrr) {
        console.log(errrr, ' ', numerator, denominator, decimal);
    }
}
var isPrime = (num, limit,isInt, ...omit) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) return num;
    }
    return isPrime($.random(limit, isInt, omit), limit, isInt, omit);
}, formatCoef = num => {
    return !(num) ? null : (num === 1) ? ' ' : ((num === -1) ? '-' : num);
};
class Poly {
    constructor(expression, variable = '𝑥') {
        this.coef = () => {
            return Object.keys(expression);
        };
        this.expression = () => {
            var coefs = this.coef();
            coefs.forEach((a, b) => { coefs[b] = parseInt(a) })
            var exp = [];
            coefs.forEach((i, j) => {
                exp.push((((i < 0) ? '' : (!(j) ? '' : '+')) + i + variable + ((expo(Object.values(expression)[j]) === '¹') ? '' : expo(Object.values(expression)[j]))));
            });
            return exp.join('');
        };
        this.add = (other) => {
            var otherCoef = Object.keys(other);
            var result = [];
            otherCoef.forEach((a,b)=>{
                (Object.values(other)[b] === Object.values(this.coef()[b])) ? result.push(parseInt(a)+parseInt(this.coef()[b])) : result.push(Object.values(this.coef()[b]));
            });
            var exp = [];
            result.forEach((i, j) => {
                exp.push((((i < 0) ? '' : (!(j) ? '' : '+')) + i + variable + ((expo(Object.values(expression)[j]) === '¹') ? '' : expo(Object.values(expression)[j]))));
            });
            return exp.join('');
        }
    }
};
var expo = (num) => {
    var codes = [];
    num.toString().split('').forEach((i) => {
        switch (parseInt(i)) {
            case 1:
                codes.push(String.fromCharCode(185));
                break;
            case 2:
                codes.push(String.fromCharCode(178));
                break;
            case 3:
                codes.push(String.fromCharCode(179));
                break;
            case 4:
                codes.push(String.fromCharCode(8308));
                break;
            case 5:
                codes.push(String.fromCharCode(8309));
                break;
            case 6:
                codes.push(String.fromCharCode(8310));
                break;
            case 7:
                codes.push(String.fromCharCode(8311));
                break;
            case 8:
                codes.push(String.fromCharCode(8312));
                break;
            case 9:
                codes.push(String.fromCharCode(8313));
                break;
            case 0:
                codes.push(String.fromCharCode(8304));
                break;
            default:
                codes.push(String(i));
                break;

        }
    });
    return codes.join('');
};
var rand_inverval_div = (min,max,step) => {
    min+=(min%step);
    max-=(max%step);
    return step*Math.round(Math.random()*max/step);
};
function randInterval(min, max, ...exclude) {
    var val = [];
    for (i=min;i<=max;i++) {
        exclude.includes(i) || val.push(i);
    };
    return val[$.random(val.length-1,true)];
}
function recur(decimal) {
    const before_point = decimal.split(".")[0];
    const after_point = decimal.split(".")[1];
    var repeat = [];
    var loc = 0;
    while (!loc || repeat.join("")+repeat.join("")!=after_point.slice(0,loc*2)) {
        if (repeat.length >= 50) {
            return false;
        };
        repeat.push(after_point.split("")[loc++]);
    };
    console.log([parseInt(repeat.join("")), Math.pow(10,repeat.join("").length)-1]);
    return frac(parseInt(repeat.join("")), Math.pow(10,repeat.join("").length)-1);
};
var render = (tag, inner) => {
    var el = document.createElement(tag);
    el.innerHTML = inner;
    return el;
};
var parseVal = (val) => {
    if (typeof val === 'string') {
        const val_split = val.split('/');
        if (val_split.length > 2) throw new Error("Invalid value provided");
        return (val_split.length === 2) ? (parseInt(val_split[0])/parseInt(val_split[1])) : parseInt(val_split[0]);
    };
    return val;
};
var putSign = (num) => (num >= 0) ? `+ ${formatCoef(num)}` : `- ${formatCoef(-num)}`;