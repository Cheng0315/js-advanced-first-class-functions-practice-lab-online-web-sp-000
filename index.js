// Code your solution in this file!

function logDriverNames(drivers) {
  drivers.forEach(function (ele) {
    console.log(ele.name);
  });
}

function logDriversByHometown(drivers, location) {
  let locationDrivers = drivers.filter(function (ele) {
    ele.hometown === location;
  });

  logDriverNames(locationDrivers);
}
