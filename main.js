// 1) В массиве заполненном рандомными значениями произвести такую замену:
// 1 элемент поменять с 2
// 3 элемент поменять с 4
// 5 элемент поменять с 6
// и тд
// Если массив непарный - последний элемент не трогать.
// было 1 2 3 4 5 6, должно стать: 2 1 4 3 6 5

myArray= new Array(7);
genRandomArray(myArray,-5,90);

// Заполняем рандомными значениями
function genRandomArray(arr=[],min,max){
	for(i=0;i<arr.length;i++){
		arr[i]=Math.floor(Math.random() * (max - min)) + min;
	}
}
console.log('------------------------------Задание   1  -------------------------------------------');
console.log('Рандомный массив ',myArray);

// Меняем местами
function changeItem(arr=[]){
	arr.forEach(function(item, index) {
		if(index%2===0){
			let c=arr[index];
			arr[index]=arr[index+1];
			arr[index+1]=c
		}
	 });
	 return arr;
}

// Обрезаем массив,если он не парный

if(myArray.length%2!==0){
	let last=myArray.pop();
	changeItem(myArray);
	myArray.push(last);
}else{
	changeItem(myArray);
}
console.log('Массив после смены ',myArray);


console.log('------------------------------Задание   2   -------------------------------------------');


// В массиве заполненном рандомными числами:
// Вывести элементы массива, которые больше среднего арифметического
// Вывести в консоль индексы элементов массива, значение которых лежит в указанном пределе. Предел вводится с клавиатуры как A, B
// Удалить повторяющиеся элементы из массив, оставить массив уникальных значений


myArrayNew= new Array(10);
genRandomArray(myArrayNew,10,70);
console.log('рандомный массив задание 2 ',myArrayNew);
console.log('-    -     -     -     -     -');
// Вывести элементы массива, которые больше среднего арифметического
let average = myArrayNew.reduce((sum,item)=>sum+item,0)/myArrayNew.length;
console.log('Среднее арифметическое массива' ,average);

let moreAvrage= myArrayNew.filter(item=>item>average);
console.log('Элементы массива, которые больше среднего арифметического: ', moreAvrage);

console.log('-    -     -     -     -     -');

// Вывести в консоль индексы элементов массива, значение которых лежит в указанном пределе. Предел вводится с клавиатуры как A, B

let rangeStart =+prompt('Начало диапазона')

do{
	var rangeEnd =+prompt('Конец диапазона (Не больше длины массива (в коде 10!!))  и не меньше начала диапазона)');
} while (rangeEnd>myArrayNew.length1||rangeEnd<rangeStart);

console.log('Начало диапазона: ', rangeStart);
console.log('Конец диапазона: ', rangeEnd);


for(let i=0;i<myArrayNew.length;i++){
	if(i>=rangeStart && i<=rangeEnd){
		console.log('Индекс числа: ',i-1, 'Число, на всякий случай ',myArrayNew[i-1]);
	}
}


console.log('-    -     -     -     -     -');
// Удалить повторяющиеся элементы из массива, оставить массив уникальных значений
sort_unicArr(myArrayNew);

function sort_unicArr(arr){
	 arr=arr.sort(function(a,b){
		return a-b;
		console.log(arr,'sort');
	});
	var retArr=[];
	for(var i=0;i<arr.length;i++){
		if(arr[i-1]!==arr[i]){
			retArr.push(arr[i]);
		}
	}
	return retArr;
}
let myArrayNewUniq=sort_unicArr(myArrayNew);

console.log('Сортируем массив: ', myArrayNew);
console.log('Только уникальные значения массива: ', myArrayNewUniq);
console.log('-    -     -     -     -     -');

