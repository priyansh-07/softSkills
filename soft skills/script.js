var current = 0; 
var questions = [
    "Look at this series: 2, 1, (1/2), (1/4),\nWhat number should come next?",

    "Look carefully for the pattern, and then choose which pair of numbers comes next.\n28 25 5 21 18 5 14",

    "Look carefully for the pattern, and then choose which pair of numbers comes next.",

    "First, you will be given a list of three \"nonsense\" words and their English word meanings.\
     The question(s) that follow will ask you to reverse the process and translate\
     an English word into the artificial language. Here are some words translated from an artificial language.\
     gorblflur means fan belt\
     pixngorbl means ceiling fan\
     arthtusl means tile roof\
     Which word could mean \"ceiling tile\"?",

     "First, you will be given a list of three \"nonsense\" words and their English word meanings.\
     The question(s) that follow will ask you to reverse the process and translate\
     an English word into the artificial language. Here are some words translated from an artificial language.\
     gemolinea means fair warning\
     gerimitu means report card\
     gilageri means weather report\
     Which word could mean \"fair weather\"?",

    "Each problem consists of three statements. Based on the first two statements, the third statement may be true, false, or uncertain.\
    Tanya is older than Eric.\
    Cliff is older than Tanya.\
    Eric is older than Cliff.\
    If the first two statements are true, the third statement is\"",
    
    "The Shop and Save Grocery is south of Greenwood Pharmacy.\
    Rebecca's house is northeast of Greenwood Pharmacy.\
    Rebecca's house is west of the Shop and Save Grocery.\
    If the first two statements are true, the third statement is\ ",
    
    "Each problem consists of three statements. Based on the first two statements, the third statement may be true, false, or uncertain.\
    All Lamels are Signots with buttons.\
    No yellow Signots have buttons.\
    No Lamels are yellow.\
    If the first two statements are true, the third statement is\ ",
    
    "n these series, you will be looking at both the letter pattern and the number pattern. Fill the blank in the middle of the series or end of the series.\
    SCD, TEF, UGH, ____, WKL\ "
];
var options = [
    [" (1/3)", " (1/8)", " (2/8)", " (1/16)"],
    [" 11 5", " 10 7", " 11 8", " 5 10"],
    [" 25 22", " 26 23", " 26 24", " 25 23"],
    [" gorbltusl", " flurgorbl", " arthflur", " pixnarth"],
    [" gemogila", " gerigeme", " gemomitu", " gerimita"],
    [" True", " False", " uncertain", " No u"],
    [" True", " False", " uncertain", " No u"],
    [" True", " False", " uncertain", " No u"],
    [" CMN", " UJI", " VIJ", " IJT"]
];
//multidimensional array for marks given to each option
//[0][1] corresponds to question 1(index 0) option 2(index 1) 
var marks = [
    [ 4, 5, 3, 2], [ 5, 4, 3, 2], [ 4, 3, 5, 2],
    [ 4, 3, 2, 5], [ 5, 4, 3, 2], [ 4, 5, 3, 2],
    [ 4, 5, 3, 2], [ 5, 4, 3, 2], [ 4, 3, 5, 2] 
];

var current = 0;
var checkedOption = -1;
var answers = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
var tiles = document.getElementsByClassName('qno');

function display_options(a) {
    var radio_buttons = document.getElementsByClassName('optn');
    for (i=0; i<4; i++) 
    radio_buttons[i].innerHTML = options[a][i];    
}

function initialize() {
    current=0;
    var question = document.getElementById("question");
    question.innerHTML = "Q."+(current+1)+" "+questions[current];
    document.getElementById('prev').style.backgroundColor = "#83bac7";
    document.getElementById('prev').disabled = true;
    display_options(current);    
}
function next() {    
    current+=1;            
}
function prev() {
    current-=1;
}
function sub(a) {
    checkedOption = a;
    answers[current] = checkedOption;
    tiles[current].style.backgroundColor="#4CAF50";    
    tiles[current].style.border="solid 1px #4CAF50";
    tiles[current].style.color="#ffffff";
    tiles[current].style.fontWeight="bold";        
}
function display() {
    //disabling the previous button if it's the 1st question and enabling it if it isn't   
    console.log("current = "+current+"\n");
    console.log("answers : "+answers);
    displayRadio();
    if (current!=0) {
        document.getElementById('prev').disabled = false;
        document.getElementById('prev').style.backgroundColor = "#0fa5c7";
    }        
    else {
        document.getElementById('prev').style.backgroundColor = "#83bac7";
        document.getElementById('prev').disabled = true;
    }

    //displaying the questions and options 
    var question = document.getElementById("question");
    question.innerHTML = "Q."+(current+1)+" "+questions[current];
    display_options(current);
    
    //here's what you gotta do :
    //i have created a submit function which will set the value of "checkedOption" variable to
    //the corresponding number i.e, 0 if user selects first option, 1 if user selects 2nd option
    //take care of the indexing, it starts from 0
    //store that number in an array for every question
    //the numbers stored in that array will act as indexes for the 2nd dimension in the "marks" matrix
    //1st dimension being the question number
    //=====================YOUR CODE HERE=======================
    
    






    //==========================================================

    //disabling the next button if it's the 8th question and enabling it if it isn't   
    if (current==8) {
        document.getElementById('next').style.backgroundColor = "#83bac7";
        document.getElementById("next").disabled = true;
    }        
    else {
        document.getElementById('next').style.backgroundColor = "#0fa5c7";
        document.getElementById("next").disabled = false;
    }        
}
function displayRadio () {
    if (answers[current] == -1) {
        document.getElementById('r0').checked = false;
        document.getElementById('r1').checked = false;
        document.getElementById('r2').checked = false;
        document.getElementById('r3').checked = false;
    }
    else {
        switch(answers[current]) {
            case 0: document.getElementById('r0').checked = true;
                    break;
            case 1: document.getElementById('r1').checked = true;
                    break;
            case 2: document.getElementById('r2').checked = true;
                    break;
            case 3: document.getElementById('r3').checked = true;
                    break;            
        }
    }
}
function submission() {
    for (var i=0; i<9; i++) {
        if (answers[i]==-1) {
            if (confirm("You haven't attempted all the questions. Are you sure you want to submit?")) {
                evaluate();
                return;
            }
        }
        else {
            evaluate();
        } 
    }
}
function evaluate() {
    
}












