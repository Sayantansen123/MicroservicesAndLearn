package main

import "fmt"

func variable() {

	var username string = "sayantan"
	var password int = 9837900

	var smsNo int16
	var name string
	var haspermission bool

	//fmt.Println("Auth",username+":"+ password) u cant add this two as there is a type changes
	fmt.Println("Auth", username, ":", password)
	fmt.Println("This are the vairables: ", smsNo, name, haspermission)
}

func InferredVar() {
	// := this operator inferrs the type of the new vairable and assigned it

	empty := "hello" //inferr to string
	numCars := 10    //inferr to int
	temp := 0.0      //inferr t0 float
	isNew := true
	copy := empty //copy will be the type which it is holding
	mileage, company := 8000, "tesla"

	fmt.Println("This are the inferred vairables: ", empty, numCars, temp, isNew, copy)
	fmt.Println("This is same line declaration: ", mileage, company)

}

func names(name1, name2 string) (string, string) {
	return name1, name2
}
