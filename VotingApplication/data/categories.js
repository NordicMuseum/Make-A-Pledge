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
        text: 'Inred ditt hem klimatsmart! Behöver du möbler, leksaker till barnen, handla second hand. Gå på loppis, kolla på blocket eller gå på auktion. Du får ofta kvalitetsmöbler för lägre pris än nytillverkade av sämre kvalité.',
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
        localOrgText: 'Behöver du verkligen köpa nytt, välj då något av högre kvalité som håller längre och som är tillverkat i miljövänliga material. Om du köper en soffa kan du  undersöka om klädseln är avtagbar och tvättbar, eller om ett bord går att slipa ner.',
        localOrgLink: [],
        learnMoreText: 'Att inreda hållbart.',
        learnMoreLink: 'https://malin.elledecoration.se/att-inreda-hallbart'
      }
    ]
  },
  'Living': {
    name: 'Boende',
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
        text: 'Om du låter bli att äta nötkött en gång i veckan under ett år undviker du 150 kilo växthusgasutsläpp. Du sparar även pengar &ndash; på ett år sparar du minst 450 kronor per person i hushållet genom att göra pastasås med bönor istället för med köttfärs.',
        localOrgText: 'ExampleLocalOrg',
        localOrgLink: ['http://www.example.com/'],
        learnMoreText: 'Klimatsmart i hemmet',
        learnMoreLink: 'http://www.stockholm.se/ByggBo/Leva-Miljovanligt/Klimatsmart-i-hemmet'
      },
      {
        id: 'Foodwaste',
        name: 'Handla så mycket som du äter upp.',
        text: 'Varje svensk slänger 28 kilo ätbar mat i soporna varje år. Med planerade matinköp samt rätt förvarade livsmedel kan ditt hushåll spara 3 000–6 000 kr per år. Förvara maten i den temperatur som producenten anger. ”Bäst före-datum” är en rekommendation och maten håller ofta att äta när datum gått ut.',
        localOrgText: 'ExampleLocalOrg',
        localOrgLink: ['http://www.example.com/'],
        learnMoreText: 'Klimatsmart i hemmet',
        learnMoreLink: 'http://www.stockholm.se/ByggBo/Leva-Miljovanligt/Klimatsmart-i-hemmet'
      },
      {
        id: 'Locallyproduced',
        name: 'Köp närproducerat och efter säsong.',
        text: 'Fråga vad som är i säsong just nu. Potatis har liksom morot, broccoli och vitkål mycket liten klimatpåverkan eftersom de kan odlas nära och kan lagras länge. Ris har högre klimatpåverkan då det odlas i vatten och växtdelarnas nedbrytning bildar metangas. Ett alternativ till ris är matvete.',
        localOrgText: 'ExampleLocalOrg',
        localOrgLink: ['http://www.example.com/'],
        learnMoreText: 'Klimatsmart i hemmet',
        learnMoreLink: 'http://www.stockholm.se/ByggBo/Leva-Miljovanligt/Klimatsmart-i-hemmet'
      }
    ]
  }
}
