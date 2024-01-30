// complete the given function

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