#!/bin/bash
# simple shell script to output c string for shellcode and 
# also to create a binary file in case you want to encode
# the file with Metasploit or something else later
# by Dr. Phil Polstra @ppolstra

# does the bin file exist, if so delete it
binfile="$(basename $1).bin"

if [ -e $binfile ] 
   then rm $binfile
fi

echo -n "char code[] = \""
for i in `objdump -d $1 | tr '\t' ' ' | tr ' ' '\n' | egrep '^[0-9a-f]{2}$' ` ; 
do 
	echo -n "\x$i" ; 
	echo -n -e "\\x$i" >> $binfile ;
done
echo "\";"
