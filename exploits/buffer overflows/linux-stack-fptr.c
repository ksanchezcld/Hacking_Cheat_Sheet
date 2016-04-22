//Stack buffer overflow example
#include <string.h>

typedef void(*funcptr)(char* param1);

void otherFunction(char* param)
{
    printf("%s", param);
}

void functionFunction(char *param, funcptr fptr)
{
	char local[10];

	strcpy(local, param);
        (*fptr)(param);
}

int main(int argc, char** argv)
{
	functionFunction(argv[1], &otherFunction);

	return 0;
}
