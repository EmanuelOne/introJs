var years = [
  2000, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013,
  2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026,
  2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039,
  2040, 2041, 2042, 2043, 2044, 2045, 2046, 2047, 2048, 2049, 2050, 2051, 2052,
];
var startingPoint = 0;
var endPoint = years.length;
while (startingPoint < endPoint) {
  if (years[startingPoint] % 4 === 0) {
    console.log('February is 29 days', years[startingPoint]);
  } else {
    console.log('February is 28 Days', years[startingPoint]);
  }
  startingPoint += 1;
}
