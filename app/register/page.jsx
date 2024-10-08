"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Register(){
    const[name, setName] = useState("janes");
    const[email, setEmail] = useState("janes@gmal.com");
    const[password, setPassword] = useState("12345");
    const[loading, setLoading] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            setLoading(true);
            const response = await fetch(`${process.env.API}/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                }),
            });


            if (!response.ok){
                toast.error("Email account already registered.");
                setLoading(false);
            }else{
                toast.success("Account created successfully");
                router.push("/login");
            }

        }catch(err){
            console.log(err);
            setLoading(false);
        }
    };
    return(
        <main>
            <div className="container">
                <div className="row d-flex, justify-content-center align-items-center vh-100">
                    <div className="col-lg-5 shadow bg-light p-5">
                        <h2 className="mb-4 text-center">
                            Register
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <input 
                            type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)}
                            className="form-control mb-4"
                            placeholder="Enter your name"
                            />
                            <input 
                            type="text" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control mb-4"
                            placeholder="Enter your email"
                            />
                            <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control mb-4"
                            placeholder="Enter your Password"
                            />
                            <button className="btn btn-primary text-capitalize btn-raised align-items-center" 
                            disabled={loading || !name || !email || !password }>
                                {loading ? 'Please wait.. ' : "Submit"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}