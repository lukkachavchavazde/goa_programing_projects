function addNumbers() {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    const result = num1 + num2;
    document.getElementById('result').textContent = result;
}

const t1 = document.getElementById('t1')
t1.onclick=addNumbers




function subbsc() {
    const num3 = Number(document.getElementById('num3').value);
    const num4 = Number(document.getElementById('num4').value);
    const sub = num3 - num4;
    document.getElementById('result1').textContent = sub;
}

const t2 = document.getElementById('t2')
t2.onclick=subbsc





function gamravleba() {
    const num5 = Number(document.getElementById('num5').value);
    const num6 = Number(document.getElementById('num6').value);
    const result2 = num5 * num6;
    document.getElementById('result2').textContent = result2;
}

const t3 = document.getElementById('t3')
t3.onclick=gamravleba





function gayofa() {
    const num7 = Number(document.getElementById('num7').value);
    const num8 = Number(document.getElementById('num8').value);
    const result3 = num7 / num8;
    document.getElementById('result3').textContent = result3;
}

const t4 = document.getElementById('t4')
t4.onclick=gayofa