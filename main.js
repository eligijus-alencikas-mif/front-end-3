const ready = (fn) => {
    if (document.readyState !== "loading") {
        fn();
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
};

const listener = (id, params = {}) => {};

ready(() => {
    document.getElementById("gender").addEventListener("input", () => {
        console.log("hey");
    });

    document.getElementById("first-name").addEventListener("input", () => {});

    document.getElementById("second-name").addEventListener("input", () => {});
    document.getElementById("last-name").addEventListener("input", () => {});
    document.getElementById("Birthday").addEventListener("input", () => {});
    document.getElementById("education").addEventListener("input", () => {});
    document.getElementById("phone-num").addEventListener("input", () => {});
    document.getElementById("email").addEventListener("input", () => {});
    document.getElementById("address").addEventListener("input", () => {});
    document.getElementById("marriage").addEventListener("input", () => {});
    document.getElementById("spouce").addEventListener("input", () => {});
    document
        .getElementById("occupational-status")
        .addEventListener("input", () => {});
    document
        .getElementById("work-experiance")
        .addEventListener("input", () => {});
    document.getElementById("work-field").addEventListener("input", () => {});

    // data = {
    //     gender: ,
    //     first_name: () => document.getElementById("first-name").value,
    // };
    // console.log(data);
    // document.getElementById("submit").addEventListener("click", () => {
    //     console.log(data.first_name());
    // });
});
