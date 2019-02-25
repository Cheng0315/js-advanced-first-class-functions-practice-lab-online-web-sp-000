// Code your solution in this file!

function logDriverNames(drivers) {
  drivers.forEach(function (ele) {
    console.log(ele.name);
  });
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(function (ele) {
    if (ele.hometown === location) {
      console.log(ele.name);
    }
  });
}

function driversByRevenue(drivers) {
  drivers.sort(function (a, b) {
    return a - b;
  })
}