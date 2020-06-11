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



