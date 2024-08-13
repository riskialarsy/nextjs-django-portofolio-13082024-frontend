'use client';

import { useState, useEffect, Suspense } from 'react';
import Layout from '../components/Layout';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, useProgress, Html } from '@react-three/drei';
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing';
import ProfileModel from '../components/ProfileModel';
import ThreeScene from '../components/ThreeScene';

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

export default function Tentang() {
  const [isModelLoaded, setIsModelLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModelLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <div className="relative min-h-screen bg-black overflow-hidden">
        <ThreeScene />
        <div className="container mx-auto relative z-10 px-4 py-8 flex flex-col md:flex-row items-start">
          <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-8 text-center md:text-left relative z-10 animate-pulse text-blue-200">Tentang Saya</h1>
            <div className="bg-indigo-900 bg-opacity-50 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 border border-blue-300">
              <p className="text-lg mb-4 animate-fade-in text-blue-100">Saya adalah seorang aktivis yang berdedikasi untuk pembebasan Palestina. #FREEPALESTINE</p>
              <p className="text-lg mb-4 animate-slide-in-right text-blue-100">Saya berkomitmen untuk menyuarakan keadilan dan mengadvokasi hak-hak rakyat Palestina yang tertindas.</p>
              <p className="text-lg mb-10 animate-slide-in-left text-blue-100">
                Latar belakang saya dalam aktivisme dan pemahaman tentang konflik di Timur Tengah memungkinkan saya untuk menyebarkan kesadaran dan mendukung gerakan solidaritas global. #ZIONIS ISRAEL PENJAJAH PENGGENOSIDA
              </p>
              <p className="text-lg mb-4 animate-slide-in-left text-blue-100">Note : Karangan Riski</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-[900px]">
            <Canvas camera={{ position: [0, 0, 1.8], fov: 75 }}>
              <color attach="background" args={['#000000']} />
              <ambientLight intensity={2.9} />
              <pointLight position={[10, 10, 10]} intensity={0.8} color="#4B0082" />
              <Suspense fallback={<Loader />}>{isModelLoaded && <ProfileModel url="/models/profile.gltf" />}</Suspense>
              <OrbitControls enableZoom={false} enablePan={false} />
              <Stars radius={300} depth={100} count={10000} factor={4} saturation={0} fade speed={0.5} />
              <EffectComposer>
                <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} height={300} />
                <Noise opacity={0.05} />
                <Vignette eskil={false} offset={0.1} darkness={1.3} />
              </EffectComposer>
            </Canvas>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20">
          <h2 className="text-3xl font-semibold mb-6 text-center relative z-10 animate-pulse text-blue-200">Fokus Advokasi</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {['Hak Asasi Manusia', 'Keadilan Sosial', 'Solidaritas Global', 'Kampanye Media Sosial', 'Penggalangan Dana', 'Edukasi Publik', 'Demonstrasi Damai', 'Diplomasi Akar Rumput'].map((skill, index) => (
              <div key={index} className="group relative bg-indigo-800 bg-opacity-50 rounded-lg p-4 text-center transform hover:rotate-3 hover:scale-110 transition-all duration-300 animate-float border border-blue-400 overflow-hidden">
                <span className="font-medium text-blue-100 relative z-10 transition-all duration-300 group-hover:text-white">{skill}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine"></div>
                {index % 2 === 0 && (
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-6 h-6 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </div>
                )}
                {index % 3 === 0 && (
                  <div className="absolute bottom-0 right-0 w-full h-full flex items-end justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full animate-ping"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <style jsx>{`
            @keyframes shine {
              100% {
                left: 125%;
              }
            }
            .animate-shine {
              animation: shine 1.5s infinite;
            }
          `}</style>

          <h2 className="text-3xl font-semibold mb-6 text-center relative z-10 animate-pulse text-blue-200">Pengalaman Aktivisme</h2>
          <div className="space-y-8 mb-16">
            <div className="bg-gradient-to-r from-indigo-900 to-purple-900 bg-opacity-70 p-8 rounded-2xl shadow-2xl transform hover:translate-x-3 hover:translate-y-2 transition-all duration-500 border-2 border-blue-400 hover:border-pink-400 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <h3 className="text-2xl font-bold mb-4 animate-slide-in-right text-blue-200 group-hover:text-pink-200 transition-colors duration-300">Koordinator Kampanye Pembebasan Palestina</h3>
              <p className="text-blue-300 mb-4 animate-fade-in group-hover:text-indigo-200 transition-colors duration-300">Gerakan Solidaritas Palestina - 2020-Sekarang</p>
              <ul className="list-none animate-slide-in-left text-blue-100 space-y-3">
                {[
                  'Mengorganisir demonstrasi damai dan aksi solidaritas untuk Palestina',
                  'Mengelola kampanye media sosial untuk meningkatkan kesadaran global',
                  'Berkolaborasi dengan organisasi internasional untuk advokasi hak-hak Palestina',
                ].map((item, index) => (
                  <li key={index} className="flex items-center group-hover:text-indigo-100 transition-colors duration-300">
                    <svg className="w-5 h-5 mr-2 text-blue-400 group-hover:text-pink-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-tl from-blue-400 to-purple-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300 animate-pulse"></div>
            </div>
            <div className="bg-gradient-to-r from-indigo-900 to-purple-900 bg-opacity-70 p-8 rounded-2xl shadow-2xl transform hover:translate-x-3 hover:translate-y-2 transition-all duration-500 border-2 border-blue-400 hover:border-pink-400 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <h3 className="text-2xl font-bold mb-4 animate-slide-in-right text-blue-200 group-hover:text-pink-200 transition-colors duration-300">Relawan Bantuan Kemanusiaan</h3>
              <p className="text-blue-300 mb-4 animate-fade-in group-hover:text-indigo-200 transition-colors duration-300">Yayasan Peduli Palestina - 2017-2020</p>
              <ul className="list-none animate-slide-in-left text-blue-100 space-y-3">
                {['Berpartisipasi dalam misi bantuan kemanusiaan ke Gaza', 'Mengkoordinasikan penggalangan dana untuk proyek-proyek pembangunan di Palestina', 'Menyelenggarakan seminar dan workshop tentang situasi di Palestina'].map(
                  (item, index) => (
                    <li key={index} className="flex items-center group-hover:text-indigo-100 transition-colors duration-300">
                      <svg className="w-5 h-5 mr-2 text-blue-400 group-hover:text-pink-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {item}
                    </li>
                  )
                )}
              </ul>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-tl from-blue-400 to-purple-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300 animate-pulse"></div>
            </div>
          </div>

          <h2 className="text-3xl font-semibold mb-6 text-center relative z-10 animate-pulse text-blue-200">Pendidikan</h2>
          <div className="bg-gradient-to-r from-indigo-900 to-purple-900 p-8 rounded-3xl shadow-2xl mb-16 transform hover:skew-y-2 hover:scale-105 transition-all duration-500 border-4 border-blue-400 hover:border-pink-400 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <h3 className="text-2xl font-bold mb-4 animate-bounce text-blue-200 group-hover:text-pink-200 transition-colors duration-300">Sarjana Hubungan Internasional</h3>
            <p className="text-blue-300 mb-6 animate-pulse group-hover:text-indigo-200 transition-colors duration-300">Universitas Tanjungpura - Lulus 2024</p>
            <ul className="list-none animate-slide-in-left text-blue-100 space-y-3">
              {['Fokus pada Studi Timur Tengah', 'Skripsi: "Dampak Konflik Israel-Palestina terhadap Stabilitas Regional"', 'Partisipasi aktif dalam Model United Nations'].map((item, index) => (
                <li key={index} className="flex items-center group-hover:text-indigo-100 transition-colors duration-300">
                  <svg className="w-5 h-5 mr-2 text-blue-400 group-hover:text-pink-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <h2 className="text-3xl font-semibold mb-6 text-center relative z-10 animate-pulse text-blue-200">Proyek Advokasi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-gradient-to-br from-indigo-900 to-purple-900 bg-opacity-70 shadow-2xl rounded-3xl overflow-hidden transform hover:rotate-3 hover:scale-110 transition-all duration-500 border-4 border-blue-400 hover:border-pink-400 group">
              <div className="p-8 relative backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <h3 className="text-2xl font-bold mb-4 relative z-10 animate-bounce text-blue-200 group-hover:text-pink-200 transition-colors duration-300">#FreePalestine: Kampanye Digital Interaktif</h3>
                <p className="text-blue-100 mb-6 relative z-10 animate-pulse group-hover:text-indigo-200 transition-colors duration-300">
                  Platform media sosial inovatif yang menggabungkan realitas virtual dan augmented reality untuk memberikan pengalaman immersif tentang kehidupan di Palestina, mendorong aksi global melalui gamifikasi dan tantangan viral.
                </p>
                <a href="#" className="inline-block bg-blue-500 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-full relative z-10 animate-pulse transition-all duration-300 transform hover:scale-110">
                  Jelajahi Kampanye
                </a>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-tl from-blue-400 to-purple-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300 animate-pulse"></div>
              </div>
            </div>
            <div className="bg-gradient-to-bl from-indigo-900 to-purple-900 bg-opacity-70 shadow-2xl rounded-3xl overflow-hidden transform hover:rotate-3 hover:scale-110 transition-all duration-500 border-4 border-blue-400 hover:border-pink-400 group">
              <div className="p-8 relative backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <h3 className="text-2xl font-bold mb-4 relative z-10 animate-bounce text-blue-200 group-hover:text-pink-200 transition-colors duration-300">&quot;Suara dari Gaza&quot;: Dokumenter Interaktif 360°</h3>
                <p className="text-blue-100 mb-6 relative z-10 animate-pulse group-hover:text-indigo-200 transition-colors duration-300">
                  Pengalaman sinematik revolusioner yang memungkinkan penonton untuk menjelajahi Gaza secara virtual, berinteraksi dengan penduduk holografik, dan membuat keputusan yang mempengaruhi alur cerita, menciptakan empati mendalam
                  dan pemahaman kompleks tentang situasi di Palestina.
                </p>
                <a href="#" className="inline-block bg-blue-500 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-full relative z-10 animate-pulse transition-all duration-300 transform hover:scale-110">
                  Mulai Perjalanan Virtual
                </a>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-tl from-blue-400 to-purple-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
