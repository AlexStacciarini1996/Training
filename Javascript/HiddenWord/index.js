let hideout = prompt("Type a hidden word in lower case and hide it among upper case letters")
alert("The hidden word is: " + WordDetector(hideout))





function WordDetector(word)
{
    //Split the string into an array of chars
    let filtered = word.split("")
    //alert(filtered)
    //console.log(filtered)
    //Filter the word
    let hiddenWord = filtered.filter(element => {if (element == element.toLowerCase()){return element}})
    //Join the filtered chars into a string
    let detectedWord = hiddenWord.join("")
    return detectedWord
   

}
function DetectLowerCase() { 
  
  
}