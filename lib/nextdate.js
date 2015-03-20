var print = function print(text) {
  console.log(text);
};

var nonLeapYearMonths = [31,28,31,30,31,30,31,31,30,31,30,31];
var leapYearMonths = [31,29,31,30,31,30,31,31,30,31,30,31];

var isLeapYear = function isLeapYear(year) {  
  return !!((year & 4) == 0 && (year % 100 || (year % 400 == 0 && year)));  
} 

var MyDate = function(year, month, day) {
  this.year = year;
  this.month = month;
  this.day = day;
}

var nextdate = function nextdate(year, month, day) {
  var newYear = year;
  var newMonth = month;
  var newDay = day;

  var totalDayInMonth = isLeapYear(year) ? leapYearMonths[month-1] : nonLeapYearMonths[month-1];
  if (day + 1 > totalDayInMonth) {
    newMonth = newMonth + 1;
    if (newMonth > 12) {
      newMonth = 1;
      newYear += 1;
    };
    newDay = 1;
  } else {
    newDay = day + 1;
  }

  return new MyDate(newYear, newMonth, newDay)
}

exports.nextdate = nextdate;

