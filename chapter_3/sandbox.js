// Logical NOT
const user = false;

if(!user){
  // do something
  console.log('you must be logged in to continue');
}

console.log(!true);
console.log(!false);

// this is a comment#
const request = new XMLHttpRequest();
request.open('GET' , 'https://www.smartgriddashboard.com/DashboardService.svc/stats?area=windstats&region=ALL&datefrom=16-Jul-2024+00%3A00&dateto=16-Jul-2024+23%3A59');
request.send();
