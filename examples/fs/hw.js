var multi = [
  [1, 2],
  [3, 4],
  [5, 6]
];

var bestStudents = multi.reduce(function(previousValue, currentValue) {
  console.log(previousValue);
		return previousValue.concat(currentValue);
	}, [-1, 0]);

  console.log(bestStudents);
