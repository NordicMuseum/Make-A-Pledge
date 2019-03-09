var categories = {
  'Clothing': {
    name: 'Kläder',
    icon: 'water_icon.png',
    actions: [
      {
        id: 'Vintageclothing',
        name: 'Handla second hand.',
        // altName: '',
        text: 'Klädindustrin och bomullsodling sliter hårt på miljön. Men handlar du second hand kan du spara upp till 97 procent av energin som går åt till att tillverka nya kläder. Det är dessutom roligt att gå på loppis där du kan hitta riktigt unika plagg till låga priser.',
        localOrgText: 'ExampleLocalOrg',
        localOrgLink: ['http://www.example.com/'],
        learnMoreText: 'Klimatsmarta handlar second hand',
        learnMoreLink: 'http://www.tidningenhalsa.se/artiklar/kategori/20120420/klimatsmarta-handlar-second-hand/'
      },
      {
        id: 'Quality',
        name: 'Köp färre och i bättre kvalité om du köper nytt.',
        text: 'Fundera ordentligt varje gång du köper nya kläder. Om du verkligen behöver köpa nya kläder, köp då färre plagg i bättre kvalité som håller länge.',
        localOrgText: 'ExampleLocalOrg',
        localOrgLink: ['http://www.example.com/'],
        learnMoreText: 'Skapa en klimatsmart garderob',
        learnMoreLink: 'https://extra.orebro.se/klimatsmartvardag/klimatsmartatips/ekonomiochkonsumtion/skapaenhallbargarderob.4.6ad5e21514fe44c621c5044.html'
      },
      {
        id: 'Mend',
        name: 'Lappa, laga eller lämna in.',
        text: 'Om ett plagg går sönder. Reparera det då. Ett hål på byxorna kan lappas, grenen kan förstärkas och skjortkragen vändas eller bytas ut. Kan du redan sy, så sätt igång. Annars kan du gå en kurs eller lämna in plagget för lagning. Ett lappat plagg blir unikt och ofta mycket vackert.',
        localOrgText: 'ExampleLocalOrg',
        localOrgLink: ['http://www.example.com/'],
        learnMoreText: 'Bli klimatsmart. Så vårdar du dina kläder',
        learnMoreLink: 'https://karlavagen31.se/bli-klimatsmart-sa-vardar-du-dina-klader'

      }
    ]
  },
  'Travels': {
    name: 'Resor',
    icon: 'transportation_icon.png',
    actions: [
      {
        id: 'Bike',
        name: 'Testa att cykla.',
        text: 'Försök undvika bilen när du tar dig till och från jobbet. Ta cykeln istället. Det är miljövänligt och du får motion.',
        localOrgText: 'ExampleLocalOrg',
        localOrgLink: ['http://www.example.com/'],
        learnMoreText: 'Res klimatsmart',
        learnMoreLink: 'https://voxnadalen.naturskyddsforeningen.se/gron-guide/res-klimatsmart'
      },
      {
        id: 'Publictransport',
        name: 'Gå över till kollektivtrafik.',
        text: 'Istället för att köra bil. Gå över till pendeltåg, buss eller tunnelbana.',
        localOrgText: 'ExampleLocalOrg',
        localOrgLink: ['http://www.example.com/'],
        learnMoreText: 'Res klimatsmart',
        learnMoreLink: 'https://voxnadalen.naturskyddsforeningen.se/gron-guide/res-klimatsmart'
      },
      {
        id: 'Airtravel',
        name: 'Semestra klimatsmart.',
        text: 'Långa flygresor är extremt klimatpåverkande. Försök därför semestra på närmare håll och ta tåget när det är möjligt. Låt de långa resorna med flyg vara något riktigt speciellt som du inte gör varje år. Semestra i Sverige eller Europa i år. Ni kan exempelvis fjällvandra, åka tåg till en spännande stad eller båtluffa i skärgården.',
        localOrgText: 'ExampleLocalOrg',
        localOrgLink: ['http://www.example.com/'],
        learnMoreText: 'Res klimatsmart',
        learnMoreLink: 'https://voxnadalen.naturskyddsforeningen.se/gron-guide/res-klimatsmart'
      }
    ]
  },
  'Purchases': {
    name: 'Prylar',
    icon: 'habitat_icon.png',
    actions: [
      {
        id: 'Secondhand',
        name: 'Köp second hand .',
        text: 'Inred ditt hem klimatsmart! Behöver du möbler, leksaker till barnen eller något annat till barnen. Handla second hand. Gå på loppis, kolla på blocket eller gå på auktion. Du får ofta kvalitetsmöbler för lägre pris än nytillverkade av sämre kvalité.',
        localOrgText: 'ExampleLocalOrg',
        localOrgLink: ['http://www.example.com/'],
        learnMoreText: 'Att inreda hållbart.',
        learnMoreLink: 'https://malin.elledecoration.se/att-inreda-hallbart'
      },
      {
        id: 'Repair',
        name: 'Laga en pryl.',
        text: 'Har något hemma gått sönder? Laga själv, eller lämna in för lagning istället för att slänga och köpa nytt.',
        localOrgText: 'ExampleLocalOrg',
        localOrgLink: ['http://www.example.com/'],
        learnMoreText: 'Att inreda hållbart.',
        learnMoreLink: 'https://malin.elledecoration.se/att-inreda-hallbart'
      },
      {
        id: 'Durability',
        name: 'Gör långsiktiga inköp.',
        localOrgText: 'Behöver du verkligen köpa nytt, välj då något av högre kvalité som håller längre och som är tillverkat i miljövänliga material. Om du köper en soffa kan du exempelvis undersöka om klädseln är avtagbar och tvättbar, eller om ett bord vid behov går att slipa ner.',
        localOrgLink: [],
        learnMoreText: 'Att inreda hållbart.',
        learnMoreLink: 'https://malin.elledecoration.se/att-inreda-hallbart'
      }
    ]
  },
  'Living': {
    name: 'Bostaden',
    icon: 'energy_icon.png',
    actions: [
      {
        id: 'Energyaudit',
        name: 'Klimatsäkra huset.',
        text: 'Spara på elen och uppvärmningen genom att täta springor i väggar och golv.',
        localOrgText: 'ExampleLocalOrg',
        localOrgLink: ['http://www.example.com/'],
        learnMoreText: 'Bo klimatsmart',
        learnMoreLink: 'https://www.folksam.se/tester-och-goda-rad/miljo-och-ansvar/bli-klimatsmart/bo-klimatsmart'
      },
      {
        id: 'Water',
        name: 'Bada sällan.',
        text: 'När du badar i badkar går det åt 150 liter vatten. Energianvändningen för att värma det vattnet är 5,6 kWh. Jämför det med att ta en 5 minuters dusch då det kan gå åt 60 liter vatten som värms upp med 2,2 kWh. Unna dig gärna ett bad ibland, men gör det sällan. Det tjänar både du och miljön på.',
        localOrgText: 'ExampleLocalOrg',
        localOrgLink: ['http://www.example.com/'],
        learnMoreText: 'Klimatsmart i hemmet',
        learnMoreLink: 'http://www.stockholm.se/ByggBo/Leva-Miljovanligt/Klimatsmart-i-hemmet'
      },
      {
        id: 'Electronics',
        name: 'Umgås utan TV, dator, mobil eller surfplatta!',
        text: 'Minska energiförbrukningen genom att stänga av TVn och datorn en kväll. Läs, eller samla familj och/eller vänner och spela ett roligt brädspel. Det är klimatsmart och roligt.',
        localOrgText: 'ExampleLocalOrg',
        localOrgLink: ['http://www.example.com/'],
        learnMoreText: 'Klimatsmart i hemmet',
        learnMoreLink: 'http://www.stockholm.se/ByggBo/Leva-Miljovanligt/Klimatsmart-i-hemmet'
      }
    ]
  },
  'Food': {
    name: 'Mat',
    icon: 'food_icon.png',
    actions: [
      {
        id: 'Vegetarian',
        name: 'Ät mer vegetariskt.',
        text: 'Om du låter bli att äta nötkött en gång i veckan under ett år undviker du 150 kilo växthusgasutsläpp. Du sparar även pengar på att byta ut köttet mot till exempel baljväxter en gång i veckan. På ett år sparar du minst 450 kronor per person i hushållet genom att göra pastasås med bönor istället för med köttfärs.',
        localOrgText: 'ExampleLocalOrg',
        localOrgLink: ['http://www.example.com/'],
        learnMoreText: 'Klimatsmart i hemmet',
        learnMoreLink: 'http://www.stockholm.se/ByggBo/Leva-Miljovanligt/Klimatsmart-i-hemmet'
      },
      {
        id: 'Foodwaste',
        name: 'Släng inte maten och handla bara så mycket du äter upp.',
        text: 'Varje svensk slänger 28 kilo ätbar mat i soporna och 26 liter dryck i slasken varje år. Med planerade matinköp och inköpslistor samt rätt förvarade livsmedel kan ditt hushåll spara 3 000–6 000 kr per år på att minska matsvinnet. Förvara maten i temperaturen som producenten anger. ”Bäst före-datum” är en rekommendation från tillverkaren och maten håller ofta att äta när datum gått ut. Laga en rätt på rester varje vecka. Rester kan bli en god wok eller ingredienser på en pizza.',
        localOrgText: 'ExampleLocalOrg',
        localOrgLink: ['http://www.example.com/'],
        learnMoreText: 'Klimatsmart i hemmet',
        learnMoreLink: 'http://www.stockholm.se/ByggBo/Leva-Miljovanligt/Klimatsmart-i-hemmet'
      },
      {
        id: 'Locallyproduced',
        name: 'Köp närproducerat och efter säsong.',
        text: 'Fråga i din matbutik vad som är i säsong just nu. Det finns ofta många olika sorters grönsaker, rotfrukter och baljväxter som bara väntar på att bli upptäckta! Potatis har liksom morot, broccoli och vitkål mycket liten klimatpåverkan eftersom de kan odlas nära, är tåliga och kan lagras länge. Ris har högre klimatpåverkan då det odlas i vatten och växtdelarnas nedbrytning bildar metangas. Ris kräver även långa transporter och är dyrare än potatis. Ett alternativ till ris är matvete.',
        localOrgText: 'ExampleLocalOrg',
        localOrgLink: ['http://www.example.com/'],
        learnMoreText: 'Klimatsmart i hemmet',
        learnMoreLink: 'http://www.stockholm.se/ByggBo/Leva-Miljovanligt/Klimatsmart-i-hemmet'
      }
    ]
  }
}
