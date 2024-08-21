import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import image from "@/assets/image_1.png";
import image2 from "@/assets/login.webp";
import { useForm } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";

const Login = () => {
   const { register, handleSubmit, formState: { errors } } = useForm();
   const navigate = useNavigate()
   const onSubmit = (data) => {
      navigate("/admin/dashboard/users")
   };

   return (
      <div className="flex items-center justify-center h-screen overflow-hidden bg-gray-100">

         <div className="grid relative z-50 lg:grid-cols-3 w-full items-center main-container">
            <div className="col-span-2 flex items-center justify-center">
               {/* <div>
                  <img src={image} alt="july-protest" />
               </div> */}
            </div>
            <Card className="w-full max-w-md p-6 bg-white rounded-lg primary-shadow">
               <CardHeader>
                  <CardTitle className="text-center text-2xl font-semibold">Login</CardTitle>
               </CardHeader>
               <CardContent>
                  <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                     <div>
                        <label className="text-base font-medium" htmlFor="email">Email</label>
                        <Input
                           id="email"
                           type="email"
                           placeholder="you@example.com"
                           className={`mt-2 ${errors.email ? 'border-red-500' : ''}`}
                           {...register("email", {
                              required: "Email is required",
                              pattern: {
                                 value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                 message: "Invalid email address"
                              }
                           })}
                        />
                        {errors.email && (
                           <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                     </div>

                     <div>
                        <label className="text-base font-medium" htmlFor="password">Password</label>
                        <Input
                           id="password"
                           type="password"
                           placeholder="Your password"
                           className={`mt-2 ${errors.password ? 'border-red-500' : ''}`}
                           {...register("password", {
                              required: "Password is required",
                              minLength: {
                                 value: 6,
                                 message: "Password must be at least 6 characters long"
                              }
                           })}
                        />
                        {errors.password && (
                           <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                        )}
                     </div>



                     <div className="flex items-center justify-between  ">

                        <div className="flex items-center space-x-2">
                           <Checkbox id="terms" />
                           <label
                              htmlFor="terms"
                              className="text-sm cursor-pointer font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                           >
                              Remember me.
                           </label>
                        </div>

                        <div className=" -me-2">
                           <Button className="" variant="link">Forget password?</Button>
                        </div>


                     </div>


                     <div className="flex items-center justify-between">
                        <button
                           className="px-6 py-2 bg-[#2971d6] hover:ring-2 hover:ring-blue-100 transition-all duration-300 w-full rounded text-white text-base font-normal"
                           type="submit"
                        >
                           Login
                        </button>
                     </div>
                  </form>
               </CardContent>
            </Card>
         </div>
         <img src={image2} alt="login" className="absolute left-0 inset-0 bottom-0 w-full h-screen" />
      </div>
   );
};

export default Login;
