$(function(){

    $("header").css({backgroundImage:'url(./img/m_bg.png)'})
    $("header .btn").on({
        mouseover:function(){
            $("header").css({
                backgroundImage:'url(./img/m_bg02.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
        
            }),
            $("header .btn .btn02").attr("src", "./img/m_btn02.png")
        },
        mouseout:function(){
            $("header").css({backgroundImage:'url(./img/m_bg.png)'}),
            $("header .btn .btn02").attr("src", "./img/m_btn.png")
        }
    }),


 $(window).resize(function(){
    let w = innerWidth

    if(w <= 1200){
        $("header").css({backgroundImage:'url(./img/mid_bg.jpg)'}),
        $("header .btn").off('mouseover'),
        $("header .btn").off('mouseout')
    } else{
        $("header").css({backgroundImage:'url(./img/m_bg.png)'})
        $("header .btn").on({
            mouseover:function(){
                $("header").css({
                    backgroundImage:'url(./img/m_bg02.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
            
                }),
                $("header .btn .btn02").attr("src", "./img/m_btn02.png")
            },
            mouseout:function(){
                $("header").css({backgroundImage:'url(./img/m_bg.png)'}),
                $("header .btn .btn02").attr("src", "./img/m_btn.png")
            }
        })
        
       
    }
 })
    
   
    /////
});