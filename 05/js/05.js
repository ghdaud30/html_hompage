const toggle = (v1,v2,v3,v4) => {
    txt1.value ="";
    txt2.value ="";
    sel1.value = v1;
    sel2.value = v2;
    div1.value = v3;
    div2.value = v4;
}

//섭씨온도 >>>>>>>>> 화씨온도
const cTof = (c) => {
    txt2.value = (c * 9/5) + 32;

}

// 화씨온도 >>>>>>>>> 섭씨온도
const fToc = (f) => {
    txt2.value = (f - 32) * 5/9;

}

document.addEventListener("DOMContentLoaded", () => {
    const sel1 = document.querySelector("#sel1");
    const sel2 = document.querySelector("#sel2");

    const txt1 = document.querySelector("#txt1");
    const txt2 = document.querySelector("#txt2");

    const div1 = document.querySelector("#div1");
    const div2 = document.querySelector("#div2");


    txt1.addEventListener("input", () => {
        if(sel1.value === "C" ){
            cTof(parseInt(txt1.value));

        }
        else if(sel1.value === "F" ){
            fToc(parseFloat(txt1.value));
        }
    });


    //select box1 제어
    sel1.addEventListener("change", () => {
        if(sel1.value === "C") {
            toggle("C","F","℃","℉")

        }
        else {
            toggle("F","C","℉","℃")
        }
    });

    //select box2 제어
    sel2.addEventListener("change", () => {
        if(sel1.value === "C") {
            toggle("F","C","℉","℃")
        }
        else {
            toggle("C","F","℃","℉")
        }
    });
});