import React, { Component } from 'react';
import '../indiv_page.css'
import Indiv_Item_Box from '../../components/indiv_item_box';


class Lalastudio_Shop extends Component{
    constructor(props){
        super(props)
        this.state={
                items:[
                {
                    info:"스모크 오프숄더 BL 25000",
                    pics:"https://mblogthumb-phinf.pstatic.net/MjAxODA3MTdfMjM1/MDAxNTMxODA5MTU0NzM4.WgjYbuivSZXGtAmHKX-_O5s_G6-bErSNgNeu-VqcC7Qg.GwywpHsOCTltUORKJIM8WqatLigx5oDxfRMKccyN5DIg.JPEG.1_2_3_4_9/NaverBlog_20180717_153234_01.jpg?type=w800" 
                },
                {
                    info:"마리아 bl 25000",
                    pics:"https://mblogthumb-phinf.pstatic.net/MjAxODA3MTdfNDAg/MDAxNTMxODA5MTY1NzMz.t_Pu8hsgLkF2zuJBqBYxaU3vYdF3GnLDDM3-bQiytZIg.NWMUcC2ok9XoEAcjjPLKM16HOm4ruYz2relju0cIengg.JPEG.1_2_3_4_9/NaverBlog_20180717_153245_16.jpg?type=w800"
                },
                {
                    info:"체리베리 ops 25000",
                    pics:"https://mblogthumb-phinf.pstatic.net/MjAxODA3MTdfMTMz/MDAxNTMxODE3NTEwMjg3.7CH3i2DrlzgDUPOZm_EcMsY8uDHHAIhUtWqgzS5bK90g.oqagIoHCwJxzpmdp0l5o6FjUtJOuWU-Fj-zkaT7s_PAg.JPEG.1_2_3_4_9/65987880-7D01-4C03-99F2-BAEC67A73767-2454-000000A3F90F83E1.jpg?type=w800"
                },
                {
                    info:"니트비키니 swim suit 33000",
                    pics:"https://mblogthumb-phinf.pstatic.net/MjAxODA3MTdfMjIw/MDAxNTMxODE3NzI4MjYz.mq68toYPcosZCYpEx0rWQnSaT6BfdzhvkyxaioS4dLMg.6m_PKFkNEY2ftmlGQreuMZ2NSaJJHKBUJzl16YBHvyUg.JPEG.1_2_3_4_9/IMG_9116.jpg?type=w800"
                },
                {
                    info:"기본 스트랩 샌들 26000",
                    pics:"https://mblogthumb-phinf.pstatic.net/MjAxODA3MTdfNDQg/MDAxNTMxODEyOTQ4MDA4.Lde_3Ftvrcnx_MNRsK_lqKUzfRwB8CPQLVLs5zxVmPMg.raaaHyF5845OzgxCxVDtM1x5ffLI-alp9-4ZLp74qgIg.JPEG.1_2_3_4_9/IMG_9399.jpg?type=w800"
                },
                {
                    info:"부츠컷 팬츠 32000",
                    pics:"https://mblogthumb-phinf.pstatic.net/MjAxODA3MTdfMTkx/MDAxNTMxODEzODYyNzY5.lIfbPNkld3eXvXllkXhIGo42gokemNNKVNBBQpxDuC0g.44EZuBOiPVhfr2Ls5hGpnpTiGtUn7YzenZvcDN06FSAg.JPEG.1_2_3_4_9/108A2181-4CC9-4F48-BA9D-DE1BE83F2830-1565-0000011951B4251E.jpg?type=w800"
                },
                {
                    info:"백리스 ops 25000",
                    pics:"https://mblogthumb-phinf.pstatic.net/MjAxODA3MTdfMjk5/MDAxNTMxODEzNzQ5NDcx.fOBDCh93rU4brheCCeYmbSAzYis1nU_O7A8HpfxGxncg.83E6X65-L9GYDIgq7bxSEY52NVGFWGqihD03LnZPfJUg.JPEG.1_2_3_4_9/A0A864F6-1524-4EE5-8479-20DC960413EE-1233-00000162CDF287A6.jpg?type=w800"
                }
            ]      
        };
    }

    render(){
        return(
            <div className="wide_Box">
                {this.state.items.map((items,index) =>{
                return <Indiv_Item_Box pics={items.pics} info={items.info} key={index}/>
                })}
            </div>
        )
    }
}

export default Lalastudio_Shop;