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
        setSubmitMessage("Något gick fel. Vänligen försök igen");
      }
    } catch (error) {
      console.error("Error sending email: ", error);
      setSubmitMessage("Något gick fel. Vänligen försök igen");
    }
    setIsSubmitting(false);
  };

  return (
    <section
      id="apply"
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-[black] opacity-40"></div>
      <div className="relative container mx-auto my-12 p-4 bg-white bg-opacity-80 rounded-lg shadow-md max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-4 mt-5 text-black">
              Vi köper din fastighet till marknadsvärde
            </h2>
            <p className="mb-4 text-black">
              För att ansöka, fyll i era uppgifter så återkommer vi med ett preliminärt förslag på bud och hyresnivå.
            </p>
            <p className="mb-4 text-black">
              För tillfället tar vi endast emot ansökningar för kommersiella fastigheter med en minsta golvyta på 400 kvm.
            </p>
            <p className="mb-4 text-black font-bold">
              Kontakta oss för mer information:
            </p>
            <p className="mb-4 text-black">
              E-post: <a href="mailto:info@vaxaindustrihus.se" className="text-blue-600">info@vaxaindustrihus.se</a><br />
              Telefon: +46 (0) 79 - 307 80 20
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
            <h3 className="text-2xl font-bold mb-6 text-black">
              Ansök nu
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
                  placeholder="07X - XXX XX XX"
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
                  Företagsnamn <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="företagsnamn"
                  value={formValues.företagsnamn}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black"
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
                className={`w-full py-2 rounded-full font-bold ${
                  isFormValid()
                    ? "bg-black text-white"
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
