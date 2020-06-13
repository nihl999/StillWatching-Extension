const observerConfig = {childList: true};
const popupContainer = document.querySelector('ytd-popup-container');
const callback = function(mutationsList, observer){
    mutationsList.forEach(element => {
        if(element.type === 'childList'){
            const confirmContainer = popupContainer.querySelector('yt-button-renderer#confirm-button');
            const confirmButton = confirmContainer.querySelector('paper-button#button');
            confirmButton.click();
            console.log('StillWatching acting'); 
        }
    });
};
const extObserver = new MutationObserver(callback);
extObserver.observe(popupContainer, observerConfig);
console.log('StillWatching running...');