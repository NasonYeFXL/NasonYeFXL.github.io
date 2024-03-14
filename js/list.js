function add_down(){
    var array = ["1.gif", "2.gif", "3.png"];
    var down = "";
    for(var i=0; i<array.length; i++){
        down += "<img id=\"pic\" src=./download/"+array[i]+">"
    }
    document.getElementById("down").innerHTML=down;

}