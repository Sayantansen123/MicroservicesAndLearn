package main

import "fmt"

type car struct {
	Make       string
	Mode       string
	Height     int
	Width      int
	FrontWheel wheel
}

//Also u can store struck inside a struck
type wheel struct {
	Height int
	Width  int
}

type truck struct {
	car
	Color string
}

func test(m car) {
	fmt.Println("Sending car detail :", m.Make, m.Mode, m.Height, m.Width, m.FrontWheel)
}

func testTruck(m truck) {
	fmt.Println("Sending car detail :", m.Make, m.Mode, m.Height, m.Width, m.FrontWheel, m.Color)
}

type rectangle struct {
	lenght int
	width  int
}

func (r rectangle) area() int {
	return r.lenght * r.width
}

func main() {
	// audi := car{} make all values to default u can change every value explicitly
	audi := car{
		Make:   "yes",
		Mode:   "audi",
		Height: 23,
		Width:  30,
	}
	audi.FrontWheel.Height = 23 //assigning empty height value to 23
	audi.FrontWheel.Width = 70
	test(audi)

	truck1 := truck{
		car:   audi,
		Color: "red",
	}

	testTruck(truck1)

	r := rectangle{
		lenght: 36,
		width:  20,
	}

	fmt.Println(r.area())

}
