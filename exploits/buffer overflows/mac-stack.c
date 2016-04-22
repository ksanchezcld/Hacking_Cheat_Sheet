#include <string.h>
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char** argv)
{
	char buff[20];

	strcpy((char *)buff, argv[1]);

	return 0;
}
