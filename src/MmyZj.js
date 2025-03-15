$(window).on('load', function() {
    // function updatesize() {
    //     var middle = $("#middle")
    //     var aside = $("aside")
    //     var w = parseFloat(middle.css("width")) - parseFloat(aside.css("width")) + "px"
    //     return w
    // }
    //
    // var main = $("main");
    // var maindw = updatesize()
    // main.css("width", maindw)
    //
    // $(window).resize(function () {
    //     var mainw = updatesize()
    //     main.css("width", mainw)
    // })

    var timernco
    var timernct
    $('.topIcon:nth-child(3)').add('#weixin').on('mouseover', function() {
        $('#weixin').css({
            'display': 'block',
        })
        clearInterval(timernco)
        clearInterval(timernct)
        timernco = setInterval(function() {
            if ($('#weixin').css('opacity') != '1') {
                $('#weixin').
                    css('opacity',
                        parseFloat($('#weixin').css('opacity')) + 0.03)
            }
            if ($('#weixin').css('top') != '-300px') {
                $('#weixin').
                    css('top', parseFloat($('#weixin').css('top')) - 2 + 'px')
            }
            if ($('#weixin').css('opacity') == '1' && $('#weixin').css('top') ==
                '-300px') {
                clearInterval(timernco)
            }
        }, 10)

    })

    $('.topIcon:nth-child(3)').add('#weixin').on('mouseout', function() {
        clearInterval(timernco)
        clearInterval(timernct)
        timernct = setInterval(function() {
            if ($('#weixin').css('opacity') != '0') {
                $('#weixin').
                    css('opacity',
                        parseFloat($('#weixin').css('opacity')) - 0.03)
            }
            if ($('#weixin').css('top') != '-260px') {
                $('#weixin').
                    css('top', parseFloat($('#weixin').css('top')) + 2 + 'px')
            }
            if ($('#weixin').css('opacity') == '0' && $('#weixin').css('top') ==
                '-260px') {
                clearInterval(timernct)
                $('#weixin').css({
                    'display': 'none',
                })
            }

        }, 10)
    })

    var timerrpo
    var timerrpt
    $('.showrp').add('aside>#buttom>#redpackage').on('mouseover', function() {
        $('aside>#buttom>#redpackage').css({
            'display': 'block',
        })
        clearInterval(timerrpo)
        clearInterval(timerrpt)
        timerrpo = setInterval(function() {
            if ($('aside>#buttom>#redpackage').css('opacity') != '1') {
                $('aside>#buttom>#redpackage').
                    css('opacity',
                        parseFloat(
                            $('aside>#buttom>#redpackage').css('opacity')) +
                        0.03)
            }
            if ($('aside>#buttom>#redpackage').css('top') != '-30px') {
                $('aside>#buttom>#redpackage').
                    css('top',
                        parseFloat($('aside>#buttom>#redpackage').css('top')) -
                        1 + 'px')
            }
            if ($('aside>#buttom>#redpackage').css('opacity') == '1' &&
                $('aside>#buttom>#redpackage').css('top') == '-30px') {
                clearInterval(timerrpo)
            }
        }, 10)
    })
    $('.showrp').add('aside>#buttom>#redpackage').on('mouseout', function() {

        clearInterval(timerrpo)
        clearInterval(timerrpt)
        timerrpt = setInterval(function() {
            if ($('aside>#buttom>#redpackage').css('opacity') != '0') {
                $('aside>#buttom>#redpackage').
                    css('opacity',
                        parseFloat(
                            $('aside>#buttom>#redpackage').css('opacity')) -
                        0.03)
            }
            if ($('aside>#buttom>#redpackage').css('top') != '-10px') {
                $('aside>#buttom>#redpackage').
                    css('top',
                        parseFloat($('aside>#buttom>#redpackage').css('top')) +
                        1 + 'px')
            }
            if ($('aside>#buttom>#redpackage').css('opacity') == '0' &&
                $('aside>#buttom>#redpackage').css('top') == '-10px') {
                clearInterval(timerrpt)
                $('aside>#buttom>#redpackage').css({
                    'display': 'none',
                })
            }
        }, 10)
    })

    var timerfdo
    var timerfdt
    $($('footer>.svg')[1]).add(' footer>.svg>div').on('mouseover', function() {
        $('footer>.svg>div').css({
            'display': 'block',
        })
        clearInterval(timerfdt)
        clearInterval(timerfdo)
        timerfdo = setInterval(function() {
            if ($(' footer>.svg>div').css('opacity') != '1') {
                $(' footer>.svg>div').
                    css('opacity',
                        parseFloat($(' footer>.svg>div').css('opacity')) + 0.03)
            }
            if ($(' footer>.svg>div').css('top') != '-40px') {
                $(' footer>.svg>div').
                    css('top',
                        parseFloat($(' footer>.svg>div').css('top')) - 1 + 'px')
            }
            if ($(' footer>.svg>div').css('opacity') == '1' &&
                $(' footer>.svg>div').css('top') == '-40px') {
                clearInterval(timerfdo)
            }
        }, 10)

    })
    $($('footer>.svg')[1]).add(' footer>.svg>div').on('mouseout', function() {

        clearInterval(timerfdo)
        clearInterval(timerfdt)
        timerfdt = setInterval(function() {
            if ($(' footer>.svg>div').css('opacity') != '0') {
                $(' footer>.svg>div').
                    css('opacity',
                        parseFloat($(' footer>.svg>div').css('opacity')) - 0.03)
            }
            if ($(' footer>.svg>div').css('top') != '-10px') {
                $(' footer>.svg>div').
                    css('top',
                        parseFloat($(' footer>.svg>div').css('top')) + 1 + 'px')
            }
            if ($(' footer>.svg>div').css('opacity') == '0' &&
                $(' footer>.svg>div').css('top') == '-10px') {
                clearInterval(timerfdt)
                $('footer>.svg>div').css({
                    'display': 'none',
                })
            }
        }, 10)
    })

    var timer
    $('.item>svg').on('mouseup', function() {
        $(this).attr('class', $(this).attr('class') + ' ' + 'rotating')
        timer = setTimeout(() => {
            $(this).attr('class', 'icon')
            clearTimeout(timer)
        }, 1000)

    })

    $(window).scroll(function() {
        if ($(document).scrollTop() >= 100) {
            $('aside').css('top', '30px')
        } else {
            $('aside').css('top', '85px')
        }

    })
    $('header>#login').on('click', function() {
        window.location.href = './login.html?name=login'
    })
    $('header>#register').on('click', function() {
        window.location.href = './login.html'
    })

    $('#topsvg>.set').click(function(event) {

        $('#set').css('display', 'block')
        event.preventDefault()
        $('#cover').css('display', 'block') //显示遮罩层
        $('#cover').css('height', document.body.clientHeight + 'px')
    })

    function onsvg() {
        $('.setscreen>.settop>svg').on('click', function() {

            $('#set').css('display', 'none')
            event.preventDefault()
            $('#cover').css('display', 'none') //显示遮罩层
        })
    }

    onsvg()

    $('.setbuttom').on('click', function() {

        $('#set').css('display', 'none')
        event.preventDefault()
        $('#cover').css('display', 'none') //显示遮罩层
    })

    $(document.documentElement).on('click', '.on-number', function() {

            if ($(this).data('v') == '1' || $(this).data('v') == '-1') {
                var $val = $(this).siblings('input[type=\'text\']')
                val = parseInt($val.val(), 10) + parseInt($(this).data('v'))
                $val.val(isNaN(val) ? 0 : val)

                $('main>.item>ul>li>.spanone').add
                ('main>.item>ul>li>.spantwo').add
                ('main>.item>ul>li>.spanthree').add
                ('aside>#buttom').add
                ('#topImg').add
                ('#toptextone').add
                ('#toptexttwo').add
                ('#topsvg').add
                ('footer>#footerText').css('font-size', val + 'px')

            } else if ($(this).data('v') == '<') {
                var $val = $(this).siblings('input[type=\'text\']')
                if ($val.val() == '暗夜') {
                    $val.val('护眼')
                    $('*').
                        not('.setscreen input').
                        css('color', 'rgb(176, 179, 181)')
                    $('.setscreen').add('#content>header').add
                    ('#content>header>img').add('main>.item').add
                    ('aside>#top').add('footer').css('background-color', '#333e43')
                    $('<svg t="1741273897782" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4249" width="200" height="200"><path d="M550.848 502.496l308.64-308.896a31.968 31.968 0 1 0-45.248-45.248l-308.608 308.896-308.64-308.928a31.968 31.968 0 1 0-45.248 45.248l308.64 308.896-308.64 308.896a31.968 31.968 0 1 0 45.248 45.248l308.64-308.896 308.608 308.896a31.968 31.968 0 1 0 45.248-45.248l-308.64-308.864z" p-id="4250" fill="#ffffff"></path></svg>').
                        replaceAll('.setscreen>.settop>svg')
                    onsvg()
                } else if ($val.val() == '护眼') {
                    $val.val('极客')
                    $('*').css('color', 'black')
                    $('.setscreen').add('#content>header').add
                    ('#content>header>img').add('main>.item').add
                    ('aside>#top').add('footer').css('background-color', 'white')
                    $('<svg t="1741273897782" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4249" width="200" height="200"><path d="M550.848 502.496l308.64-308.896a31.968 31.968 0 1 0-45.248-45.248l-308.608 308.896-308.64-308.928a31.968 31.968 0 1 0-45.248 45.248l308.64 308.896-308.64 308.896a31.968 31.968 0 1 0 45.248 45.248l308.64-308.896 308.608 308.896a31.968 31.968 0 1 0 45.248-45.248l-308.64-308.864z" p-id="4250"></path></svg>').
                        replaceAll('.setscreen>.settop>svg')
                    onsvg()
                } else {
                    $val.val('暗夜')
                    $('*').
                        not('.setscreen input').
                        css('color', 'rgb(176, 179, 181)')
                    $('.setscreen').add('#content>header').add
                    ('#content>header>img').add('main>.item').add
                    ('aside>#top').add('footer').css('background-color', '#1f2025')
                    $('<svg t="1741273897782" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4249" width="200" height="200"><path d="M550.848 502.496l308.64-308.896a31.968 31.968 0 1 0-45.248-45.248l-308.608 308.896-308.64-308.928a31.968 31.968 0 1 0-45.248 45.248l308.64 308.896-308.64 308.896a31.968 31.968 0 1 0 45.248 45.248l308.64-308.896 308.608 308.896a31.968 31.968 0 1 0 45.248-45.248l-308.64-308.864z" p-id="4250" fill="#ffffff"></path></svg>').
                        replaceAll('.setscreen>.settop>svg')
                    onsvg()
                }

            } else {
                var $val = $(this).siblings('input[type=\'text\']')
                if ($val.val() == '暗夜') {
                    $val.val('极客')
                    $('*').css('color', 'black')
                    $('.setscreen').add('#content>header').add
                    ('#content>header>img').add('main>.item').add
                    ('aside>#top').add('footer').css('background-color', 'white')
                    $('<svg t="1741273897782" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4249" width="200" height="200"><path d="M550.848 502.496l308.64-308.896a31.968 31.968 0 1 0-45.248-45.248l-308.608 308.896-308.64-308.928a31.968 31.968 0 1 0-45.248 45.248l308.64 308.896-308.64 308.896a31.968 31.968 0 1 0 45.248 45.248l308.64-308.896 308.608 308.896a31.968 31.968 0 1 0 45.248-45.248l-308.64-308.864z" p-id="4250"></path></svg>').
                        replaceAll('.setscreen>.settop>svg')
                    onsvg()
                } else if ($val.val() == '极客') {
                    $val.val('护眼')
                    $('*').
                        not('.setscreen input').
                        css('color', 'rgb(176, 179, 181)')
                    $('.setscreen').add('#content>header').add
                    ('#content>header>img').add('main>.item').add
                    ('aside>#top').add('footer').css('background-color', '#333e43')
                    $('<svg t="1741273897782" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4249" width="200" height="200"><path d="M550.848 502.496l308.64-308.896a31.968 31.968 0 1 0-45.248-45.248l-308.608 308.896-308.64-308.928a31.968 31.968 0 1 0-45.248 45.248l308.64 308.896-308.64 308.896a31.968 31.968 0 1 0 45.248 45.248l308.64-308.896 308.608 308.896a31.968 31.968 0 1 0 45.248-45.248l-308.64-308.864z" p-id="4250" fill="#ffffff"></path></svg>').
                        replaceAll('.setscreen>.settop>svg')
                    onsvg()
                } else {
                    $val.val('暗夜')
                    $('*').
                        not('.setscreen input').
                        css('color', 'rgb(176, 179, 181)')
                    $('.setscreen').add('#content>header').add
                    ('#content>header>img').add('main>.item').add
                    ('aside>#top').add('footer').css('background-color', '#1f2025')
                    $('<svg t="1741273897782" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4249" width="200" height="200"><path d="M550.848 502.496l308.64-308.896a31.968 31.968 0 1 0-45.248-45.248l-308.608 308.896-308.64-308.928a31.968 31.968 0 1 0-45.248 45.248l308.64 308.896-308.64 308.896a31.968 31.968 0 1 0 45.248 45.248l308.64-308.896 308.608 308.896a31.968 31.968 0 1 0 45.248-45.248l-308.64-308.864z" p-id="4250" fill="#ffffff"></path></svg>').
                        replaceAll('.setscreen>.settop>svg')
                    onsvg()
                }
            }

        },
    )

    var timercheck
    $('.check').on('click', function() {
        clearInterval(timercheck)
        var t = $(this)
        if (t.find('.true').css('left') == '0px') {
            timercheck = setInterval(function() {
                if (t.find('.true').css('left') != '-40px') {
                    t.find('.true').
                        css('left',
                            parseFloat(t.find('.true').css('left')) - 10 + 'px')
                    t.find('.empty').
                        css('left',
                            parseFloat(t.find('.empty').css('left')) - 10 +
                            'px')
                    t.find('.close').
                        css('left',
                            parseFloat(t.find('.close').css('left')) - 10 +
                            'px')
                } else {
                    clearInterval(timercheck)
                }

            }, 50)

        } else {
            timercheck = setInterval(function() {
                if (t.find('.true').css('left') != '0px') {
                    t.find('.true').
                        css('left',
                            parseFloat(t.find('.true').css('left')) + 10 + 'px')
                    t.find('.empty').
                        css('left',
                            parseFloat(t.find('.empty').css('left')) + 10 +
                            'px')
                    t.find('.close').
                        css('left',
                            parseFloat(t.find('.close').css('left')) + 10 +
                            'px')
                } else {
                    clearInterval(timercheck)
                }
            }, 50)
        }
    })

    $('.contentOne>ul>li:nth-child(3) div').on('click', function() {
        var workarr = [
            '读者',
            '学习',
            '362',
            '验证：学习',
            '学习',
            '工作学习',
            '未来奋斗',
            '学友']
        var unworkarr = [
            '无名',
            '摸鱼',
            '421',
            '验证：摸鱼',
            '摸鱼',
            '工资摸鱼',
            '自由争命',
            '鱼友']
        if ($('aside span')[0].innerText == '无名') {

            $('aside span').each(function(index, value) {
                $('aside span')[index].innerText = workarr[index]
            })
        } else {
            $('aside span').each(function(index, value) {
                $('aside span')[index].innerText = unworkarr[index]
            })
        }
    })
    $('.contentOne>ul>li:nth-child(4) div').on('click', function() {

        if ($('main>.item>ul>li>.spantwo').css('height') != '20px') {
            $('main>.item>ul>li>.spantwo').css({
                'height': '20px',
                'overflow': 'hidden',
                'text-overflow': 'ellipsis',
                'white-space': 'nowrap',
            })
        } else {
            $('main>.item>ul>li>.spantwo').css({
                'height': '',
                'overflow': '',
                'text-overflow': '',
                'white-space': '',
            })
        }

    })
    $('.contentOne>ul>li:nth-child(5) div').on('click', function() {
        if ($('.item>a>svg').css('display') != 'none') {
            $('.item>a>svg').css('display', 'none')
        } else {
            $('.item>a>svg').css('display', '')
        }

    })

    var a = []
    $('.contentOne>ul>li:nth-child(6) div').on('click', function() {

        if (!a[1]) {
            a[0] = $('<div class=\'item\'>热门社区</div>')
            a[1] = $('<div class=\'item\'>IT科技</div>')
            a[2] = $('<div class=\'item\'>程序员聚集地</div>')
            a[3] = $('<div class=\'item\'>新闻资讯</div>')
            a[4] = $('<div class=\'item\'>视频平台</div>')
            a[5] = $('<div class=\'item\'>购物平台</div>')
            for (ch = 0; ch < a.length; ch++) {
                a[ch].css({
                    'height': '15px',
                    'width': '91.5%',
                    'border-radius': '5px 5px',
                    'color': 'rgb(176, 179, 181)',
                    'padding-top': '10px',
                })
                $('main').prepend(a[5])
                $('main').prepend(a[4])
                $('main').prepend(a[3])
                $('main').prepend(a[2])
                $('main').prepend(a[1])
                $('main').prepend(a[0])
                a[0].after($($('.itemmain')[4]))
                a[0].after($($('.itemmain')[3]))
                a[0].after($($('.itemmain')[3]))
                a[0].after($($('.itemmain')[3]))
                a[1].after($($('.itemmain')[8]))
                a[1].after($($('.itemmain')[8]))
                a[1].after($($('.itemmain')[8]))
                a[2].after($($('.itemmain')[13]))
                a[2].after($($('.itemmain')[11]))
                a[2].after($($('.itemmain')[11]))
                a[3].after($($('.itemmain')[12]))
                a[3].after($($('.itemmain')[11]))
                a[4].after($($('.itemmain')[12]))
                a[5].after($($('.itemmain')[13]))
            }

        } else {
            a[0].before($($('.itemmain')[0]))
            a[0].before($($('.itemmain')[1]))
            a[0].before($($('.itemmain')[2]))
            a[0].before($($('.itemmain')[10]))
            a[0].before($($('.itemmain')[4]))
            a[0].before($($('.itemmain')[12]))
            a[0].before($($('.itemmain')[6]))
            a[0].before($($('.itemmain')[7]))
            a[0].before($($('.itemmain')[8]))
            a[0].before($($('.itemmain')[9]))
            a[0].before($($('.itemmain')[10]))
            a[0].before($($('.itemmain')[12]))
            a[0].before($($('.itemmain')[13]))
            a[0].before($($('.itemmain')[13]))
            for (rech = 0; rech < a.length; rech++) {
                a[rech].remove()
            }
            a = []
        }

    })

})







