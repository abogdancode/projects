// обработка события нажатия кнопки расчет
$(".btn").on("click", function(){
	raschet(x, y,y1,y2,y3, b, h);
});

var x,
y,//yi(x) методом Эйлера
y1,//yi(x)
y2,//yi(x) улучшенным методом Эйлера
y3,//yi(x) улучшенным методом Рунге-Кутта
b, h;

function delta(x, y){//(Точное-приближенное)/точное*100%
	return Math.abs((x - y) / x)*100;
}

function yx1(x){//Значение функции y
	return Math.exp((x*x/2));
}

function yx2(x, y){//Значение функции y'
	return x * y;
}

function euler1(x, y, h){//yi(x) методом Эйлера
	return y + h * yx2(x, y);
}

function euler2(x, y, h){//yi(x) улучшенным методом Эйлера
	var y22 = euler1(x, y, h);
	return  y + h / 2 * (yx2(x, y) + yx2(x + h, y22));;
}

function rungeKutta(x, y, h){//yi(x) методом Рунге-Кутта
	var k1, k2, k3, k4;
	k1 = h * yx2(x, y);
	k2 = h * yx2(x + h / 2, y + k1 / 2);
	k3 = h * yx2(x + h / 2, y + k2 / 2);
	k4 = h * yx2(x + h, y + k3);
	return y + (1/6)* (k1 + 2 * k2 + 2 * k3 + k4);
}

function raschet(x,y,y1,y2,y3,b,h){
	n = 0;
	var col = 1;
	while (n <= b){
		n += h;
		col++;
	}
	y = []; x = []; y1 = []; y2 = []; y3 = [];
	y[0] = 1; y1[0] = 1; y2[0] = 1; y3[0] = 1; x[0] = 0;
	for (var i=0; i <col; i++){
		y[i + 1] = euler1(x[i], y[i], h);//эйлер
		y1[i] = yx1(x[i]);//y
		y2[i + 1] = euler2(x[i], y2[i], h);//эйлер+
		y3[i + 1] = rungeKutta(x[i], y3[i], h);//Рунге-Кутта
		x[i + 1] = x[i] + h;
		//Создание строк в таблице
		$(".table_body").append("<tr class='table_row'><td>"+x[i].toFixed(2)+"</td><td>"+truncated(y[i])+"</td><td>"+truncated(y1[i])+"</td><td>"+truncated(delta(y1[i], y[i]))+"</td><td>"+truncated(y2[i])+"</td><td>"+truncated(delta(y1[i], y2[i]))+"</td><td>"+truncated(y2[i])+"</td><td>~"+truncated(delta(y1[i], y3[i]))+"</td></tr>");
	}
}

b = 0.2;
h = 0.01;

function truncated(num) {  //округляем для красивого отображения в таблице
	return Math.trunc(num * 1000000000) / 1000000000;
}
