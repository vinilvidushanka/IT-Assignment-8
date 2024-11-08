var array = ["A", "B", "C", "D", "E", "F"];
var myInterval = null;


function removeElement() {
    let last = array.pop();
    array.unshift(last)
    console.log(array)
    $("#val1").text(array[0])
    $("#val2").text(array[1])
    $("#val3").text(array[2])
    $("#val4").text(array[3])
    $("#val5").text(array[4])
    $("#val6").text(array[5])
}


 $("#btn").click(function(){
     clearInterval(myInterval,2000)
     myInterval = setInterval(removeElement,2000)
 })
 $("#btn1").click(function(){
     clearInterval(myInterval,2000)
 })