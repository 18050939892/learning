import {useEffect, useState} from "react";
import {StyleContext} from "../content.tsx";
import {useContext} from "react";

function footer(){
    const {style}=useContext(StyleContext);
    const [footeropacity, setFooteropacity] = useState(0);
    const [footerdisplay, setFooterdisplay] = useState('none');
    const [footertop, setFootertop] = useState(-10);
    const [footerintervalId, setFooterintervalId] = useState(null);
    const footerhandleMouseEnter = () => {
        setFooterdisplay("block");
        if (footerintervalId) clearInterval(footerintervalId);
        const footerid = setInterval(() => {
            setFooteropacity((prev) => (prev < 1 ? prev + 0.03 : 1)); // 每次增加0.03
            setFootertop((prev) => (prev > -40 ? prev - 1 : -40)); // 每次减少2px
        }, 10);
        setFooterintervalId(footerid);

    };
    const footerhandleMouseLeave = () => {
        if (footerintervalId) clearInterval(footerintervalId); // 清除之前的定时器
        const footerid = setInterval(() => {
            setFooteropacity((prev) => (prev > 0 ? prev - 0.03 : 0)); // 每次减少0.03
            setFootertop((prev) => (prev < -10 ? prev + 1 : -10)); // 每次增加2px
        }, 10);
        setFooterintervalId(footerid);

    };
    useEffect(() => {
        if (footeropacity==0&&footertop>=-10) {
            // console.log(6)
            setFooterdisplay("none");
            clearInterval(footerintervalId);
        }else if(footeropacity==1&&footertop<=-40){
            clearInterval(footerintervalId)
        }
    }, [footertop,footeropacity]);


    return (
        <footer style={{backgroundColor:style.backgroundColor}}>
            <div className="svg">
                <svg t="1741101025160" className="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="30432" width="200" height="200">
                    <path
                        d="M804.571429 73.142857a146.285714 146.285714 0 0 1 146.285714 146.285714v585.142858a146.285714 146.285714 0 0 1-146.285714 146.285714H219.428571a146.285714 146.285714 0 0 1-146.285714-146.285714V219.428571a146.285714 146.285714 0 0 1 146.285714-146.285714h585.142858z m0 95.085714H219.428571a51.2 51.2 0 0 0-51.2 51.2v585.142858a51.2 51.2 0 0 0 51.2 51.2h585.142858a51.2 51.2 0 0 0 51.2-51.2V219.428571a51.2 51.2 0 0 0-51.2-51.2z"
                        p-id="30433" fill="#bfbfbf"></path>
                    <path
                        d="M694.857143 371.858286a36.571429 36.571429 0 1 0-59.465143 42.569143l75.264 104.96L637.074286 607.378286a36.571429 36.571429 0 0 0-0.073143 46.811428l4.608 4.754286a36.571429 36.571429 0 0 0 51.565714-4.608l91.721143-109.714286a36.571429 36.571429 0 0 0 1.682286-44.763428L694.857143 371.858286zM329.142857 371.858286a36.571429 36.571429 0 1 1 59.465143 42.569143L313.344 519.387429 386.925714 607.378286a36.571429 36.571429 0 0 1 0.073143 46.811428l-4.608 4.754286a36.571429 36.571429 0 0 1-51.565714-4.608l-91.721143-109.714286a36.571429 36.571429 0 0 1-1.682286-44.763428L329.142857 371.858286zM551.204571 315.538286a36.571429 36.571429 0 0 1 67.876572 27.209143l-146.285714 365.714285a36.571429 36.571429 0 0 1-67.876572-27.209143l146.285714-365.714285z"
                        p-id="30434" fill="#bfbfbf"></path>
                </svg>
            </div>
            <div className="svg"  onMouseLeave={footerhandleMouseLeave} onMouseEnter={footerhandleMouseEnter}>

                    <div style={{ display:footerdisplay,
                    top:footertop+"px",
                    opacity:footeropacity}}>
                    <div id="wx">
                        <img src="https://momoyu.cc/assets/gzhss-E7ztoHaG.png" alt=""/>
                        <div className="wx"></div>
                    </div>
                    <div className="wxthree"></div>
                </div>

                <svg t="1741099043772" className="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="29073" width="200" height="200" >
                    <path
                        d="M669.3 369.4c9.8 0 19.6 0 29.4 1.6C671 245.2 536.9 152 383.2 152 211.6 152 71 269.7 71 416.8c0 85 45.8 156.9 124.2 210.9l-31.1 93.2L273.6 667c39.2 8.2 70.3 16.3 109.5 16.3 9.8 0 19.6 0 31.1-1.6-6.5-21.3-9.8-42.5-9.8-65.4 0.1-135.7 116.2-246.9 264.9-246.9z m-168.4-85c24.5 0 39.2 16.3 39.2 39.2 0 22.9-16.3 39.2-39.2 39.2-24.5 0-47.4-16.4-47.4-39.2 0-24.5 24.6-39.2 47.4-39.2z m-216.3 73.1c-24.7 0-47.8-16.2-47.8-38.8 0-24.3 24.7-38.8 47.8-38.8s39.5 16.2 39.5 38.8c0.1 22.7-16.4 38.8-39.5 38.8z"
                        fill="#bfbfbf" p-id="29074"></path>
                    <path
                        d="M953.8 613c0-125.9-124.2-227.2-264.8-227.2-148.8 0-266.5 103-266.5 227.2 0 125.9 117.7 227.2 266.5 227.2 31.1 0 62.1-8.2 93.2-16.3l85 47.4-22.9-78.5c62.1-47.4 109.5-109.5 109.5-179.8z m-351.5-39.2c-14.7 0-31.1-14.7-31.1-31.1 0-14.7 16.3-31.1 31.1-31.1 22.9 0 39.2 16.3 39.2 31.1 0 16.4-14.7 31.1-39.2 31.1z m178-7.6c-14.8 0-31.3-14.6-31.3-30.7 0-14.6 16.5-30.7 31.3-30.7 23.1 0 39.5 16.2 39.5 30.7 0 16.2-16.4 30.7-39.5 30.7z"
                        fill="#bfbfbf" p-id="29075"></path>
                </svg>
            </div>
            <div id="footerText" style={{color:style.color}}>
                <ul>
                    <li><a href="https://momoyu.cc/" target="_blank"  style={{color:style.color}}> 首页</a></li>
                    <li><a href="https://nav.momoyu.cc/" target="_blank"  style={{color:style.color}}>导航</a></li>
                    <li><a href="https://support.qq.com/products/313868?" target="_blank"  style={{color:style.color}}>反馈</a></li>
                    <li><a href="https://momoyu.cc/login" target="_blank"  style={{color:style.color}}>反馈RSS订阅</a></li>
                </ul>
                <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank"  style={{color:style.color}}>© 2021 momoyu.cc
                    粤ICP备2020133024号</a>
                <a href="https://beian.mps.gov.cn/#/query/webSearch" target="_blank"  style={{color:style.color}}>粤公网安备
                    44011202001391号</a>
            </div>
        </footer>
    )
}
export default footer