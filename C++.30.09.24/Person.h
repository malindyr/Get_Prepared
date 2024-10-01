#pragma once //header file is included only once
#ifndef PERSON_H //header guard,  checking if the PERSON_H macro has been defined
#define PERSON_H //if not, the macro is defined, and the content between define and endif is included. another way to prevent multiple inclusions

#include <string> //tells preprocessor to include the string class from the c++ standard library
using namespace std; //imports all elements from the std namespace, dont have to use std::

class Person //person class has two access specifiers
{
public ://int is built in datatype, string is not
	Person(string name, int age); //constructor declaration
	void displayInfo();// declaration of the method

private : 
	string name;
	int age;
};

#endif

//header guards are not necessary in c#. Files are not "included" like in c++, you just reference namespaces and use classes or methods and the compiler handles everything