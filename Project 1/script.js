var index =  0;
function changeChange() {
    var x = ["Tomato", "orange", "dodgerblue", "mediumseagreen", "gray", "green", "slateblue", "violet", "lightgray"]

    document.getElementsByTagName("body")[0].
    style.background = x[index++];

    if(index > x.length - 1) 
    index = 0;
}
