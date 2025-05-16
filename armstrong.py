num = int(input("enter a number:"))

sum=0
temp = num


while temp > 0:
    digit = temp % 10
    sum += digit ** 3
    temp //=10


if num == sum:
    print(num,"is an Armstrong number")
else:
    print(num, "is not an Armstrong number")


"""
   
   153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
   So 153 is a armstrong number
   

   153
   
   digit = 3
   sum = 27
   temp = 15

   digit = 5
   sum = 27 + 125 = 152
   temp = 1


   digit = 1
   sum = 153
   temp = 0




   
   """
