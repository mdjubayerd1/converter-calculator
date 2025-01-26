function convert() {
    const value = parseFloat(document.getElementById("inputValue").value);
    const unitFrom = document.getElementById("unitFrom").value;
    const unitTo = document.getElementById("unitTo").value;
    let result;

    console.log("Input Value:", value);
    console.log("Unit From:", unitFrom);
    console.log("Unit To:", unitTo);

    const conversionFactors = {
        'foot_to_inch': 12,
        'inch_to_foot': 1/12,
        'cm_to_inch': 0.393701,
        'inch_to_cm': 2.54,
        'km_to_meter': 1000,
        'meter_to_km': 1/1000,
        'kg_to_gram': 1000,
        'gram_to_kg': 1/1000,
        'litre_to_ml': 1000,
        'ml_to_litre': 1/1000,
        'foot_to_meter': 0.3048,
        'meter_to_foot': 1/0.3048,
        'foot_to_cm': 30.48,
        'cm_to_foot': 1/30.48,
        'meter_to_cm': 100,
        'cm_to_meter': 1/100,
        'km_to_cm': 100000,
        'cm_to_km': 1/100000,
        'km_to_foot': 3280.84,
        'foot_to_km': 1/3280.84,
        'meter_to_inch': 39.3701,
        'inch_to_meter': 1/39.3701,
        'km_to_inch': 39370.1,
        'inch_to_km': 1/39370.1,
        'gram_to_cm': 1,
        'cm_to_gram': 1,
        'kg_to_cm': 1000,
        'cm_to_kg': 1/1000,
        'litre_to_cm': 1000,
        'cm_to_litre': 1/1000,
        'ml_to_cm': 1,
        'cm_to_ml': 1
    };

    const key = `${unitFrom}_to_${unitTo}`;
    console.log("Conversion Key:", key);

    if (conversionFactors[key]) {
        result = value * conversionFactors[key];
        document.getElementById("result").textContent = `${value} ${unitFrom} is ${result} ${unitTo}`;
    } else {
        document.getElementById("result").textContent = 'Invalid Conversion!';
    }
}