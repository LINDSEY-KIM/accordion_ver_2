
(() => {

    const wrapEl = document.querySelector(".wrap");
    let currentCon;

    const handleClick = (e) => {

        if (currentCon) {
            currentCon.classList.remove('active');
        }
        
        if(e.target.classList.contains('item')) {
            e.target.parentNode.classList.add('active');
            currentCon = e.target.parentNode;
            console.log(currentCon);
        }

    };
    wrapEl.addEventListener('click' , handleClick);
    
})();

