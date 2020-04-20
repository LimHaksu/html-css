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