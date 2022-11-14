function palindrome(inputString) {

	let arr1 = [];
    arr1 = inputString.split('');
	let arr2 = []; 
    arr2 = inputString.split('').reverse();
  
	let palindrome = true
		
		for (let i=0; i< arr1.length-1; i++) {
			if(palindrome && arr1[i] !== arr2[i]){
				palindrome = false;
		}  
	}
	return palindrome;
}



