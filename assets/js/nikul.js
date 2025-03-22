$(document).ready(function() {
    document.addEventListener("DOMContentLoaded", function() {
        const button = document.querySelector(".position-aware-btn");

        button.addEventListener("mousemove", (event) => {
            const rect = button.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            button.style.setProperty("--x", `${x}px`);
            button.style.setProperty("--y", `${y}px`);

            button.style.background = `radial-gradient(circle at ${x}px ${y}px, #ff6a00, #dd2476)`;
        });

        button.addEventListener("mouseleave", () => {
            button.style.background = "linear-gradient(90deg, #ff512f, #dd2476)";
        });
    });

})