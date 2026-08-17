import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Brand } from './Brand';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Integritets- och cookiepolicy | VEXA</title>
        <meta name="description" content="Läs VEXAs integritets- och cookiepolicy. Vi värnar om din personliga integritet och förklarar hur vi samlar in och använder dina personuppgifter." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://vexa.se/privacy-policy" />
      </Helmet>
      <div className="page pb-section pt-40 md:pt-48">
      <Link
        to="/"
        className="text-meta uppercase opacity-50 transition-opacity duration-300 hover:opacity-100"
      >
        Tillbaka
      </Link>
      <h1 className="mb-16 mt-8 max-w-measure text-display-2 font-semibold">
        Integritets- och cookiepolicy
      </h1>
      <p className="mb-5 max-w-measure text-body opacity-80">
        <Brand /> Industrihus värnar om din personliga integritet. <Brand /> Industrihus arbetar därför aktivt för att din integritet ska vara skyddad när du använder dig av våra tjänster.
      </p>
      <p className="mb-5 max-w-measure text-body opacity-80">
        Denna integritetspolicy förklarar hur vi samlar in och använder dina personuppgifter. Den beskriver också dina rättigheter och hur du kan göra dem gällande.
      </p>
      <p className="mb-5 max-w-measure text-body opacity-80">
        <Brand /> Industrihus är personuppgiftsansvariga för behandlingen av dina personuppgifter.
      </p>
      <p className="mb-5 max-w-measure text-body opacity-80">
        Denna integritetspolicy uppdaterades senast den 12 juni 2024 och gäller för medborgare och lagligt permanent bosatta i Europeiska ekonomiska samarbetsområdet och Schweiz.
      </p>

      <h3 className="mb-4 mt-16 text-display-3 font-semibold">1. Syfte, uppgifter och lagringsperiod</h3>
      <p className="mb-5 max-w-measure text-body opacity-80">
        Vi kan samla in eller ta emot personlig information för ett antal syften som är kopplade till vår affärsverksamhet och som kan inkludera följande:
      </p>
      <h4 className="mb-3 mt-10 text-lead font-semibold">1.1 Kontakt, via telefon, post, e-post och/eller webbformulär</h4>
      <p className="mb-5 max-w-measure text-body opacity-80">För detta syfte använder vi följande uppgifter:</p>
      <ul className="mb-5 max-w-measure list-disc space-y-2 pl-5 text-body opacity-80">
          <li>Ett för- och efternamn</li>
          <li>En hem eller annan fysisk adress inklusive gatunamn och namn på stad</li>
          <li>En e-postadress</li>
          <li>Ett telefonnummer</li>
        </ul>
      <p className="mb-5 max-w-measure text-body opacity-80">
        Den grund på vilken vi kan behandla dessa uppgifter är:
        <br />
        Efter att samtycke har lämnats.
      </p>
      <p className="mb-5 max-w-measure text-body opacity-80">
        <strong>Lagringsperiod</strong>
        <br />
        Vi behåller dessa uppgifter tills tjänsten avslutas.
      </p>

      <h4 className="mb-3 mt-10 text-lead font-semibold">1.2 Sammanställning och analys av statistik för att förbättra webbplatsen</h4>
      <p className="mb-5 max-w-measure text-body opacity-80">För detta syfte använder vi följande uppgifter:</p>
      <ul className="mb-5 max-w-measure list-disc space-y-2 pl-5 text-body opacity-80">
          <li>IP-adress</li>
          <li>Geolokaliseringsdata</li>
        </ul>
      <p className="mb-5 max-w-measure text-body opacity-80">
        Den grund på vilken vi kan behandla dessa uppgifter är:
        <br />
        Efter att samtycke har lämnats.
      </p>
      <p className="mb-5 max-w-measure text-body opacity-80">
        <strong>Lagringsperiod</strong>
        <br />
        Vi behåller dessa uppgifter tills tjänsten avslutas.
      </p>

      <h4 className="mb-3 mt-10 text-lead font-semibold">1.3 För att kunna erbjuda anpassade personliga produkter och tjänster</h4>
      <p className="mb-5 max-w-measure text-body opacity-80">För detta syfte använder vi följande uppgifter:</p>
      <ul className="mb-5 max-w-measure list-disc space-y-2 pl-5 text-body opacity-80">
          <li>Ett för- och efternamn</li>
          <li>En hem eller annan fysisk adress inklusive gatunamn och namn på stad</li>
          <li>En e-postadress</li>
          <li>Ett telefonnummer</li>
        </ul>
      <p className="mb-5 max-w-measure text-body opacity-80">
        Den grund på vilken vi kan behandla dessa uppgifter är:
        <br />
        Efter att samtycke har lämnats.
      </p>
      <p className="mb-5 max-w-measure text-body opacity-80">
        <strong>Lagringsperiod</strong>
        <br />
        Vi behåller dessa uppgifter tills tjänsten avslutas.
      </p>

      <h3 className="mb-4 mt-16 text-display-3 font-semibold">2. Cookies</h3>
      <p className="mb-5 max-w-measure text-body opacity-80">
        Vår webbplats använder cookies för att förbättra din upplevelse. Cookies är små textfiler som lagras på din enhet när du besöker vår webbplats. Vi använder cookies för följande ändamål:
      </p>
      <h4 className="mb-3 mt-10 text-lead font-semibold">2.1 Nödvändiga cookies</h4>
      <p className="mb-5 max-w-measure text-body opacity-80">
        Dessa cookies är nödvändiga för att webbplatsen ska fungera korrekt och kan inte stängas av i våra system. De sätts vanligtvis bara som svar på åtgärder som du har gjort och som motsvarar en begäran om tjänster, såsom att ställa in dina sekretessinställningar, logga in eller fylla i formulär.
      </p>
      <h4 className="mb-3 mt-10 text-lead font-semibold">2.2 Analytiska cookies</h4>
      <p className="mb-5 max-w-measure text-body opacity-80">
        Dessa cookies tillåter oss att räkna besök och trafikkällor så att vi kan mäta och förbättra prestandan på vår webbplats. De hjälper oss att veta vilka sidor som är mest och minst populära och se hur besökare rör sig runt på webbplatsen.
      </p>
      <h4 className="mb-3 mt-10 text-lead font-semibold">2.3 Funktionella cookies</h4>
      <p className="mb-5 max-w-measure text-body opacity-80">
        Dessa cookies gör det möjligt för webbplatsen att tillhandahålla förbättrad funktionalitet och personalisering. De kan ställas in av oss eller av tredje parts leverantörer vars tjänster vi har lagt till på våra sidor.
      </p>
      <h4 className="mb-3 mt-10 text-lead font-semibold">2.4 Målinriktade cookies</h4>
      <p className="mb-5 max-w-measure text-body opacity-80">
        Dessa cookies kan ställas in via vår webbplats av våra annonseringspartners. De kan användas av dessa företag för att skapa en profil av dina intressen och visa relevanta annonser på andra webbplatser.
      </p>
      <p className="mb-5 max-w-measure text-body opacity-80">
        För mer information om cookies, se vår Cookiepolicy.
      </p>

      <h3 className="mb-4 mt-16 text-display-3 font-semibold">3. Praxis för offentliggörande av uppgifter</h3>
      <p className="mb-5 max-w-measure text-body opacity-80">
        Vi lämnar ut personuppgifter om vi är skyldiga att lämna ut dem enligt lag eller domstolsbeslut, som svar på ett brottsbekämpande organ, i den mån det är tillåtet enligt andra bestämmelser i lagen, för att tillhandahålla information eller för en utredning av en fråga som rör den allmänna säkerheten.
      </p>
      <p className="mb-5 max-w-measure text-body opacity-80">
        Om vår webbplats eller organisation tas över, säljs eller är inblandad i en sammanslagning eller ett förvärv kan dina uppgifter avslöjas för våra rådgivare och eventuella potentiella köpare och överlämnas till de nya ägarna.
      </p>
      <p className="mb-5 max-w-measure text-body opacity-80">
        Vi har ingått ett databehandlingsavtal med Google. Google får inte använda uppgifterna för andra Google-tjänster. Vi blockerar uppgifter om fullständiga IP-adresser.
      </p>

      <h3 className="mb-4 mt-16 text-display-3 font-semibold">4. Säkerhet</h3>
      <p className="mb-5 max-w-measure text-body opacity-80">
        Vi har åtagit oss att skydda personuppgifter. Vi vidtar lämpliga säkerhetsåtgärder för att begränsa missbruk av och obehörig åtkomst till personuppgifter. Detta säkerställer att endast nödvändiga personer har tillgång till dina uppgifter, att tillgången till uppgifterna är skyddad och att våra säkerhetsåtgärder regelbundet ses över.
      </p>

      <h3 className="mb-4 mt-16 text-display-3 font-semibold">5. Tredje-parts webbplatser</h3>
      <p className="mb-5 max-w-measure text-body opacity-80">
        Denna integritetspolicy gäller inte för webbplatser från tredje-part som är anslutna via länkar på vår webbplats. Vi kan inte garantera att dessa tredje parter hanterar dina personuppgifter på ett tillförlitligt eller säkert sätt. Vi rekommenderar att du läser dessa webbplatsers integritetspolicy innan du använder dessa webbplatser.
      </p>

      <h3 className="mb-4 mt-16 text-display-3 font-semibold">6. Ändringar av denna integritetspolicy</h3>
      <p className="mb-5 max-w-measure text-body opacity-80">
        Vi förbehåller oss rätten att göra ändringar i denna integritetspolicy. Vi rekommenderar att du regelbundet läser denna integritetspolicy för att få kännedom om eventuella ändringar. Dessutom kommer vi att aktivt informera dig när det är möjligt.
      </p>

      <h3 className="mb-4 mt-16 text-display-3 font-semibold">7. Tillgång till och ändring av dina uppgifter</h3>
      <p className="mb-5 max-w-measure text-body opacity-80">
        Om du har några frågor eller vill veta vilka personuppgifter vi har om dig, vänligen kontakta oss. Du kan kontakta oss genom att använda informationen nedan. Du har följande rättigheter:
      </p>
      <ul className="mb-5 max-w-measure list-disc space-y-2 pl-5 text-body opacity-80">
        <li>Du har rätt att få veta varför dina personuppgifter behövs, vad som kommer att hända med dem och hur länge de kommer att sparas.</li>
        <li>Rätt till tillgång: Du har rätt att få tillgång till dina personuppgifter som vi känner till.</li>
        <li>Rätt till rättelse: Du har rätt att komplettera, korrigera, få dina personuppgifter raderade eller blockerade när du vill.</li>
        <li>Om du ger oss ditt samtycke till att behandla dina uppgifter har du rätt att återkalla detta samtycke och få dina personuppgifter raderade.</li>
        <li>Rätt att överföra dina uppgifter: Du har rätt att begära ut alla dina personuppgifter från den personuppgiftsansvarige och överföra dem i sin helhet till en annan personuppgiftsansvarig.</li>
        <li>Rätt att invända: Du kan invända mot behandlingen av dina uppgifter. Vi tar hänsyn till detta, om det inte finns motiverade skäl för behandlingen.</li>
      </ul>
      <p className="mb-5 max-w-measure text-body opacity-80">
        Se till att du alltid tydligt anger vem du är, så att vi kan vara säkra på att vi inte ändrar eller raderar uppgifter om fel person.
      </p>

      <h3 className="mb-4 mt-16 text-display-3 font-semibold">8. Inlämning av klagomål</h3>
      <p className="mb-5 max-w-measure text-body opacity-80">
        Om du inte är nöjd med det sätt på vilket vi hanterar (ett klagomål om) behandlingen av dina personuppgifter har du rätt att lämna in ett klagomål till dataskyddsmyndigheten.
      </p>

      <h3 className="mb-4 mt-16 text-display-3 font-semibold">9. Kontaktuppgifter</h3>
      <p className="mb-5 max-w-measure text-body opacity-80">
        <Brand /> Industrihus
        <br />
        BOX 55639, 102 14 Stockholm
        <br />
        Sverige
        <br />
        Webbplats: <a href="https://vexa.se" className="underline underline-offset-4 transition-opacity duration-300 hover:opacity-60">https://vexa.se</a>
        <br />
        E-post: <a href="mailto:info@vexa.se" className="underline underline-offset-4 transition-opacity duration-300 hover:opacity-60">info@vexa.se</a>
        <br />
        Telefonnummer: +46 (0) 79 -307 80 20
      </p>
      </div>
    </>
  );
};

export default PrivacyPolicy;
