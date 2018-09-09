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
    ["A. (1/3)", "B. (1/8)", "C. (2/8)", "D. (1/16)"],
    ["A. 11 5", "B. 10 7", "C. 11 8", "D. 5 10"],
    ["A. 25 22", "B. 26 23", "C. 26 24", "D. 25 23"],
    ["A. gorbltusl", "B. flurgorbl", "C. arthflur", "D. pixnarth"],
    ["A. gemogila", "B. gerigeme", "C. gemomitu", "D. gerimita"],
    ["A. True", "B. False", "C. uncertain", "D. No u"],
    ["A. True", "B. False", "C. uncertain", "D. No u"],
    ["A. True", "B. False", "C. uncertain", "D. No u"],
    ["A. CMN", "B. UJI", "C. VIJ", "D. IJT"]
];
var correct_option = ["B", "A", "C", "D", "A", "B", "B", "A", "C"];
var current = 0;


function initialize() {
    current=0;
    var question = document.getElementById("question");
    question.innerHTML = "Q."+(current+1)+" "+questions[current];
    document.getElementById('prev').style.backgroundColor = "#83bac7";
    document.getElementById('prev').disabled = true;
}
function next() {    
    current+=1;            
}
function prev() {
    current-=1;
}
function display() {
    console.log("current = "+current+"\n");
    if (current!=0) {
        document.getElementById('prev').disabled = false;
        document.getElementById('prev').style.backgroundColor = "#0fa5c7";
    }        
    else {
        document.getElementById('prev').style.backgroundColor = "#83bac7";
        document.getElementById('prev').disabled = true;
    }        
    var question = document.getElementById("question");
    question.innerHTML = "Q."+(current+1)+" "+questions[current];


    if (current==8) {
        document.getElementById('next').style.backgroundColor = "#83bac7";
        document.getElementById("next").disabled = true;
    }        
    else {
        document.getElementById('next').style.backgroundColor = "#0fa5c7";
        document.getElementById("next").disabled = false;
    }        
}