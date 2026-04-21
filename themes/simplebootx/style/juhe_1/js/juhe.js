var re=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
var objExp=new RegExp(re);
function submitMsgAgg1(){
    if(document.getElementById("full_namea").value=="First Name" || document.getElementById("full_namea").value=="")
    {
        alert("Please enter your first name.");
        return false;
    }

    var str=document.getElementById("emaila").value;
    if(document.getElementById("emaila").value=="E-mail" || document.getElementById("emaila").value=="")
    {
        alert("Please enter your  E-mail.");
        return false;
    }

    else if(objExp.test(str)==false)
    {
        alert("Please enter a valid E-mail.");
        return false;
    }

  if(document.getElementById("companya").value=="Company" || document.getElementById("companya").value=="")
    {
    alert("Please enter your company name.");
    return false;
    }
  if(document.getElementById("urla").value=="Company Website" || document.getElementById("urla").value=="")
    {
    alert("Please enter your company website.");
    return false;
    }
    /*if(document.getElementById("tela").value=="Country" || document.getElementById("tela").value=="")
    {
    alert("Please enter your phone.");
    return false;
    }*/

    if(document.getElementById("countrya").value=="Country" || document.getElementById("countrya").value=="")
    {
    alert("Please enter your country.");
    return false;
    }

    if(document.getElementById("msga").value=="Your Message" || document.getElementById("msga").value=="")
    {
        alert("Please enter your message.");
        return false;
    }

    if(document.getElementById("captcha").value=="CAPTCHA" || document.getElementById("captcha").value=="")
    {
        alert("Please enter CAPTCHA.");
        return false;
    }

    return true;
}

/*  prl zhankai  */
if (window.screen.width <= 767) {
    $(function () {
        $(".jh-nextshow").click(function (t) {
            t.preventDefault();
            var e = $(this),
                n = e.next();
            if (n.is(":hidden")) {
                n.slideDown()
            } else {
                n.slideUp()
            }
        });
    });
}

