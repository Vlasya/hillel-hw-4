// 1) В массиве заполненном рандомными значениями произвести такую замену:
// 1 элемент поменять с 2
// 3 элемент поменять с 4
// 5 элемент поменять с 6
// и тд
// Если массив непарный - последний элемент не трогать.
// было 1 2 3 4 5 6, должно стать: 2 1 4 3 6 5

myArray= new Array(8);

function genRandomArray(arr=[],min,max){
	for(i=0;i<arr.length;i++){
		arr[i]=Math.floor(Math.random() * (max - min)) + min;
	}
}
genRandomArray(myArray,-5,90);
console.log(myArray);


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

changeItem(myArray);
console.log(myArray);

// Обрезаем массив,если он не парный

// if(myArray.length%2!==0){
// 	changeItem();
// }