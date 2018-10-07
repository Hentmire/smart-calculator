class SmartCalculator {
	 
  constructor(initialValue) {
  	this.stringResult = '' + initialValue;
  }

  add(number) {
    this.stringResult += '+' + number;
    SmartCalculator.prototype.valueOf = function(){
   		return eval(this.stringResult);
	};
    return this;
  }
  
  subtract(number) {
    this.stringResult += '-' + number;
    SmartCalculator.prototype.valueOf = function(){
   		return eval(this.stringResult);
	};
    return this;
  }

  multiply(number) {
    this.stringResult += '*' + number;
    SmartCalculator.prototype.valueOf = function(){
   		return eval(this.stringResult);
	};
    return this;
  }

  devide(number) {
    this.stringResult += '/' + number;
    SmartCalculator.prototype.valueOf = function(){
   		return eval(this.stringResult);
	};
    return this;
  }

  pow(number) {
  	this.stringResult += '**' + number;
  	SmartCalculator.prototype.valueOf = function(){
   		return eval(this.stringResult);
	};
    return this;
  } 
}

module.exports = SmartCalculator;
