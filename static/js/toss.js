var clientKey = 'test_ck_Wd46qopOB89bbzXDZZO3ZmM75y0v'
var tossPayments = TossPayments(clientKey) // 클라이언트 키로 초기화하기
function pay(){
    tossPayments.requestPayment('카드', { // 결제 수단 파라미터
        // 결제 정보 파라미터
        amount: 100,//결제 금액
        orderId: 'fMj8ENyc6L_IjWC-5eDXr', // 임으로 지정
        orderName: '키보드', // 주문 내역
        customerName: '뻐큐',  // 사용자이름
        successUrl: 'http://localhost:8080/order', // 주문 완료시
        failUrl: 'http://localhost:8080/fail',  // 주문 실패시
    })
        .catch(function (error) {
            if (error.code === 'USER_CANCEL') {
                // 결제 고객이 결제창을 닫았을 때 에러 처리
            } else if (error.code === 'INVALID_CARD_COMPANY') {
                // 유효하지 않은 카드 코드에 대한 에러 처리
            }
        })
}