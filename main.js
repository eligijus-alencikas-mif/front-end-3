const ready = (fn) => {
    if (document.readyState !== "loading") {
        fn();
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
};

function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

ready(() => {
    elements = {
        gender: document.getElementById("gender"),
        first_name: document.getElementById("first-name"),
        second_name: document.getElementById("second-name"),
        last_name: document.getElementById("last-name"),
        birthday: document.getElementById("birthday"),
        education: document.getElementById("education"),
        phone_num: document.getElementById("phone-num"),
        email: document.getElementById("email"),
        address: document.getElementById("address"),
        marriage: document.getElementById("marriage"),
        spouce: document.getElementById("spouce"),
        occupational_status: document.getElementById("occupational-status"),
        work_experiance: document.getElementById("work-experiance"),
        work_field: document.getElementById("work-field"),
    };

    elements.phone_num.addEventListener("keypress", (event) => {
        let symbol = String.fromCharCode(event.keyCode);
        let regex = /^([\+\ \d-()])?$/;
        if (!regex.test(symbol)) {
            event.preventDefault();
        }
    });

    elements.work_experiance.addEventListener("keypress", (event) => {
        let symbol = String.fromCharCode(event.keyCode);
        let regex = /^(\d)?$/;
        if (!regex.test(symbol)) {
            event.preventDefault();
        }
    });

    elements.birthday.addEventListener("input", (event) => {
        let date = new Date(event.target.value);
        if (calculate_age(date) < 15) {
            document.getElementById("edu-block").style.display = "none";
        } else {
            document.getElementById("edu-block").style.display = "block";
        }
    });

    const validator = () => {};
});
