import { createContext, useEffect, useState } from "react";

export const userContext = createContext();
export const frontendUrl = "https://localhost:5173";
export const backendUrl = "https://askg-house-rental-website-backend.onrender.com";
// export const backendUrl = "http://localhost:3000";

export function UserContextProvider({ children }) {
    const [LoginUser, setLoginUser] = useState(null);
    useEffect(() => {
        

        if (!LoginUser) {
            fetch(`${backendUrl}/profile`, {
                method: "GET",

                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",

            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    setLoginUser(data);
                })
                .catch((error) => console.error("Error:", error));
        }

        //     }
    }, []);

    return (
        <userContext.Provider value={{ LoginUser, setLoginUser }}>
            <div>{children}</div>
        </userContext.Provider>
    );
}
