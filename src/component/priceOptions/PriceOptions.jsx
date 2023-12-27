import PriceOption from "../priceOption/PriceOption";


const PriceOptions = () => {
    const priceOptions = [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": 29.99,
          "features": [ "Access to cardio area",
          "Basic workout equipment",
          "Online workout videos",
          "Locker room access"]
        },
        {
          "id": 2,
          "name": "Standard Membership",
          "price": 49.99,
          "features": [ "Access to cardio and weight areas",
          "Group fitness classes",
          "Personalized workout plans",
          "Nutritional guidance"]
        },
        {
          "id": 3,
          "name": "Premium Membership",
          "price": 79.99,
          "features": [ "Full gym access",
          "Personal trainer sessions",
          "Sauna and spa",
          "Access to premium fitness classes",
          "Towel service"]
        }
      ]
      
    return (
        <div className="my-10">
            <h3 className="text-3xl font-semibold text-center">best price in the town</h3>

           <div className="grid lg:grid-cols-3 gap-6 mt-8">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
           </div>

            
        </div>
    );
};

export default PriceOptions;