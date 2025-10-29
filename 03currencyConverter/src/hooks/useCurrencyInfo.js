
import { useEffect, useState } from "react"

function useCurrencyInfo(currency){

    const [data, setData] = useState({})
    // 💡 API Key ko humne yahan hardcode kar diya hai (For testing)
    const API_KEY = "fc78b69c9b896b21f856b1f6"; 
    
    useEffect(()=> {
        fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => {
                // 🚀 CORRECTION YAHAN HAI: Naye API se 'conversion_rates' nikal rahe hain
                if(res.result === "success" && res.conversion_rates) {
                    setData(res.conversion_rates);
                } else {
                    // Agar API se error aaye toh data empty rakhein
                    setData({}); 
                }
            })
            .catch((error) => {
                // Network ya anya error hone par
                console.error("API Fetch Failed:", error);
                setData({}); 
            })
            // Console.log ko yahan se hata diya, kyunki yeh hamesha ek render peechhe ki value deta hai.
            // console.log(data); 
    }, [currency])

    // console.log(data); // Yeh console.log bhi hata dena behtar hai
    
    return data
}

export default useCurrencyInfo;