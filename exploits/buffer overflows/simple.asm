; hello world in 64-bit assembly for Linux
        global  _start
        section .text
_start:
        ; write is system call 1
        mov     rax, 1                  ; system call 1 is write
        mov     rdi, 1                  ; file handle 1 is stdout
        mov     rsi, message            ; address of string to output
        mov     rdx, len                 ; number of bytes
        syscall                         ; invoke syscall

        ; exit(0)
        mov     eax, 60                 ; system call 60 is exit
        xor     rdi, rdi                ; exit code 0
        syscall                         ; invoke operating system to exit
message:
        db      "Hello, Reverser!", 10  ; 10 is a newline      
len:	equ 	$ - message
