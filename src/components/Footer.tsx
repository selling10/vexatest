
export const Footer = () => {
  return (
    <footer className="bg-[#EFE3E3] py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left text-black">
          <div>

          </div>
          <div className="mb-2 md:mb-0">
            <h1 className="text-lg font-bold">Vexa Industrihus, en del av Utvide Fastigheter AB</h1>
            <p>Org. Nummer: 559044-8337</p>
            <p>Adress: Grev Turegatan 26, 114 38 Stockholm</p>
          </div>
          <div className="mb- md:mb-0">
            <h2 className="font-bold">Kontaktuppgifter</h2>
            <p>E-post: info@vexaindustrihus.se</p>
  
          </div>
          <div>

          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} by Utvide Fastigheter AB. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
