import Image from "next/image";

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark flex justify-between m-10">
            <div className="flex items-center">
                <Image
                    src="/onelogo.svg" // Chemin relatif au dossier /public
                    alt="Logo de l'entreprise"
                    width={100} // Largeur requise pour l'optimisation
                    height={30} // Hauteur requise pour l'optimisation
                    className="h-8 w-auto" // (Optionnel) Classes Tailwind pour styliser
                />
            </div>
            <div>
                <ul className="flex justify-between gap-x-5">
                    <li><a href="">accueil</a></li>
                    <li><a href="./contacts">contacts</a></li>
                    <li><a href="./a-propos">A propos</a></li>
                </ul>
            </div>
            <div className="flex space-x-4">
                <button className=" border border-white p-2 rounded-full hover:bg-gray-700 hover:text-white transition duration-300 hover:cursor-pointer">Creer un compte</button>
                <button className=" border border-white text-black bg-white p-2 rounded-full hover:bg-gray-700 hover:text-white transition duration-300 hover:cursor-pointer">Se connecter</button>
            </div>
        </nav>
    );
};

export default Navbar;