import Image from 'next/image';
import Link from 'next/link';

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
      url: "https://URL_DO_TEU_SITE_PRINCIPAL.vercel.app/catalogo", // <-- LINK ATUALIZADO
      destaque: false,
      icone: "💎" 
    },
    {
      titulo: "Nossos Serviços",
      subtitulo: "Cozinhas, Banheiros e Projetos Especiais",
      url: "https://URL_DO_TEU_SITE_PRINCIPAL.vercel.app/servicos", // <-- LINK ATUALIZADO
      destaque: false,
      icone: "🏗️"
    },
    {
      titulo: "Visite nosso Site Oficial",
      subtitulo: "Conheça a nossa história",
      url: "https://URL_DO_TEU_SITE_PRINCIPAL.vercel.app/", // <-- LINK ATUALIZADO
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
    // Fundo Escuro Futurista com Overflow Hidden para os efeitos de luz não passarem da tela
    <main className="relative min-h-screen bg-slate-950 overflow-hidden flex flex-col items-center py-16 px-6 sm:px-12 font-sans text-slate-200">
      
      {/* Efeitos de Luz de Fundo (Glowing Orbs) */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-amber-500/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-md flex flex-col items-center">
        
        {/* Avatar / Logo com Anel Brilhante */}
        <div className="relative w-28 h-28 mb-6 group">
          <div className="absolute inset-0 bg-amber-500 rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative w-full h-full bg-slate-900 rounded-full border-2 border-slate-700 p-4 flex items-center justify-center overflow-hidden">
            <Image 
              src="/D.png" 
              alt="Logo Departamento da Pedra" 
              fill
              className="object-contain p-2"
              priority
            />
          </div>
        </div>

        {/* Título e Bio */}
        <h1 className="text-2xl font-black text-white tracking-tight mb-2 text-center">
          DEPARTAMENTO DA PEDRA
        </h1>
        <p className="text-slate-400 text-sm text-center mb-10 font-medium px-4">
          Transformando ambientes com o mais alto padrão em pedras naturais e industrializadas.
        </p>

        {/* Lista de Links */}
        <div className="w-full flex flex-col gap-4">
          {links.map((link, index) => (
            <a 
              key={index}
              href={link.url}
              target={link.url.startsWith('http') ? "_blank" : "_self"}
              rel={link.url.startsWith('http') ? "noopener noreferrer" : ""}
              className={`group relative w-full p-4 rounded-2xl flex items-center gap-4 transition-all duration-300 hover:scale-[1.02] overflow-hidden ${
                link.destaque 
                  ? 'bg-amber-500/10 border border-amber-500/50 hover:bg-amber-500/20 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]' 
                  : 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-lg backdrop-blur-md'
              }`}
            >
              {/* Ícone */}
              <div className="w-12 h-12 shrink-0 rounded-full bg-slate-900/50 flex items-center justify-center text-2xl shadow-inner border border-white/5">
                {link.icone.includes('/') ? (
                  <Image src={link.icone} width={24} height={24} alt="Ícone" className="brightness-0 invert opacity-90" />
                ) : (
                  <span>{link.icone}</span>
                )}
              </div>

              {/* Textos */}
              <div className="flex flex-col text-left">
                <span className={`font-bold text-[15px] ${link.destaque ? 'text-amber-400' : 'text-slate-200'}`}>
                  {link.titulo}
                </span>
                <span className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                  {link.subtitulo}
                </span>
              </div>

              {/* Seta de Ação Escondida que aparece no Hover */}
              <div className="absolute right-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-4 transition-all duration-300 text-slate-400">
                →
              </div>
            </a>
          ))}
        </div>

        {/* Redes Sociais no Rodapé da Bio */}
        <div className="mt-12 flex gap-6">
          <a href="https://www.instagram.com/departamento.da.pedra/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-amber-500 hover:border-amber-500 hover:scale-110 transition-all duration-300">
            <Image src="/imagens_produtos/icones/instagram_icone2.png" width={20} height={20} alt="Instagram" className="brightness-0 invert" />
          </a>
          <a href="https://www.facebook.com/Departamentodapedra2013" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-amber-500 hover:border-amber-500 hover:scale-110 transition-all duration-300">
            <Image src="/imagens_produtos/icones/facebook_icone.png" width={20} height={20} alt="Facebook" className="brightness-0 invert" />
          </a>
        </div>

      </div>
    </main>
  );
}