function yesClick() {
    var box = document.getElementsByClassName("box-2");
    const box1 = document.getElementsByClassName("box-1");
    box[0].classList.remove("d-none");
    box1[0].classList.add("d-none");
}

function noClick() {
    const box = document.getElementsByClassName("box-4");
    const box1 = document.getElementsByClassName("box-1");
    var box2 = document.getElementsByClassName("box-2");

    box2[0].classList.add("d-none");
    box[0].classList.remove("d-none");
    box1[0].classList.add("d-none");
    setTimeout(() => {
        startFinalProcess();
    }, 2000);
}

function singleQues() {
    const box1 = document.getElementsByClassName("box-1");
    var box2 = document.getElementsByClassName("box-2");

    box2[0].classList.add("d-none");
    box1[0].classList.add("d-none");
    sorryClick();
}

function sorryClick() {
    const box = document.getElementsByClassName("box-4");
    const box1 = document.getElementsByClassName("box-1");
    var box2 = document.getElementsByClassName("box-2");
    const sorryBox = document.getElementsByClassName("box-sorry");

    box2[0].classList.add("d-none");
    box[0].classList.remove("d-none");
    box1[0].classList.add("d-none");
    // sorryBox[0].classList.remove("d-none");
    setTimeout(() => {
        box[0].classList.add("d-none");
        sorryBox[0].classList.remove("d-none");
    }, 2000);
}
var totalTime = 155;
var isAddedScript = false;

function startFinalProcess() {
    const timer = document.getElementsByClassName("timer");
    timer[0].classList.remove("d-none");
    const box = document.getElementsByClassName("box-3");
    const box1 = document.getElementsByClassName("box-4");
    box[0].classList.remove("d-none");
    box1[0].classList.add("d-none");
    const interval = setInterval(() => {
        if (totalTime <= 0) {
            clearInterval(interval);
            const box = document.getElementsByClassName("end-time-text");
            const box1 = document.getElementsByClassName("starting-time-text");
            box[0].classList.remove("d-none");
            box1[0].classList.add("d-none");
        }
        let minutes = Math.floor(totalTime / 60);
        let extraSeconds = totalTime % 60;
        extraSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds;
        const ele = document.getElementById("timing-sec");
        ele.innerText = minutes + ":" + extraSeconds;
        totalTime--;
    }, 1000);
}