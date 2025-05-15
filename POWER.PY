def calculate_powers():
    print("2 Power Calculator Program")
    print("Enter the number of calculations you want to perform:")

    try:
        count = int(input("How many powers do you want to calculate? "))
    except ValueError:
        print(" Please enter a valid integer.")
        return

    results = []
    for i in range(count):
        print(f"\nCalculation {i + 1}:")
        try:
            base = float(input("Enter the base number: "))
            exponent = float(input("Enter the exponent: "))
        except ValueError:
            print("Invalid input. Please enter numeric values.")
            continue

        power_result = base ** exponent
        results.append((base, exponent, power_result))

    print("\n Results:")
    for base, exponent, result in results:
        print(f"{base} ^ {exponent} = {result}")


calculate_powers()
