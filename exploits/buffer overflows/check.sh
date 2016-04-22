#!/bin/bash

echo "The Following lines could be vulnerable to format string errors"
grep -n -B1 'printf' $1 | egrep -A1 '__esp \=  &'

echo "The following lines might be vulnerable to overflows"
grep -n 'strcpy' $1

