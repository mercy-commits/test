player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score = 0;
player2_score = 0;
document.getElementById("question_turn").innerHTML = "Question Turn:" + player1_name;
document.getElementById("answer_turn").innerHTML = "Answer Turn:" + player2_name;
document.getElementById("player1_name").innerHTML = player1_name+":";
document.getElementById("player2_name").innerHTML = player2_name+":";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

function send(){
    word = document.getElementById("word").value;
    word = word.toLowerCase();
    console.log(word);

    charAt1 = word.charAt(1);
    charAt2= word.charAt(Math.floor(word.length/2));
    charAt3 = word.charAt(word.length - 1);
    console.log(charAt1 , charAt2 , charAt3);

    replace_1 = word.replace(charAt1, "_");
    replace_2 = replace_1.replace(charAt2, "_");
    replace_3 = replace_2.replace(charAt3, "_");
    console.log(replace_3);

    question_word = "<h4 id='question'>Question:"+replace_3+"<br></h4>";
    input = "Answer:<input id='answer' placeholder='word' class='form-control'>";
    button = "<br><br><button id='check' onclick='check' class='btn btn-info'>Check</button>";

    var row =question_word + input + button;
    document.getElementById("output").innerHTML = row;
}
var answer_turn = "player_2";
var question_turn = "player_1";
function check(){
    answer = document.getElementById("word").value;
    answer = answer.toLowerCase();
    if(answer == word){
        if(answer_turn == "player_1"){
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else{
            player1_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if(question_turn == "player_1"){
        question_turn = player_2;
        answer_turn = player_1;
        document.getElementById("question_turn").innerHTML = "Question Turn: " + player1_name;
        document.getElementById("answer_turn").innerHTML = "Answer Turn: " + player2_name;
    }
    else{
        question_turn = player_1;
        answer_turn = player_2;
        document.getElementById("question_turn").innerHTML = "Question Turn: " + player2_name;
        document.getElementById("answer_turn").innerHTML = "Answer Turn: " + player1_name;  
    }
    document.getElementById("output").innerHTML = "";
}