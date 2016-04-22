//Simple Stack buffer overflow example
// by Dr. Phil Polstra @ppolstra http://philpolstra.com
#include <string.h>

void functionFunction(char *param, int p2, float p3)
{
	char local[10];

	strcpy(local, param);
}

int main(int argc, char** argv)
{
	functionFunction(argv[1], 42, 3.14);
} 
