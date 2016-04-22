#include <stdlib.h>
#include <stdio.h>
#include <string.h>

int main(int argc, char** argv)
{
	char *buff1;
        char *buff2;
 
        buff1 = malloc(32);
        buff2 = malloc(32);
        strcpy(buff1, argv[1]);
        free(buff2); // could be corrupted by overflow of buff1
        //free(buff1);
        
        return 0;
}
