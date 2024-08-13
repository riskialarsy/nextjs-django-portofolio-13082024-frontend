"use client";

import Layout from '../components/Layout';
import { useState } from 'react';
import ThreeScene from '../components/ThreeScene';

export default function Kontak() {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    pesan: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Di sini Anda bisa menambahkan logika untuk mengirim data formulir
    console.log('Data formulir:', formData);
    alert('Pesan Anda telah terkirim!');
    setFormData({ nama: '', email: '', pesan: '' });
  };

  return (
    <Layout>
      <div className="relative min-h-screen bg-black overflow-hidden">
        <ThreeScene />
        <div className="container mx-auto px-4 py-8 relative z-10">
          <h1 className="text-4xl font-bold mb-8 text-center text-blue-200">Hubungi Saya</h1>
          <div className="max-w-lg mx-auto bg-indigo-900 bg-opacity-50 p-6 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="nama" className="block text-sm font-medium text-blue-100">Nama</label>
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-indigo-800 bg-opacity-50 text-blue-100"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-blue-100">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-indigo-800 bg-opacity-50 text-blue-100"
                />
              </div>
              <div>
                <label htmlFor="pesan" className="block text-sm font-medium text-blue-100">Pesan</label>
                <textarea
                  id="pesan"
                  name="pesan"
                  rows="4"
                  value={formData.pesan}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-indigo-800 bg-opacity-50 text-blue-100"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Kirim Pesan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}