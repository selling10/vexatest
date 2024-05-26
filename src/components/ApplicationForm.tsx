import backgroundImage from "@/assets/background5.png";

console.log("Resolved Background Image Path:", backgroundImage);  // Add this line for logging

export const ApplicationForm = () => {
  return (
    <section id="apply"
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-[#454545] opacity-40"></div>
      <div className="relative container mx-auto my-12 p-4 bg-white bg-opacity-80 rounded-lg shadow-md max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-4 mt-5 text-black">Vi köper din fastighet till marknadsvärde</h2>
            <p className="mb-4 text-black">
              Genom att sälja er lokal och leasa tillbaka den, kan ni fortsätta frigöra kapital och fokusera på att utveckla er verksamhet.
            </p>
            <p className="mb-4 text-black">
              Fyll i era uppgifter så återkommer vi med ett preliminärt förslag på bud och hyresnivå.
            </p>
            <p className="font-semibold text-black">
              Gäller för närvarande endast kommersiella lokaler.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
            <h3 className="text-2xl font-bold mb-6 text-black">Ansök och få ett bud</h3>
            <form>
              <div className="mb-4">
                <label className="block text-left font-semibold mb-2 text-black">Namn</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg" placeholder="Namn" />
              </div>
              <div className="mb-4">
                <label className="block text-left font-semibold mb-2 text-black">Telefonnummer</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg" placeholder="07XX XXX XXX" />
              </div>
              <div className="mb-4">
                <label className="block text-left font-semibold mb-2 text-black">E-postadress</label>
                <input type="email" className="w-full px-4 py-2 border rounded-lg" placeholder="Skriv e-postadress" />
              </div>
              <div className="mb-4">
                <label className="block text-left font-semibold mb-2 text-black">Företagets Organisationsnummer</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg" placeholder="Skriv organisationsnummer" />
              </div>
              <div className="mb-4">
                <label className="block text-left font-semibold mb-2 text-black">Fastighetens Adress</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg" placeholder="Skriv adress" />
              </div>
              <div className="mb-4">
                <label className="block text-left font-semibold mb-2 text-black">Postnummer</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg" placeholder="Skriv postnummer" />
              </div>
              <div className="mb-4">
                <label className="block text-left font-semibold mb-2 text-black">Ort</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg" placeholder="Skriv ort" />
              </div>
              <div className="mb-4">
                <div className="flex items-center">
                  <input type="checkbox" id="policy" className="mr-2" />
                  <label htmlFor="policy" className="text-sm text-black">
                    Jag godkänner <a href="#" className="text-blue-600">integritetspolicyn</a>
                  </label>
                </div>
              </div>
              <button type="submit" className="w-full bg-black text-white py-2 rounded-full font-bold">Skicka</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
