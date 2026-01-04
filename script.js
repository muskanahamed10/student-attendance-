// 🔐 Protect page - admin must be logged in
if (localStorage.getItem("loggedIn") !== "true") {
    alert("Please login as Admin");
    window.location.href = "login.html";
}

// 📝 Save Attendance
document.getElementById("attendanceForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    let attendance = {
        name: document.getElementById("name").value,
        roll: document.getElementById("roll").value,
        className: document.getElementById("className").value,
        date: document.getElementById("date").value,
        status: document.getElementById("status").value
    };

    let records = JSON.parse(localStorage.getItem("attendance")) || [];
    records.push(attendance);
    localStorage.setItem("attendance", JSON.stringify(records));

    alert("Attendance saved successfully!");
    this.reset();
});

// 🚪 Logout Function
function logout() {
    localStorage.removeItem("loggedIn");
    alert("Logged out successfully");
    window.location.href = "login.html";
}
