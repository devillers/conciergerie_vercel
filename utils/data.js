import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'John',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jane',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  cleaning: [
    {
      mainTitle: 'Nettoyage et frais d entretien',
      title: 'Gestion complète de votre ménage',
      description:
        'Si vous vous lancez dans la location saisonnière, il peut être difficile d’être toujours présent et réactif aux demandes des voyageurs, et c’est encore plus vrai concernant le nettoyage de votre logement entre chaque location. Pour accueillir comme il se doit tous vos voyageurs, nous vous proposons un service de ménage Airbnb complet.',
      secondTitle: 'Des prestaires de ménage professionnels pour vos locations',
      prestataires:
        'Nos prestataires ont pour la plupart une expérience professionnelle confirmée dans le domaine de hôtellerie.',
      qualityTitle:
        'Un nettoyage complet pour un logement propre en toute circonstance',
      qualityContent:
        'Notre service de ménage Airbnb est conçu pour que votre logement soit bien propre et sente bon avant l’arrivée de chaque voyageur : Changement du linge de lit, Changement des serviettes, tapis de bain et torchons, Logement nettoyé de fond en comble, avec des produits nettoyants de qualité. Notre service de ménage est conçu pour que tout soit parfait pour l’arrivée de vos voyageurs et assurer une satisfaction maximale.',
      consommableTitle: 'Mise à dispostion des consomables de base',
      consommableContent:
        'Afin que tout soit parfait pour vos voyageurs, nous leur fournissons tous les consommables nécessaires à leur séjour : petits flacons de savon et de shampoing, sacs-poubelle et papier toilette. C’est ce sens du détail qui assure la qualité de nos services et un accueil chaleureux réussi pendant votre location saisonnière.',
      cleaningFeesTitle: 'Des frais de ménage payés par vos locataires',
      cleaningFeesContent:
        'Pour chacune des réservations, nous facturons les frais de ménage aux voyageurs. Chaque voyageur paie donc le ménage fait après son séjour. La plupart du temps, nous prenons à notre charge le ménage fait avant l’arrivée du premier voyageur. Vous n’avez donc rien à débourser !',
    },
  ],

  check_In: [
    {
      title_one: 'CHECK IN Airbnb',
      description_one:
        'Nous prenons soin de vos voyageurs grâce à un service de gestion des arrivées bien rodé. Préparation de l’appartement, remise des clés, communication avec vos voyageurs : Nous vous garantissons un service 5 étoiles pour l arrivée des voyageurs.',
      title_two: 'CheckIn CheckOut',
      description_two:
        'Notre équipe est disponible 7j/7 pour répondre à toutes les questions des voyageurs et s assurer du bon déroulement de leur séjour. Un service de ménage de qualité hôtelière est réalisé avant l arrivée de chaque voyageur. Nous fournissons tout le linge de maison (draps, serviettes, tapis de bain, torchons) ainsi que les consommables de base (papier toilette, sac poubelle, savon, shampoing), comme à lhôtel ! Une fois le ménage réalisé, nous gérons la remise des clés pour que vos voyageurs puissent avoir accès facilement à votre logement !',
      title_three: 'A l écoute de vos voyageurs durant votre absence',
      description_three:
        'Avoir recours à conciergerie pour les check-in Airbnb, c’est aussi s’assurer que vos voyageurs passent un bon séjour : l’attention la plus grande est portée au séjour et au confort de vos voyageurs, afin qu’ils soient plus cléments lors de la notation de votre bien, les commentaires donnés étant un précieux avantage pour augmenter l’attractivité de votre annonce Airbnb.',
    },
  ],
  check_Out: [
    {
      title_one: 'CHECK OUT Airbnb',
      description_one:
        'Check-out Airbnb et gestion des départs : lorsque vos voyageurs quittent votre bien, nous le préparons pour qu’il soit prêt à accueillir de nouveaux voyageurs, ou vous-même',
      title_two: 'Gestion des clés',
      description_two:
        'Pour un check-out réussi, nous rappelons aux voyageurs qu ils doivent quitter votre logement avant 10h le dernier jour de leur location et nous leur transmettons toutes les informations nécessaires pour la remise des clés via la conversation Airbnb. Bien sûr, nous nous tenons comme d habitude à leur entière disposition s ils ont la moindre question.',
      title_three: 'Préparation du logement pour les prochains locataires',
      description_three:
        'Une fois les voyageurs ayant réalisés leur check-out Airbnb, une équipe de ménage prend le relai, pour nettoyer le logement de fond en comble et ne laisser aucun trace du passage des précédents voyageurs : l ensemble du linge de maison est changé, les consommables réapprovisionnés, les poubelles sont vidées, les sols sont lavés',
      title_four:
        'Après le départ des derniers voyageurs, notre équipe de ménage passe une dernière fois pour remettre un bon coup de propre dans votre logement : à votre retour, votre logement sent bon et est presque plus propre que quand vous l’aviez laissé !',
      description_four:
        'Après le départ des derniers voyageurs, notre équipe de ménage passe une dernière fois pour remettre un bon coup de propre dans votre logement : à votre retour, votre logement sent bon et est presque plus propre que quand vous l’aviez laissé !',
    },
  ],

  products: [
    {
      name: 'kit drap simple',
      slug: 'kit-drap-simple',
      category: 'draps',
      image: '/images/parure.jpg',
      price: 17,
      brand: 'artisan blanchisseur',
      rating: 4.5,
      numReviews: 8,
      countInStock: 0,
      description:
        "kit comprenant un drap simple, une housse de couette 1 persone et une taie d'oreiller",
    },
    {
      name: 'kit drap double',
      slug: 'kit-drap-double',
      category: 'draps',
      image: '/images/parure.jpg',
      price: 17,
      brand: 'artisan blanchisseur',
      rating: 4.5,
      numReviews: 8,
      countInStock: 10,
      description:
        "kit comprenant un drap simple, une housse de couette 1 persone et une taie d'oreiller",
    },
    {
      name: 'kit drap simple & serviettes',
      slug: 'kit-drap-simple-serviettes',
      category: 'draps',
      image: '/images/parure.jpg',
      price: 21,
      brand: 'artisan blanchisseur',
      rating: 3.5,
      numReviews: 4,
      countInStock: 2,
      description:
        "kit comprenant un drap simple, une housse de couette 1 personne et une taie d'oreiller plus 2 serviettes par personne",
    },
    {
      name: 'kit drap double & serviettes',
      slug: 'kit-drap-double-serviettes',
      category: 'draps',
      image: '/images/parure.jpg',
      price: 21,
      brand: 'artisan blanchisseur',
      rating: 3.5,
      numReviews: 4,
      countInStock: 10,
      description:
        "kit comprenant un drap simple, une housse de couette 1 personne et une taie d'oreiller plus 2 serviettes par personne",
    },
    {
      name: 'kit serviettes',
      slug: 'kit-serviettes',
      category: 'serviette',
      image: '/images/parure.jpg',
      price: 9,
      brand: 'artisan blanchisseur',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description:
        'Le drap de bain Vidori est le plus moelleux et luxueux de notre gamme de linge éponge. Incroyablement confortable avec ses 700g/m², il est doux grâce à sa composition en coton majoritaire. Cette éponge présente un ourlet sergé, lui assurant sobriété et raffinement. ',
    },
    {
      name: 'Tapis de bain ',
      slug: 'Tapis-de-bain',
      category: 'serviettes',
      image: '/images/parure.jpg',
      price: 5,
      brand: 'artisan blanchisseur',
      rating: 3.5,
      numReviews: 4,
      countInStock: 10,
      description:
        "kit comprenant un drap double, une housse de couette 2 persones, 2 taies d'oreiller plus 2 serviettes par personne",
    },
    {
      name: 'Matelas suppléementaire pour lit parapluie ',
      slug: 'matelas-sup',
      category: 'accessoires',
      image: '/images/parure.jpg',
      price: 6,
      brand: 'artisan blanchisseur',
      rating: 3.5,
      numReviews: 2,
      countInStock: 10,
      description:
        "ATTENTION: Cet équipement ne peut pas être loué seul. Merci d'y associer un lit parapluie ou un autre matériel.Si vous trouvez que le matelas fourni dans le sac du lit parapluie est trop fin ou pas assez moëlleux pour votre bébé, ce matelas est à votre disposition.",
    },
    {
      name: 'Lit Parapluie ',
      slug: 'lit_parapluie',
      category: 'accessoires',
      image: '/images/parure.jpg',
      price: 24,
      brand: 'artisan blanchisseur',
      rating: 3.5,
      numReviews: 4,
      countInStock: 2,
      description:
        "Ce lit parapluie est un lit d'appoint pour les vacances. Facile à transporter dans son sac, il prend trop de place pour voyager en voiture ou dans le train. Nous actualisons régulièrement notre parc de lits parapluie et les couleurs et les marques de ces lits de bébé peuvent être différentes de la photo indiquée sur cette page. Nous choisissons toujours des couleurs neutres et des marques connues des parents. Pour ouvrir ce type de lit, il faut toujours maintenir le pied central le plus haut possible. Puis commencer par remonter les grands côtés et finir par les plus petits. Seulement alors, vous appuierez sur le pied central pour le bloquer.",
    },
    {
      name: 'Chaise Haute ',
      slug: 'chaise-haute',
      category: 'accessoires',
      image: '/images/parure.jpg',
      price: 24,
      brand: 'artisan blanchisseur',
      rating: 3.5,
      numReviews: 4,
      countInStock: 2,
      description:
        "Ce lit parapluie est un lit d'appoint pour les vacances. Facile à transporter dans son sac, il prend trop de place pour voyager en voiture ou dans le train. Nous actualisons régulièrement notre parc de lits parapluie et les couleurs et les marques de ces lits de bébé peuvent être différentes de la photo indiquée sur cette page. Nous choisissons toujours des couleurs neutres et des marques connues des parents. Pour ouvrir ce type de lit, il faut toujours maintenir le pied central le plus haut possible. Puis commencer par remonter les grands côtés et finir par les plus petits. Seulement alors, vous appuierez sur le pied central pour le bloquer.",
    },
  ],
  chalets: [
    {
      name: 'La Picherie',
      nameShort: 'La Picherie',
      slug: 'la_picherie_saint_nicolas',
      category: 'chalet',
      village: 'Saint Nicolas de Véroce',
      image_1:
        'https://res.cloudinary.com/davidevillers/image/upload/v1656095043/picherie_haut/951646dc-2451-4e74-aeb7-6122fd379699_jdzhmf.jpg',
      image_2:
        'https://res.cloudinary.com/davidevillers/image/upload/v1656095043/picherie_haut/19308ed4-4a5c-4c6c-b275-7b9b756fc785_fyz9he.webp',
      image_3:
        'https://res.cloudinary.com/davidevillers/image/upload/v1656095043/picherie_haut/951646dc-2451-4e74-aeb7-6122fd379699_jdzhmf.jpg',
      image_4:
        'https://res.cloudinary.com/davidevillers/image/upload/v1656095043/picherie_haut/333b20d5-ff91-416b-af45-391d5744816d_mopjhq.jpg',
      image_5:
        'https://res.cloudinary.com/davidevillers/image/upload/v1656095040/picherie_haut/d1f73c5b-42c8-4da5-85c7-f755f3711042_kvwa8t.jpg',
      image_6:
        'https://res.cloudinary.com/davidevillers/image/upload/v1656095040/picherie_haut/ad25c397-65e8-4746-aaca-9587b6a895ec_rvne3x.webp',
      image_7:
        'https://res.cloudinary.com/davidevillers/image/upload/v1656095036/picherie_haut/4023ccfe-cc38-4200-824b-ac1b8fceb8b7_vgv4wu.webp',
      image_8:
        'https://res.cloudinary.com/davidevillers/image/upload/v1656095036/picherie_haut/328c681b-9272-4e32-88a8-b0c155c5e26b_h4bfvq.webp',
      image_9:
        'https://res.cloudinary.com/davidevillers/image/upload/v1656095036/picherie_haut/d810426e-1de4-4762-b3cf-3cd1fb106781_ng2juq.jpg',
      image_10:
        'https://res.cloudinary.com/davidevillers/image/upload/v1656095033/picherie_haut/fd539054-29c5-4812-a096-f7e240da74d8_ifkrnw.jpg',
      image_11:
        'https://res.cloudinary.com/davidevillers/image/upload/v1656095031/picherie_haut/24af3bf1-a32d-4f2e-bdc3-05a9c03a50d1_gmkjln.webp',
      image_12:
        'https://res.cloudinary.com/davidevillers/image/upload/v1656095030/picherie_haut/f1471911-6ad7-4530-bb04-e8da93e1ac95_lpjulp.webp',
      image_13:
        'https://res.cloudinary.com/davidevillers/image/upload/v1656095026/picherie_haut/8ae49b36-877c-4717-a2bf-d8c86bcd8baa_njrg99.jpg',
      image_14:
        'https://res.cloudinary.com/davidevillers/image/upload/v1656095026/picherie_haut/f6a498c4-1c1b-4740-a3eb-383e950b25a0_liqs0k.webp',
      image_15:
        'https://res.cloudinary.com/davidevillers/image/upload/v1656095025/picherie_haut/17ace651-24b5-4904-899b-54d9de205966_apmreu.webp',
      image_16:
        'https://res.cloudinary.com/davidevillers/image/upload/v1656095024/picherie_haut/36ef2f73-8719-4d7a-851e-f194b870ceda_qlft8h.webp',
      image_17:
        'https://res.cloudinary.com/davidevillers/image/upload/v1656095024/picherie_haut/55f1f53d-5100-4c53-a3d9-fc394e206b4b_c3ecb0.webp',
      image_18:
        'https://res.cloudinary.com/davidevillers/image/upload/v1656095021/picherie_haut/f7a2ceca-bbc4-473a-b7c9-768baa472964_eyqfjg.webp',
      image_19:
        'https://res.cloudinary.com/davidevillers/image/upload/v1656095020/picherie_haut/16ed7893-1f8d-457a-b326-141ca3613f90_vfif41.webp',
      image_20:
        'https://res.cloudinary.com/davidevillers/image/upload/v1656095019/picherie_haut/9edb29a4-f0db-480a-b392-f26a45731c9c_cstdug.webp',
      airbnb: 'https://airbnb.com/h/lapicherie',
      private: 'https://www.appchaletmontjoye.conciergerie-saint-gervais.com/',
      booking: '',
      bedrooms: 6,
      capacity: 19,
      sauna: '1 sauna',
      jacuzzy: '',
      hammam: '',
      firePlace: '1 cheminée',
      carPark: '4 places de parking',
      busTopName: 'arrêt de bus Lachat',
      kitchenSize: '60 m2',
      bathTube: 2,
      shower: 4,
      dryer: '1 seche linge',
      dishwasher: '1 lave vaisselle',
      tvscreen: '1 television',
      singleBed: '4 lits simples',
      doubleBed: '4 lits doubles',
      bedBunk: '2 lits superposés',
      party: 0,
      conciergerie: 'Conciergerie St Gervais 06 07 85 90 58',
      foldingBed: '1 lit parapluie',
      highChair: '1 chaise haute',
      vueOn: 'massif du Mont Blanc, les fiz & les Aravis',
      wifi: true,
      sdb: 5,
      surface: 140,
      price: 200,
      adresse: '147 Chem. du Thovex, 74170 Saint-Gervais-les-Bains, France',
      long: 37,
      lat: -122,
      description:
        'Bienvenus dans cette splendide ferme de 1842 fraichement rénovée avec des prestations haut de gamme, Navette au pied de la ferme pour accès au télésiège des Chattrix à 1km, et au village de St Nicolas ou St Gervais, Proche du village authentique de Saint Nicolas de Véroce, vue : Mont Blanc, chaîne des Fix, une partie des Aravis et forêt.Séjour avec cheminée, cuisine et salle à manger de 100m2. 4 chambres doubles, 1 avec canapé lit, 2 dortoirs, 5 SDB.Terrasse couverte et jardin',
      quartier:
        'Accès aux chemins de randonnée directement.Départ depuis la ferme en ski de randonnée.Espace Evasion/Mont blanc pour le ski de piste (St Nicolas de Veroce, St Gervais, Megeve). Navette au pied de la ferme (Arrêt les Vincents) pour accéder au télésiège des chattrix à 1km ou aux villages de St Nicolas ou St Gervais.',
    },
    {
      name: 'Le Bas de la Picherie',
      nameShort: 'Le bas de la Picherie',
      slug: 'la_picherie_bas_saint_nicolas',
      category: 'appartement',
      village: 'Saint Nicolas de Véroce',
      image_1: '/images/picherie_bas/picherie_bas_1.webp',
      image_2: '/images/picherie_bas/picherie_bas_2.webp',
      image_3: '/images/picherie_bas/picherie_bas_3.webp',
      image_4: '/images/picherie_bas/picherie_bas_4.webp',
      image_5: '/images/picherie_bas/picherie_bas_5.webp',
      airbnb: 'https://airbnb.com/h/lapicherie',
      private: 'https://www.appchaletmontjoye.conciergerie-saint-gervais.com/',
      booking: '',
      bedrooms: '4 chambres',
      capacity: 10,
      sauna: '',
      jacuzzy: '',
      stowart: '',
      hammam: '',
      firePlace: 1,
      carPark: '4 places de parking',
      busTopName: 'arrêt de bus Lachat',
      kitchenSize: 'surface cuisine 60 m2',
      bathTube: 1,
      shower: 3,
      dryer: '1 seche linge',
      whashingMachine: '1 machine à laver',
      dishwasher: '1 lave vaisselle',
      tvscreen: '1 television',
      singleBed: '4 lits simples',
      doubleBed: '4 lits doubles',
      bedBunk: '2 lits superposés',
      party: 'soirée non autorisée',
      conciergerie: 'Conciergerie St Gervais 06 07 85 90 58',
      foldingBed: 'sur réservation',
      highChair: 'sur réservation   ',
      vueOn: 'massif du Mont Blanc, les fiz & les Aravis',
      wifi: 'wifi gratuit',
      sdb: 4,
      surface: 140,
      price: 200,
      adresse: '147 Chem. du Thovex, 74170 Saint-Gervais-les-Bains, France',
      long: 37,
      lat: -122,
      description:
        'Demi-ferme de 14O m2, vue : Mont Blanc, Chaine des Fiz, Aravis et forêt. Domaine skiable Evasion/Mont Blanc ; Navette au pied de la ferme pour accès au télésiège des Chattrix (1km) et village de St Nicolas ou St Gervais. Grand séjour avec poële à bois, cuisine de 60 m2. 3 chambres doubles en suite avec salles d eau. 1 dortoir de 4 lits simples avec salle de bains (baignoire). Chauffe chaussures dans local à ski. Jardin.',
      quartier:
        'Accès aux chemins de randonnée directement.Départ depuis la ferme en ski de randonnée.Espace Evasion/Mont blanc pour le ski de piste (St Nicolas de Veroce, St Gervais, Megeve). Navette au pied de la ferme (Arrêt les Vincents) pour accéder au télésiège des chattrix à 1km ou aux villages de St Nicolas ou St Gervais.',
    },
    {
      name: 'La Pieuca',
      nameShort: 'La Pieuca',
      slug: 'la_pieuca',
      category: 'chalet',
      village: 'Les contamines montjoie',
      image_1: '/images/pieuca/la_pieuca_1.webp',
      image_2: '/images/pieuca/la_pieuca_2.webp',
      image_3: '/images/pieuca/la_pieuca_3.webp',
      image_4: '/images/pieuca/la_pieuca_4.webp',
      image_5: '/images/pieuca/la_pieuca_5.webp',
      airbnb: 'https://airbnb.com/h/lapicherie',
      private: 'https://www.appchaletmontjoye.conciergerie-saint-gervais.com/',
      booking: '',
      bedrooms: '4 chambres',
      capacity: 12,
      sauna: '',
      jacuzzy: '',
      stowart: '',
      hammam: '',
      firePlace: '1 pöele à bois',
      carPark: '4 places de parking',
      busTopName: 'arrêt de bus Lachat',
      kitchenSize: 'surface cuisine 60 m2',
      bathTube: 1,
      shower: 3,
      dryer: '1 seche linge',
      whashingMachine: '1 machine à laver',
      dishwasher: '1 lave vaisselle',
      tvscreen: '1 television',
      singleBed: '',
      doubleBed: '3 lits doubles',
      bedBunk: '2 lits superposés',
      party: 'soirée non autorisée',
      conciergerie: 'Conciergerie St Gervais 06 07 85 90 58',
      foldingBed: 'sur réservation',
      highChair: 'sur réservation',
      vueOn: 'massif du Mont Blanc, les fiz & les Aravis',
      wifi: 'wifi gratuit',
      sdb: 5,
      surface: 140,
      price: 200,
      adresse: '147 Chem. du Thovex, 74170 Saint-Gervais-les-Bains, France',
      long: 37,
      lat: -122,
      description:
        "L'appartement est au 2è étage d'une ferme à l'architecture haut savoyarde typique entièrement rénovée en 2020 et située en lisière de forêt dans un hameau ancien du village. Vous disposerez de 5 chambres ainsi que de 3sdb et 3wc dont 1 séparé. Espaces de réception en conséquence avec un grande table pour tous les convives et un salon confortable. La cuisine est spacieuse et équipée pour cuisiner comme à la maison et une vaste mezzanine permettra aux enfants d'avoir un espace de jeu indépendant. Le logement proximités des remontés mécaniques et du domaine de ski fond (500m). 15mn à pied de la zone de loisir du pont et 5mn du centre village. Exposé sud ouest avec le soleil en fin de journé. départ de sentiers de randonnée au pied de la maison (refuge et glacier de tré la tête). Secteur très calme et aux portes de la réserve naturelle des contamines montjoie.",
      quartier: '',
    },
    {
      name: 'Chalet luxe & calme La Chandelle, 6-12 p, Vue+++',
      nameShort: 'La chandelle',
      slug: 'la_chandelle',
      category: 'chalet',
      village: 'Saint Gervais les Bains',
      image_1: '/images/la_chandelle/la_chandelle_1.webp',
      image_2: '/images/la_chandelle/la_chandelle_2.webp',
      image_3: '/images/la_chandelle/la_chandelle_3.webp',
      image_4: '/images/la_chandelle/la_chandelle_5.webp',
      image_5: '/images/la_chandelle/la_chandelle_4.webp',
      airbnb: 'https://airbnb.com/h/lachandelle',
      private: 'https://www.appchaletmontjoye.conciergerie-saint-gervais.com/',
      booking: '',
      bedrooms: '4 chambres',
      capacity: 12,
      sauna: '',
      jacuzzy: '',
      stowart: '1 stöwart',
      hammam: '',
      firePlace: '1 cheminée',
      carPark: '4 places de parking',
      busTopName: '',
      kitchenSize: 'surface cuisine 20 m2',
      bathTube: 1,
      shower: 3,
      dryer: '1 seche linge',
      whashingMachine: '1 machine à laver',
      dishwasher: '1 lave vaisselle',
      singleBed: '2 lits simples',
      doubleBed: '4 lits doubles',
      bedBunk: '2 lits superposés',
      tvscreen: 0,
      party: 'soirée non autorisée',
      conciergerie: 'Conciergerie St Gervais 06 07 85 90 58',
      foldingBed: 'sur réservation',
      highChair: 'sur réservation',
      vueOn: 'massif du Mont Blanc, les fiz & les Aravis',
      wifi: 'wifi gratuit',
      sdb: 4,
      surface: 140,
      price: 700,
      adresse: '147 Chem. du Thovex, 74170 Saint-Gervais-les-Bains, France',
      long: 37,
      lat: -122,
      description:
        'Calme absolu à Bionnassay (alt. 1400 m), sur le GR Tour du Mont Blanc, avec une vue imprenable sur le mont Vorassay et laiguille du Gouter. Cosy, élégant et chaleureux. Réhabilité par un architecte en 2021 dans le respect des matériaux du pays (vieux bois, pierre, ardoise). Expérience d immersion ht montagne, à seulement 15 mn de St Gervais, de ses commodités & domaines skiables. 4X4 à disposition (obligatoire l hiver). Idéal vacances sportives (rando, raquettes) ou télétravail en pleine nature.',
      quartier:
        'Accès aux chemins de randonnée directement.Départ depuis la ferme en ski de randonnée.Espace Evasion/Mont blanc pour le ski de piste (St Nicolas de Veroce, St Gervais, Megeve). Navette au pied de la ferme (Arrêt les Vincents) pour accéder au télésiège des chattrix à 1km ou aux villages de St Nicolas ou St Gervais.',
    },
    {
      name: 'Appartement Chalet MontJoy',
      nameShort: 'Appartement Chalet MontJoy',
      slug: 'appartement_chalet_montjoy',
      category: 'appartement',
      village: 'Saint Nicolas de Véroce',
      image_2: '/images/leslie/leslie_2.webp',
      image_3: '/images/leslie/leslie_3.webp',
      image_1: '/images/leslie/leslie_1.webp',
      image_4: '/images/leslie/leslie_5.webp',
      image_5: '/images/leslie/leslie_4.webp',
      airbnb: 'https://airbnb.com/h/lachandelle',
      private: 'https://www.appchaletmontjoye.conciergerie-saint-gervais.com/',
      booking: '',
      bedrooms: '1 chambre',
      capacity: 4,
      sauna: '',
      jacuzzy: '',
      stowart: '',
      hammam: '',
      firePlace: '',
      carPark: '',
      busTopName: 'centre du village ',
      kitchenSize: '',
      bathTube: 1,
      shower: '',
      dryer: '',
      whashingMachine: '1 machine à laver',
      dishwasher: '1 lave vaisselle',
      singleBed: '',
      doubleBed: '4 lits doubles',
      bedBunk: '2 lits superposés',
      tvscreen: 1,
      party: 'soirée non autorisée',
      conciergerie: 'Conciergerie St Gervais 06 07 85 90 58',
      foldingBed: 'sur réservation',
      highChair: 'sur réservation',
      vueOn: 'massif du Mont Blanc',
      wifi: 'wifi gratuit',
      sdb: 1,
      surface: 43,
      price: 120,
      adresse:
        '2440 route de saint nicolas, 74170 Saint-Gervais-les-Bains, France',
      long: 37,
      lat: -122,
      description:
        "Appartement présentant une superficie de 43m2, une chambre, une salle de bain et toilette séparé, 4 couchages avec un lit double en 160 dans la chambre et un canapé lit en 140 dans le salon . Vue panoramique sur le massif du Mont-Blanc dont on peut profiter pleinement du balcon. Décoration soignée alliant le modern du design et l'authenticité du vieux bois . Situé à 120m du télésiège menant au domaine skiable St Gervais - Mégève offrant 420km des pistes au pieds du Mont-Blanc .",
      quartier: '',
    },
    {
      name: 'Chalet au cœur de St-Gervais, vue sur le Mont Joly',
      nameShort: 'Chalet au cœur de St-Gervais',
      slug: 'chalet_saint_gervais',
      category: 'appartement',
      village: 'Saint Gervais les Bains',
      image_2: '/images/valentin/valentin_11.webp',
      image_3: '/images/valentin/valentin_3.webp',
      image_1: '/images/valentin/valentin_12.webp',
      image_4: '/images/valentin/valentin_5.webp',
      image_5: '/images/valentin/valentin_4.webp',
      airbnb: 'https://airbnb.com/h/lachandelle',
      private: 'https://www.appchaletmontjoye.conciergerie-saint-gervais.com/',
      booking: 'https://www.appchaletmontjoye.conciergerie-saint-gervais.com/',
      bedrooms: '4 chambres',
      capacity: 12,
      sauna: '',
      jacuzzy: '1 jacuzzy',
      stowart: '',
      hammam: '',
      firePlace: '1 cheminée',
      carPark: '2 places de parking',
      busTopName: 0,
      kitchenSize: 'surface cuisine 10 m2',
      bathTube: 1,
      shower: 2,
      dryer: '1 seche linge',
      whashingMachine: '1 machine à laver',
      dishwasher: '1 lave vaisselle',
      tvscreen: 1,
      singleBed: '4 lits simples',
      doubleBed: '4 lits doubles',
      bedBunk: '2 lits superposés',
      party: 'soirée non autorisée',
      conciergerie: 'Conciergerie St Gervais 06 07 85 90 58',
      foldingBed: 'sur réservation',
      highChair: 'sur réservation',
      vueOn: 'Mont Joly',
      wifi: 'wifi gratuit',
      sdb: 2,
      surface: 120,
      price: 300,
      adresse: '38 Chem. de l Usine, 74170 Saint-Gervais-les-Bains, France',
      long: 37,
      lat: -122,
      description:
        "L'appartement est au 2è étage d'une ferme à l'architecture haut savoyarde typique entièrement rénovée en 2020 et située en lisière de forêt dans un hameau ancien du village. Vous disposerez de 5 chambres ainsi que de 3sdb et 3wc dont 1 séparé. Espaces de réception en conséquence avec un grande table pour tous les convives et un salon confortable. La cuisine est spacieuse et équipée pour cuisiner comme à la maison et une vaste mezzanine permettra aux enfants d'avoir un espace de jeu indépendant. Le logement proximités des remontés mécaniques et du domaine de ski fond (500m). 15mn à pied de la zone de loisir du pont et 5mn du centre village. Exposé sud ouest avec le soleil en fin de journé. départ de sentiers de randonnée au pied de la maison (refuge et glacier de tré la tête). Secteur très calme et aux portes de la réserve naturelle des contamines montjoie.",
      quartier: '',
    },
    {
      name: 'T3 - 60 m2 - TELECABINES à 50 m - SKI IN - SKI OUT',
      nameShort: 'T3 - 60 m2 - TELECABINES à 50 m',
      slug: 'appartement_t3_60_m2',
      category: 'appartement',
      village: 'Saint Gervais les Bains',
      image_1:
        'https://res.cloudinary.com/davidevillers/image/upload/v1656068366/muller/c9a95ad6-7fb3-46f6-924b-309ac3f7d0e2_nhg5gz.webp',
      image_2:
        'https://res.cloudinary.com/davidevillers/image/upload/v1656068366/muller/72ac232b-4d9c-41bf-aa94-bc35a9c44953_twphrm.webp',
      image_3:
        'https://res.cloudinary.com/davidevillers/image/upload/v1656068366/muller/d28ea44b-ea40-4f1c-8a92-3dbfdad83a79_wczftt.webp',
      image_4:
        'https://res.cloudinary.com/davidevillers/image/upload/v1656068366/muller/107bbf44-eef2-451f-b2ed-e91341c34135_k3vhgj.webp',
      image_5:
        'https://res.cloudinary.com/davidevillers/image/upload/v1656068366/muller/fc898ab4-edb6-49dd-9e5c-bf573878b8d6_x61woo.webp',
      image_6:
        'https://res.cloudinary.com/davidevillers/image/upload/v1656068365/muller/dc466ae8-f673-43cd-8a08-7d82449cc857_mqh9lt.webp',
      image_7:
        'https://res.cloudinary.com/davidevillers/image/upload/v1656068365/muller/31b89ad0-d346-4f53-a43e-34e70c004aa8_kzaypg.webp',
      image_8:
        'https://res.cloudinary.com/davidevillers/image/upload/v1656068365/muller/9e5c720f-5180-4a10-9a59-7d40a448c743_gqbww1.webp',
      image_9:
        'https://res.cloudinary.com/davidevillers/image/upload/v1656068364/muller/0e9a8386-ea2e-474f-b702-017dd3cbacf7_tgxwad.webp',
      image_10:
        'https://res.cloudinary.com/davidevillers/image/upload/v1656068364/muller/d1568725-fefc-4366-aaba-45018ca47c2f_rrejl9.webp',
      image_11:
        'https://res.cloudinary.com/davidevillers/image/upload/v1656068364/muller/d1568725-fefc-4366-aaba-45018ca47c2f_rrejl9.webp',
      airbnb: 'https://airbnb.com/h/t3famillefrancoismuler',
      private: 'https://www.appchaletmontjoye.conciergerie-saint-gervais.com/',
      booking: '',
      bedrooms: '2 chambres',
      capacity: 4,
      sauna: '',
      jacuzzy: '',
      stowart: '',
      hammam: '',
      firePlace: '',
      carPark: '1 place de parking',
      busTopName: '',
      kitchenSize: 'surface cuisine 5 m2',
      bathTube: 1,
      shower: 1,
      dryer: '1 sèche linge',
      whashingMachine: '1 machine à laver',
      dishwasher: '1 lave vaisselle',
      tvscreen: 0,
      singleBed: '4 lits simples',
      doubleBed: '4 lits doubles',
      bedBunk: '2 lits superposés',
      party: 'soirée non autorisée',
      conciergerie: 'Conciergerie St Gervais 06 07 85 90 58',
      foldingBed: 'sur réservation',
      highChair: 'sur réservation',
      vueOn: 'Les Aravis',
      wifi: 'wifi gratuit',
      sdb: 1,
      surface: 60,
      price: 200,
      long: 37,
      lat: -122,
      adresse: '119 Chem. des Prés, 74170 Saint-Gervais-les-Bains, France',
      description:
        "Bel appartement neuf décoré avec soin à proximité des remontées mécaniques et des commerces. Situé au 2ème étage dun immeuble sécurisé avec ascenseur. Il se compose d'une pièce principale équipée d'une télévision et d'une connexion wi-fi gratuite, d'une cuisine entièrement équipée, d'une chambre avec un lit king size, une chambre avec 2 lits, d'une salle de bain avec baignoire, des WC séparés. Il dispose également d'une terrasse denviron 7m² avec vue sur les aiguilles de Warens.Un garage individuel en sous-sol complète le bien.",
    },
  ],
};

export default data;
