/*Créez une classe Chrono avec :

    une méthode start()
    une méthode pause()
    une méthode stop()
    une propriété currentTime

    Indices :
        setTimeout
        setInterval

*/
function Chrono() {
	this.currentTime = 0;
	this.start = function() {
		this.currentTime++;
		console.log(this.currentTime);
	};

	this.pause = function() {
		clearTimeout(idPause);
		console.log('pause');
		alert("c'est la pause");
	};

	this.stop = function() {
		clearInterval();
		console.log('stop');
		alert('stop');
	};
}
function Test() {
	chrono1.start();
}
var chrono1 = new Chrono();
var idInterval = setInterval(Test, 1000);
var idPause = setTimeout(chrono1.pause, 10000);
var idStop = setTimeout(chrono1.stop, 15000);

