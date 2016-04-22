#include <string.h>
void function_f(char* var_s){
	char buffer[10];
	strcpy(buffer,var_s);
}
void main(void){
	function_f("Thisexampleisdemostratesastackoverflowwithsegmantationfault");
}

# To compile 
	-> gcc stacktest.c -o stacktest
# To run
	-> ./stacktest