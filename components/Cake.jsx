export default function Cake({ title, description, icon }) {
    return (
        <div className="
        relative group w-full max-w-sm
        overflow-hidden rounded-2xl
        p-1 /* Isso cria o espaço para a borda gradiente */
        transition-all duration-500 hover:-translate-y-2
      ">

            {/* 1. Efeito de Borda Brilhante (Glow) que aparece no Hover */}
            <div className="
          absolute inset-0 
          bg-linear-to-r from-transparent via-white/40 to-transparent
          opacity-0 group-hover:opacity-100 
          -translate-x-full group-hover:translate-x-full
          transition-all duration-1000 ease-in-out
        "/>

            {/* 2. O Conteúdo do Card (Vidro Escuro) */}
            <div className="
          relative h-full
          bg-black/40 backdrop-blur-xl
          border border-white/10
          rounded-2xl p-8
          shadow-[0_4px_20px_rgba(0,0,0,0.5)]
          group-hover:bg-black/50 group-hover:border-white/30
          group-hover:shadow-[0_8px_30px_rgba(255,255,255,0.1)]
          transition-all duration-500
        ">

                {/* Ícone ou Elemento Visual */}
                <div className="
            w-12 h-12 mb-6 rounded-lg 
            bg-linear-to-br from-white/20 to-transparent 
            border border-white/10 flex items-center justify-center
            text-2xl text-white group-hover:scale-110 transition-transform duration-500
          ">
                    {icon || "✨"}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
                    {title || "Título do Card"}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {description || "Essa é uma descrição placeholder para mostrar como o texto se comporta no vidro fosco."}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-white/60 group-hover:text-white cursor-pointer transition-colors">
                    Saiba mais
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>

            </div>
        </div>
    )
}