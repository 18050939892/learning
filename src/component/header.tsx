function header(){

    const  handleonclick=(event)=>{
        if(event.target.id=="login"){
            window.location.href="../../login.html?name=login"
        }else{
            window.location.href="../../login.html"
        }

    }
    return (
        <header>
        <img src="https://momoyu.cc/assets/logo-1-DXR4uO3F.png" alt=""/>
    <input type="text" placeholder="搜索..."/>
    <button id="login" className="submit" onClick={handleonclick}>登陆</button>
    <button id="register" className="submit" onClick={handleonclick}>注册</button>
        </header>
    )
}
export default header