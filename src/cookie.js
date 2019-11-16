const cookieAcceptedKey ='cookieAccepted';
const cookieAcceptedValue = 'true';

let initializeCookieListener = function(onclickElement, elementToHide) {
    if(typeof Cookies.get(cookieAcceptedKey + elementToHide) === 'undefined' && Cookies.get(cookieAcceptedKey + elementToHide) !== cookieAcceptedValue) {
        $(elementToHide).show();
    }

    $(onclickElement).click(function (event) {
        event.preventDefault();

        Cookies.set(cookieAcceptedKey + elementToHide, cookieAcceptedValue, { expires: 365 });
    });
};
