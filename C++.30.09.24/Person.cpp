#include "Person.h"
#include <iostream>//cin cout
using namespace std;

Person::Person(string name, int age) { //constructor definition
	this->name = name;
	this->age = age;
}

void Person::displayInfo() { //definition of the method
	cout << "Name: " << name << ", Age: " << age << endl;
}

//if display info is not defined here, a linker error would occur. 

/*linker is responsible for combining different object files 
and libraries into 1 executable. 
If it cannot find definition for a declared method 
,it will generate an error, the program won't run.
*/