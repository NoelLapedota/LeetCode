// Define the object to be processed
let obj = { a: null, b: [false, 1] };

// Define the compactObject function
let compactObject = function (obj) {
  let array = [];
  const ob = {};

  // Check if the input object is an array
  if (Array.isArray(obj)) {
    // Iterate over each item in the array
    for (let item of obj) {
      // Check if the item is not null, 0, or false, and is not an array
      if (
        item !== null &&
        item !== 0 &&
        item !== false &&
        !Array.isArray(item)
      ) {
        // Add the item to the array
        array.push(item);
      }
      // Check if the item is an array
      if (Array.isArray(item)) {
        // Filter the nested array to remove null, 0, and false values
        let newObj = item.filter(
          (el) => el !== null && el !== 0 && el !== false
        );
        // Add the filtered nested array to the array
        array.push(newObj);
      }
    }
    console.log('array', array);
    return array;
  }

  // Check if the input object is an object
  if (typeof obj === 'object') {
    // Iterate over each key-value pair in the object
    Object.entries(obj).forEach(([key, value]) => {
      // Check if the value is an array
      if (Array.isArray(value)) {
        // Filter the array to remove null, 0, and false values
        let newObj = value.filter(
          (item) => item !== null && item !== 0 && item !== false
        );
        // Assign the filtered array to the corresponding key in the new object
        ob[key] = newObj;
      } else {
        // Check if the value is not null, 0, or false
        if (value !== null && value !== 0 && value !== false) {
          // Assign the value to the corresponding key in the new object
          ob[key] = value;
        }
      }
      console.log(ob);
      return ob;
    });
  }
};

compactObject(obj);
