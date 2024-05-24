import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-[#EFE3E3] py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left text-black">
          <div className="mb-6 md:mb-0">
            <h1 className="text-lg font-bold">Tian Fastigheter</h1>
            <p>Organisationsnummer: 559044-8337</p>
            <p>Adress: Grev Turegatan 26, 114 38 Stockholm</p>
          </div>
          <div className="mb-6 md:mb-0">
            <h2 className="font-bold">Kontaktuppgifter</h2>
            <p>E-post: info@tianfastigheter.se</p>
            <p>Telefon: +46123456799</p>
          </div>
          <div className="flex space-x-4 justify-center md:justify-start">
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <FaYoutube size={24} />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} by Tian Fastigheter. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
