//Stack buffer overflow example
#include <string.h>

void functionFunction(char *param)
{
	char local[10];

	strcpy(local, param);
}

int main(int argc, char** argv)
{
	functionFunction(argv[1]);

	return 0;
}
