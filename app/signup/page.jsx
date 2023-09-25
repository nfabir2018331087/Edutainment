'use client';

import Navbar from "@/components/navbar.jsx";
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Select,
    Option,
    Spinner,
  } from "@material-tailwind/react";

import Footer from "@/components/footer.jsx";
// import axios from "axios";
import { useEffect, useState } from "react";
// import Toast from "../providers/toast.jsx";
// import { toast } from "react-hot-toast";
import { redirect, useRouter } from "next/navigation.js";
// import { verifyJwt } from "@/lib/jwt.js";


export default function SignUp() {
  const button = "Sign In";
  const url = '/signin';
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [type, setType] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(true);

  const { push } = useRouter();

  const handleSubmit =  async (e) => {
    e.preventDefault();
    // console.log(name, email, password, type);
    const res = await axios.post('/api/register', {name, email, password, type
    }).then(() => {
      setIsSuccess(true);
      toast.success("Registered succcessfully!");
    }).catch((error) => {
      toast.error("Something went wrong!");
    })
  }

  useEffect(() => {
    if (isSuccess) push('/signin');
  },[isSuccess]);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if(token){
//         const data = verifyJwt(token);
//         if(data){
//             return redirect('/home');
//         }
//     }
//     else setLoading(false);
// },[]);

//   if(!loading){
  return (
      <>
      {/* <Toast /> */}
      <Navbar button={button} url={url}/>
      <div className="flex justify-center my-20">
    <Card color="transparent" shadow={false} className="border border-slate p-5 shadow-md w-1/2">
      <Typography variant="h3" color="blue-gray" className="text-center text-cyan-700">
        Register
      </Typography>
      <Typography color="gray" className="mt-1 font-normal text-center" >
        Enter your Institution's details to register.
      </Typography>
      <form className="mt-8 mb-2 max-w-screen-lg" >
        <div className="mb-4 flex flex-col gap-6">
          <Input  size="lg" label="Institution Name" onChange={(e) => {setName(e.target.value)}}/>
          <Input  size="lg" label="EIIN No" type = "number" className="focus:ring-0" onChange={(e) => {setEmail(e.target.value)}}/>
          <Input  size="lg" label="Detailed Address" onChange={(e) => {setName(e.target.value)}}/>
          <div className="flex items-center gap-4">
                    <Input
                      label="Postal Code"
                      maxLength={5}
                    //   value={formatExpires(cardExpires)}
                    //   onChange={(event) => setCardExpires(event.target.value)}
                      containerProps={{ className: "min-w-[72px]" }}
                    />
                    <Input
                      label="Upazilla"
                      maxLength={5}
                      containerProps={{ className: "min-w-[72px]" }}
                    />
            </div>
          <div className="flex items-center gap-4">
                    <Input
                      label="District"
                      maxLength={5}
                    //   value={formatExpires(cardExpires)}
                    //   onChange={(event) => setCardExpires(event.target.value)}
                      containerProps={{ className: "min-w-[72px]" }}
                    />
                    <Input
                      label="Division"
                      maxLength={5}
                      containerProps={{ className: "min-w-[72px]" }}
                    />
            </div>
          {/* <Input required size="lg" label="Password" type = "password" className="focus:ring-0" onChange={(e) => {setPassword(e.target.value)}}/>
          <Input required size="lg" label="Confirm Password" type = "password" className="focus:ring-0"/> */}
        </div>
        <div className="w-full">
          <Select required label="Institution Type" onChange={(e) => {setType(e)}}>
              <Option value="primaryschool">School (Both Primary & High)</Option>
              <Option value="primaryschool">Primary School (1-5)</Option>
              <Option value="highschool">High School (6-10)</Option>
              <Option value="Customer">College (11-12)</Option>
              <Option value="Customer">School & College</Option>
          </Select>
        </div>
        <Button type="submit" className="mt-6 bg-cyan-700 hover:bg-cyan-800 transition duration-300" fullWidth>
          Register
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already on Eduatainment?{" "}
          <a
            href="/signin"
            className="font-medium text-cyan-700 transition-colors hover:text-cyan-800"
          >
            Sign In
          </a>
        </Typography>
      </form>
    </Card>
    </div>
    <Footer name={"fixed"}/>
    </>
  );
//   }
//   else return (
//     <div className="pt-80 flex justify-center"><Spinner color ="green" className="h-14 w-14" />;</div>
// )
}
