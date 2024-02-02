export function getCoord() {
    return new Promise((res,rej) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(res,rej);
        }
    });
}