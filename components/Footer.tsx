export const Footer = () => {
    return (
        <footer className="bg-gray-800 p-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <p className="text-white text-center md:text-left mb-4 md:mb-0">
                    Creado por Manuel Emilio Rojas Zamora
                </p>
                <p className="text-white text-center md:text-right">
                    &copy; {new Date().getFullYear()} Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}
