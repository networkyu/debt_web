const ip = "localhost";
const port = "8011";
const protocolHttp = "http://";
const protocolHttps = "https://";
function getIp(){
    return ip;
}
function getBaseUrl(){
    return getProtocolHttp() + getIp() + ":" + getPort();
}
function getPort(){
    return port;
}
function getProtocolHttp(){
    return protocolHttp;


    // ————————————
}