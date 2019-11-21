const cookieAcceptedKey ='cookieAccepted';
const cookieAcceptedValue = 'true';

let initializeCookieListener = function(onclickElement, elementToHide) {
    if(Cookies.get(cookieAcceptedKey + elementToHide) === cookieAcceptedValue) {
        $(elementToHide).remove();
    }

    $(onclickElement).click(function (event) {
        event.preventDefault();

        Cookies.set(cookieAcceptedKey + elementToHide, cookieAcceptedValue, { expires: 365 });
    });
};
