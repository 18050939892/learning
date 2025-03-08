$(window).on('load', function () {
    function updatesize() {
        var middle = $("#middle")
        var aside = $("aside")
        var w = parseFloat(middle.css("width")) - parseFloat(aside.css("width")) + "px"
        return w
    }

    var main = $("main");
    var maindw = updatesize()
    main.css("width", maindw)

    $(window).resize(function () {
        var mainw = updatesize()
        main.css("width", mainw)
    })
    $(".topIcon:nth-child(3)").add("#weixin").on('mouseover', function () {
        $("aside>#top>#topsvg>div").css({
            'display': 'block'
        })
    })
    $(".topIcon:nth-child(3)").add("#weixin").on('mouseout', function () {
        $("aside>#top>#topsvg>div").css({
            'display': 'none'
        })
    })
    $(".showrp").add("aside>#buttom>#redpackage").on('mouseover', function () {

        $("aside>#buttom>#redpackage").css({
            'display': 'block'
        })
    })
    $(".showrp").add("aside>#buttom>#redpackage").on('mouseout', function () {

        $("aside>#buttom>#redpackage").css({
            'display': 'none'
        })
    })
    $($("footer>.svg")[1]).add(" footer>.svg>div").on('mouseover', function () {

        $(" footer>.svg>div").css({
            'display': 'block'
        })
    })
    $($("footer>.svg")[1]).add(" footer>.svg>div").on('mouseout', function () {

        $(" footer>.svg>div").css({
            'display': 'none'
        })
    })
    var timer
    $(".item>svg").on('mouseup', function () {
        $(this).attr("class", $(this).attr("class") + " " + "rotating")
        timer = setTimeout(() => {
            $(this).attr("class", "icon")
            clearTimeout(timer)
        }, 1000)

    })



    $(window).scroll(function () {
        if ($(document).scrollTop() >= 100) {
            $("aside").css("top", "30px")
        } else {
            $("aside").css("top", "85px")
        }

    })
    $("header>#login").on('click', function () {
        window.location.href = "./login.html?name=login";
    })
    $("header>#register").on('click', function () {
        window.location.href = "./login.html";
    })


    $("#topsvg>.set").click(function (event) {

        $("#set").css("display", "block")
        event.preventDefault()
        $('#cover').css('display', 'block'); //显示遮罩层
        $('#cover').css('height', document.body.clientHeight + 'px');
    })

    function onsvg() {
        $(".setscreen>.settop>svg").on('click', function () {

            $("#set").css("display", "none")
            event.preventDefault()
            $('#cover').css('display', 'none'); //显示遮罩层
        })
    }
    onsvg()

    $(".setbuttom").on('click', function () {

        $("#set").css("display", "none")
        event.preventDefault()
        $('#cover').css('display', 'none'); //显示遮罩层
    })



    $(document.documentElement).on("click", ".on-number", function () {

        if ($(this).data("v") == "1" || $(this).data("v") == "-1") {
            var $val = $(this).siblings("input[type='text']");
            val = parseInt($val.val(), 10) + parseInt($(this).data("v"));
            $val.val(isNaN(val) ? 0 : val);





            $("main>.item>ul>li>.spanone").add
                ("main>.item>ul>li>.spantwo").add
                ("main>.item>ul>li>.spanthree").add
                ("aside>#buttom").add
                ("#topImg").add
                ("#toptextone").add
                ("#toptexttwo").add
                ("#topsvg").add
                ("footer>#footerText").css("font-size", val + "px")

        } else if ($(this).data("v") == "<") {
            var $val = $(this).siblings("input[type='text']");
            if ($val.val() == "暗夜") {
                $val.val("护眼");
                $("*").not(".setscreen input").css("color", "rgb(176, 179, 181)")
                $(".setscreen").add("#content>header").add
                    ("#content>header>img").add("main>.item").add
                    ("aside>#top").add("footer").css("background-color", "#333e43")
                $('<svg t="1741273897782" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4249" width="200" height="200"><path d="M550.848 502.496l308.64-308.896a31.968 31.968 0 1 0-45.248-45.248l-308.608 308.896-308.64-308.928a31.968 31.968 0 1 0-45.248 45.248l308.64 308.896-308.64 308.896a31.968 31.968 0 1 0 45.248 45.248l308.64-308.896 308.608 308.896a31.968 31.968 0 1 0 45.248-45.248l-308.64-308.864z" p-id="4250" fill="#ffffff"></path></svg>').replaceAll(".setscreen>.settop>svg")
                onsvg()
            }
            else if ($val.val() == "护眼") {
                $val.val("极客");
                $("*").css("color", "black")
                $(".setscreen").add("#content>header").add
                    ("#content>header>img").add("main>.item").add
                    ("aside>#top").add("footer").css("background-color", "white")
                $('<svg t="1741273897782" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4249" width="200" height="200"><path d="M550.848 502.496l308.64-308.896a31.968 31.968 0 1 0-45.248-45.248l-308.608 308.896-308.64-308.928a31.968 31.968 0 1 0-45.248 45.248l308.64 308.896-308.64 308.896a31.968 31.968 0 1 0 45.248 45.248l308.64-308.896 308.608 308.896a31.968 31.968 0 1 0 45.248-45.248l-308.64-308.864z" p-id="4250"></path></svg>').replaceAll(".setscreen>.settop>svg")
                onsvg()
            } else {
                $val.val("暗夜");
                $("*").not(".setscreen input").css("color", "rgb(176, 179, 181)")
                $(".setscreen").add("#content>header").add
                    ("#content>header>img").add("main>.item").add
                    ("aside>#top").add("footer").css("background-color", "#1f2025")
                $('<svg t="1741273897782" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4249" width="200" height="200"><path d="M550.848 502.496l308.64-308.896a31.968 31.968 0 1 0-45.248-45.248l-308.608 308.896-308.64-308.928a31.968 31.968 0 1 0-45.248 45.248l308.64 308.896-308.64 308.896a31.968 31.968 0 1 0 45.248 45.248l308.64-308.896 308.608 308.896a31.968 31.968 0 1 0 45.248-45.248l-308.64-308.864z" p-id="4250" fill="#ffffff"></path></svg>').replaceAll(".setscreen>.settop>svg")
                onsvg()
            }


        } else {
            var $val = $(this).siblings("input[type='text']");
            if ($val.val() == "暗夜") {
                $val.val("极客");
                $("*").css("color", "black")
                $(".setscreen").add("#content>header").add
                    ("#content>header>img").add("main>.item").add
                    ("aside>#top").add("footer").css("background-color", "white")
                $('<svg t="1741273897782" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4249" width="200" height="200"><path d="M550.848 502.496l308.64-308.896a31.968 31.968 0 1 0-45.248-45.248l-308.608 308.896-308.64-308.928a31.968 31.968 0 1 0-45.248 45.248l308.64 308.896-308.64 308.896a31.968 31.968 0 1 0 45.248 45.248l308.64-308.896 308.608 308.896a31.968 31.968 0 1 0 45.248-45.248l-308.64-308.864z" p-id="4250"></path></svg>').replaceAll(".setscreen>.settop>svg")
                onsvg()
            }
            else if ($val.val() == "极客") {
                $val.val("护眼");
                $("*").not(".setscreen input").css("color", "rgb(176, 179, 181)")
                $(".setscreen").add("#content>header").add
                    ("#content>header>img").add("main>.item").add
                    ("aside>#top").add("footer").css("background-color", "#333e43")
                $('<svg t="1741273897782" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4249" width="200" height="200"><path d="M550.848 502.496l308.64-308.896a31.968 31.968 0 1 0-45.248-45.248l-308.608 308.896-308.64-308.928a31.968 31.968 0 1 0-45.248 45.248l308.64 308.896-308.64 308.896a31.968 31.968 0 1 0 45.248 45.248l308.64-308.896 308.608 308.896a31.968 31.968 0 1 0 45.248-45.248l-308.64-308.864z" p-id="4250" fill="#ffffff"></path></svg>').replaceAll(".setscreen>.settop>svg")
                onsvg()
            } else {
                $val.val("暗夜");
                $("*").not(".setscreen input").css("color", "rgb(176, 179, 181)")
                $(".setscreen").add("#content>header").add
                    ("#content>header>img").add("main>.item").add
                    ("aside>#top").add("footer").css("background-color", "#1f2025")
                $('<svg t="1741273897782" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4249" width="200" height="200"><path d="M550.848 502.496l308.64-308.896a31.968 31.968 0 1 0-45.248-45.248l-308.608 308.896-308.64-308.928a31.968 31.968 0 1 0-45.248 45.248l308.64 308.896-308.64 308.896a31.968 31.968 0 1 0 45.248 45.248l308.64-308.896 308.608 308.896a31.968 31.968 0 1 0 45.248-45.248l-308.64-308.864z" p-id="4250" fill="#ffffff"></path></svg>').replaceAll(".setscreen>.settop>svg")
                onsvg()
            }
        }


    }
    )

    var timercheck
    $(".check").on('click', function () {
        var t = $(this)
        if (t.find('.true').css('left') == "0px") {
            timercheck = setInterval(function () {
                if (t.find('.true').css('left') != "-40px") {
                    t.find('.true').css('left', parseFloat(t.find('.true').css('left')) - 10 + "px")
                    t.find('.empty').css('left', parseFloat(t.find('.empty').css('left')) - 10 + "px")
                    t.find('.close').css('left', parseFloat(t.find('.close').css('left')) - 10 + "px")
                } else {
                    clearInterval(timercheck)
                }

            }, 50)

        } else {
            timercheck = setInterval(function () {
                if (t.find('.true').css('left') != "0px") {
                    t.find('.true').css('left', parseFloat(t.find('.true').css('left')) + 10 + "px")
                    t.find('.empty').css('left', parseFloat(t.find('.empty').css('left')) + 10 + "px")
                    t.find('.close').css('left', parseFloat(t.find('.close').css('left')) + 10 + "px")
                } else {
                    clearInterval(timercheck)
                }
            }, 50)
        }
    })

});





