; hello world in 32-bit assembly for Linux
        global  _start
        section .text
_start:
        ; write is system call 4
        mov     eax, 4                  ; system call 4 is write
        mov     ebx, 1                  ; file handle 1 is stdout
        mov     ecx, message            ; address of string to output
        mov     edx, len                ; number of bytes
        int	0x80                    ; invoke syscall

        ; exit(0)
        mov     eax, 1                 ; system call 1 is exit
        xor     ebx, ebx                ; exit code 0
        int	0x80                         ; invoke operating system to exit
message:
        db      "Hello, Reverser!", 10  ; 10 is a newline      
len:	equ 	$ - message
