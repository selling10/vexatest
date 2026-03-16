# Lokal E-post Testning

För att testa e-postfunktionen lokalt behöver du:

## 1. Installera dependencies

```bash
npm install
```

## 2. Skapa .env fil

Skapa en `.env` fil i root-mappen med följande innehåll:

```env
SMTP_HOST=smtp.websupport.se
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=info@vexa.se
SMTP_PASS=ditt_lösenord_här
SMTP_FROM=info@vexa.se
SMTP_TO=info@vexa.se
```

**Viktigt:** Ersätt `ditt_lösenord_här` med det faktiska lösenordet för `info@vexa.se` kontot.

## 3. Starta servern

Du har två alternativ:

### Alternativ A: Kör både server och frontend samtidigt
```bash
npm run dev:full
```

### Alternativ B: Kör dem separat i två terminaler

Terminal 1 (API Server):
```bash
npm run server
```

Terminal 2 (Frontend):
```bash
npm run dev
```

## 4. Testa formuläret

1. Öppna webbläsaren på `http://localhost:5173` (eller den port som Vite visar)
2. Fyll i kontaktformuläret
3. Klicka på "Skicka"
4. Kontrollera terminalen för eventuella felmeddelanden
5. Kontrollera att mailet kommit fram till `info@vexa.se`

## Felsökning

- Om du får felmeddelanden, kontrollera:
  - Att `.env` filen finns och har rätt värden
  - Att SMTP-uppgifterna är korrekta
  - Att servern körs på port 3001
  - Konsolen i webbläsaren för detaljerade felmeddelanden

- Om mailet inte kommer fram:
  - Kontrollera spam-mappen
  - Verifiera att SMTP-uppgifterna är korrekta med din mail-leverantör
  - Kontrollera server-loggar i terminalen
