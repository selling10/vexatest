import { useState, useEffect } from "react";
import Modal from "react-modal";
import backgroundImage from "@/assets/background.png";

console.log("Resolved Background Image Path:", backgroundImage);

Modal.setAppElement("#root"); // This is to avoid screen reader issues with React Modal

export const ApplicationForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    namn: "",
    telefonnummer: "",
    epostadress: "",
    organisationsnummer: "",
    adress: "",
    postnummer: "",
    ort: "",
  });

  const openModal = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Lock background scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto"; // Unlock background scrolling
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto"; // Clean up in case of component unmount
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const isFormValid = () => {
    const { namn, telefonnummer, epostadress } = formValues;
    return namn && telefonnummer && epostadress;
  };

  return (
    <section
      id="apply"
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-[black] opacity-40"></div>
      <div className="relative container mx-auto my-12 p-4 bg-white bg-opacity-80 rounded-lg shadow-md max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-4 mt-5 text-black">
              Vi köper din fastighet till marknadsvärde
            </h2>
            <p className="mb-4 text-black">
              Genom att sälja er lokal och leasa tillbaka den, kan ni fortsätta
              frigöra kapital och fokusera på att utveckla er verksamhet.
            </p>
            <p className="mb-4 text-black">
              Fyll i era uppgifter så återkommer vi med ett preliminärt förslag
              på bud och hyresnivå.
            </p>
            <p className="font-semibold text-black">
              Gäller för närvarande endast kommersiella lokaler.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
            <h3 className="text-2xl font-bold mb-6 text-black">
              Ansök och få ett bud
            </h3>
            <form>
              <div className="mb-4">
                <label className="block text-left font-semibold mb-2 text-black">
                  Namn <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="namn"
                  value={formValues.namn}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black"
                  placeholder="Namn"
                />
              </div>
              <div className="mb-4">
                <label className="block text-left font-semibold mb-2 text-black">
                  Telefonnummer <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="telefonnummer"
                  value={formValues.telefonnummer}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black"
                  placeholder="07XX XXX XXX"
                />
              </div>
              <div className="mb-4">
                <label className="block text-left font-semibold mb-2 text-black">
                  E-postadress <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  name="epostadress"
                  value={formValues.epostadress}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black"
                  placeholder="Skriv e-postadress"
                />
              </div>
              <div className="mb-4">
                <label className="block text-left font-semibold mb-2 text-black">
                  Företagets Organisationsnummer
                </label>
                <input
                  type="text"
                  name="organisationsnummer"
                  value={formValues.organisationsnummer}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black"
                  placeholder="Skriv organisationsnummer"
                />
              </div>
              <div className="mb-4">
                <label className="block text-left font-semibold mb-2 text-black">
                  Fastighetens Adress
                </label>
                <input
                  type="text"
                  name="adress"
                  value={formValues.adress}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black"
                  placeholder="Skriv adress"
                />
              </div>
              <div className="mb-4">
                <label className="block text-left font-semibold mb-2 text-black">
                  Postnummer
                </label>
                <input
                  type="text"
                  name="postnummer"
                  value={formValues.postnummer}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black"
                  placeholder="Skriv postnummer"
                />
              </div>
              <div className="mb-4">
                <label className="block text-left font-semibold mb-2 text-black">
                  Ort
                </label>
                <input
                  type="text"
                  name="ort"
                  value={formValues.ort}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black"
                  placeholder="Skriv ort"
                />
              </div>
              <div className="mb-4">
                <div className="flex items-center">
                  <input type="checkbox" id="policy" className="mr-2" />
                  <label htmlFor="policy" className="text-sm text-black">
                    Jag godkänner{" "}
                    <a href="#" className="text-blue-600" onClick={openModal}>
                      integritetspolicyn
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className={`w-full py-2 rounded-full font-bold ${
                  isFormValid()
                    ? "bg-black text-white"
                    : "bg-gray-400 text-gray-800 cursor-not-allowed"
                }`}
                disabled={!isFormValid()}
              >
                Skicka
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Modal for Privacy Policy */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Integritetspolicy"
        className="fixed inset-0 flex items-center justify-center p-4 z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
      >
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto overflow-y-auto max-h-full">
          <h2 className="text-2xl font-bold mb-4">Integritetspolicy</h2>
          <p className="mb-4">
            Välkommen till Tian Fastigheter! Vi värnar om din integritet och
            strävar efter att skydda dina personuppgifter. Denna
            integritetspolicy beskriver hur vi samlar in, använder, lagrar och
            skyddar dina personuppgifter när du besöker vår webbplats.
          </p>
          <h3 className="text-xl font-semibold mb-2">1. Insamling av Personuppgifter</h3>
          <p className="mb-4">
            Vi kan samla in följande typer av personuppgifter:
            <ul className="list-disc list-inside ml-4">
              <li>Kontaktinformation: Namn, e-postadress, telefonnummer och företagsnamn.</li>
              <li>Fastighetsinformation: Fastighetsadress, organisationsnummer och annan relevant information.</li>
              <li>Användningsdata: Information om hur du interagerar med vår webbplats, såsom IP-adress, webbläsartyp, och besökta sidor.</li>
            </ul>
          </p>
          <h3 className="text-xl font-semibold mb-2">2. Användning av Personuppgifter</h3>
          <p className="mb-4">
            Vi använder dina personuppgifter för följande ändamål:
            <ul className="list-disc list-inside ml-4">
              <li>Kommunikation: För att svara på dina förfrågningar och ge dig information om våra tjänster.</li>
              <li>Tjänsteleverans: För att erbjuda och administrera våra tjänster, inklusive att förbereda bud och hyresnivåer.</li>
              <li>Förbättring av Webbplatsen: För att analysera hur vår webbplats används och förbättra användarupplevelsen.</li>
            </ul>
          </p>
          <h3 className="text-xl font-semibold mb-2">3. Delning av Personuppgifter</h3>
          <p className="mb-4">
            Vi delar inte dina personuppgifter med tredje part, förutom:
            <ul className="list-disc list-inside ml-4">
              <li>Med ditt samtycke: Om du har godkänt att vi delar informationen.</li>
              <li>För att uppfylla juridiska krav: Om vi är skyldiga att göra det enligt lag eller juridiska processer.</li>
            </ul>
          </p>
          <h3 className="text-xl font-semibold mb-2">4. Lagring av Personuppgifter</h3>
          <p className="mb-4">
            Vi lagrar dina personuppgifter så länge det är nödvändigt för att uppfylla de ändamål som beskrivs i denna integritetspolicy eller så länge som krävs enligt lag. Vi vidtar lämpliga tekniska och organisatoriska åtgärder för att skydda dina personuppgifter mot obehörig åtkomst, förlust eller förstörelse.
          </p>
          <h3 className="text-xl font-semibold mb-2">5. Dina Rättigheter</h3>
          <p className="mb-4">
            Du har rätt att:
            <ul className="list-disc list-inside ml-4">
              <li>Få tillgång till dina personuppgifter: Begära en kopia av de personuppgifter vi har om dig.</li>
              <li>Rätta dina personuppgifter: Begära att vi korrigerar felaktiga eller ofullständiga uppgifter.</li>
              <li>Radera dina personuppgifter: Begära att vi raderar dina personuppgifter under vissa omständigheter.</li>
              <li>Invända mot behandlingen: Invända mot hur vi behandlar dina personuppgifter.</li>
            </ul>
          </p>
          <h3 className="text-xl font-semibold mb-2">6. Cookies</h3>
          <p className="mb-4">
            Vi använder cookies för att förbättra din upplevelse på vår webbplats. Cookies är små textfiler som lagras på din enhet när du besöker vår webbplats. Du kan ställa in din webbläsare att blockera cookies, men detta kan påverka funktionaliteten på vår webbplats.
          </p>
          <h3 className="text-xl font-semibold mb-2">7. Ändringar i denna Integritetspolicy</h3>
          <p className="mb-4">
            Vi kan uppdatera denna integritetspolicy från tid till annan. Vi uppmuntrar dig att regelbundet granska denna sida för de senaste informationen om våra integritetsrutiner.
          </p>
          <h3 className="text-xl font-semibold mb-2">8. Kontaktinformation</h3>
          <p className="mb-4">
            Om du har några frågor eller funderingar om denna integritetspolicy eller vår behandling av dina personuppgifter, vänligen kontakta oss:
            <br />
            <strong>Tian Fastigheter</strong>
            <br />
            E-post: <a href="mailto:info@tianfastigheter.se" className="text-blue-600">info@tianfastigheter.se</a>
            <br />
            Telefon: 07XX XXX XXX
            <br />
            Adress: [Din Adress Här]
          </p>
          <button
            onClick={closeModal}
            className="mt-4 px-4 py-2 bg-black text-white rounded-full font-bold"
          >
            Stäng
          </button>
        </div>
      </Modal>
    </section>
  );
};
