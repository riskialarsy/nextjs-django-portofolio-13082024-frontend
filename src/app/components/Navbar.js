import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-900 to-black shadow-lg relative overflow-hidden">
      <div className="container mx-auto px-4 py-3 z-10 relative">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-white text-xl font-semibold tracking-tight hover:scale-105 transition-transform duration-300 ease-in-out">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">
              Portofolio Saya
            </span>
          </Link>
          <div className="flex space-x-2">
            {[
              { href: "/tentang", label: "Tentang" },
              { href: "/proyek", label: "Proyek" },
              { href: "/kontak", label: "Kontak" },
              { href: "/data", label: "Data" }
            ].map((link, index) => (
              <Link key={link.href} href={link.href} className="group relative px-4 py-2 rounded-full text-white text-sm font-medium overflow-hidden">
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:translate-x-full group-hover:scale-102"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:translate-x-full group-hover:scale-102 delay-100"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-full skew-x-12 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:translate-x-0 group-hover:scale-102 delay-200"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-full -skew-x-12 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:translate-x-0 group-hover:scale-102 delay-300"></span>
                <span className="relative">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0">
        <div className="w-full h-full">
          {Array.from({ length: 50 }).map((_, index) => (
            <div
              key={index}
              className="absolute rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: '2px',
                height: '2px',
                opacity: Math.random(),
                animation: `twinkle ${3 + Math.random() * 7}s linear infinite ${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes twinkle {
          0% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
    </nav>
  );
}