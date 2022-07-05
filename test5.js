function commonPrefix(array,n)
	{
		let minLength = findMinLength(array, n);
		let result = ""; // Our resultant string
		let current; // The current character
		for (let i = 0; i < minLength; i++)
		{
			// Current character (must be same in all strings to be a part of result)
			current = array[0][i];
			for (let j = 1; j < n; j++)
			{
				if (array[j][i] != current)
				{
					return result;
				}
			}

			// Append to result
			result += current;
		}

		return result;
	}

    // Finding the string having the minimum length and return that length
	function findMinLength(array,n)
	{
		let minLength = array[0].length;
		for (let i = 1; i < n; i++)
		{
			if (array[i].length < minLength)
			{
				minLength = array[i].length;
			}
		}
		return minLength;
	}
	
	// Driver program to test above function
	let inputArray=["geeksforgeeks", "geeks",
			"geek", "geezer"]
	let n = inputArray.length;
	
	let longestPrefix = commonPrefix(inputArray, n);
    console.log(longestPrefix)


