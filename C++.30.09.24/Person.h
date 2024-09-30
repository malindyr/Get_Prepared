#pragma once
#ifndef PERSON_H //header guard
#define PERSON_H

#include <string>

class Person
{
public : 
	Person(std::string name, int age);
	void displayInfo();

private : 
	std::string name;
	int age;
};

#endif