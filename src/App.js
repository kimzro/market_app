import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Market_Box from './Market_Box'

const lalastudio=[
  "https://mblogthumb-phinf.pstatic.net/MjAxODA3MTdfMjM1/MDAxNTMxODA5MTU0NzM4.WgjYbuivSZXGtAmHKX-_O5s_G6-bErSNgNeu-VqcC7Qg.GwywpHsOCTltUORKJIM8WqatLigx5oDxfRMKccyN5DIg.JPEG.1_2_3_4_9/NaverBlog_20180717_153234_01.jpg?type=w800",
  "https://mblogthumb-phinf.pstatic.net/MjAxODA3MTdfMjk5/MDAxNTMxODA5MTYwMjcz.xftTA2dEl9aGNifA1cU7f3iy4qEV4u9noqkwxArhUHcg.ko3qaVx56PEkrdtv4uVGsEyY0c3JmPvfIOfTSa9h7ekg.JPEG.1_2_3_4_9/NaverBlog_20180717_153240_09.jpg?type=w800",
  "https://mblogthumb-phinf.pstatic.net/MjAxODA3MTdfOTQg/MDAxNTMxODEzNzUwNjI0.DVicTYwiHHHf_aUjpaWG3VgphNiYuj6jTBX4FKN5C1sg.p-qkoIB8_bVUrWv9P4bdxd7d2Lwijo4B2B-toEm5II4g.JPEG.1_2_3_4_9/4F0A8824-F086-4B56-8E85-79DF60E8D857-396-00000016038DCD78.jpg?type=w800"
]

const _0_0in2=[
  "https://postfiles.pstatic.net/MjAxODA3MDlfMjg1/MDAxNTMxMDcxOTU5OTg2._HBsx6gcN9tGM3Np6ignfJh45ASdEEns-6xRWhlfnusg.c90dAOgDlMUP0BrZY9t0waDQvUjFp_D45Ne6s1O_F1Ig.PNG.y2nstar/image_4187421401531071945028.png?type=w773",
  "https://postfiles.pstatic.net/MjAxODA3MDlfNTcg/MDAxNTMxMDcxOTczMjcx.ELvBZHjuiR1lJXFUzT1LsxK91wI21hfFXJhAe11bMw0g.JQtn-N4bwMrb-3VbYfLW4Ww_5n421IieOE1l6f06WNog.JPEG.y2nstar/5.jpg?type=w773",
  "https://postfiles.pstatic.net/MjAxODA3MDlfMTU3/MDAxNTMxMDcxOTgyNzk0.Mj2i1bzstxXQkgkgYqXcJMK8m7t0YUYkXrXkXz3pwaog.6nooWLTsG98aLgcFiLMFbjhBgchPXuVwwSwBZ7TM-Zsg.JPEG.y2nstar/9.jpg?type=w773"
]

const peachandming=[
  "https://mblogthumb-phinf.pstatic.net/MjAxODAxMTdfMjUy/MDAxNTE2MTk1ODAyNTQz.6TkiEB8Kd22bIdsoLag3ZOeF5V5X8EvhH_HOfIEmc6cg.OHwxrDyAz9gbDH8et2KV97YRvLbWkGmy-u2H21YFwEsg.JPEG.aldtn46/IMG_6617.JPG?type=w2",
  "https://mblogthumb-phinf.pstatic.net/MjAxODAxMTdfMTE3/MDAxNTE2MTk1ODAyNzg3.bxAzBK_zWJVEmAmbAQDJO4PeHI-ACtQgBR1vEYwNW4sg.CiBd5_WZ_tewjx253TZqo7LXPQpypkiIaHtFpFiUqa8g.JPEG.aldtn46/IMG_6623.JPG?type=w2",
  "https://mblogthumb-phinf.pstatic.net/MjAxODAxMTdfMjk2/MDAxNTE2MTk1ODAyOTM5.0SrPzqTefMMKXjui3hCcwLMp-3FqbVW3ECKZ8B4g13Ug.wCB-jBfv1j1Aad_Ht0_B1kD4spGmtjrdUxsyQhwYbTIg.JPEG.aldtn46/IMG_6624.JPG?type=w2"
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <span className="logo">Market</span>
        <Market_Box title={"lalastudio_office"} info={"6차"} pics={lalastudio}/>
        <Market_Box title={"0_0in2"} info={"7차"} pics={_0_0in2}/>
        <Market_Box title={"peachandming_official"} info={"8차"} pics={peachandming}/>
      </div>
    );
  }
}

export default App;
