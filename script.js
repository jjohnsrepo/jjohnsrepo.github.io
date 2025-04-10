var count=0
function show1(id){
    document.getElementById(id).className='show';
    count=count+1
    if (count===6){
        document.getElementById("button1").style.opacity=1;
    }
}

function start(){
    document.getElementById('welcome').textContent="Justin Piano Company";
    document.getElementById('discover').textContent="Click below to learn more";
    document.getElementById('h3').style.display='none';
    document.getElementById('img1').style.display='none';
    document.getElementById('img2').style.display='none';
    document.getElementById('img3').style.display='none';
    document.getElementById('img4').style.display='none';
    document.getElementById('img5').style.display='none';
    document.getElementById('img6').style.display='none';
    document.getElementById('button1').style.display='none';
    document.getElementById('page2').style.display='flex';
}

function showSection(divID) {
   
    document.getElementById(divID).style.display = 'block';
    
    if (divID != 'aboutMeText') {
        document.getElementById('aboutMeText').style.display = 'none';
    }
    if (divID != 'recordingsText') {
        document.getElementById('recordingsText').style.display = 'none';
    }
    if (divID != 'upcomingEventsText') {
        document.getElementById('upcomingEventsText').style.display = 'none';
    }
    if (divID != 'lessonsText') {
        document.getElementById('lessonsText').style.display = 'none';
    }
    if (divID != 'contactMeText') {
        document.getElementById('contactMeText').style.display = 'none';
    }
}



function pause() {
    document.body.style.backgroundImage = "url('media/mickey.jpeg')";
    document.getElementById('pause').style.display='none';
    document.getElementById('unpause').style.display='block';
}

function unpause(){
        document.body.style.backgroundImage = "url('media/mickey.gif')";
        document.getElementById('pause').style.display='block';
        document.getElementById('unpause').style.display='none';
}