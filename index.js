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
  const newDrivers = drivers.map(function (obj) {
    return Object.assign({}, obj);
  });

  newDrivers.sort(function (a, b) {
    return a.revenue - b.revenue;
  })

  return newDrivers;
}
