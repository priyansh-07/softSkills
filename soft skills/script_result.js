function evaluate() {
    var score=new Array();
    var total=0;
    for (var i=0; i<9; i++) {
        if (answers[i]==-1) {
            score[i] = 0;
            continue; 
        }
        else {
            score[i] = marks[i][answers[i]];
            total = total + score[i]; 
        }
    }
}