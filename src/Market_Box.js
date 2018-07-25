import React, { Component } from 'react';
import './Market_Box.css';
import Item_Box from './Item_Box';

const items=[
  "https://mblogthumb-phinf.pstatic.net/MjAxODA3MTdfMjM1/MDAxNTMxODA5MTU0NzM4.WgjYbuivSZXGtAmHKX-_O5s_G6-bErSNgNeu-VqcC7Qg.GwywpHsOCTltUORKJIM8WqatLigx5oDxfRMKccyN5DIg.JPEG.1_2_3_4_9/NaverBlog_20180717_153234_01.jpg?type=w800",
  "https://mblogthumb-phinf.pstatic.net/MjAxODA3MTdfMjk5/MDAxNTMxODA5MTYwMjcz.xftTA2dEl9aGNifA1cU7f3iy4qEV4u9noqkwxArhUHcg.ko3qaVx56PEkrdtv4uVGsEyY0c3JmPvfIOfTSa9h7ekg.JPEG.1_2_3_4_9/NaverBlog_20180717_153240_09.jpg?type=w800",
  "https://mblogthumb-phinf.pstatic.net/MjAxODA3MTdfMjE2/MDAxNTMxODA5MTcwMjQ2.jl8Eu2cxyhKFjpSj50nKGkBXgjxGNXMKJTzaoPBTwZcg.T-V9JS6rdbsqsNOSvGtBGBuB8pWx6vAW4qLcLezIfV4g.JPEG.1_2_3_4_9/NaverBlog_20180717_153248_19.jpg?type=w800"
]

const markets={
  "market": {
    "username": "lalastudio_office",
    "email": "kakaotalk@dbwlsemf12",
    "items": [        
      "https://mblogthumb-phinf.pstatic.net/MjAxODA3MTdfMjM1/MDAxNTMxODA5MTU0NzM4.WgjYbuivSZXGtAmHKX-_O5s_G6-bErSNgNeu-VqcC7Qg.GwywpHsOCTltUORKJIM8WqatLigx5oDxfRMKccyN5DIg.JPEG.1_2_3_4_9/NaverBlog_20180717_153234_01.jpg?type=w800",
      "https://mblogthumb-phinf.pstatic.net/MjAxODA3MTdfMjk5/MDAxNTMxODA5MTYwMjcz.xftTA2dEl9aGNifA1cU7f3iy4qEV4u9noqkwxArhUHcg.ko3qaVx56PEkrdtv4uVGsEyY0c3JmPvfIOfTSa9h7ekg.JPEG.1_2_3_4_9/NaverBlog_20180717_153240_09.jpg?type=w800",
      "https://mblogthumb-phinf.pstatic.net/MjAxODA3MTdfMjE2/MDAxNTMxODA5MTcwMjQ2.jl8Eu2cxyhKFjpSj50nKGkBXgjxGNXMKJTzaoPBTwZcg.T-V9JS6rdbsqsNOSvGtBGBuB8pWx6vAW4qLcLezIfV4g.JPEG.1_2_3_4_9/NaverBlog_20180717_153248_19.jpg?type=w800"      
    ]
  }
}

class Title_Box extends Component{
  render(){
      return(
          <div className="Item_Box title">
              <p>@SARAHKIM</p>
          </div>
      )
  }
}

class Market_Box extends Component {
  render() {
    return (
      <div className="Market_Box">
        <Title_Box/>
        {items.map((items, index)=>{
          return <Item_Box photo={items} key={index} />
        })}
      </div>
    );
  }
}

export default Market_Box;