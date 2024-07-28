

// We need to “map” all values from the interval 0…1 into values from min to max.

// That can be done in two stages:

// If we multiply a random number from 0…1 by max-min, then the interval of possible values increases 0..1 to 0..max-min.
// Now if we add min, the possible interval becomes from min to max



function random(min, max) {
  return min + Math.random() * (max - min);
}

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );



// A random integer from min to max
// importance: 2
// Create a function randomInteger(min, max) that generates a random integer number from min to max including both min and max as possible values.

// Any number from the interval min..max must appear with the same probability.

// Examples of its work:


function randomInteger(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

alert( randomInteger(1, 5) );
alert( randomInteger(1, 5) );
alert( randomInteger(1, 5) );




