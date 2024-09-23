import { createContext, useEffect, useState } from "react";

export const userContext = createContext();

export function UserContextProvider({ children }) {
    const [LoginUser, setLoginUser] = useState(null);
    useEffect(() => {
        // if (!LoginUser) {
        //     let response = fetch("https://askg-api.vercel.app/profile");
        //     console.log("this is the response",response)
        // }

        if (!LoginUser) {
            fetch("https://askg-api.vercel.app/profile", {
                method: "GET",

                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",

                // body: JSON.stringify(data),
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
