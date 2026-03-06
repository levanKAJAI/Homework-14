

function getFeedback(score, name){
    if (score < 51){
        console.log(`სამწუხაროდ ${name}, თქვენ ვერ გადალახეთ მინიმალური ბარიერი, თქვენ დაგაკლდათ ${51 - score} ქულა, უკეთესად მოემზადეთ.`)
    }else if(score <= 90){
        console.log(`გილოცავთ ${name}, თქვენ ${score - 51} ქულით მეტი აიღეთ ბარიერზე.`)
    }else{
        console.log(`მიმოლოცავს, ძალიან კარგი შედეგი გაქვს.`)
    }

};

let name = prompt("შეიყვანე შენი სახელი");
let score = Number(prompt("შეიყვანე შენი ქულა"));

getFeedback(score, name);