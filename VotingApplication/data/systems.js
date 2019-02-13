var systems = {
  'Clothing': {
    name: 'Clothing',
    icon: 'water_icon.png',
    actions: [
      {
        id: 'Vintageclothing',
        name: 'Handla second hand.',
        // altName: '',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim arcu non erat maximus aliquam.',
        localOrgText: '',
        localOrgLink: [],
        learnMoreText: 'Läs mer om att vårda dina kläder.',
        learnMoreLink: 'https://voxnadalen.naturskyddsforeningen.se/gron-guide/res-klimatsmart'
      },
      {
        id: 'Quality',
        name: 'Köp färre och i bättre kvalité om du köper nytt.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim arcu non erat maximus aliquam.',
        localOrgText: '',
        localOrgLink: [],
        learnMoreText: 'Läs mer om att vårda dina kläder.',
        learnMoreLink: 'https://voxnadalen.naturskyddsforeningen.se/gron-guide/res-klimatsmart'
      },
      {
        id: 'Mend',
        name: 'Lappa, laga eller lämna in.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim arcu non erat maximus aliquam.',
        localOrgText: '',
        localOrgLink: [],
        learnMoreText: 'Läs mer om att vårda dina kläder.',
        learnMoreLink: 'https://voxnadalen.naturskyddsforeningen.se/gron-guide/res-klimatsmart'

      }
    ]
  },
  'Travels': {
    name: 'Travels',
    icon: 'transportation_icon.png',
    actions: [
      {
        id: 'Bike',
        name: 'Testa att cykla.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim arcu non erat maximus aliquam.',
        localOrgText: '',
        localOrgLink: [],
        learnMoreText: 'Läs mer hos Naturskyddsföreningen',
        learnMoreLink: 'https://voxnadalen.naturskyddsforeningen.se/gron-guide/res-klimatsmart'
      },
      {
        id: 'Publictransport',
        name: 'Gå över till kollektivtrafik.',
        text: 'Learn more about alternative energy options that<br>are available to you.',
        localOrgText: '',
        localOrgLink: [],
        learnMoreText: 'Läs mer hos Naturskyddsföreningen',
        learnMoreLink: 'https://voxnadalen.naturskyddsforeningen.se/gron-guide/res-klimatsmart'
      },
      {
        id: 'Airtravel',
        name: 'Semestra klimatsmart.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim arcu non erat maximus aliquam.',
        localOrgText: '',
        localOrgLink: [],
        learnMoreText: 'Läs mer hos Naturskyddsföreningen',
        learnMoreLink: 'https://voxnadalen.naturskyddsforeningen.se/gron-guide/res-klimatsmart'
      }
    ]
  },
  'Purchases': {
    name: 'Purchases',
    icon: 'habitat_icon.png',
    actions: [
      {
        id: 'Secondhand',
        name: 'Köp second hand .',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim arcu non erat maximus aliquam.',
        localOrgText: '',
        localOrgLink: [],
        learnMoreText: 'Läs mer om att inreda hållbart.',
        learnMoreLink: 'https://malin.elledecoration.se/att-inreda-hallbart'
      },
      {
        id: 'Repair',
        name: 'Laga en pryl.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim arcu non erat maximus aliquam.',
        localOrgText: '',
        localOrgLink: [],
        learnMoreText: 'Läs mer om att inreda hållbart.',
        learnMoreLink: 'https://malin.elledecoration.se/att-inreda-hallbart'
      },
      {
        id: 'Durability',
        name: 'Gör långsiktiga inköp.',
        localOrgText: '',
        localOrgLink: [],
        learnMoreText: 'Läs mer om att inreda hållbart.',
        learnMoreLink: 'https://malin.elledecoration.se/att-inreda-hallbart'
      }
    ]
  },
  'Living': {
    name: 'Living',
    icon: 'energy_icon.png',
    actions: [
      {
        id: 'Energyaudit',
        name: 'Klimatsäkra huset.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim arcu non erat maximus aliquam.',
        localOrgText: '',
        localOrgLink: [],
        learnMoreText: 'Läs mer om att leva miljövänligt.',
        learnMoreLink: 'https://www.folksam.se/tester-och-goda-rad/miljo-och-ansvar/bli-klimatsmart/bo-klimatsmart'
      },
      {
        id: 'Water',
        name: 'Bada sällan.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim arcu non erat maximus aliquam.',
        localOrgText: '',
        localOrgLink: [],
        learnMoreText: 'Läs mer om att leva miljövänligt.',
        learnMoreLink: 'http://www.stockholm.se/ByggBo/Leva-Miljovanligt/Klimatsmart-i-hemmet'
      },
      {
        id: 'Electronics',
        name: 'Umgås utan TV, dator, mobil eller surfplatta!',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim arcu non erat maximus aliquam.',
        localOrgText: '',
        localOrgLink: [],
        learnMoreText: 'Läs mer om att leva miljövänligt.',
        learnMoreLink: 'http://www.stockholm.se/ByggBo/Leva-Miljovanligt/Klimatsmart-i-hemmet'
      }
    ]
  },
  'Food': {
    name: 'Food',
    icon: 'food_icon.png',
    actions: [
      {
        id: 'Vegetarian',
        name: 'Ät mer vegetariskt.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim arcu non erat maximus aliquam.',
        localOrgText: '',
        localOrgLink: [],
        learnMoreText: 'Läs mer om att äta miljövänligt.',
        learnMoreLink: 'http://www.stockholm.se/ByggBo/Leva-Miljovanligt/Klimatsmart-i-hemmet'
      },
      {
        id: 'Foodwaste',
        name: 'Släng inte maten och handla bara så mycket du äter upp.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim arcu non erat maximus aliquam.',
        localOrgText: '',
        localOrgLink: [],
        learnMoreText: 'Läs mer om att äta miljövänligt.',
        learnMoreLink: 'http://www.stockholm.se/ByggBo/Leva-Miljovanligt/Klimatsmart-i-hemmet'
      },
      {
        id: 'Locallyproduced',
        name: 'Köp närproducerat och efter säsong.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim arcu non erat maximus aliquam.',
        localOrgText: '',
        localOrgLink: [],
        learnMoreText: 'Läs mer om att äta miljövänligt.',
        learnMoreLink: 'http://www.stockholm.se/ByggBo/Leva-Miljovanligt/Klimatsmart-i-hemmet'
      }
    ]
  }
}
