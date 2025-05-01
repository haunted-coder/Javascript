import math

num = 25
sqrt = math.sqrt(num)
print("Square root of", num, "is", sqrt)

num = 36
sqrt = num ** 0.5
print("Square root of", num, "is", sqrt)

import cmath

num = -49
sqrt = cmath.sqrt(num)
print("Square root of", num, "is", sqrt)


def sqrt_newton(n, tolerance=1e-10):
    guess = n / 2.0
    while abs(guess * guess - n) > tolerance:
        guess = (guess + n / guess) / 2.0
    return guess

num = 81
sqrt = sqrt_newton(num)
print("Square root of", num, "is", sqrt)






