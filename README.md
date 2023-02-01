# 스파코 프로젝트

## 필수 구현 사항
>1. 기본 기능 구현
>>1-1 로그인/회원가입
>>
>>1-2 장바구니 기능
>>
>>1-3 주문하기
>>
>>1-4 상품 목록
>>
>>1-5 마이페이지
>
>2. 어드민 페이지(백오피스)
>>2-1 백오피스에서는 회원관리와 상품관리를 할 수 있어야 합니다.
>>
>>2-2 백오피스에는 관리자만 접근할 수 있어야 합니다.
>
>3. 고객이 상품 목록을 잘 볼 수 있도록 페이지네이션을 구현해주세요.
>
>4. 아래 주가지 사항 중 하나를 선택해서 구현해주세요.
>
>>4-1 고객이 주문을 완료하면 고객에게 이벤트 알림을 보내주세요.
>>
>>4-2 사이트 내 실시간으로 소통이 가능한 상담 채팅을 만들어주세요.


### 선택적 추가 요구사항
>1. 회원가입 로그인 구현
>>1-1 로그인/회원가입 시 아이디(이메일)+ 비밀번호 유효성 검사
>>>i. 특정 조건을 만족해야 비밀번호로 사용 가능 ex) 특수문자 ,영문 숫자 조합 등.
>>1-2 고객의 이메일로 비밀번호 찾기
>>
>>1-3 소셜 로그인 ✅
>
>2. 회원 리워드 제도
>>2-1 쿠폰(ex.무료 배송 쿠폰, 할일 쿠폰 등)
>>
>>2-2 포인트 및 적립 제도


# 요구사항 분석 및 페이지별 와이어 프레임 작성

*  로그인 기능 - 일반 회원과 어드민의 구분 
*  로그인 하는 아이디로 구분 ex)일반회원 email아이디 어드민 계정 : 일반 아이디

* 회원가입 기능 - 추가 요구 사항을 제외하면 특별한 점은 일반 회원과 어드민의 구분
* 어드민 계정을 바로 생성해서 주고 일반 회원만 회원 가입 할 수 있게 처리
