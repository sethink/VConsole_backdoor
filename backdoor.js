/**
 * 1，使用vconsole
 * 2，
 */
console.log = (function (oriLoginFunc) {
    return function (data) {
        if(['1','2'].indexOf(sessionStorage.getItem('backdoor')) >= 0){
            oriLoginFunc.call(console,data);
        }
    }
})(console.log);


function console_init(){
    if(sessionStorage.getItem('backdoor') == '1'){
        new VConsole();
    }
}