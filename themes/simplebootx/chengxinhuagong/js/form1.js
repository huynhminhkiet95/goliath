var re=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
var objExp=new RegExp(re);
function submitMsg(){
	if(document.getElementById("full_namec").value=="Name" || document.getElementById("full_namec").value=="")
	{
	alert("Please enter your first name.");
	return false; 
	}

	var str=document.getElementById("emailc").value;
	if(document.getElementById("emailc").value=="E-mail" || document.getElementById("emailc").value=="")
	{
	alert("Please enter your  E-mail."); 
	return false;
	}

    else if(objExp.test(str)==false)
	{
	alert("Please enter a valid E-mail."); 
	return false;
	}
	
	
	
    if(document.getElementById("companyc").value=="")
	{
	alert("Please enter your  company."); 
	return false;
	}
	
	
    if(document.getElementById("urlc").value=="")
	{
	alert("Please enter your  company website."); 
	return false;
	}
	
	
    if(document.getElementById("countryc").value=="E-mail" || document.getElementById("countryc").value=="")
	{
	alert("Please enter your  country."); 
	return false;
	}


	if(document.getElementById("msgc").value=="Your Message Here..." || document.getElementById("msgc").value=="")
	{
	alert("Please enter your message.");
	return false; 
	}


	if( document.getElementById("captchac").value==""|| document.getElementById("captchac").value=="CAPTCHA")
	{
	alert("Please enter CAPTCHA.");
	return false; 
	}
   
	return true;
}
