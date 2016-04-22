#include <stdlib.h>
#include <stdio.h>
#include <string.h>

int main(int argc, char** argv)
{
	char* p = malloc(32);
	strcpy(p, argv[1]);
        free(p);

	return 0;
}
