package main

import (
	"fmt"
	"unsafe"
)

func main() {
	p := new(int)                         // Allocates memory for an int and returns a pointer
	fmt.Println("value of pointer p", *p) // Prints 0 (default value)
	fmt.Println("adress p", &*p)

	*p = 42
	fmt.Println("updated value of pointer p", *p) // Prints 42

	x := 6
	z := &x
	fmt.Println("value of x", x)
	fmt.Println("Adress of x", &x)
	*z = 2

	fmt.Println("value of x", x)

	arr := [3]int{10, 20, 30} //value of array

	fmt.Println("Address of arr[0]:", &arr[0])
	fmt.Println("Address of arr[1]:", &arr[1])
	fmt.Println("Address of arr[2]:", &arr[2])

	ptr := unsafe.Pointer(&arr)
	fmt.Println("Address of arr", ptr)
}
