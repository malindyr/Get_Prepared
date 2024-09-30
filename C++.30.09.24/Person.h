#pragma once
#ifndef PERSON_H //header guard
#define PERSON_H

#include <string>
using namespace std;

class Person
{
public : 
	Person(string name, int age);
	void displayInfo();

private : 
	string name;
	int age;
};

#endif