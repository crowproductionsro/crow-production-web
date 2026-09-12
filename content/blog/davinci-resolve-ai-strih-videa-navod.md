---
title: "Claude Code a GPT oficiálne v DaVinci Resolve | Návod a pocity"
slug: "davinci-resolve-ai-strih-videa-navod"
date: 2026-09-11
category: "video"
subcategory: "video-strih"
author: "matus-takac"
summary: "DaVinci Resolve 21.1 priniesol AI Assistant cez MCP. Zadal som jeden prompt a odišiel od počítača — návod krok po kroku, reálne časy a moje skutočné pocity, bez marketingových rečí."
cover_image: "/img/uploads/claude_gpt_davinci_resolve_prepojenie_thumbnail.webp"
cover_image_alt: "Claude Code, ChatGPT a DaVinci Resolve prepojenie cez natívny AI Assistant — ukážka rozhrania s AI strihom videa"
seo_title: "Claude Code a GPT oficiálne v DaVinci Resolve | Návod a pocity"
meta_description: "DaVinci Resolve 21.1 má AI Assistant cez MCP. Návod krok po kroku, reálne časy, prečo Opus a nie Sonnet a prečo to nefunguje na bezplatnej verzii."
draft: false
faq:
  - question: "Funguje Claude alebo ChatGPT na DaVinci Resolve zadarmo?"
    answer: "Nie. AI Assistant funguje len v platenej verzii DaVinci Resolve Studio 21.1. Bezplatná verzia nemá vrstvu externého skriptovania, na ktorej MCP prepojenie stojí, takže nepomôže ani platené predplatné Claude či ChatGPT."
  - question: "Funguje AI Assistant v bezplatnej verzii DaVinci Resolve?"
    answer: "Nie. Vyžaduje DaVinci Resolve Studio 21.1. Bezplatná verzia nemá vrstvu externého skriptovania, na ktorej MCP prepojenie stojí."
  - question: "Koľko stojí DaVinci Resolve Studio?"
    answer: "Približne 295 USD jednorazovo. Žiadne predplatné ani mesačné poplatky."
  - question: "Ktoré AI modely sú podporované?"
    answer: "Blackmagic uvádza Claude, Claude Code a ChatGPT Codex. Podpora klientov sa môže meniť nezávisle od Resolve."
  - question: "Ktorý model je najlepší na strih videa v Resolve?"
    answer: "Z mojej skúsenosti jednoznačne Opus. Sonnet zvládol úlohu výrazne horšie, nerozumel dobre zadaniu a výsledok bol slabší. Opus je síce drahší na kredity, ale rýchlejší a spoľahlivejší."
  - question: "Ako dlho trvá, kým AI zostriha video?"
    answer: "U mňa približne 20 minút na jedno video vrátane zostrihu, color gradingu, čistenia zvuku a titulkov. Pri predchádzajúcom teste to bolo okolo 15 minút."
  - question: "Kde nájdem nastavenie AI Assistant v DaVinci Resolve?"
    answer: "File → Setup AI Assistance. Nezamieňať so starým nastavením Preferences → System → General → External scripting using."
  - question: "Je bezpečné pustiť AI na ostrý projekt?"
    answer: "Odporúčam najprv testovací projekt a read-only prompt. Na ostrom projekte si vždy vytvor duplikát timeline ako zálohu. Asistent má prístup k operáciám, ktoré menia timeline, nastavenia aj render queue."
  - question: "Vie AI presúvať klipy v timeline?"
    answer: "V súčasnej implementácii MCP nie, presúvanie klipov nie je podporované. Zostrih, duplikovanie timeline, farby a zvuk áno."
  - question: "Vie to robiť slovenské titulky?"
    answer: "Áno. Vyžiadal som si ich priamo v prompte a prišli správne. Musel som si doladiť len veľkosť a vlastnú animáciu, o ktorej som mu nepovedal."
  - question: "Nahradí to strihača?"
    answer: "Nie. Nahradí to mechanickú časť strihu. Kreatívne rozhodnutia, rytmus, dramaturgia a vkus zostávajú na tebe. A hotové video na upload z toho nevypadne."
  - question: "Čo robiť, keď to po nastavení nefunguje?"
    answer: "Vypni a zapni Resolve. Ak to nepomôže, skontroluj, či máš Studio 21.1, či je Resolve otvorené s načítaným projektom a či máš v Configure povolené všetky oprávnenia cez Always Allow."
---

**DaVinci Resolve 21.1 priniesol AI Assistant cez MCP. Zadal som jeden prompt a odišiel od počítača. Takto to dopadlo, bez marketingových rečí, s reálnymi časmi a so všetkým, čo nefungovalo.**

---

## Kľúčové zistenia v skratke

Ak nemáš čas na celý článok, toto je podstata:

- **DaVinci Resolve 21.1** (vydaný 8. septembra 2026) má vstavaný **MCP server**. AI asistent vďaka nemu vie ovládať program priamo, nie klikaním po obrazovke.
- Funguje to **len v DaVinci Resolve Studio**. V bezplatnej verzii to nespustíš, pretože vrstva externého skriptovania, na ktorej to stojí, v nej nie je.
- Podporovaní sú **Claude, Claude Code a ChatGPT Codex**.
- Resolve sprístupňuje asistentovi **88 nástrojov** naprieč celým programom (projekt, timeline, media pool, Color page, Fairlight aj render queue) plus **20 read-only zdrojov** so živým stavom systému.
- Moje reálne meranie: **jeden prompt → hotový základ videa za ~20 minút.** Zostrih podľa voiceoveru, color grading, vyčistený zvuk, slovenské titulky.
- **Najdôležitejší praktický poznatok:** prepni si model na Opus. So Sonnetom to pracovalo výrazne horšie.
- Nie je to náhrada strihača. Je to spôsob, ako presunúť mechanickú časť práce **na čas, keď nesedíš pri počítači**.

---

## Rýchle fakty

| | |
|---|---|
| **Verzia** | DaVinci Resolve Studio 21.1 |
| **Dátum vydania** | 8. september 2026 |
| **Funkcia** | AI Assistant / natívny MCP server |
| **Podporovaní asistenti** | Claude, Claude Code, ChatGPT Codex |
| **Cena Resolve Studio** | jednorazovo cca 295 USD |
| **Dostupné nástroje** | 88 nástrojov + 20 read-only zdrojov |
| **Beží vo free verzii?** | Nie |
| **Cesta v menu** | File → Setup AI Assistance |
| **Môj reálny čas** | ~20 minút na jedno video |

---

## Moje pocity: prvých päť minút bolo nepríjemných

Budem úprimný, lebo inak by tento článok bol len ďalší prepis tlačovej správy.

Keď som to spustil prvýkrát a pozeral som sa, ako si to samo otvára Color page, prepína stopy a robí si vlastnú preview timeline, mal som **divný pocit v žalúdku**. Nie nadšenie. Skôr niečo medzi „čo to robí?" a „a čo teda budem robiť ja".

Ten pocit prešiel asi po desiatich minútach, keď som si uvedomil jednu vec: nerobí to moju prácu. Robí to tú časť mojej práce, ktorú **neznášam**. Hľadanie nádychov. Vyhadzovanie miest, kde som sa prerieknul. Prepisovanie titulkov. Prevod S-Logu. To nie je kreativita, to je manuálna robota, za ktorú mi nikto neplatí navyše.

Druhý pocit prišiel neskôr a bol silnejší: **sloboda.** Pustil som to a odišiel som od počítača. To je celé. Nesedel som tam a nečakal, kým sa mi vyrenderuje myšlienka. Robil som niečo iné a práca sa diala.

A tretí pocit, ten najstriezlivejší, prišiel, keď som si výsledok pozrel. Bolo to **dobré, nie dokonalé**. Presne také, aké to malo byť. Základ, na ktorom sa dá stavať, nie hotové video na upload.

Keby som to mal zhrnúť: prestal som mať pocit, že zaostávam za vlastným kalendárom.

---

## Prípadová štúdia 1: jeden prompt, jedno video, 20 minút

Toto je konkrétny priebeh, nie odhad.

**Zadanie:** zostrihať video podľa voiceoveru, vyhodiť nepodarené časti a hluché miesta, prevod z S-Log 3 na Rec. 709, vymazať mlaskanie a nádychy, pridať a upraviť slovenské titulky.

**Priebeh:**

| Fáza | Čo sa dialo |
|---|---|
| 1 | Zostrih podľa voiceoveru: vyhádzané nepodarené časti a ticho |
| 2 | Color grading: prevod z S-Log 3 do Rec. 709 |
| 3 | Kontrola: samo sa opýtalo, či chcem ďalšie farebné korekcie |
| 4 | Zvuk a titulky: mlaskanie, nádychy, slovenské titulky |
| 5 | Hotovo, cca po 20 minútach |

**Čo bolo lepšie, než som čakal:** urobilo si vlastnú preview timeline na druhej stope, aby si skontrolovalo, čo vytvorilo. Robilo si screenshoty počas farbenia a podľa nich pokračovalo. Reálne pracuje s programom, nie s predstavou programu.

**Čo nebolo podľa mojich predstáv:** titulky prišli veľké a bez môjho efektu. Ale to nebola jeho chyba. Mám prednastavenú animáciu titulkov, ktorú používam stále — podobne ako pri [farebnej korekcii a color gradingu](/blog/color-correction-a-color-grading/), aj tu platí, že výsledok je len taký dobrý, aké presné je zadanie — a v tom projekte som ju mal zmazanú. Nepovedal som mu o nej. Keby áno, som si takmer istý, že by to zvládol.

Výsledok bol tiež mierne doružova. Lenže celá scéna bola doružova nasvietená, takže to sedelo. A keďže mal urobiť len prevod z S-Logu, žiadne divoké korekcie som ani nečakal.

---

## Prípadová štúdia 2: keď AI strihá video o tom, ako AI strihá video

Toto je asi najlepší dôkaz, aký viem dať.

Samotné tutoriálové video k tomuto článku, tridsať minút surového screen recordingu, som cez to isté prepojenie nechal zostrihať znova. Zadanie bolo iné: vyhodiť pasáže, kde som sa prerieknul a opakoval, a zrýchliť tiché miesta, kde je na obrazovke len čakanie.

**Výsledok:**

| Metrika | Hodnota |
|---|---|
| Pôvodná dĺžka | 30:21 |
| Finálna dĺžka | **13:41** |
| Odstránených pasáží | 9 (nepodarené zábery, opakovania, predčasný záver) |
| Tiché úseky | zrýchlené 4× |
| Reč | ponechaná v pôvodnej rýchlosti |
| Čas práce z mojej strany | jeden prompt |

Z tridsiatich minút materiálu bolo **20 minút ticha**. Dvadsať minút, ktoré by som inak preklikával ručne.

---

## Čo presne prišlo v Resolve 21.1

[Blackmagic Design](https://www.blackmagicdesign.com/products/davinciresolve) pridal do Resolve **natívny MCP server** (Model Context Protocol). Zjednodušene: Resolve otvoril oficiálne rozhranie, cez ktoré s ním AI asistent hovorí priamo.

Rozdiel oproti tomu, čo sa dalo aj predtým, je zásadný. Niektoré modely vedia ovládať počítač aj tak, že sa pozerajú na obrazovku a klikajú ako človek. Skúšal som to. **Funguje to, ale je to veľmi neefektívne a veľmi pomalé.** Model musí uhádnuť, kde je tlačidlo, a keď sa okno posunie, je zle.

Natívne prepojenie toto celé obchádza. Asistent nevidí pixely, vidí štruktúru projektu (timeline, stopy, klipy, nody, render nastavenia) a vie s nimi pracovať priamo. Podľa dostupných informácií je sprístupnených **88 nástrojov** naprieč všetkými hlavnými stránkami programu a **20 read-only zdrojov**, ktoré asistentovi hlásia živý stav.

Súčasťou sú aj AI analytické funkcie Resolve: transkripcia, klasifikácia zvuku, detekcia tvárí, motion deblur.

---

## Funguje Claude alebo ChatGPT na DaVinci Resolve zadarmo?

**Krátka odpoveď: nie. AI Assistant funguje len v platenej verzii DaVinci Resolve Studio.**

Toto je najčastejšia otázka, ktorú dostávam, tak ju rozoberiem osobitne.

Nie je to marketingové obmedzenie, ktoré sa dá obísť nastavením. Celé prepojenie stojí na vrstve externého skriptovania a tá je v bezplatnej verzii DaVinci Resolve zamknutá. Nepomôže ti iná verzia Claude ani ChatGPT, nepomôže platené predplatné AI. Chýba tá časť na strane Resolve.

DaVinci Resolve Studio stojí jednorazovo približne **295 USD**, bez predplatného a bez mesačných poplatkov. Ak robíš video komerčne a toto je funkcia, ktorá ťa zaujíma, tá investícia sa vráti rýchlejšie, než sa zdá.

Existujú komunitné obchádzky cez UI automatizáciu, ale tie fungujú len na macOS a sú presne tým pomalým klikaním, o ktorom som písal vyššie. Neodporúčam.

---

## Návod: ako si to nastaviť krok po kroku

### Krok 1: Zapni integráciu v Resolve

V Resolve choď do **File → Setup AI Assistance**.

Pozor, **toto nie je to isté** ako staré nastavenie *Preferences → System → General → External scripting using*. To je iná vec, ktorá sa používala pre staršie workflow. Hľadaj natívnu položku v menu File.

Zo zoznamu si vyber svojho asistenta (ja som si dal **Claude Code**) a potvrď **OK**. Resolve si na pozadí pripraví prepojenie, chvíľu to trvá.

### Krok 2: Nainštaluj a povoľ plugin na strane asistenta

Otvor si asistenta. Ja ho mám otvoreného po pravej strane vedľa Resolve, aby som videl oba naraz. Odporúčam to isté.

V zozname dostupných nástrojov nájdeš **DaVinci Resolve Studio**:

1. Klikni **Install** *(ak tam už vidíš Uninstall, máš to nainštalované z minula, čo je v poriadku)*
2. Klikni **Enable**
3. Choď na **Configure**

### Krok 3: Povoľ oprávnenia

V konfigurácii uvidíš zoznam oprávnení. **Potrebuješ povoliť všetko.** Pri niektorých položkách sa pravdepodobne objaví ikonka ruky. Pri každej daj **Always Allow**.

Ak to neurobíš, buď sa to nespustí, alebo sa ťa to bude pýtať pri každom kroku. A vtedy budeš sedieť pri počítači namiesto toho, aby si robil niečo iné. Čiže stratíš presne to, kvôli čomu to zapínaš.

Potom sa vráť späť a choď na **Home**.

### Krok 4: Prepni si model. Toto nepreskakuj.

Toto je z celého článku najpraktickejšia informácia.

Skúšal som to najprv so **Sonnetom**. Jedno video mi zostrihal, ale pracoval s tým **výrazne horšie**. Nerozumel dobre zadaniu a výsledok bol slabší. Ten istý typ zadania cez **Opus** prebehol bez problémov.

Áno, Opus zožerie viac kreditov. Ale je zároveň **rýchlejší** a hlavne spoľahlivejší, takže ti ušetrí druhý pokus. Druhý pokus ťa stojí kredity aj čas.

Ak máš možnosť, zapni si aj **Extended Thinking**.

### Krok 5: Profi tip, najprv si to otestuj naprázdno

Toto som sa naučil až potom a odporúčam to každému, kto si váži svoje projekty.

Než pustíš AI na ostrý projekt, **urob si testovací projekt** s pár klipmi a nezameniteľným názvom timeline. Prvý prompt daj čisto read-only, napríklad:

> Vypíš mi názov projektu, názov timeline, frame rate, dĺžku, názvy stôp a počet klipov na každej stope.

Ak ti to odpovie správne, prepojenie funguje a asistent vidí ten správny projekt. Až potom skús niečo vratné, napríklad duplikovať timeline a pridať marker.

A keď ideš na ostro: **zálohuj si timeline.** Stačí duplikát s názvom *ZÁLOHA*. Trvá to tri sekundy a ušetrí ti to infarkt.

### Krok 6: Napíš prompt

Buď konkrétny. Hlavne **povedz mu názov projektu a názov timeline**, aby vedel, kde má pracovať.

Tu je prompt, ktorý som použil:

> Zostrihaj mi video v mojom projekte **[názov projektu]**, timeline sa volá **[názov timeline]**.
>
> - Zostrihaj video podľa môjho voiceoveru
> - Vymaž nepodarené časti a hluché miesta
> - Nafarbi to v Color page, prevod z S-Log 3 na Rec. 709
> - Vymaž mlaskanie a nádychy
> - Pridaj a uprav slovenské titulky

**Poznámka k farbám:** S-Log 3 je formát, do ktorého točí Sony. Ak netočíš do S-Logu alebo točíš do RAW, tento riadok tam písať nemusíš, prípadne si ho uprav podľa svojho materiálu. Ak si nie si istý, čo jednotlivé pojmy ako ISO či expozícia znamenajú, mrkni na náš článok o [základných pojmoch videa a fotografie](/blog/zakladne-pojmy-fotografie/).

Pred odoslaním si prompt ešte raz prejdi. **Každá vec, ktorú mu nepovieš, sa v hotovom videu neobjaví.** Presne na tom som narazil s titulkami.

### Krok 7: Odošli a choď preč od počítača

Počas behu sa ťa to môže párkrát opýtať na povolenie. Povoľ to, inak sa to zasekne.

A potom to naozaj nechaj bežať.

---

## Čo to zvládne a čo nie

**Zvládne:**

- Prečítať a pochopiť štruktúru projektu, timeline a stôp
- Zostrihať video podľa voiceoveru a vyhodiť ticho
- Vytvoriť duplikát timeline a pracovať na ňom
- Color grading vrátane prevodov z log profilov
- Čistenie zvuku (mlaskanie, nádychy)
- Transkripciu a titulky
- Markery, metadáta, render nastavenia
- Preview timeline na kontrolu vlastnej práce

**Nezvládne alebo má s tým problém:**

- **Presúvanie klipov v timeline:** v súčasnej implementácii MCP nie je podporované
- Časť Python API zatiaľ nie je prepojená
- **Deterministické dávkové operácie** s rollbackom: na to je stále lepšie klasické skriptovanie
- Čokoľvek, čo si mu nepovedal

---

## Riešenie problémov

| Problém | Riešenie |
|---|---|
| Nefunguje to hneď po nastavení | Vypni a zapni Resolve. Znie to ako klišé, u mňa to bol presne ten prípad. |
| Nevidíš *Setup AI Assistance* | Skontroluj, či máš **Studio** verziu a aktualizované na 21.1. |
| Asistent Resolve vôbec nevidí | Resolve musí byť otvorené s načítaným projektom. Reštartuj klienta asistenta. |
| Vidí zlý projekt | Zastav všetko. Zavri ostatné projekty a otvor len ten správny. |
| Zastavuje sa a pýta sa na povolenia | Nemáš *Always Allow*. Vráť sa do Configure. |
| Read-only test prejde, ale nič neupraví | Je to očakávané správanie oprávnení. Skontroluj úroveň prístupu klienta. |
| Výsledok je slabý alebo nerozumie zadaniu | Skontroluj model. Prepni na Opus. |

---

## Ekonomika: oplatí sa to?

Počítajme.

Ak točíš krátke videá, **neoplatí sa to.** Trojminútový klip zostriháš sám rýchlejšie, než to dobehne.

Ak točíš dlhé formáty, matematika sa otáča. Mám 45 minút surového materiálu, z ktorého má ostať 30. To znamená vysekať 15 minút nádychov, prerieknutí a mŕtvych miest. To je reálne hodina až dve práce.

Teraz to trvá 20 minút, počas ktorých nie som pri počítači.

**Pri 100 videách ročne** je 15 ušetrených minút na videu **25 hodín**. To je viac ako tri pracovné dni. Kredity, ktoré na to minieš, sú oproti tomu drobné.

A to najdôležitejšie: ten čas sa nedá dokúpiť. Podobne ako pri [natáčaní videoklipu Izzy OG — Za tebou](/blog/izzy-og-za-tebou-nakrucanie-videoklipu/), kde šlo o desiatky hodín strihu a farbenia, je práve postprodukcia miesto, kde sa dá ušetriť najviac.

---

## Kam to smeruje: dávkové spracovanie cez noc

Toto ma napadlo až počas testovania a myslím, že je to väčšia vec, než sa zdá.

Asistent vie pracovať aj s inými nástrojmi naraz. Dá sa k nemu pripojiť napríklad **Google Docs**. To znamená, že si tam nahádžem scenáre na šesť videí, tie videá hodím do projektu a napíšem:

> Na každé video vytvor vlastnú timeline a na všetkých sprav tento istý proces.

Pustím to večer. Ráno mám hotové.

Toto je moment, kedy z toho prestáva byť hračka a stáva sa z toho pracovný nástroj. Nie preto, že to strihá lepšie ako ja, ale preto, že to **strihá vtedy, keď ja nestriham**.

---

## Záver

Za mňa to má veľký zmysel. Nie ako náhrada strihača, ale ako spôsob, ako presunúť otravnú mechanickú prácu na pozadie.

Stojí ma to kredity. Šetrí mi to čas. A čas sa nedá dokúpiť.

Som zvedavý, čo všetko to ešte zvládne, a budem to skúšať ďalej, hlavne to dávkové spracovanie viacerých videí naraz. Ak ťa zaujíma niečo konkrétne alebo chceš ďalšie takéto návody, napíš mi do komentárov.

---

### Zdroje

- [DaVinci Resolve 21.1 Released: AI Assistant Integration via MCP, Individual HDR Trims, and Python Scripting Moves to Studio (CineD)](https://www.cined.com/davinci-resolve-21-1-released-ai-assistant-integration-via-mcp-individual-hdr-trims-and-python-scripting-moves-to-studio/)
- [DaVinci Resolve 21.1 Adds Native MCP Server for AI Agents (byteiota)](https://byteiota.com/davinci-resolve-21-1-mcp-server/)
- [How to Connect an AI Assistant to DaVinci Resolve 21.1 MCP (cutsio)](https://cutsio.com/blog/how-to-connect-ai-assistant-davinci-resolve-21-1-mcp)
- [DaVinci Resolve 21.1 Lets ChatGPT and Claude Perform Editing Tasks (Y.M.Cinema)](https://ymcinema.com/2026/09/09/davinci-resolve-21-1-chatgpt-claude-ai-assistants/)
- [DaVinci Resolve 21.1 Introduces Claude and ChatGPT Assistants (VP Land)](https://www.vp-land.com/stories/davinci-resolve-21-1-introduces-claude-and-chatgpt-assistants-that-edit-across-post-throug)
