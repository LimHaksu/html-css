## CSS 선택자

```css
h1 { color : red; }
```

선택자 { 스타일속성 : 스타일값; }



`*` : html 페이지 내부의 모든 태그 선택

```css
* { color : red; } 
```

`태그이름` : 특정한 태그 선택

```css
태그이름 { color : red; }
```

`#아이디` : id="아이디" 인 태그 선택

```css
#header { color : red; } /* id="header" 인 태그 */ 
```

`.클래스` : class="클래스" 인 태그 선택

```css
.select { color : red; } /* class="select" 인 태그 */
```



`선택자[속성]` : 특정 속성이 있는 태그 선택

`선택자[속성=값][속성=값]` : 특정 속성의 값이 특정 값과 일치하는 태그 선택

```css
input[type=text] { background : red; } /* <input type="text" /> 인 태그 */
```



`선택자[속성~=값]` : 속성 안의 값이 특정 단어를 포함하는 태그 선택 ( 스페이스로 단어 구분 )

`선택자[속성|=값]` : 속성 안의 값이 특정 단어를 포함하는 태그 선택 ( - dash로 단어 구분)

`선택자[속성^=값]` : 속성 안의 값이 특정 값으로 시작하는 태그 선택

`선택자[속성$=값]` : 속성 안의 값이 특정 값으로 끝나는 태그 선택

`선택자[속성*=값]` : 속성 안의 값이 특정 값을 포함하는 태그 선택

##### `[속성~=값]` 과 `[속성|=값]` 의 차이

[속성~='ko-kr'] : ko-kr 로 인식

[속성|='ko-kr'] : ko 와 kr로 인식



#### 후손, 자손 선택자

* 자손 : 부모 태그의 한단계 아래 있는 태그들
* 후손 : 부모 태그 안에 있는 모든 태그 ( 자손 포함 )

`선택자A 선택자B` : 후손선택자

```scss
div input { background : red; } /* div 안에 있는 모든 input 태그 배경을 빨강으로 */
```

`선택자A>선택자B` 자손선택자

```css
div>input { background : red; } /* div 한단계 아래 있는 input 태그들만 배경을 빨강으로 */
```

#### 동위 선택자

같은 단계에 존재하는 태그 선택 ( siblings )

`선택자A+선택자B` : 선택자A 바로 뒤에 있는 같은 단계 선택자B 선택

`선택자A~선택자B` : 선택자A 뒤에 위치하는 같은 단계 모든 선택자B 선택

```css
h1+h2{ color : red;} /* h1 태그 바로 뒤에 있는 h2태그 하나만 빨강색으로 */
h1~h2{ background-color : orange; } /* h1태그 뒤에 있는 모든 h2 태그 배경을 주황색으로 */
```

```html
<h1>Header 1</h1>
<h2>Header 2</h2> /* { color : red; background-color : orange;}*/
<h2>Header 2</h2> /* { background-color : orange;}*/
```



#### 반응 선택자

사용자의 행동에 따라 변화하는 상태를 반영하는 선택자

`:active` : 사용자가 마우스로 클릭한 태그를 선택

`:hover` : 사용자가 마우스를 올린 태그를 선택

```css
h1:hover { color : red; } /* h1 태그 위에 마우스 커서를 올리면 빨강으로 변함 */
h1:active { color : blue; } /* h1 태그를 클릭하면 파랑으로 변함 */
```



#### 상태 선택자

`:checked` : 체크 상태 input 태그를 선택

`:focus` : 초점이 맞춰진 input 태그를 선택

`:enabled` : 사용 가능한 input 태그를 선택

`:disabled` : 사용 불가능한 input 태그를 선택

```html
<input disabled="disabled"/> <!-- disabled 속성을 추가하면 사용 불가능한 태그 -->
```



#### 구조 선택자

`:first-child` : 형제 관계중 첫번째 위치하는 태그 선택

`:last-child` : 형제 관계 중 마지막 위치하는 태그 선택

`:nth-child(수열)` : 형제 관계 중 앞에서부터 수열 번째 태그 선택

```css
:nth-child(2n+1) /* 첫번째, 세번째, 다섯번째, ... */
```

`:nth-last-child(수열)` : 형제 관계 중 뒤에서부터 수열 번째 태그 선택

```css
:nth-last-child(2n+1) /* 뒤에서 첫번째, 뒤에서 세번째, ... */
```



#### 형태 구조 선택자

`:first-of-type`  : 형제 관계 중 첫번째로 등장하는 특정 태그

`:last-of-type`  : 형제 관계 중 마지막으로 등장하는 특정 태그

`:nth-of-type(수열)` : 형제 관계 중 앞에서 수열 번째로 등장하는 특정 태그

`:nth-last-of-type(수열)` :  형제 관계 중 뒤에서 수열 번째로 등장하는 특정 태그

```css
body > *: first-of-type { color : red };
```

```html
<body>
    <h1>header 1</h1> <!-- h1 중 첫번째로 등장하므로 red -->
    <h2>header 2</h2> <!-- h2 중 첫번째로 등장하므로 red -->
    <h1>header 1</h1> <!-- h1 중 두번째로 등장하므로 적용 안됨 -->
</body>
```



#### 문자 선택자

`::first-letter` : 첫번째 글자를 선택

`::first-line` : 첫번째 줄을 선택

```css
p::first-letter { font-size : 3em; }
p::first-line { color : red; }
```

```html
<p>Lorem ipsum dolor...</p> <!-- L 만 글자크기 3배, 글자 색깔 빨강 -->
<p>Lorem ipsum dolor...</p> <!-- L 만 클자크기 3배 -->
```



#### 반응 문자 선택자

`::selection` : 사용자가 드래그한 글자를 선택

```css
p::selection { background : black, color : red; }
```



#### 전후 문자 선택자

`::afeter` : 태그 뒤에 위치하는 공간 선택

`::before` : 태그 앞에 위치하는 공간 선택

전후 문자 선택자에는 content 속성 사용가능

```css
p { counter-increment: rint; }
p::before { content : counter(rint) "."; }
p::after { content : " - " attr(data-page) " page"; }
p::first-letter { font-size : 3em };
```

```html
<p data-page="52">Lorem ipsum dolor sit amet...</p> <!-- 앞에 1. 붙이고 뒤에 - 52 page 붙임 --> 
<p data-page="273">Lorem ipsum dolor sit amet...</p> <!-- 앞에 2. 붙이고 뒤에 - 273 page 붙임 -->
```



#### 링크 선택자

`:link` : href 속성을 갖고있는 a태그를 선택

`:visited` : 방문했던 링크를 갖고있는 a태그를 선택

```css
a:visited { color : red; }
a:link::after { content : ' - ' attr(href); }
```



#### 부정 선택자

`:not(선택자)` : 선택자를 반대로 적용

```css
input:not([type=password]){
    background : red; /* type=password 가 아닌 input 태그 선택 */
}
```





#### 5.3 초기화
모든 HTML 페이지의 첫번째 style은 css 초기화. -> 모든 웹브라우저에서 동일환 출력 결과를 보여주기 위함.  
Eric Meyer's Reset CSS [http://meyerweb.com/eric/tools/css/reset](http://meyerweb.com/eric/tools/css/reset)  
HTML5 Doctor Reset stylesheet [http://html5doctor.com/html-5-reset-stylesheet/](http://html5doctor.com/html-5-reset-stylesheet/)

### 5.5 웹 폰트
구글 폰트 [http://www.google.com/fonts](http://www.google.com/fonts)  

### 6.5 스프라이트 이미지
스프라이트 이미지 : 이미지 여러개를 한 파일로 묶어 놓은 것. 웹 페이지 요청 시간을 줄일 수 있음.  
Css Sprites Generator [https://www.toptal.com/developers/css/sprite-generator/](https://www.toptal.com/developers/css/sprite-generator/)

### 6.7 내비게이션 구성
모바일 웹은 일반적으로 다음 3가지 방법을 사용해서 내비게이션 목록 구성.  
* overflow 속성과 float 속성을 사용.
* display 속성에 table 키워드 적용.
* table 태그를 사용.

### 6.13 글자 감추기
```css
.ellipsis {  
    white-space: nowrap;  
    overflow: hidden;  
    text-overflow: ellipsis;  
}
```

### 9.1 변형 속성 기본
변형속성은 다음 스타일 속성과 사용 가능
* 위치 속성 : top, left, bottom, right
* 크기 속성 : width, height
* 박스 속성 : margin, padding
* 테두리 속성 : border-width, border-radius, border-color
* 색상 속성 : color, background-color
* 투명도 속성 : opacity
* 변환 속성 : transform

### 9.2 변형 속성
```css
/* property , duration , timing funtion, delay 순서 */
transition: background-color 1s ease, width 5s linear 1s;
```
transition : 모든 속성을 한번에 사용  
transition-delay : 이벤트 발생 후 몇 초 후 재생할지 지정  
transition-duration : 몇 초 동안 재생할지 지정  
transition-property : 어떤 속성을 변형할지 지정  
transition-timing-function : 수치 변형 함수를 지정  
  
#### transition-timing-function
linear; ease; ease-in; ease-out; ease-in-out;  
cubic-bezier() 함수로 커스텀 가능  
http://cubic-bezier.com

### 9.3 키 프레임과 애니메이션 속성
```css
/* name, duration, function, delay, count, direct 순서*/
animation: rint 2s linear none infinite alternate;
```
animation : 모든 animation 속성을 한번에 적용  
animation-delay : 이벤트 발생 후 몇 초 후에 재생할지 지정
animation-direction : 애니메이션 진행 방향을 설정  
animation-duration : 애니메이션을 몇 초 동안 재생할지 지정  
animation-iteration-count : 애니메이션 반복 횟수를 지정  
animatin-name : 애니메이션 이름을 지정  
animation-play-state : 애니메이션 재생 상태를 지정  
animation-timing-function : 수치 변형 함수를 지정  
  
animation-direction  
alternate : from -> to -> from -> to 반복  
normal : from -> to, from -> to 반복

### 10.1 변환
* 자바스크립트를 사용한 WebGL
* CSS3를 사용한 3차원 변환
impress.js

### 10.3 3차원 변환
transform-style  
flat : 후손의 3차원 속성 무시
preserve-3d : 후손의 3차원 속성 유지
