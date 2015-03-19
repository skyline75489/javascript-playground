var print = function print(text) {
	console.log(text);
};

var nonLeapYearMonths = [31,28,31,30,31,30,31,31,30,31,30,31];
var leapYearMonths = [31,29,31,30,31,30,31,31,30,31,30,31];

var isLeapYear = function isLeapYear(year) {  
	return !!((year & 3) == 0 && (year % 100 || (year % 400 == 0 && year)));  
} 

var nextdate = function nextdate(year, month, day) {
	var d = new Date();
	d.setFullYear(year);
	d.setMonth(month);
	d.setDate(day + 1);
	return d;
}

exports.nextdate = nextdate;

