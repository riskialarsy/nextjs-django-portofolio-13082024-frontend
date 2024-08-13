'use client';

import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import ThreeScene from '../components/ThreeScene';

export default function Data() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://riskiprana123.pythonanywhere.com/api/buku/')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <Layout>
      <div className="relative min-h-screen bg-black overflow-hidden">
        <ThreeScene />
        <div className="container mx-auto px-4 py-8 relative z-10">
          <h1 className="text-4xl font-bold mb-8 text-center text-blue-200">Data Buku Perpustakaan</h1>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-indigo-900 bg-opacity-50 rounded-lg">
              <thead>
                <tr className="text-blue-200">
                  <th className="p-3">Judul Buku</th>
                  <th className="p-3">Penulis</th>
                  <th className="p-3">Tahun Terbit</th>
                  <th className="p-3">Peminjam</th>
                  <th className="p-3">Tanggal Pinjam</th>
                  <th className="p-3">Tanggal Kembali</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((buku, index) => (
                  <tr key={index} className="text-blue-100 hover:bg-indigo-800 transition-colors duration-200">
                    <td className="p-3">{buku.judul_buku}</td>
                    <td className="p-3">{buku.penulis}</td>
                    <td className="p-3">{buku.tahun_terbit}</td>
                    <td className="p-3">{buku.peminjam}</td>
                    <td className="p-3">{buku.tanggal_pinjam}</td>
                    <td className="p-3">{buku.tanggal_kembali}</td>
                    <td className="p-3">{buku.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}
