// Simple Heap buffer overflow example
// by Dr. Phil Polstra @ppolstra
#include <string.h>
#include <stdio.h>

void main(int argc, char** argv)
{
	char* buff=malloc(20);
	strcpy(buff, argv[1]);
	free(buff);
}


