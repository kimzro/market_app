import React, { Component } from 'react';
import '../indiv_page.css'


class Lalastudio_Shop extends Component{
    constructor(props){
        super(props)
        this.state={
            pics:[
                "https://mblogthumb-phinf.pstatic.net/MjAxODA3MTdfMjM1/MDAxNTMxODA5MTU0NzM4.WgjYbuivSZXGtAmHKX-_O5s_G6-bErSNgNeu-VqcC7Qg.GwywpHsOCTltUORKJIM8WqatLigx5oDxfRMKccyN5DIg.JPEG.1_2_3_4_9/NaverBlog_20180717_153234_01.jpg?type=w800",
                "https://mblogthumb-phinf.pstatic.net/MjAxODA3MTdfMjk5/MDAxNTMxODA5MTYwMjcz.xftTA2dEl9aGNifA1cU7f3iy4qEV4u9noqkwxArhUHcg.ko3qaVx56PEkrdtv4uVGsEyY0c3JmPvfIOfTSa9h7ekg.JPEG.1_2_3_4_9/NaverBlog_20180717_153240_09.jpg?type=w800",
                "https://mblogthumb-phinf.pstatic.net/MjAxODA3MTdfOTQg/MDAxNTMxODEzNzUwNjI0.DVicTYwiHHHf_aUjpaWG3VgphNiYuj6jTBX4FKN5C1sg.p-qkoIB8_bVUrWv9P4bdxd7d2Lwijo4B2B-toEm5II4g.JPEG.1_2_3_4_9/4F0A8824-F086-4B56-8E85-79DF60E8D857-396-00000016038DCD78.jpg?type=w800",
                "https://mblogthumb-phinf.pstatic.net/MjAxODA3MDRfMjk0/MDAxNTMwNzA0NzE0Njk3.4m7ab7OlQF7D7SW2OLNiGMgekSoHTUOnSP_9KXhYFIYg.KzqchIkl5w4z3IjbEjuApNt73PcLm33iNZWzj0dSa8sg.JPEG.1_2_3_4_9/NaverBlog_20180704_204513_01.jpg?type=w2",
                "https://mblogthumb-phinf.pstatic.net/MjAxODA3MDRfMjk3/MDAxNTMwNzA0Nzg4NzU1.5U_tADa-U9CTLMvSZkuFNYfuqVchm2uWFaMrQVanPMog.P58QgDYZOQrYbdJ48XFjnqWOm0HO3AEKWMigp8APcFQg.JPEG.1_2_3_4_9/NaverBlog_20180704_204628_31.jpg?type=w2",
            ]          
        }
    }

    render(){
        return(
            <div className="wide_Box">
                {this.state.pics.map(pics =>{
                return <div className="item_block"><img src={pics} /></div>
                })}
            </div>
            
        )
    }
}


export default Lalastudio_Shop;