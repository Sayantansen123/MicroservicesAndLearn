package main

import (
	"fmt"
	"strconv"
	"strings"
)

func main() {
	fmt.Println("hello sayantan")
	binaryStrtoInt("1101")
	inttobinary(10)
	stringtobinary("hello")
	binarystrtostring("1101000 1100101 1101100 1101100 1101111 100000 1110011 1100001 1111001 1100001 1101110 1110100 1100001 1101110")

}

func inttobinary(num int) {

	binaryStr := strconv.FormatInt(int64(num), 2)
	fmt.Println("Binary representation of", num, ":", binaryStr)
}

func binaryStrtoInt(binaryStr string) {
	// Binary of 13
	num, err := strconv.ParseInt(binaryStr, 2, 64)
	if err != nil {
		fmt.Println("Error:", err)
		return
	}
	fmt.Println("Decimal value of", binaryStr, ":", num)
}

func stringtobinary(text string) {

	fmt.Print("Binary representation of '", text, "': ")
	for _, char := range text {

		fmt.Print(strconv.FormatInt(int64(char), 2), " ")

	}
	fmt.Println()
}

func binarystrtostring(binaryStr string) {
	// "Hello" in ASCII binary
	binaries := strings.Split(binaryStr, " ")
	var text string

	for _, bin := range binaries {
		charCode, err := strconv.ParseInt(bin, 2, 64)
		if err != nil {
			fmt.Println("Error:", err)
			return
		}
		text += string(rune(charCode))
	}

	fmt.Println("String value of binary:", text)
}
