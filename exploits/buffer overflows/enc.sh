#!/bin/bash
# simple shell script to encode shellcode
# by Dr. Phil Polstra @ppolstra

enc='x86/bloxor'
if (( $# > 1 )) 
then
   enc="$2" 
fi

outfile="$(basename $1).enc"
echo "Encoding is ${enc} and output file is $outfile"
echo "Creating binary file $outfile for use with future encoding"
msfencode -b '\x00' -i $1 -t raw -e $enc >> $outfile

echo "Creating C file from binary"
xxd -i $outfile

