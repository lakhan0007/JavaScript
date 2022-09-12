
function changecolor() {
    var hax_number  = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    
    var code = '';
    
    for(var i = 0; i < 6; i++){
        var random_indox = math.floor(math.random() * hax_numbers.lenght)
        code += hax_number[random_indox]
    }
 
    
    document.getElementById("hax-code").inneHTML = code;
    document.getElementsByTagName("body")[0].style.background = "#" + code;
} 