    const tubelight = () =>{
        let bulbOn = document.getElementById('bulbdata');
        let bulbMain = document.getElementById('bulbMain');

        for (let x = 1; x <=6; x++){
        let bulb = document.getElementById('lightId'.concat(x));
                    
                        if(bulb.scroll.match('lightoff')){
                            bulb.src = "lighton.png";
                            bulbOn.innerHTML = "Light ON";
                            bulbOn.style.color = "red";
                            bulbMain.style.background = "black";
                        }else{
                            bulb.src = "lightoff.png";
                            bulbOn.innerHTML = "Light OFF";
                            bulbMain.style.Background = "white";
                            bulbOn.style.color = "black";
                        }
     }
    }