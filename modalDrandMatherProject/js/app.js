document.getElementById("cart-info").addEventListener("click", function () {
    const cart = document.getElementById("cart");
    cart.classList.toggle("show-cart");
    console.log(cart);
});
// filter btns
// (function () {
//     const filter = document.querySelectorAll(".filter-Btn");
//     // console.log(filterBtn);

//     filterBtn.forEach(function (btn) {
//         btn.addEventListener("click", function (event) {
//             event.preventDefault();
//             const value = event.target.dataset.filter;
//             // console.log(value);

//             const items = document.querySelectorAll(".store-item");
//             // console.log(item);

//             items.forEach(function (item) {
//                 if (value === "all") {
//                     item.style.display = 'block';
//                 } else {
//                     if (item.classList.contains(value)) {
//                         item.style.display = 'block';
//                     } else {
//                         item.style.display = 'none';
//                     }
//                 }
//             });
//         });
//     });
// })();

// search input
(function () {
    // target search box
    const search = document.getElementById('search-item');

    search.addEventListener('keyup', function () {

        let value = search.value.toLowerCase().trim();

        // console.log(value);

        const items = document.querySelectorAll('.store-item');

        items.forEach(function (item) {
            let type = item.dataset.item;
            // console.log(type);
            // if (type.include(value)) {
            //     item.style.display = 'block';
            // } else {
            //     item.style.display = 'none';
            // }

            let length = value.length;
            // console.log(length);
            let match = type.slice(0, length);
            
            console.log(value);
            console.log(match);

            if (value === match) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
            
            

        });
    });
})();