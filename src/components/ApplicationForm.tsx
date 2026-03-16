import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import backgroundImage from "@/assets/gjuteriet4.png";

export const ApplicationForm = () => {
  const [formValues, setFormValues] = useState({
    namn: "",
    telefonnummer: "",
    epostadress: "",
    företagsnamn: "",
    adress: "",
    postnummer: "",
    ort: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [isPolicyChecked, setIsPolicyChecked] = useState(false);

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

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsPolicyChecked(e.target.checked);
  };

  const isFormValid = () => {
    const { namn, telefonnummer, epostadress, företagsnamn } = formValues;
    return namn && telefonnummer && epostadress && företagsnamn && isPolicyChecked;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    const url = '/api/send-email';
    console.log("API URL: ", url);  // Log the URL to ensure it's correct

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      if (response.ok) {
        setFormValues({
          namn: "",
          telefonnummer: "",
          epostadress: "",
          företagsnamn: "",
          adress: "",
          postnummer: "",
          ort: "",
        });
        setSubmitMessage("Vi har tagit emot dina uppgifter och återkommer inom kort!");
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error("Error response: ", errorData);
        const errorMessage = errorData.error || errorData.message || "Något gick fel. Vänligen försök igen";
        setSubmitMessage(`Fel: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Error sending email: ", error);
      const errorMessage = error instanceof Error ? error.message : "Något gick fel. Vänligen försök igen";
      setSubmitMessage(`Fel: ${errorMessage}`);
    }
    setIsSubmitting(false);
  };

  return (
    <section
      id="apply"
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
      <div className="relative container mx-auto my-12 p-6 md:p-10 bg-white bg-opacity-95 rounded-xl shadow-2xl max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 mt-2 text-black tracking-tight">
              Kontakta oss
            </h2>
            <div className="w-16 h-1 bg-black mb-6"></div>
            <p className="mb-6 text-black text-lg leading-relaxed">
              Vill du komma i kontakt med oss?
            </p>
            <p className="mb-6 text-black text-lg leading-relaxed">
              Har du en fastighet du vill diskutera eller en fråga till oss?<br /><br />
              Fyll i formuläret så återkommer vi inom kort.
            </p>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="mb-4 text-black font-semibold text-lg">
                Kontaktuppgifter:
            </p>
              <p className="mb-2 text-black">
                E-post:{" "}
                <a
                  href="mailto:info@vexa.se"
                  className="text-black underline hover:text-gray-700 transition-colors font-medium"
                >
                  info@vexa.se
                </a>
              </p>
              <p className="text-black">
              Telefon: +46 (0) 79 - 307 80 20
            </p>
            </div>
          </div>
          <div className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-inner border border-gray-200">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-black">
              Skicka förfrågan
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-left font-semibold mb-2 text-black">
                  Namn <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="namn"
                  value={formValues.namn}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-black focus:outline-none focus:border-black transition-colors"
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
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-black focus:outline-none focus:border-black transition-colors"
                  placeholder="07X - XXX XX XX"
                />
              </div>
              <div className="mb-4">
                <label className="block text-left font-semibold mb-2 text-black">
                  E-post <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  name="epostadress"
                  value={formValues.epostadress}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-black focus:outline-none focus:border-black transition-colors"
                  placeholder="Skriv e-postadress"
                />
              </div>
              <div className="mb-4">
                <label className="block text-left font-semibold mb-2 text-black">
                  Företagsnamn <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="företagsnamn"
                  value={formValues.företagsnamn}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-black focus:outline-none focus:border-black transition-colors"
                  placeholder="Skriv företagsnamn"
                />
              </div>
              <div className="mb-4">
                <label className="block text-left font-semibold mb-2 text-black">
                  Fastighetens adress
                </label>
                <input
                  type="text"
                  name="adress"
                  value={formValues.adress}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-black focus:outline-none focus:border-black transition-colors"
                  placeholder="Skriv fastighetens adress"
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
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-black focus:outline-none focus:border-black transition-colors"
                  placeholder="Skriv fastighetens postnummer"
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
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-black focus:outline-none focus:border-black transition-colors"
                  placeholder="Skriv fastighetens ort"
                />
              </div>
              <div className="mb-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="policy"
                    className="mr-2"
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="policy" className="text-sm text-black">
                    Jag godkänner{" "}
                    <Link to="/privacy-policy" className="text-blue-600">
                      integritetspolicyn
                    </Link>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className={`w-full py-4 rounded-full font-semibold text-lg shadow-lg transition-all duration-300 ${
                  isFormValid()
                    ? "bg-black text-white hover:bg-gray-800 hover:shadow-xl"
                    : "bg-gray-400 text-gray-800 cursor-not-allowed"
                }`}
                disabled={!isFormValid() || isSubmitting}
              >
                {isSubmitting ? "Skickar..." : "Skicka"}
              </button>
              {submitMessage && (
                <p className="mt-4 text-center text-black">{submitMessage}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
