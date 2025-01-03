function submit() {
    
    let age = parseFloat(document.getElementById("age").value);
    let hei = parseFloat(document.getElementById("height").value);
    let wei = parseFloat(document.getElementById("weight").value);
    let butt = document.getElementById("result")
    
    if (!age || !hei || !wei || age <= 0 || hei <= 0 || wei <= 0) { 
    window.alert('[ERROR] Please fill up all boxes');
    return;
    }
    const bmg = (wei / (hei * hei)).toFixed(1);
    butt.textContent = `Your BMI is ${bmg}`;
}