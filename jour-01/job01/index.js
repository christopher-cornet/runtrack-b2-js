function myUpperCase(string) {
	let uppercase = "";

	for (let i = 0; i < string.length; i++) {
	  let charCode = string.charCodeAt(i);

	  if (charCode >= 97 && charCode <= 122) {
		charCode -= 32;
	  }

	  uppercase += String.fromCharCode(charCode);
	}

	return uppercase;
}

myUpperCase('Runtrack JS');