import React from 'react';
import Modal from 'react-responsive-modal';

export default class Big extends React.Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const lorem = (
      <p>
        Lala studio 5차 Market open!
        <br/>
        안녕하세요! 라라스튜디오에요 :) 
        장마가 시작되서 날씨가 좋지 않네요 
        이런날씨일 수록 감기 조심하세요
        비가 빨리 그쳤으면 좋겠어요 ㅠㅠ 
        언능 날풀려서 라라스튜디오 옷 겟해서 놀러갑시다!
        <br/>
        요번에는 나시, 원피스 시원한 소재로 데일리로도 좋고 여행지에서 썸머룩으로도 입기 좋은 아이들로 구성해봤어요:) 
        <br/>
        가성비, 퀄리티 또한 함께 챙겨왔으니
        기대해주세요
        💜​
        ​<br/>
        ​<br/>
        ​<br/>
        <span style={{color:'red'}}>네이버 댓글로 가격문의 > 주문서 작성 > 입금
        <br/>
        <br/>
        입금명과 주문서명이 다를경우
        dbwlsemf12 카카오톡으로 연락 꼭부탁드려요​ </span>
        ​<br/>
        ​<br/>
        ​<br/>
        <br/>
        주문기간 <br/>
        7.4 - 7.8 <br/>
        오후 24:00<br/>
        <span style={{color:'red'}}>시간엄수해주세요! </span>
        <br/>
        <br/>
        주문방법 
        <br/>
        비밀 댓글로 가격 문의 후 , 본문 새 댓글로 (반드시) 
        새댓글 아니면 누락되요 ㅠㅠ
        <br/>
        이름 : 
        연락처 : 
        (도로명권장) 주소 : 
        <br/>
        상품명/ 컬러 / 수량 / 총가격 / 이벤트참여 유무 / 페이스북이름 
        부탁드립니다! 
        <br/>
        ​<br/>
        ​옷 마다 링크를 걸어, 상세컷을 볼수 있게끔 해놨어요!
        가끔 링크들어가셔서 그곳에 댓글 많이 남겨주시는데
        반드시 다시돌아와서 이 포스팅에 댓글 남겨주시기 바랄게요!
        입금후 댓글작성 반드시 부탁드려요! 
        <br/>
        <br/>
        <br/>
        입금계좌 
        <br/>
        ​농협 351-1025-9649-63 (라라스튜디오 김유진) 
        ​<br/>
        <br/>
        <br/>
        <br/>
        주문자와 입금자는 꼭 동일하게 해주세요!
        배송비 3000원 
        도서산간, 제주도 6000원 
        가격+배송비 가격으로 입금 부탁드립니다.
        <br/>
        *필독*
        ​마켓 특성상 재고를 두고 진행하지 않습니다!
        최대한 저렴한 가격으로 제공하기위해 
        선입금후 거래처에 오더를 넣기 시작합니다. 
        그러므로 단순 변심 , 사이즈 , 컬러 등으로 반품, 교환이 불가 하오니신중한 구매 부탁드리겠습니다!
        <br/>
        배송은 마켓마감후 공휴일, 주말을 제외하고
        최소 5일에서 최대 2주까지 소요 될 수 있습니다. 
        신상들을 빠르게 업뎃 하기때문에 2주까지는 걸리지 않겠지만 
        거래처 상황에 따라 지연 될 수 있는점 양해 부탁드리겠습니다! :)
        <br/>
        <br/>
        <span style={{color:'red'}}>6만원이상 구매시 무료배송</span> 
      </p>
    );
    return (
      <div className="example">
        <button className="btn btn-action" onClick={this.onOpenModal}>
          Open
        </button>
        <Modal open={open} onClose={this.onCloseModal}>
          {lorem}
        </Modal>
      </div>
    );
  }
}