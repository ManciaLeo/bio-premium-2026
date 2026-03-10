import Image from 'next/image';

export default function LinksBio() {
  const links = [
    {
      titulo: "Falar com Especialista (WhatsApp)",
      subtitulo: "Orçamentos rápidos e sem compromisso",
      url: "https://wa.me/5554996633724",
      destaque: true,
      icone: "/imagens_produtos/icones/whatsapp_icone.png"
    },
    {
      titulo: "Acessar Catálogo Digital",
      subtitulo: "Mármores, Granitos e Quartzos",
      url: "https://departamento-da-pedra.vercel.app/catalogo", 
      destaque: false,
      icone: "💎" 
    },
    {
      titulo: "Nossos Serviços",
      subtitulo: "Cozinhas, Banheiros e Projetos Especiais",
      url: "https://departamento-da-pedra.vercel.app/servicos", 
      destaque: false,
      icone: "🏗️"
    },
    {
      titulo: "Visite nosso Site Oficial",
      subtitulo: "Conheça a nossa história",
      url: "https://departamento-da-pedra.vercel.app/", 
      destaque: false,
      icone: "🌐"
    },
    {
      titulo: "Como Chegar",
      subtitulo: "Sede em Erechim - RS",
      url: "https://maps.google.com/?q=Erechim,+RS",
      destaque: false,
      icone: "📍"
    }
  ];

  return (
    <main className="relative min-h-screen bg-slate-950 overflow-hidden flex flex-col items-center py-16 px-6 sm:px-12 font-sans text-slate-200">
      
      {/* Efeitos de Luz de Fundo (Ambiente) */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-md flex flex-col items-center">
        
        {/* Avatar / Logo */}
        <div className="relative w-28 h-28 mb-6 group">
          <div className="absolute inset-0 bg-amber-500 rounded-full blur-xl opacity-40 animate-pulse duration-[3000ms]"></div>
          <div className="relative w-full h-full bg-slate-900 rounded-full border border-slate-700 p-4 flex items-center justify-center overflow-hidden z-10">
            <Image 
              src="/D.png" 
              alt="Logo Departamento da Pedra" 
              fill
              className="object-contain p-2"
              priority
            />
          </div>
        </div>

        <h1 className="text-2xl font-black text-white tracking-tight mb-2 text-center">
          DEPARTAMENTO DA PEDRA
        </h1>
        <p className="text-slate-400 text-sm text-center mb-10 font-medium px-4">
          Transformando ambientes com o mais alto padrão em pedras naturais e industrializadas.
        </p>

        {/* Lista de Links com o TEU efeito Neon da Velha Guarda */}
        <div className="w-full flex flex-col gap-6">
          {links.map((link, index) => (
            <div key={index} className="w-full flex flex-col items-center">
              
              {/* Aplicando a tua classe animate-neon diretamente na tag <a> */}
              <a 
                href={link.url}
                target={link.url.startsWith('http') ? "_blank" : "_self"}
                rel={link.url.startsWith('http') ? "noopener noreferrer" : ""}
                className={`relative flex w-full h-full items-center gap-4 bg-slate-900 p-4 rounded-2xl border transition-transform duration-300 hover:scale-[1.03] ${
                  link.destaque 
                    ? 'border-amber-500/50 animate-neon-amber z-10' 
                    : 'border-blue-500/30 animate-neon-blue hover:border-blue-500/60'
                }`}
              >
                {/* Ícone */}
                <div className={`w-12 h-12 shrink-0 rounded-full bg-slate-950/50 flex items-center justify-center text-2xl shadow-inner border ${link.destaque ? 'border-amber-500/40' : 'border-white/5'}`}>
                  {link.icone.includes('/') ? (
                    <Image src={link.icone} width={24} height={24} alt="Ícone" className={`brightness-0 invert ${link.destaque ? 'opacity-100' : 'opacity-70'}`} />
                  ) : (
                    <span>{link.icone}</span>
                  )}
                </div>

                {/* Textos */}
                <div className="flex flex-col text-left">
                  <span className={`font-bold text-[15px] ${link.destaque ? 'text-amber-400' : 'text-slate-200'}`}>
                    {link.titulo}
                  </span>
                  <span className="text-xs text-slate-400 mt-1 line-clamp-1">
                    {link.subtitulo}
                  </span>
                </div>

                {/* Seta */}
                <div className="absolute right-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-3 transition-all duration-300 text-slate-400 font-bold">
                  →
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Redes Sociais */}
        <div className="mt-14 flex gap-6">
          <a href="https://www.instagram.com/departamento.da.pedra/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-amber-500 hover:shadow-[0_0_20px_rgba(245,158,11,0.6)] transition-all duration-300 hover:scale-110">
            <Image src="/imagens_produtos/icones/instagram_icone2.png" width={20} height={20} alt="Instagram" className="brightness-0 invert" />
          </a>
          <a href="https://www.facebook.com/Departamentodapedra2013" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-amber-500 hover:shadow-[0_0_20px_rgba(245,158,11,0.6)] transition-all duration-300 hover:scale-110">
            <Image src="/imagens_produtos/icones/facebook_icone.png" width={20} height={20} alt="Facebook" className="brightness-0 invert" />
          </a>
        </div>

      </div>
    </main>
  );
}