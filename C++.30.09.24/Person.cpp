#include "Person.h"
#include <iostream>
using namespace std;

Person::Person(string name, int age) {
	this->name = name;
	this->age = age;
}

void Person::displayInfo() {
	cout << "Name: " << name << ", Age: " << age << endl;
}