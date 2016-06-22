- fcrackzip -b -c a -l 5-5 -u Geheim.zip 
	- RESULT: PASSWORD FOUND!!!!: pw == close










#!/bin/bash
echo "ZIP-JTR Decrypt Script";
if [ $# -ne 2 ]
then
echo "Usage $0 <zipfile> <wordlist>";
exit;
fi
unzip -l $1
for i in $(john --wordlist=$2 --rules --stdout) 
do
 echo -ne "\rtrying \"$i\" " 
 unzip -o -P $i $1 >/dev/null 2>&1 
 STATUS=$?
 if [ $STATUS -eq 0 ]; then
 echo -e "\nArchive password is: \"$i\"" 
 break
 fi
done