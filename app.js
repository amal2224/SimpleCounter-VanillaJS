let count=0;
const value=document.getElementById('value');
const btns=document.querySelectorAll('.btn');  

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
        count--;
    } else if (styles.contains("increase")) {
        count++;
    } else {
        count = 0;
    }

    if (count > 0) {
        value.style.color = "white";
        document.body.style.backgroundColor = "#159947";
    }
    if (count < 0) {
        value.style.color = "white";
        document.body.style.backgroundColor = "#C1000F";

    }
    if (count === 0) {
        value.style.color = "#222";
        document.body.style.backgroundColor = "#E4EFF0";

    }
    value.textContent = count;
    });
});