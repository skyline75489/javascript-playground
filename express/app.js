var express = require('express');
var lunar = require('lunar-calendar');
var DateParser = require('date.js');
var bodyParser = require('body-parser');

var app = express();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
    res.render('index');
});

app.post('/nextdate', function (req, res) {
  var year = req.body.year,
      month = req.body.month,
      day = req.body.day;
  var nextDate = DateParser("next day", new Date(year, month - 1, day));
  var dayOfWeek = nextDate.getDay();
  var lunarDate = lunar.solarToLunar(year, month, day);
  var result1 = "公历: " + nextDate.toLocaleDateString();
  var result2 = "农历: " + lunarDate.lunarYear + " " + lunarDate.lunarMonth + " " + lunarDate.lunarDay
              + lunarDate.lunarMonthName + " " + lunarDate.lunarDayName + "星期 " + dayOfWeek;
  var result3 = "干支: " + lunarDate.GanZhiYear + " " + lunarDate.GanZhiMonth + " " +  lunarDate.GanZhiDay;
  res.render('index', { result1: result1, result2: result2, result3: result3 });
});

app.listen(3000);
