def check_clothing_advice(temperature_celsius):
    if temperature_celsius >= 25:
        return "It's warm! Light clothes are perfect."
    elif 18 <= temperature_celsius < 25:
        return "It's a bit cool. You can wear light clothes with a thin layer like a hoodie or cardigan."
    elif 10 <= temperature_celsius < 18:
        return "It's chilly. Better wear a pullover or light jacket."
    else:
        return "It's cold! Stick to jackets, sweaters, and warm clothes."

# Example usage
temp = float(input("Enter the current temperature in Celsius: "))
advice = check_clothing_advice(temp)
print(advice)
