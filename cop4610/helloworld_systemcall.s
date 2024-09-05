#include <sys/syscall.h>

.globl _start 
_start:
    movq $1, %rax           # write(
    movq $1, %rdi           #  fd=1,
    movq $st, %rsi          #  buf=st,
    movq $(ed - st), %rdx   #  count=ed-st,
    syscall                 # )

    movq $60, %rax          # exit(
    movq $1, %rdi           #  status=1
    syscall                 # )

st:
    .ascii "\033[01;31mHello, OS World\033[0m\n"
ed: