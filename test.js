var print = function print(text) {
	console.log(text)
};

var nonLeapYearMonths = [31,28,31,30,31,30,31,31,30,31,30,31]
var leapYearMonths = [31,29,31,30,31,30,31,31,30,31,30,31]

var isLeapYear = function isLeapYear(year) {  
	return !!((year & 3) == 0 && (year % 100 || (year % 400 == 0 && year)));  
} 

var nextdate = function nextdate(year, month, day) {
	var d = new Date()
	d.setFullYear(year)
	d.setMonth(month)
	d.setDate(day + 1)
	return d
}

function testNextDate(year, month, day) {
	var month = month - 1
	var theDate = new Date()
	theDate.setFullYear(year)
	theDate.setMonth(month)
	theDate.setDate(day)

	print(theDate)

	var correctNextDate = new Date()
	correctNextDate.setFullYear(year)
	correctNextDate.setMonth(month)
	correctNextDate.setDate(day)
	correctNextDate.setDate(theDate.getDate() + 1)

	var outputNextDate = nextdate(year, month, day)
	
	if (correctNextDate.getYear() == outputNextDate.getYear()
		&& correctNextDate.getMonth() ==  outputNextDate.getMonth()
		&& correctNextDate.getDate() == outputNextDate.getDate()) {
		print("Test OK: " + year + " " + month + " " + day)
	} else {
		print("Test Failed: " + year + " " + month + " " + day)
		print("Expect: " + correctNextDate)
		print("Output: " + outputNextDate)	
	}
}

testNextDate(2001, 12,31)
