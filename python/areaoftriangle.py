a=int(input("enter the first side:"))
b=int(input("enter the seecond side:"))
c=int(input("enter the third side:"))
S=(a+b+c)/2
A=S*(S-a)*(S-b)*(S-c)**0.5
print("area of triangle is:",A)