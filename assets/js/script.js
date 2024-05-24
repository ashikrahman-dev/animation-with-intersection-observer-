// const circle = document.getElementById("circle");

// const observer = new IntersectionObserver(
//     (items) => {
//         items.forEach((item) => {
//             if (item.isIntersecting) {
//                 console.log("Is visible.");
//             } else {
//                 console.log("Is not visible.");
//             }
//         });
//     },
//     {
//         threshold: 1,
//     }
// );

// observer.observe(circle);




// square.target.classList.toggle("visible", square.isIntersecting);
// if (square.isIntersecting) observer.unobserve(square.target);







window.onload = function () {
    setTimeout(function () {



        const squares = document.querySelectorAll(".multiple-circle");

        const observer = new IntersectionObserver(
            (squares) => {
                squares.forEach((square) => {
                    if (square.isIntersecting) {
                        square.target.classList.add("visible");
                        if (square.isIntersecting) observer.unobserve(square.target);
                    } else {
                        square.target.classList.remove("visible");
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );
        
        squares.forEach((square) => observer.observe(square));




    }, 5000); // Delay of 5 seconds
};