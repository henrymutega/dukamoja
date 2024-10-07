"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import auth from "next-auth/react";

export default function Register(){
    const[email, setEmail] = useState("yeyeye@gmail.com");
    const[password, setPassword] = useState("yeyeyyeyeye");
    const[loading, setLoading] = useState(false);

    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();

        try{
            setLoading(true);

            const result = await fetch(Credential, {
                email,
                password,
            });


            if (result?.error){
                toast.error("Email or Password Incorrect.");
                setLoading(false);
            }else{
                toast.success("Login successfully");
                router.push("/");
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
                            Login
                        </h2>
                        <form onSubmit={handleLogin}>
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
                            disabled={loading || !email || !password }>
                                {loading ? 'Please wait.. ' : "Login"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}