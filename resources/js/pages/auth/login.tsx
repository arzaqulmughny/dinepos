import Button from "@/components/auth/Button";
import Input from "@/components/auth/Input";
import { Head, Link, useForm } from "@inertiajs/react";

/**
 * Login page
 */
const Login = () => {
    const { data, setData, errors, post, processing } = useForm({
        email_username: '',
        password: '',
    });

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        post(route('login'));
    }

    return (
        <>
            <Head title="Login" />

            <div className="bg-gradient-to-br from-[#F58A87] to-[#FB923C] w-full h-screen flex flex-col items-center justify-center gap-20">
                <Link href="#" title="DinePOS Logo" className="w-[48px] object-contain">
                    <img src="/assets/images/dinepos.png" alt="DinePOS Logo" className="w-full h-full" />
                </Link>

                <form onSubmit={onSubmit} className="bg-slate-50/80 px-12 py-11 rounded-[15px] max-w-[500px] flex flex-col gap-y-8">
                    <div className="flex flex-col gap-y-1">
                        <h1 className="text-slate-800 text-[28px] font-bold">Login</h1>
                        <p className="text-slate-800 font-normal text-[12px]">Silakan masuk untuk mengakses akun Anda dan mulai mengelola bisnis dengan mudah.</p>
                    </div>

                    <div className="flex flex-col gap-y-4">
                        <Input name="email_username" placeholder="Email atau username" value={data.email_username} onChange={(event) => setData('email_username', event.target.value)} invalidMessage={errors.email_username} />
                        <Input name="password" placeholder="Password" type="password" value={data.password} onChange={(event) => setData('password', event.target.value)} invalidMessage={errors.password} />
                    </div>

                    <Button loading={processing}>Login</Button>
                </form>

                <p className="text-[12px]"><span className="font-semibold">DinePOS</span> | Code with love by <a href="https://github.com/arzaqulmughny" target="_blank" className="font-semibold hover:underline">Arza</a></p>
            </div>
        </>
    )
}

export default Login;