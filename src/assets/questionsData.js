const questionsData = [
    {question: "Ce este branding-ul și de ce este important pentru afacerea mea?",
     answer:"Branding-ul reprezintă imaginea și identitatea afacerii tale, incluzând logo-ul, design-ul, culorile, și tonul comunicării. Este important deoarece ajută la diferențierea afacerii tale de concurență, crește recunoașterea și loialitatea clienților și transmite valorile și misiunea companiei tale."
    },
    {question: "Ce include un pachet complet de branding?",
     answer:"Un pachet complet de branding include: analiza pieței și a concurenței, dezvoltarea identității vizuale (logo, paletă de culori, tipografie), design-ul materialelor de marketing (cărți de vizită, broșuri, bannere), ghidul de utilizare a brandului și consultanță pentru implementare."
    },
    {question: "Care este procesul vostru de creare a unui logo?",
     answer:"Procesul nostru de creare a unui logo include: întâlnirea inițială pentru a înțelege afacerea și obiectivele, cercetarea și analiza pieței, generarea de concepte și schițe, revizuiri și ajustări în baza feedback-ului și finalizarea design-ului în formatele necesare."
    },
    {question: "Cât timp durează să dezvoltați un brand complet?",
     answer:"Durata dezvoltării unui brand complet poate varia între 2 și 8 săptămâni, în funcție de complexitatea proiectului și de rapiditatea feedback-ului primit de la client."
    },
    {question: "Puteți să actualizați sau să rebrandinguiți un brand existent?",
     answer:"Da, oferim servicii de rebranding pentru a actualiza și moderniza identitatea existentă a afacerii tale, asigurându-ne că păstrăm esența brandului, dar aducem îmbunătățiri semnificative."
    },
    {question: "Cum vă asigurați că brandul creat reflectă corect afacerea mea?",
    answer:"Ne asigurăm că brandul creat reflectă corect afacerea ta printr-o colaborare strânsă, sesiuni de brainstorming și feedback constant, asigurându-ne că înțelegem valorile, misiunea și viziunea afacerii tale."
    },
    {question: "Cum măsurați succesul unui proiect de branding?",
    answer:"Succesul unui proiect de branding este măsurat prin creșterea recunoașterii brandului, feedback-ul pozitiv al clienților, creșterea loialității și a engagement-ului și, în cele din urmă, prin impactul asupra vânzărilor și a poziției pe piață."
    },
    {question: "Ce suport oferiți după finalizarea proiectului de branding?",
    answer:"Oferim suport continuu după finalizarea proiectului, inclusiv consultanță pentru implementarea brandului, actualizări și ajustări periodice și suport pentru orice alte nevoi de branding care pot apărea."
    },
    {question: "Ce platforme de dezvoltare web folosiți?",
    answer:"Folosim o varietate de platforme de dezvoltare web, inclusiv WordPress, Shopify, Magento și dezvoltare custom, în funcție de nevoile și preferințele fiecărui client."
    },
    {question: "Cât timp durează să construiți un website?",
    answer:"Durata dezvoltării unui website depinde de complexitatea proiectului, dar în general, poate varia între 4 și 12 săptămâni, de la faza de planificare până la lansare."
    },
    {question: "Care este costul estimativ pentru dezvoltarea unui website?",
    answer:"Costul dezvoltării unui website variază în funcție de specificațiile și cerințele proiectului. Oferim pachete flexibile și personalizate pentru a se potrivi bugetului și nevoilor tale. Te rugăm să ne contactezi pentru o ofertă detaliată."
    },
    {question: "Oferiți și servicii de design grafic pentru website-uri?",
    answer:"Da, oferim servicii complete de design grafic, inclusiv design UI/UX, pentru a ne asigura că website-ul tău nu doar funcționează bine, ci și arată excelent și oferă o experiență utilizatorului de înaltă calitate."
    },
    {question: "Website-ul meu va fi responsive (adaptabil pe mobil și tabletă)?",
    answer:"Absolut! Toate website-urile pe care le dezvoltăm sunt complet responsive și optimizate pentru a oferi o experiență excelentă pe toate dispozitivele, inclusiv mobil și tabletă."
    },
    {question: "Cum vă asigurați că website-ul meu este SEO-friendly?",
    answer:"Implementăm cele mai bune practici SEO în timpul dezvoltării site-ului, inclusiv optimizarea structurii site-ului, meta tag-uri, optimizarea imaginilor și crearea de conținut relevant pentru a te ajuta să obții o vizibilitate mai bună în motoarele de căutare."
    },
    {question: "Oferiți servicii de găzduire web și întreținere a site-ului?",
    answer:"Da, oferim servicii de găzduire web și întreținere pentru a ne asigura că site-ul tău este mereu actualizat, sigur și funcțional. Aceste servicii includ actualizări regulate, backup-uri și suport tehnic."
    },
    {question: "Ce fel de suport tehnic oferiți după lansarea site-ului?",
     answer:"Oferim suport tehnic continuu pentru a te ajuta cu orice problemă sau întrebare legată de website-ul tău. Avem pachete de suport care pot fi personalizate în funcție de nevoile tale."
    },
    {question: "Pot să fac modificări pe site-ul meu după ce este lansat?",
     answer:"Da, dezvoltăm website-uri care permit utilizatorilor să facă modificări ușor prin intermediul unui panou de administrare intuitiv. De asemenea, oferim training pentru a te ajuta să gestionezi site-ul eficient."
    },
    {question: "Ce servicii de marketing digital oferiți?",
     answer:"Oferim o gamă completă de servicii de marketing digital, inclusiv SEO, marketing pe rețelele sociale, publicitate PPC, email marketing, content marketing și optimizare conversii."
    },
    {question: "Cum măsurați succesul campaniilor de marketing?",
     answer:"Măsurăm succesul campaniilor de marketing prin KPI-uri specifice, cum ar fi trafic pe site, rate de conversie, cost per click, engagement pe rețelele sociale și ROI. Furnizăm rapoarte detaliate și analize pentru a monitoriza performanța și pentru a optimiza campaniile."
    },
    {question: "Care sunt strategiile de marketing pe care le recomandați pentru afacerea mea?",
    answer:"Strategiile de marketing recomandate variază în funcție de obiectivele și publicul țintă al afacerii tale. După o analiză detaliată, vom dezvolta o strategie personalizată care poate include SEO, marketing pe rețelele sociale, campanii PPC și email marketing."
    },
    {question: "Cât costă serviciile voastre de marketing?",
     answer:"Costul serviciilor noastre de marketing variază în funcție de complexitatea și amploarea campaniilor. Oferim pachete flexibile și personalizate pentru a se potrivi bugetului și nevoilor tale. Te rugăm să ne contactezi pentru o ofertă detaliată."
    },
    {question: "Oferiți și servicii de marketing offline?",
     answer:"Da, oferim și servicii de marketing offline, inclusiv publicitate tipărită, evenimente de marketing, marketing direct și PR. Ne asigurăm că toate campaniile sunt integrate pentru a oferi o strategie de marketing completă."
    },
    {question: "Cum îmi puteți ajuta afacerea să crească pe rețelele sociale?",
     answer:"Oferim strategii personalizate de social media marketing, care includ crearea și gestionarea conținutului, campanii publicitare plătite, gestionarea comunității și analiză. Scopul nostru este să creștem vizibilitatea, engagement-ul și conversiile pe platformele sociale."
    },
    {question: "Ce este SEO și cum mă poate ajuta?",
        answer:"SEO (Search Engine Optimization) este procesul de optimizare a site-ului tău pentru a îmbunătăți vizibilitatea în motoarele de căutare. Te poate ajuta să atragi trafic organic, să îmbunătățești clasamentul în căutări și să crești vizibilitatea și autoritatea online a afacerii tale."
       },
       {question: "Puteți să gestionați campanii de publicitate plătită (PPC) pentru afacerea mea?",
        answer:"Da, gestionăm campanii PPC pe platforme precum Google Ads, Facebook Ads Ne concentrăm pe optimizarea bugetului și maximizarea ROI-ului prin strategii bine definite și execuție precisă."
       },
       {question: "Oferiți servicii de email marketing?",
        answer:"Da, oferim servicii complete de email marketing, de la crearea listelor de email, segmentare, design și scrierea emailurilor, până la automatizare și analiză. Ne asigurăm că mesajele tale ajung la publicul potrivit și generează conversii."
       },
       {question: "Cum creați și gestionați conținutul pentru campaniile de marketing?",
        answer:"Creăm conținut relevant și valoros bazat pe cercetări de piață și analize de public. Gestionăm publicarea și distribuția conținutului pe diverse platforme, asigurându-ne că acesta ajunge la publicul țintă și contribuie la atingerea obiectivelor de marketing."
       }
]

export default questionsData