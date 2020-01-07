window.onload = function () {
    
    const arrow = document.querySelector('#arrow');
 
    console.log(arrow);
    
    arrow.addEventListener('click', gotoPortfolio);
    
    function gotoPortfolio() {
        window.location.href = "index.html";
    }
    
};