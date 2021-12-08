var readinput=require("readline-sync");
const chalk = require("chalk");

var score=0;
var userName=readinput.question(chalk.yellow("enter you name: "))
console.log("Welcome",userName, "to Himani's Quiz !!!!! Test your knowledge about Himani")
console.log("-----------------------------------------------------")
questions=["Which state she is belong?", " What she want to become?" ,"What is current city of Himani?" ,"How many Language she know?"]

Answers=[3,3,2,4]

Options=[['Goa', 'Delhi', 'Uttarakhand', 'Panjab'],['CM','Singer','Good programer','PM'] , ['Pune','Bangalore','Odisha','U.P.'],['4','3','1','2']]

var quiz_Text=function(questions,Answers,Options){
        var i=0;
        var count=1
        while(i<questions.length){
            console.log(count, questions[i])
            console.log("Himani")
            var j=0;
            var c=1
            while(j<Options.length){
                console.log(chalk.blue(c, Options[i][j]))
                j++
                c++
            }var userAns=readinput.questionInt("enter your Answer:- ");
            if(userAns===Answers[i]) {
                console.log(chalk.green("Right !!!!"))
                score++
                console.log("you scored", score)
                console.log("*********------------*********-------------**********")
                
            }else{
                console.log(chalk.red(" Oppps........Wrong !"))
                
            }i++
            count++
            console.log("                                                                               ")
        }
}
quiz_Text(questions,Answers,Options)
if(score>0){
    console.log(chalk.green("Congratulations !!! your Total score is", score));
}
else{
    console.log(chalk.red("Game over Your total score is", score))
}
console.log("-----------------------------------------------------")


	
