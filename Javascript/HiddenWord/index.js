let hideout = prompt("Type a hidden word in lower case and hide it among upper case letters")
alert("The hidden word is: " + WordDetector(hideout))





function WordDetector(word)
{
    let filtered = word.split("")
    //alert(filtered)
    //console.log(filtered)
    let hiddenWord = filtered.filter(element => {if (element == element.toLowerCase()){return element}})
    let detectedWord = hiddenWord.join("")
    return detectedWord
   

}
function DetectLowerCase() { 
  
  
}