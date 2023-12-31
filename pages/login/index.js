import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [authenticated, setAuthenticated] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();

        // Aqui você pode adicionar a lógica de autenticação, por exemplo, uma chamada a uma API
        // Simulando uma autenticação simples por enquanto
        if (email === "seu@email.com" && password === "123") {
            setAuthenticated(true);
        } else {
            // Se a autenticação falhar, você pode exibir uma mensagem de erro
            console.log("Credenciais inválidas");
        }
    };

    const handleLogout = () => {
        // Simplesmente define o estado 'authenticated' como falso para sair da área logada
        setAuthenticated(false);
    };

    // Verifica se o usuário está autenticado e redireciona se necessário
    if (authenticated) {
        router.push("/teste");
        return null; // Você pode renderizar algo enquanto redireciona
    }
    return (
        <div className="flex flex-col items-center md:flex-row md:h-screen" style={{ background: 'linear-gradient(to right, #4a148c, #880e4f)' }}>
            <div className="flex items-center justify-center w-full md:w-1/2">
                <Image src="/demo/images/logo/logo.png" alt="Login Image" width={800} height={600} />
            </div>
            <div className="flex flex-col items-center justify-center w-full md:w-1/4">
                <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-md shadow-md">
                    <div>
                        <h1 className="text-2xl font-bold">Bem Vindo(a)!</h1>
                        <p className="mt-2 text-gray-600">
                            Por favor faça o login para continuar.
                        </p>
                    </div>
                    <form className="mt-8 space-y-6">
                        <div>
                            <label htmlFor="email" className="block font-bold text-gray-700">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Digite o seu email"
                                className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block font-bold text-gray-700"
                            >
                                Senha
                            </label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Digite a sua senha"
                                className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                                required
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full px-4 py-3 font-bold text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700"
                            >
                                Entrar na Garagem
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}