document.getElementById("calculate").addEventListener("click", function() {
    const total = Number(document.getElementById("total").value);
    const attended = Number(document.getElementById("attended").value);

    if (!total || total < 1 || attended < 0 || attended > total) {
        alert("Enter valid numbers");
        return;
    }

    const percent = (attended / total) * 100;
    document.getElementById("percentage").textContent = percent.toFixed(2) + "%";
    document.getElementById("status").textContent = percent >= 80 ? "Good" : "Needs improvement";
});