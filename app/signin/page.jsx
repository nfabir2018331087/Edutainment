'use client';

import Navbar from "@/components/navbar.jsx";
import {
    Card,
    Input,
    Button,
    Typography,
    Tab,
    Tabs,
    TabsHeader,
    TabPanel,
    TabsBody,
    Spinner,
} from "@material-tailwind/react";

import Footer from "@/components/footer.jsx";
import { useState } from "react";
import { useRouter } from "next/navigation.js";
// import Toast from "../providers/toast.jsx";
// import { toast } from "react-hot-toast";
// import { verifyJwt } from "@/lib/jwt.js";
// import axios from "axios";

export default function SignIn() {
    const button = "Register";
    const url = '/signup';

    const { push } = useRouter();
    
    const [type, setType] = useState('student');
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const token = localStorage.getItem("token");
    //     if(token){
    //         const data = verifyJwt(token);
    //         if(data){
    //             return redirect('/home');
    //         }
    //     }
    //     else setLoading(false);
    // },[]);

    // const handleCustomerSubmit = async (e) => {
    //     e.preventDefault();
    //     setType('Customer');
    //     // console.log(type, email, password);
    //     try{
    //         const response = await axios.post('api/login', {email, password});
    //         const data = await response.data;
    //         const token = data.result.token;
    //         localStorage.setItem("token",token);
    //         toast.success("Logged In Successfully");
    //         push('/home');
    //     }catch(error){
    //         console.log(error);
    //         toast.error("Invalid Credentials");
    //     }
    // }
    // const handleSupplierSubmit = async (e) => {
    //     e.preventDefault();
    //     setType("Supplier");
    //     try{
    //         const response = await axios.post('api/login', {email, password});
    //         const data = await response.data;
    //         const token = data.result.token;
    //         localStorage.setItem("token",token);
    //         toast.success("Logged In Successfully");
    //         push('/home');
    //     }catch(error){
    //         console.log(error);
    //         toast.error("Invalid Credentials");
    //     }
    // }
    // if(!loading){
    return (
        <>
        {/* <Toast /> */}
        <Navbar button={button} url = {url}/>
        <div className="flex justify-center my-28">
            <Card color="transparent" shadow={false} className="border border-slate p-5 shadow-md">
                <Typography variant="h3" color="blue-gray" className="text-center text-cyan-700 mb-5">
                    Sign In
                </Typography>
                <Tabs value={type} className="overflow-visible">
                    <TabsHeader className="relative z-0 ">
                        <Tab value="student" onClick={() => setType("student")}>
                            Student
                        </Tab>
                        <Tab value="teacher" onClick={() => setType("teacher")}>
                            Teacher
                        </Tab>
                        <Tab value="parent" onClick={() => setType("parent")}>
                            Parent
                        </Tab>
                        <Tab value="institute" onClick={() => setType("institute")}>
                            Institution
                        </Tab>
                    </TabsHeader>
                    <TabsBody className="!overflow-x-hidden !overflow-y-visible"
                        // animate={{
                        //     initial: {
                        //         x: type === "student" ? 800 : type === "teacher" ? 400 : type === "parent" ? 0 : -400,
                        //     },
                        //     mount: {
                        //         x: 0,
                        //     },
                        //     unmount: {
                        //         x: type === "student" ? 800 : type === "teacher" ? 400 : type === "parent" ? 0 : -400,
                        //     },
                        // }}
                        
                        >
        <TabPanel value="student" className="p-0">
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" > 
                <div className="mb-4 flex flex-col gap-6">
                    <Input size="lg" label="Edutainment ID" type = "text" className="focus:ring-0" onChange={(e) => {setEmail(e.target.value)}}/>
                    <Input size="lg" label="Password" type = "password" className="focus:ring-0" onChange={(e) => {setPassword(e.target.value)}}/>
                </div>
            <Button type="submit" className="mt-6 bg-cyan-700 hover:bg-cyan-800 transition duration-300" fullWidth>
                Student Login
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
                If you do not have an account, ask your intitution for <span  className="font-medium text-cyan-700 transition-colors hover:text-cyan-800">Edutainment ID and Password</span>.
            {/* <a href="/signup" className="font-medium text-cyan-700 transition-colors hover:text-cyan-800">
                Register
            </a> */}
            </Typography>
            </form>
        </TabPanel>
        <TabPanel value="teacher" className="p-0">
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" >
                <div className="mb-4 flex flex-col gap-6">
                    <Input size="lg" label="Edutainment ID" type = "text" className="focus:ring-0" onChange={(e) => {setEmail(e.target.value)}}/>
                    <Input size="lg" label="Password" type = "password" className="focus:ring-0" onChange={(e) => {setPassword(e.target.value)}}/>
                </div>
            <Button type="submit" className="mt-6 bg-cyan-700 hover:bg-cyan-800 transition duration-300" fullWidth>
                Teacher Login
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
                If you do not have an account, ask your intitution for <span  className="font-medium text-cyan-700 transition-colors hover:text-cyan-800">Edutainment ID and Password</span>.
            {/* <a href="/signup" className="font-medium text-cyan-700 transition-colors hover:text-cyan-800">
                Register
            </a> */}
            </Typography>
            </form>
        </TabPanel>
        <TabPanel value="parent" className="p-0">
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" > 
                <div className="mb-4 flex flex-col gap-6">
                    <Input size="lg" label="Edutainment ID" type = "text" className="focus:ring-0" onChange={(e) => {setEmail(e.target.value)}}/>
                    <Input size="lg" label="Password" type = "password" className="focus:ring-0" onChange={(e) => {setPassword(e.target.value)}}/>
                </div>
            <Button type="submit" className="mt-6 bg-cyan-700 hover:bg-cyan-800 transition duration-300" fullWidth>
                Parent Login
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
                If you do not have an account, ask your intitution for <span  className="font-medium text-cyan-700 transition-colors hover:text-cyan-800">Edutainment ID and Password</span>.
            {/* <a href="/signup" className="font-medium text-cyan-700 transition-colors hover:text-cyan-800">
                Register
            </a> */}
            </Typography>
            </form>
        </TabPanel>
        <TabPanel value="institute" className="p-0">
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" > 
                <div className="mb-4 flex flex-col gap-6">
                    <Input size="lg" label="Edutainment ID" type = "text" className="focus:ring-0" onChange={(e) => {setEmail(e.target.value)}}/>
                    <Input size="lg" label="Password" type = "password" className="focus:ring-0" onChange={(e) => {setPassword(e.target.value)}}/>
                </div>
            <Button type="submit" className="mt-6 bg-cyan-700 hover:bg-cyan-800 transition duration-300" fullWidth>
                Institution Login
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
                Do not have Edutainment ID?{" "}
            <a href="/signup" className="font-medium text-cyan-700 transition-colors hover:text-cyan-800">
                Register
            </a>
            </Typography>
            </form>
        </TabPanel>
        </TabsBody>
        </Tabs>
        </Card>
        </div>
        <Footer name={"fixed"}/>
        </>
        );
        // }
        // else return (
        //     <div className="pt-80 flex justify-center"><Spinner color ="cyan" className="h-14 w-14" />;</div>
        // )
    }
    
    