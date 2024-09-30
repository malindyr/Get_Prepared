#include <iostream>

int main() 
{
	int file_size = 0;//always initialize variables before using them, garbage will be in current memory otherwise
	int counter = 1;

	int a = 1;
	int b = 2;

	int temp = a;

	a = b;
	b = temp;

	std::cout << a;
	
	double sales = 9.99;
	//std::cout << file_size;//standard library, character out, this line is called a statement, terminate with ;
	return 0; //0 tells the operating system that our program is going to terminate correctly. if any other value is returned, that means our program encountered an error
}


//to run this program, first we have to compile this code to machine code that can be run by the computers operating system.
//machine code is basically the native language that a computers operating system understands, and its different from one operating system to another.
//so if we compile this code on a windows machine, we get an executable, but that exe only runs on windows. not on mac or linux