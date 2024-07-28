// Create a date
// importance: 5
// Create a Date object for the date: Feb 20, 2012, 3:12am. The time zone is local.

// Show it using alert.


//new Date(year, month, date, hour, minute, second, millisecond)
let d1 = new Date(2012, 1, 20, 3, 12);
alert( d1 );


//new Date(datastring)
let d2 = new Date("2012-02-20T03:12");
alert( d2 );



// Show a weekday
// importance: 5
// Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.

// For instance:


function getWeekDay(date){
  let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];


  return days[date.getDay()];//returns 0 if its sunday and 6 if its saturday

}



let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getWeekDay(date) );        // should output "TU"






// European weekday
// importance: 5
// European countries have days of week starting with Monday (number 1), then Tuesday (number 2) and till Sunday (number 7). Write a function getLocalDay(date) that returns the “European” day of week for date.

// let date = new Date(2012, 0, 3);  // 3 Jan 2012
// alert( getLocalDay(date) );       // tuesday, should show 2



function getLocalDay(date2) {

  let day = date2.getDay();

  if (day == 0) { // weekday 0 (sunday) is 7 in european
    day = 7;
  }

  return day;

}

let date2 = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getLocalDay(date2) );   




// Which day of month was many days ago?
// importance: 4
// Create a function getDateAgo(date, days) to return the day of month days ago from the date.

// For instance, if today is 20th, then getDateAgo(new Date(), 1) should be 19th and getDateAgo(new Date(), 2) should be 18th.

// Should work reliably for days=365 or more:

// let date = new Date(2015, 0, 2);

// alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
// P.S. The function should not modify the given date.





function getDateAgo(date, days) {
  let dateCopy = new Date(date); // copying to diff variable 
  dateCopy.setDate(date.getDate() - days); // setting date with diff days
  return dateCopy.getDate(); 
}






let date3 = new Date(2015, 0, 2);

alert( getDateAgo(date3, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date3, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date3, 365) ); // 2, (2 Jan 2014)





// Last day of month?
// importance: 5
// Write a function getLastDayOfMonth(year, month) that returns the last day of month. Sometimes it is 30th, 31st or even 28/29th for Feb.

// Parameters:

// year – four-digits year, for instance 2012.
// month – month, from 0 to 11.
// For instance, getLastDayOfMonth(2012, 1) = 29 (leap year, Feb).


function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}





getLastDayOfMonth(2012, 1)








// How many seconds have passed today?
// importance: 5
// Write a function getSecondsToday() that returns the number of seconds from the beginning of today.

// For instance, if now were 10:00 am, and there was no daylight savings shift, then:



function getSecondsToday(date4){

  let time = date4.getSeconds()+date4.getHours()*60*60+date4.getMinutes()*60
  
  console.log(time)
 
 }
 let date4 = new Date()

 getSecondsToday(date4)
 
 



//  How many seconds till tomorrow?
//  importance: 5
//  Create a function getSecondsToTomorrow() that returns the number of seconds till tomorrow.
 
//  For instance, if now is 23:00, then:


 function getSecondsToTomorrow() {
  let now = new Date();

  // tomorrow date
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

  let diff = tomorrow - now; // difference in ms
  return Math.round(diff / 1000); // convert to seconds
}


getSecondsToTomorrow()