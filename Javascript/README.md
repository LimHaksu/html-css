#### 30 > 20 > 10 의 연산과정

```javascript
30 > 20 > 10
(30 > 20) > 10
true > 10
1 > 10
false
```



#### 6가지 자료형

```javascript
var stringVar = 'string';
var numberVar = 273;
var booleanVar = true;
var functionVar = function () {};
var objectVar = {};
undefined
```



#### 기존 변수 재선언 가능

```javascript
var favoriteFood = '김치찌개';
var favoriteFood = '라면';
var favoriteFood = '냉면';

// 다음과 같이 키워드를 재선언하면 문제가 발생
var alert = 'red Alert';
alert(alert);
```



#### typeof 도 단항 연산자, typeof 연산 결과는 string

```javascript
typeof(typeof 52) // "string"
typeof 1 + '문자열' // "number문자열"
typeof(1 + '문자열') // "string"
typeof(1) + '문자열' // "number문자열"

typeof ('string') // "string"
typeof (273) // "number"
typeof (true) // "boolean"
typeof (function () {}) // "function"
typeof ({}) // "object"
typeof (alpha) // "undefined"
```



#### 입력

```javascript
var input = prompt('안내메세지','기본입력값'); // 문자열 입력
var input = confirm('안내메세지'); // 확인 true, 취소, false
```



#### 숫자 + 문자 == 문자

```javascript
5 + '23' == 523
```

#### 숫자 -*/ 문자 == 숫자

```javascript
5 - '23' == -18
5 * '23' == 115
5 / '2' == 2.5
```



#### 숫자, 문자 치환

```javascript
var num = Number('23');
var nan = Number('d'); // NaN : Not a Number
var nan = Number(Math.sqrt(-3)) // 복소수를 표현할 수 없음. NaN
var str = String(23);
```



#### boolean 변환

```javascript
Boolean(0) == false;
Boolean(Nan) == false;
Boolean('') == false;
Boolean(null) == false;
Boolean(undefined) == false;
// 위 5가지를 제외한 나머지는 true
Boolean('0') == true;
Boolean('fasle') == true;
```



#### 비교 연산자 == 주의

```javascript
'' == false // true
'' == 0 // true
0 == false // true
'273' == 273 // true
```



#### 일치연산자 ===

```javascript
=== // 양쪽 변수의 자료형과 값이 일치
!== // 양쪽 변수의 자료형과 값이 다름
'' === false // false
'' === 0 // false
0 === false // false
'273' === 273 // false
```



#### var 변수는 전역 scope

```javascript
{
    var a = 273;
}
alert(a); // 가능
```

```javascript
for(var i = 0; i < 3; i++){
    setTimeout(()=>{
        alert(i);
    }, 1000*i);
}
// 1초 간격으로 3이 총 세 번 출력
```



#### indexOf

```javascript
const str = '이것은 문자열입니다.';
str.indexOf('문자열') === 4
// str에서 '문자열'이 위치한 index
// '문자열' 이 존재하지 않으면 -1
```



#### array

```javascript
// 배열은 object의 한 종류
// element로 여러 타입을 넣을 수 있다.
var arr = [273, 'string', true, function() {}, {}, [273,103]];
```



#### for in 반복문

```javascript
for(var i in array){
    alert(arr[i]); // i 는 index
}
```

#### for of 반복문

```javascript
for(const element of ['one', 'two', 'three', 'four']){
    alert(`요소는 ${element}입니다.`);
}
```



#### 함수

```javascript
함수();
var 함수 = function () { alert('함수') };
// 함수를 선언하기 전에 호출해서 에러발생

함수();
function 함수() { alert('함수') };
// 선언적 function을 먼저 읽고 시작하기 때문에 실행 가능

var 함수 = function() { alert('함수 A') };
function 함수() { alert('함수 B') };
함수();
// 함수A 출력
```



#### 매개변수

```javascript
// 정의된 매개변수보다 더 많이 들어온 매개변수는 무시한다
// 정의된 매개변수보다 더 적게 들어오면 undefined로 입력받는다.
```



#### 가변인자 함수

```javascript
Array() // 빈 배열
Array(number) // 크기가 number인 배열
Array(any, ... , any) // 매개변수로 배열 초기화

function sumAll(){
    var output = 0;
    for(var i in arguments){
        output += arguments[i];
    }
    return output;
}
alert(sumAll(1,2,3,4,5,6,7,8,9));
```



#### return

```javascript
function returnFunction(){
    return;
}
var output = returnFunction();
alert(typeof (output) + ' : ' + output); // undefined : undefined
```



#### 내부 함수

```javascript
function pythagoras(width, height){
    function square(x){
        return x * x;
    }
    // 내부함수는 선언한 함수 내부에서만 사용가능, 외부에 같은 이름이 있어도 내부함수먼저 실행
    return Math.sqrt( square(width) + square(height) );
}
```



#### 자기호출 함수

```javascript
(function(){
    // code...
})(); // 함수를 생성하자마자 호출, code... 부분은 다른 영역에 영향을 주지 않음.
```



#### 함수를 리턴하는 함수

```javascript
function returnFunction(){
    return function(){
        alert('Hello Function .. !');
    };
}

returnFunction()(); // 함수 리턴 결과 함수가 나오므로 그 함수를 실행하면 alert()가 실행된다.
```



#### 클로저

```javascript
function test(name){
    var output = 'Hello '+ name + '.. !';
}
alert(output);
// 함수 내 지역변수는 함수 밖에서 사용 불가능

function test(name){
    var output = 'Hello ' +name + ' .. !';
    return function(){
        alert(output);
    }
}
test('JavaScript')(); 
// output은 test 함수가 종료되면 사라져야하는데 리턴된 함수 내부에서 사용되고 있기때문에 살아남음
```



#### SetTimeout, clearTimeout, setInterval, clearInterval

```javascript
setTimeout(function, millisecond);
clearTimeout(id);
setInterval(function, millisecond);
clearInterval(id);
```



#### 인코딩 함수

```javascript
escape() // 적절한 정도 인코딩, 영문, 숫자, 일부 특수문자(@,*,_,-,+,/, ...) 제외하고 인코딩
unescape() // 적절한 정도 디코딩
encodeURI(uri) // 최소한의 문자 인코딩, escape + url에 사용되는 특수문자 (:;/=?&)는 제외하고 인코딩
decodeURI(encodedURI) // 최소한의 문자 디코딩
encodeURIComponent(uriComponent) // 문자 대부분 모두 인코딩, 영문, 숫자 제외하고 인코딩, UTF-8
decodeURIComponent(encodedURI) // 문자 대부분 모두 디코딩
```



#### eval( )

```javascript
string으로 된 javascript 코드를 실행
eval('alert(10);'); // alert(10); 실행
```



#### isFinite(), isNaN()

```javascript
var number = 1 / 0; // Infinity 라는 값이 들어감
isFinite(number) === false

NaN == NaN // false
isNaN(NaN) // true
```



#### parseInt(), parseFloat()

```javascript
// Number() 함수와 차이.
var a = '1000원';
Number(a) // NaN;
parseInt(a) // 1000;

//주의
parseInt('0x273') == 627 // 16진수로 인식
parseInt('0273') == 187 // 8진수로 인식
parseFloat('52.273e5') == 5227300 // e, 10의 제곱표현으로 인식
```



#### 짧은 조건문을 활용한 기본 매개변수

```javascript
function test(a, b, c){
    b = b || 52;
    c = c || 273;
    alert(a + ':' + b + ':' + c);
}
test(1,2); // 1:2:273
```

##### ECMAScript 6 버전

```javascript
function test(a, b = 52, c = 273){
    alert(a + ':' + b + ':' + c);
}
```



#### 화살표 함수

```javascript
// this의 의미
// 익명 함수 : 함수 자체에 바인딩 되어 있는 객체(window 또는 prototype 객체)
// 화살표 함수 : 전역 객체(웹 브라우저 환경에서는 window 객체)
```



#### 전개 연산자

```javascript
function test(...numbers){ // 여러개의 매개변수를 배열 변수에 담는다.
    alert(numbers[0]);
    alert(numbers[1]);
    alert(numbers[2]);
}
test(1,2,3);

function test(a, b, ...numbers){
    alert(numbers);
}
test(1, 2, 3, 4, 5, 6); // 3,4,5,6 출력

//ES5
function test(a,b,c,d){
    alert(a + ':' + b + ':' + c + ':' + d);
}
var array = [1, 2, 3, 4];
test.apply(null, array);
// 첫번째 매개변수 : 함수 내부에서 활용할 this 키워드 객체
// 두번째 매개변수 : 전개할 매개변수 배열

//ES6
function test(a,b,c,d){
    alert(`${a}:${b}:${c}:${d}`);
}
var array = [1, 2, 3, 4];
test(...array);

var array = [1, 2];
test(273, 52, ...array); // 273:52:1:2
test(...array, ...array); // 1:2:1:2
```



#### 객체

```javascript
var product = {
    제품명 : '7D 건조 망고',
    유형 : '당절임',
    성분 : '망고, 설탕, 메타중아황산나트륨, 치자황색소',
    원산지 : '필리핀'
}

product['제품명'] === '7D 건조 망고'
product.제품명 === '7D 건조 망고'

// 문자열을 key로 사용하면 접근할때는 대괄호만 가능
var object = {
    'with space' : 273, 
}
obejct['with space'] === 273
```



```javascript
var person = {
    name : '윤인성',
    eat : function (food){
        alert(this.name + '이 ' + food + '을/를 먹습니다.'); // this는 object 자신
    }
}
person.eat('밥');
```



#### 객체 반복문

```javascript
for(var key in object){
    object[key] // 객체의 모든 key 와 value에 접근 가능
}
```



#### in , with 키워드

```javascript
var output = '';
var student = {
    이름 : '연하진',
    국어 : 92, 수학 : 98,
    영어 : 96, 과학 : 98
}

// in 키워드
output += "'이름' in student: " + ('이름' in student) + '\n';
output += "'성별' in student: " + ('성별' in student);

alert(output); // '이름' in student: true
			   // '성별' in student: false

with(<객체>){
     <코드> // 객체 명시 필요 없이 속성 접근 가능
}
with(student){
    이름 + ' ' + 국어 + ' ' + 수학 + ' ' + 영어 + ' ' + 과학 // 연하진 92 98 96 98
    // 외부 변수 이름과 같으면 속성 이름을 우선으로 함
    // 외부 변수 이름과 속성이 같을 경우 외부 변수는 window의 속성처럼 접근, window.외부변수
}
```



#### 속성 동적 추가

```javascript
var student = {}
student.이름 = '윤인성';
student.toString = function() {
	var output = '';
    for(var key in this){
        // toString() 메서드는 출력하지 않게 함
        if(key != 'toString'){
            output += key + ' ' + this[key] + '\n';
        }
    }
    return output;
}
```



#### 속성 제거

```javascript
delete student.이름;
delete (student.이름);
```



#### 옵션 객체 초기화

```javascript
function test(options){
    options.valueA = options.valueA || 10;
    options.valueB = options.valueB || 20;
    
    alert(options.valueA + ':' + options.valueB);
}

test({
    valueA : 52
})
```



#### 배열 복제 ES6

```javascript
const originalArray = [1,2,3,4,5];
const newArray = [...originalArray]; // deep copy
```

#### 배열 병합 ES6

```javascript
const arrayA = [1,2,3,4,5];
const arrayB = [6,7,8,9,10];
const newArray = [...arrayA, ...arrayB];
```



#### 생성자 함수

```javascript
function Student(name, korean, math, english, science){ // 대문자로 시작하는 함수(컨벤션)
	this.이름 = name; // this.속성 으로 객체의 속성 선언
    this.국어 = korean;
    this.수학 = math;
    this.영어 = english;
    this.과학 = science;
    
    this.getSum = function(){
		return this.국어 + this.수학 + this.영어 + this.과학;
    }
    this.toString = function(){
        return this.이름 + ' ' + this.getSum();
    }
}
var student = new Student('윤하린', 96, 98, 92, 98); // new로 생성
student instanceof Student // true
student instanceof Number // false
```



#### 프로토타입

```javascript
// 생성자 함수로 생성된 객체들이 공통으로 갖고있는 부분
// method를 prototype 공간으로 옮기면 메모리 절약이 가능하다
// 자바스크립트의 모든 함수는 prototype을 갖고있다.
// prototype 또한 객체

function Student(name, korean, math, english, science){ // 대문자로 시작하는 함수(컨벤션)
	this.이름 = name; // this.속성 으로 객체의 속성 선언
    this.국어 = korean;
    this.수학 = math;
    this.영어 = english;
    this.과학 = science;
}
Student.prototype.getSum = function(){
    return this.국어 + this.수학 + this.영어 + this.과학;
}
Student.prototype.toString = function(){
    return this.이름 + ' ' + this.getSum();
}
```



#### new 로 생성하지 않을 때 현상

```javascript
function Constructor(value){
    this.value = value; // new를 사용하지 않으면 this 는 window를 의미
}
var constructor = Constructor('Hello'); // new 없이 함수 호출
alert(value); // value == window.value
```



#### 캡슐화

```javascript
function Rectangle(w, h){
    var width = w;
    var height = h;
    
    this.getWidth = function() { return width; };
    this.getHeight = function() { return height; };
    this.setWidth = function (w){
        if(w<0){
            throw '길이는 음수일 수 없습니다.';
        }else{
        	width = w;   
        }
    };
    this.setHeight = function(h){
        if(w<0){
            throw '길이는 음수일 수 없습니다.';
        }else{
        	height = h;
        }
    }
}
Rectangle.prototype.getArea = function(){
    return this.width * this.height;
}
var rectangle = new Rectangle(10,3);
// 클로저 개념을 이용
// 생성자 함수 외부에서는 지역변수 width, height에 직접 접근이 불가능.
// getter, setter는 closer 기 때문에 width, height 접근 가능.
```

####  

#### 상속

```javascript
function Square(length){
    this.base = Rectangle; // 변수명이 꼭 base일 필요는 없다.
    this.base(length, length);
}
Square.prototype = Rectangle.prototype;
Square.prototype.constructor = Square;

var rectangle = new Rectangle(5,7);
var square = new Square(5);

// 상속 판단 방법
var square = new Square(5);
square instanceof Rectangle // true면 상속받음
```



#### 클래스 선언 ( 생성자 함수와 비교 )

```javascript
class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    
    getArea(){
        return this.width * this.height;
    }
}

const rectangle = new Rectangle(100, 200);
alert(rectangle.getArea());
```



#### getter와 setter

```javascript
class Rectangle{
    constructor(width, height){
        this._width = width; // class에서 변수를 숨기능게 불가능해서 변수 이름에 _붙여서 다른사람은 건들지 말것을 부탁.
        this._height = height;
    }
    get width(){
        return this._width;
    }
    set width(input){
        this._width = input;
    }
    get height(){
        return this._height;
    }
    set height(input){
        this._height = input;
    }
    getArea(){
        return this._width * this._height;
    }
}
const rectangle = new Rectangle(100, 200);
rectangle.width = 200; // set width() 가 자동 호출

rectangle.width; // get width() 가 자동 호출
rectangle.getArea();
```



#### class 상속

```javascript
class Square extends Rectangle{
    constructor(length){
        super(length, length);
    }
    set width(input){
        this._width = input;
        this._height = input;
    }
    set height(input){
        this._width = input;
        this._height = input;
    }
}
const square = new Square(100);
alert(square.getArea());
```



#### 기본 자료형에는 메서드 추가가 안됨

```javascript
let number = 273;
number.print = function() {
    console.log(this);
};
number.print(); // error 발생 
```



#### 기본자료형과 객체

```javascript
var primitiveNumber = 273;
var objectNumber = new Number(273);
typeof (primitiveNumber) // number
typeof (objectNumber) // object

// 기본자료형에 존재하는 속성, 메서드 사용하면 기본자료형이 객체로 변환(일시적으로 변환)
// 새로운 속성, 메서드 추가는 불가능
primitiveNumber.toFixed(2) // 273.00

// Number의 prototype에 메서드 추가시 primitive number도 해당 method 사용 가능
Number.prototype.hello = function(){
    console.log('안녕');
}
primitiveNumber.hello(); // '안녕' 출력
```



#### Object 객체

```javascript
var object = {};
var object = new Object();

// 기본 메서드
// constructor() : 객체의 생성자 함수
// hasOwnProperty(name) : 객체가 name 속성이 있는지 확인
// isPrototypeof(object) : 객체가 object의 프로토타입인지 검사
// propertyIsEnumerable(name) : name 속성을 반복문으로 열거 가능한지 확인
// toLocaleSTring() : 객체를 호스트 환경에 맞는 언어의 문자열 바꿈
// toString() : 객체를 문자열로 바꿈
// valueOf() : 객체의 값을 나타냄
```



#### 자료형 구분

```javascript
var numberFromLiteral = 273;
var numberFromObject = new Number(273);
typeof (numberFromLiteral) // number;
typeof (numberFromObject) // object;

// 자료형 검사할때는 custructor 사용
typeof (numberFromLiteral.constructor) // Number;
typeof (numberFromObejct.constructor) // Number;
```



#### Number 자료형

```javascript
toExponential(매개변수) // 숫자를 지수 표시로 나타낸 문자열
toFixed(매개변수) // 숫자를 고정 소수점 표시로 나타낸 문자열
toPercision(매개변수) // 숫자를 길이에 따라 지수  표시 또는 고정 소수점 표시로 나타낸 문자열
// 매개변수는 자리수를 나타냄

var maxNum = Number.MAX_VALUE; // 1.7976931348623157e+308
maxNum + 1 // 1.7976931348623157e+308
maxNum + 0.0000000000000001e+308 // Infinity
```



#### String 자료형

```javascript
var stringFromLiteral = 'hello';
var stringFromObject = new String('hello');
typeof stringFromLiteral // "string"
typeof stringFromObject // "object"
stringFromLiteral.length // 5;

// 자신은 그대로 유지하고 새로운 값 리턴
stringUpperCase = stringFromLiteral.toUpperCase(); 
```



#### Array

```javascript
var array = [52, 273, 103, 32];
array.sort(); // 문자열 오름차순 정렬
array // [103, 273, 32, 52]

var array = [52, 273, 103, 32];
slicedArray = array.slice(0,3); // [52, 273, 103];

// 요소 삭제
Array.prototype.remove = function(index){
    this.splice(index, 1);
}

Array.isArray(obj) // obj가 Array, [] 인지 확인
array.indexOf(4); // array에 4가 있으면 해당 index(가장 앞에 있는 것), 없으면 -1
array.lastIndexOf(8); // array에 8이 있으면 index(가장 뒤에 있는 것), 없으면 -1;
```



#### Date

```javascript
var date = new Date('December 9, 1991');
var date = new Date('December 9, 1991 02:24:23');
var date = new Date(1991, 11, 9, 2, 24, 23, 1); // 월-1을 입력 11 -> 12월
```



#### 시간 간격 계산

```javascript
var now = new Date();
var before = new Date('December 9, 1991');
var interval = now.getTime() - before.getTime();
// getTime() : 1970.1.1 자정부터 몇 밀리초 지났는지
interval = Math.floor(interval / (1000 * 60 * 60 * 24)); // 몇 일차이나는지 계산
```



#### filter

```javascript
// 특정 조건을 만족하는 요소를 추출해 새로운 배열을 만듦
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr = arr.filter(function(element, index, array){
    return element % 2 == 0;
});
arr // [2, 4, 6, 8, 10];
```



#### every, some

```javascript
// filter와 사용법 유사, 콜백 함수의 리턴값이 every는 모두 true면 true, some은 하나이상 true면 true 반환
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.every(function(element, index, array){
	return element % 2 == 0;  
}); // false;
arr.some(function(element, index, array){
    return element % 2 == 0;
}) // true
```



#### reduce, reduceRight

```javascript
// reduce : 배열 요소가 하나가 될 때까지 왼쪽부터 두개 씩 묶음
// reduceRight : 배열 요소가 하나가 될 때까지 오른쪽부터 두개 씩 묶음
var arr = [1, 2, 3, 4, 5];
arr.reduce(function(prev, current, index, array){
    // 이미 접근한 index의 값은 undefined가 됨
    // 첫번째 prev : 1,         current : 2, index : 1
    // 두번째 prev : undefined, current : 3, index : 2
    // ...
});
arr // 15
```



#### trim

```javascript
// 문자열 양 끝 공백 제거
var text = '    text    ';
text.trim() // 'text'
```



#### JSON.stringify(),  JSON.parse()

```javascript
JSON.stringify( ) // 자바스크립트 객체를 JSON 문자열로 변환
JSON.parse( ) // JSON 문자열을 자바스크립트 객체로 변환

// 객체의 메소드 중 toJSON 이 없으면 객체 전체를 JSON으로 변환, 있으면 toJSON의 리턴 값을 JSON으로 변환
var object = {
    name: 'object',
    prop: 'object',
    toJSON : function(){
        return {
            custom: 'custom'
        };
    }
};
JSON.stringify(object); // {"custom":"custom"}
```



## 브라우저 객체

#### 브라우저 관련 객체

* window
  * location
  * navigator
  * history
  * screen
  * document



#### var 로 선언한 변수 모두 window의 객체가 된다.

```javascript
var test = 52273;
window.test // 52273
```



#### open

```javascript
// 새로운 window 객체 생성 함수
window.open(URL, name, features, replace)
```



#### window 객체 기본 메서드

```javascript
moveBy(x, y) // 윈도우 위치를 상대적으로 이동
moveTo(x, y) // 윈도우 위치를 절대적으로 이동
resizeBy(x, y) // 윈도우 크기를 상대적으로 지정
resizeTo(x, y) // 윈도우 크기를 절대적으로 지정
scrollBy(x, y) // 윈도우 스크롤 위치를 상대적으로 이동
scrollTo(x, y) // 윈도우 스크롤의 위치를 절대적으로 이동
focus() // 윈도우에 초점을 맞춤
blur() // 윈도우에 맞춘 초점을 제거
close() // 윈도우를 닫음
```



#### onload

```javascript 
window.onload = function(){
	console.log('완료');
}
// 웹 브라우저에 모든 객체가 올라간 이후 onload 실행
```



#### 웹 API

https://developer.mozilla.org/ko/docs/Web/API

```javascript
var audio = new Audio('Kalimba.mp3');
```



#### 모바일 장치 구분

```javascript
var userAgent = navigator.userAgent;
alert(userAgent);
```



#### 문서 객체 만들기

```javascript
window.onload = function(){
    var header = document.createElement('h1');
    var textNode = document.createTextNode('Hello DOM');
    
    header.appendChild(textNode);
    document.body.appendChild(header);
}
```



#### 문서 객체 만들기2 (웹브라우저가 지원하는 태그의 속성인 경우)

```javascript
window.onload = function(){
    var img = document.createElement('img');
    img.src = 'Penguins.png';
    img.width = 500;
    img.height = 350;
    
    document.bod.appendChild(img);
}
```

#### 웹브라우저가 지원하지 않는 태그의 속성이 아닌 경우

```javascript
window.onload = function(){
    var img = document.createElement('img');
    img.setAttribute('src', 'Penguins.jpg');
    img.setAttribute('width', 500);
    img.setAttribute('height', 350);
    
    // 무조건 setAttribute를 사용해야 함
    img.setAttribute('data-property', 350);
    
    document.body.appendChild(img);
}
```



#### 문서 객체 가져오기

```javascript
document.getElementById('id');
document.getElementsByName('name');
document.getElementsByTagName('tagName'); // 결과물은 list지만 for in 을 사용하면  문서 객체 이외의 속성도 접근하므로 사용하면 안된다.
document.querySelector(선택자); // 선택자 #id, .className ...
```



#### 스타일 조작

```javascript
var header = document.getElementById('header');
header.style.color = 'orange';
header.style['color'] = 'orange';
```



#### 문서 객체 제거

```javascript
var willRemove = document.getElementById('will-remove');
document.body.removeChild(willRemove);
// 보통의 경우
willRemove.parentNode.removeChild(willRemove);
```



#### 클로저 활용

```javascript
var randomAlphabet = (function(){
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return function(){
        return alphabet.charAt(nextRandomInteger(25));
    }
})(); /* function을 만들자마자 한 번 실행했다. 즉 return 된 function을 의미한다.
	  	 return된 function을 randomAlphabet에 대입했으므로
	  	 randomAlphabet() 을 호출하면 랜덤 알파벳 하나 출력 */
	
```



#### 고전 이벤트 모델

```javascript
window.onload = function(){
    // 변수를 선언
    var header = document.getElementById('header');
    
    // 이벤트를 연결
    header.onclick = function(){
        alert('클릭');
    };
};
```

