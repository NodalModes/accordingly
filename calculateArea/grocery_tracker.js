function groceryTracker() {
    const g1 = parseFloat(document.getElementById("grocery1").value);
    const g2 = parseFloat(document.getElementById("grocery2").value);
    const g3 = parseFloat(document.getElementById("grocery3").value);
    const total = g1 + g2 + g3;
    document.getElementById('result').innerText = `The total amount is: ${total}`;
}