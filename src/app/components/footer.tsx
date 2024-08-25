export default function Footer () {
    return (
        <footer className="bg-gray-800 py-8 text-gray-300 text-md flex flex-col justify-start items-center w-full">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-bold pl-4 mb-4 text-gray-200">Informações para contato</h3>
          <ul className="space-y-1">
            <li><p className="text-sm font-light pl-4 hover:underline">comercial@g10solution.com.br</p></li>
            <li><p className="text-sm font-light pl-4 hover:underline">financeiro@g10solution.com.br</p></li>
            <li><p className="text-sm font-light pl-4 hover:underline">suporte@g10solution.com.br</p></li>
          </ul>
        </div>

        <div className="mb-6 md:mb-0">
        <h3 className="text-lg font-bold pl-4 mb-4 text-gray-200">telefone para contato</h3>
        <ul className="space-y-1">
          <li><p className="text-sm font-light pl-4">Ligações e WhatsApp</p></li>
          <li><p className="text-sm font-light pl-4">+(85) 988060437</p></li>
        </ul>
        </div>

        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-bold pl-4 mb-4 text-gray-200">Siga nos</h3>
        </div>
        
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} G10 Solution. Todos os direitos reservados.</p>
        </div>

      <div className="mt-4 border-t border-gray-700 pt-4 text-center font-light text-slate-400">
        <p className="text-sm">Desenvolvido por &copy;danielcódigos {new Date().getFullYear()}. Todos os direitos reservados.</p>
      </div>




    </div>
  </footer>
    )
}