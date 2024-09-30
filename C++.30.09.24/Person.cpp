#include "Person.h"
#include <iostream>

Person::Person(std::string name, int age) {
	this->name = name;
	this->age = age;
}

void Person::displayInfo() {
	std::cout << "Name: " << name << ", Age: " << age << std::endl;
}