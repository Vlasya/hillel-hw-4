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
console.log('Массив ',myArray);

// Меняем местами
function changeItem(arr=[]){
	myArray.forEach(function(item, index) {
		if(index%2===0){
			let c=myArray[index];
			myArray[index]=myArray[index+1];
			myArray[index+1]=c
		}
	 });
	 return myArray;
}

// Обрезаем массив,если он не парный

if(myArray.length%2!==0){
	let last=myArray.pop();
	changeItem(myArray);
	myArray.push(last);
}else{
	changeItem(myArray);
}
console.log('Массив после ',myArray);