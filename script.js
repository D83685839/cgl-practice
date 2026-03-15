const chapters = ["percentage","ratio","profit_loss"];

function getParameter(name){
let url = new URL(window.location.href);
return url.searchParams.get(name);
}

async function loadChapter(){

let chapter = getParameter("chapter");

if(!chapter) return;

document.getElementById("chapterTitle").innerText = chapter;

let res = await fetch("questions/"+chapter+".json");
let data = await res.json();

let container = document.getElementById("questions");

data.forEach((q,i)=>{

container.innerHTML += `
<div class="question">

<p>${i+1}. ${q.question}</p>

<p>A. ${q.options[0]}</p>
<p>B. ${q.options[1]}</p>
<p>C. ${q.options[2]}</p>
<p>D. ${q.options[3]}</p>

<p><b>Answer:</b> ${q.answer}</p>

</div>
`;

});

}

async function loadQuiz(){

let allQuestions = [];

for(let chapter of chapters){

let res = await fetch("questions/"+chapter+".json");
let data = await res.json();

allQuestions = allQuestions.concat(data);

}

allQuestions.sort(()=>Math.random()-0.5);

let quizQuestions = allQuestions.slice(0,20);

let form = document.getElementById("quizForm");

quizQuestions.forEach((q,i)=>{

form.innerHTML += `
<div class="question">

<p>${i+1}. ${q.question}</p>

<label><input type="radio" name="q${i}" value="A"> ${q.options[0]}</label><br>
<label><input type="radio" name="q${i}" value="B"> ${q.options[1]}</label><br>
<label><input type="radio" name="q${i}" value="C"> ${q.options[2]}</label><br>
<label><input type="radio" name="q${i}" value="D"> ${q.options[3]}</label>

</div>
`;

});

window.quizQuestions = quizQuestions;

}

function submitQuiz(){

let score = 0;

quizQuestions.forEach((q,i)=>{

let ans = document.querySelector(`input[name="q${i}"]:checked`);

if(ans && ans.value==q.answer)
score++;

});

document.getElementById("score").innerText =
"Score: "+score+"/"+quizQuestions.length;

}

if(window.location.pathname.includes("chapter"))
loadChapter();

if(window.location.pathname.includes("quiz"))
loadQuiz();