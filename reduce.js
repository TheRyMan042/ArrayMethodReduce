//Ryan Hutchings
//Unit 12.3 Exercise: Practicing .reduce() Array Method

/*
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractValue(arr, key) {
    const names = arr.reduce(function (namesArr, nextObj) {
        // console.log('Current Object: ');
        // console.log(namesArr);
        // console.log('Next Object: ')
        // console.log(nextObj[key]);

        namesArr.push(nextObj[key]); //adds what was extracted from the array's objects

        return namesArr; //returns each iteration the new accumulated array
    }, []); //second option puts what accumulated in an array

    return names;
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

function vowelCount(str) {
    const vowelCount = Array.from(str.toLowerCase()).reduce(function (allVowels, nextChar) {
        // console.log('Current Sum of Characters:');
        // console.log(allVowels);
        // console.log('Next Character:');
        // console.log(nextChar);

        //checks for any vowels 
        if ('aeiou'.indexOf(nextChar) !== -1) {
            //
            if (!allVowels[nextChar]) {
                allVowels[nextChar] = 1; //adds to accumulated object
            } else {
                allVowels[nextChar] += 1; //adds to accumulated object
            }
        }

        return allVowels;//returns added up vowels object
    }, {});

    return vowelCount;
}

/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/

function addKeyAndValue(arr, key, value) {
    const keyAndValueArr = arr.reduce(function (keyValueArr, element) {
        // console.log('together:');
        // console.log(keyValueArr);
        // console.log('element:');
        // console.log(element);

        element[key] = value; //adds the key and value to every object
        keyValueArr.push(element); //adds the changed objects to new array 

        return keyValueArr;
    }, []);

    return keyAndValueArr;
}

/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    const arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    const names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

function partition(arr, callback) {
    //two arrays for separating the values
    const leftArr = [];
    const rightArr = [];

    const partArr = arr.reduce(function (accum, element) {
        // console.log('together:');
        // console.log(accum);
        // console.log('element:');
        // console.log(element);

        //if the callback its true, it adds the value to one array
        if (callback(element)) leftArr.push(element);
        //if callback is not true, it adds to the other array
        else rightArr.push(element);

        //adds the separate arrarys into the new array
        accum[0] = leftArr;
        accum[1] = rightArr;

        return accum;
    }, []);

    return partArr;
}