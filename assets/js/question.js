
async function apiCall(){
    let questionObj;
    const response=await fetch("http://localhost:7000/users/test/api/");
     questionObj=await response.json();
     console.log(questionObj);


//create the function of show question
const option = document.getElementById("options");
let currentIndex = 0;
let score=0;
showQuestion()
function showQuestion() {
    const {question,answer,options } = questionObj[currentIndex];
    document.querySelector("#question").textContent = question;
    for (let mayanswer of suffle(options)) {
        const btn = document.createElement("button");
        btn.textContent = mayanswer;
        option.appendChild(btn);
        btn.addEventListener("click", () => {
            if (answer === mayanswer) {
                score++;
            } else {
                score -= 0.25;
            }
            document.getElementById("score").textContent = `Score is ${score}`
            nextQuestion();
        })
    }
    
}

function nextQuestion(){
    currentIndex++;
    option.textContent="";
    if(currentIndex==questionObj.length){
        document.querySelector("#question").textContent="Quiz Completed"
        sendScoreToBackend(score);
        window.location.href = "/";
    }else{
        showQuestion();
    }
   
}



//suffle the option
function suffle(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        let j = Math.floor(Math.random() * (i));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

async function sendScoreToBackend(score) {
    try {
        const response = await fetch("http://localhost:7000/users/test/api/score", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ score: score })
            // body:{score:score}
        });
        if (response.ok) {
            console.log("Score sent to backend successfully!");
        } else {
            console.error("Failed to send score to backend:", response.statusText);
        }
    } catch (error) {
        console.error("Error sending score to backend:", error);
    }
}


}
 apiCall()


 
