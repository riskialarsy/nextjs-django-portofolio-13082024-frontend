export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 to-black text-white p-8 mt-auto relative overflow-hidden">
      <div className="container mx-auto text-center z-10 relative">
        <p className="text-2xl font-bold mb-4 animate-pulse text-blue-200">&copy; 2024 Riski</p>
        <p className="text-sm opacity-75 mb-6 text-blue-100">Hak Cipta Dilindungi</p>
        <div className="flex justify-center space-x-4 mb-6">
          {[
            { name: 'GitHub', url: 'https://github.com/riskialarsy' },
            { name: 'Facebook', url: 'https://web.facebook.com/riski.prana.739?locale=id_ID' },
            { name: 'Instagram', url: 'https://www.instagram.com/riski_al_arsy/' }
          ].map((social) => (
            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors duration-300 transform hover:scale-110 hover:rotate-12">
              {social.name}
            </a>
          ))}
        </div>
        <div className="text-xs opacity-50 text-blue-100">
          <p>Dibuat dengan 🌟 menggunakan Next.js, Three.js, Blender, dan Tailwind CSS</p>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x"></div>
      <div className="absolute inset-0">
        {Array.from({ length: 100 }).map((_, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              animation: `twinkle ${Math.random() * 5 + 3}s linear infinite ${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      <style jsx>{`
        @keyframes twinkle {
          0% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
    </footer>
  );
}
