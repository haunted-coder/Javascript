def enroll_student(name, age):
    if 10 <= age <= 20:
        print(f"{name} has been successfully enrolled in the class.")
    else:
        print(f"Sorry, {name} cannot be enrolled. Age {age} is not within the allowed range (10-20).")



enroll_student("Alif", 15)
enroll_student("Sara", 21)
