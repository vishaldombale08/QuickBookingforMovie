

function BookClick(){
    document.getElementById('lblMovie').innerHTML= document.getElementById('lstMovie').value;
    document.getElementById('lblCinema').innerHTML= document.getElementById('lstCinema').value;
    document.getElementById('lblDate').innerHTML= document.getElementById('lstDate').value;
    document.getElementById('lblTime').innerHTML= document.getElementById('lstTime').value;
    document.getElementById('lblSeats').innerHTML= document.getElementById('lstSeats').value;
    poster = document.getElementById('poster')

    if(document.getElementById('lstMovie').value=='Stree - 2'){
        poster.src = "./public/images/stree2.jpg";
    }
    if(document.getElementById('lstMovie').value=='Gabber Singh'){
        poster.src = "./public/images/gabbar-singh.jpg";
    }
    if(document.getElementById('lstMovie').value=='Deadpool & Wolverine'){
        poster.src = "./public/images/deadpool-hollywood.jpg";

}
document.getElementById("SummaryContainer").style.display= "block";
document.getElementById("btnBooking").style.display='none';
}

