import React, { Component } from 'react';
import './main_Body.css';
import Market_Box from './Market_Box';

const markets=[
    {
      title:"lalastudio", info:"@lalastudio_office",
      pics:[
        "https://mblogthumb-phinf.pstatic.net/MjAxODA3MTdfMjM1/MDAxNTMxODA5MTU0NzM4.WgjYbuivSZXGtAmHKX-_O5s_G6-bErSNgNeu-VqcC7Qg.GwywpHsOCTltUORKJIM8WqatLigx5oDxfRMKccyN5DIg.JPEG.1_2_3_4_9/NaverBlog_20180717_153234_01.jpg?type=w800",
        "https://mblogthumb-phinf.pstatic.net/MjAxODA3MTdfMjk5/MDAxNTMxODA5MTYwMjcz.xftTA2dEl9aGNifA1cU7f3iy4qEV4u9noqkwxArhUHcg.ko3qaVx56PEkrdtv4uVGsEyY0c3JmPvfIOfTSa9h7ekg.JPEG.1_2_3_4_9/NaverBlog_20180717_153240_09.jpg?type=w800",
        "https://mblogthumb-phinf.pstatic.net/MjAxODA3MTdfOTQg/MDAxNTMxODEzNzUwNjI0.DVicTYwiHHHf_aUjpaWG3VgphNiYuj6jTBX4FKN5C1sg.p-qkoIB8_bVUrWv9P4bdxd7d2Lwijo4B2B-toEm5II4g.JPEG.1_2_3_4_9/4F0A8824-F086-4B56-8E85-79DF60E8D857-396-00000016038DCD78.jpg?type=w800"
      ]
    },
    {
      title:"daynight", info:"@daynight.co.kr",
      pics:[
        "https://mblogthumb-phinf.pstatic.net/MjAxODA1MjVfODgg/MDAxNTI3MjQzNzYxOTY1._WtJvcl86Lc2kPrsSJ38EMY9uFvwh__9XJlKQy6ElI0g.hi012dr6pYL8MIF25qWTgkDCCtz17ms6s2AihHJ-Fdgg.JPEG.daynight-/KakaoTalk_20180525_191527632.jpg?type=w800",
        "https://mblogthumb-phinf.pstatic.net/MjAxODA1MjVfMjcy/MDAxNTI3MjQ1MjkxODcw.1FRRLtSlzj6mnrsMmnmQKSDxWoc51-7WNVinf_v_HLsg.gwBqtLky5ux8CUaRzJd7Kwcr85nbrqaxPweK5iaIrIEg.JPEG.daynight-/KakaoTalk_20180525_191528404.jpg?type=w800",
        "https://mblogthumb-phinf.pstatic.net/MjAxODA1MjVfMTg3/MDAxNTI3MjQ1OTc1ODgx.HnvkrOPO3mUk39uQv2WzejghaPs077SLGF4YYEEixyIg.iNvRdLWDeiYFhJraX0grEOX9OumaJ0peN1gogVh28lwg.JPEG.daynight-/KakaoTalk_20180306_235100933.jpg?type=w800"
      ]
    },
    {
      title:"peachandming", info:"@peachandming_official",
      pics:[
        "https://mblogthumb-phinf.pstatic.net/MjAxODAxMTdfMjUy/MDAxNTE2MTk1ODAyNTQz.6TkiEB8Kd22bIdsoLag3ZOeF5V5X8EvhH_HOfIEmc6cg.OHwxrDyAz9gbDH8et2KV97YRvLbWkGmy-u2H21YFwEsg.JPEG.aldtn46/IMG_6617.JPG?type=w2",
        "https://mblogthumb-phinf.pstatic.net/MjAxODAxMTdfMTE3/MDAxNTE2MTk1ODAyNzg3.bxAzBK_zWJVEmAmbAQDJO4PeHI-ACtQgBR1vEYwNW4sg.CiBd5_WZ_tewjx253TZqo7LXPQpypkiIaHtFpFiUqa8g.JPEG.aldtn46/IMG_6623.JPG?type=w2",
        "https://mblogthumb-phinf.pstatic.net/MjAxODAxMTdfMjk2/MDAxNTE2MTk1ODAyOTM5.0SrPzqTefMMKXjui3hCcwLMp-3FqbVW3ECKZ8B4g13Ug.wCB-jBfv1j1Aad_Ht0_B1kD4spGmtjrdUxsyQhwYbTIg.JPEG.aldtn46/IMG_6624.JPG?type=w2"   
      ]
    },
    {
      title:"livid", info:"@livid___",
      pics:[
        "https://mblogthumb-phinf.pstatic.net/MjAxODA2MTBfMjU2/MDAxNTI4NjI4NjE3MDQ1.wFmQEVr16P5dgyV2pm5CCTmj2NQ-3TE8tCcHZyu-S8Ig.s4MrNBNBkLPqcdTPJVoJd90OI41iyCbPTUxtDDqqyhog.JPEG.cozm0707/KakaoTalk_Moim_3r8wtWRlLRZM0IpiAE0nauSCxrZhQJ.jpg?type=w800",
        "https://mblogthumb-phinf.pstatic.net/MjAxODA2MTBfMTg5/MDAxNTI4NjMwMjc5MjAx.kEjvBp_SP3JRDXBLakAUdVzxr11OMSL_hpcKZaLo2v4g.5RxEvSade8THudapnQ6oa2M0Gf-On8F4ed7GrtX0MDIg.JPEG.cozm0707/KakaoTalk_Moim_3r8wtWRlLRZM0IpiAE0nauSCxrPF4Z.jpg?type=w800",
        "https://mblogthumb-phinf.pstatic.net/MjAxODA0MjlfMTIg/MDAxNTI1MDExNzAxMDgw.TLMDHSqzsOq7qvyjOOYaJjdBa6rGrHykwHIO-wdUqkAg.RpyaALYm0KfbL_RRvw9H835osnHsyxg2DBUL9Lx0G0sg.JPEG.cozm0707/KakaoTalk_20180428_230258752.jpg?type=w800"
      ]
    }
  ]

class main_Body extends Component{
    render(){
        return(
            <div className="main_Body">
                {markets.map(markets =>{
                 return <Market_Box title={markets.title} info={markets.info} pics={markets.pics} />
                })}
            </div>
        )
    }
}

export default main_Body;