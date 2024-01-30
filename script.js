// complete the given function
/*
function palindrome(str){
	str=str.toLowerCase();
    let i=0,j=str.length-1;
    while(i<j){
        while(str[i]==" "){
            i++;
        }
        while(str[j]==" "){
            j--;
        }
        if(str[i]!=str[j])
            return false;
        
        i++;
        j--;
    }
	return true;
}
module.exports = palindrome
*/
// complete the given function

function palindrome(str){
	// var ans = str.trim();
	var str1 = str.toLowerCase();
for(var i=0; i<str1.length/2; i++){
	if(str1[i]!==str1[(str.length-1)-i]){
		return false;
		}
	}
	return true;
}
	
module.exports = palindrome