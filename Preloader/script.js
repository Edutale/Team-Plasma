document.addEventListener('DOMContentLoaded', ()=>{
    const preloader = document.querySelector('.preloader');
    const book = document.querySelector('.book');
    const cover = document.querySelector('.cover');
    const firstPage = document.querySelector('.first-page');
    const pages = document.querySelectorAll('.page');
    const lastPage = document.querySelector('.last-page');
    const mainContent = document.querySelector('.main-content');

    let loadProgress = 0;
    let currentPage = 0;
    let isLoading = true;
    
    function flipCover(){
        setTimeout(()=>{
            cover.style.transform = 'rotateY(-180deg)';
            cover.classList.add('flipped');
            setTimeout(()=>{
                flipFirstPage();
            }, 1000);
        }, 1000);
    }

    function flipFirstPage(){
        setTimeout(()=>{
            firstPage.style.transform = 'rotateY(-180deg)';  
            setTimeout(()=>{
                flipPages();
            }, 1000);
        }, 1000); 
    }

    function flipPages(){
        if(isLoading){
            if(currentPage >= pages.length){
                resetPages();
                return;
            }
            pages[currentPage].style.transition = 'transform 0.5s';
            pages[currentPage].style.transform = 'rotateY(-180deg)';
            currentPage++;
            setTimeout(flipPages, 1000);
        } else{
            finishLoading();
        }
    }

    function resetPages(){
        pages.forEach(page=>{
            page.style.transition = 'none';
            page.style.transform = 'rotateY(0deg)';
        });
        void book.offsetWidth;
        pages.forEach(page=>{
            page.style.transition = 'transform 0.5s';
        });
        currentPage = 0;
        setTimeout(flipPages, 50);
    }

    function updateLoading(){
        loadProgress += 15; // This should rlly just be something like loadProgress = loadedAssets / totalAssets; but for now its this
        if(loadProgress >= 100){
            loadProgress = 100;
            isLoading = false;
        } else{
            setTimeout(updateLoading, 500);
        }
    }

    function finishLoading(){
        book.style.animation = 'bookZoom 1s forwards';
        setTimeout(()=>{
            preloader.style.display = 'none';
            mainContent.style.display = 'block';
            setTimeout(()=>{
                mainContent.classList.add('show');
            }, 50);
        }, 1000);
    }

    flipCover();
    updateLoading();
})