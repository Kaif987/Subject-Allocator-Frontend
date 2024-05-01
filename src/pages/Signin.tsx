import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Integral from "../images/IntegralUniversityLogo.png";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


function Signin() {
    return (
        <main className="h-screen flex justify-center items-center bg-slate-200">
            <form className="py-12 px-24 rounded-md bg-slate-50">
                <div className="text-center mb-5">
                    <img src={Integral} alt="" height={50} width={300} className="p-6 " />
                    <h1 className="font-semibold text-3xl">Subject Allocator</h1>
                    <p> Sign into your account</p>
                </div>
                <Input className="mb-4" placeholder="Email" type="email" />
                <Input className="mb-6" placeholder="password" type="password" />
                <Button className="w-full mb-3">Signin</Button>
                {/* <p className="text-center mb-2">Or</p> */}
                {/* <Button variant={"outline"} className="w-full" >
                    <FcGoogle className="mr-2" size={25} /> Login with google
                </Button> */}
            </form>
        </main>
    );
}

export default Signin;
