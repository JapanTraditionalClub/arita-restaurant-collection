export const budgetTiers = [
  { key: 'entry', range: '〜¥3,000 / piece', min: 0, max: 3000, noteKey: 'entry' },
  { key: 'standard', range: '¥3,000〜¥7,000 / piece', min: 3000, max: 7000, noteKey: 'standard' },
  { key: 'premium', range: '¥7,000〜¥15,000 / piece', min: 7000, max: 15000, noteKey: 'premium' },
  { key: 'signature', range: '¥15,000〜¥30,000 / piece', min: 15000, max: 30000, noteKey: 'signature' },
  { key: 'bespoke', range: 'Consultation', min: 30000, max: 60000, noteKey: 'bespoke' }
];

const img = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

export const products = [
  {
    id: 'arita-white-rim-30', name: 'Arita White Rim Plate 30cm', kiln: 'Arita / Fine Porcelain Studio',
    image: img('photo-1610701596007-11502861dcfa'), alt: 'White Arita style rim plate for fine dining',
    size: '30cm', sizeCategory: 'large', tone: 'white', budget: 'premium', priceMin: 8000, priceMax: 12000, moq: 12, sampleAvailable: true,
    useCases: ['mainPlate', 'sushiPlate', 'kaiseki'], cuisines: ['sushi', 'kaiseki', 'seafood'], buyerTypes: ['restaurantOwner', 'hotel'],
    description: { en: 'A quiet white rim plate designed to add negative space and refinement to signature dishes.', ja: 'シグネチャーメニューに余白と品格を与える白いリム皿。', zh: '安静的白色宽边盘，为招牌菜增加留白和高级感。', fr: 'Assiette blanche à bord large qui apporte espace et raffinement aux plats signature.', es: 'Plato blanco con ala que aporta espacio y elegancia a platos emblemáticos.' },
    scene: { en: 'Dinner courses, sushi counters, and high-value seafood presentations.', ja: 'ディナーコース、寿司カウンター、魚介料理に。', zh: '适合晚餐套餐、寿司吧和高级海鲜摆盘。', fr: 'Menus du soir, comptoirs sushi et présentations de fruits de mer.', es: 'Menús de cena, barras de sushi y presentaciones de mariscos.' }
  },
  {
    id: 'sometsuke-blue-sushi', name: 'Sometsuke Blue Sushi Plate', kiln: 'Arita / Sometsuke Kiln',
    image: img('photo-1602028915047-37269d1a73f7'), alt: 'Blue and white porcelain plate for sushi',
    size: '28cm', sizeCategory: 'large', tone: 'blue', budget: 'standard', priceMin: 5200, priceMax: 6800, moq: 12, sampleAvailable: true,
    useCases: ['sushiPlate', 'courseMenu'], cuisines: ['sushi', 'seafood', 'sakePairing'], buyerTypes: ['restaurantOwner', 'hotel', 'procurement'],
    description: { en: 'Classic blue-and-white porcelain for sushi and seasonal seafood with a recognizable Japanese story.', ja: '寿司や旬の魚介に合う、和の物語性が伝わる染付皿。', zh: '经典蓝白瓷，适合寿司与时令海鲜，具有鲜明日本感。', fr: 'Porcelaine bleu et blanc classique pour sushi et fruits de mer de saison.', es: 'Porcelana azul y blanca clásica para sushi y mariscos de temporada.' },
    scene: { en: 'Sushi sets, omakase courses, and seafood pairings.', ja: '寿司セット、おまかせ、魚介ペアリングに。', zh: '适合寿司套餐、omakase和海鲜搭配。', fr: 'Assortiments sushi, omakase et accords fruits de mer.', es: 'Sets de sushi, omakase y maridajes de mariscos.' }
  },
  {
    id: 'black-matte-wagyu', name: 'Black Matte Wagyu Plate', kiln: 'Arita / Modern Kiln',
    image: img('photo-1616486338812-3dadae4b4ace'), alt: 'Black matte plate for wagyu or steak',
    size: '27cm', sizeCategory: 'large', tone: 'black', budget: 'premium', priceMin: 9500, priceMax: 14500, moq: 12, sampleAvailable: true,
    useCases: ['mainPlate', 'courseMenu'], cuisines: ['wagyu', 'kaiseki'], buyerTypes: ['restaurantOwner', 'hotel'],
    description: { en: 'A matte black plate that increases contrast for wagyu, steak, and charcoal-grilled dishes.', ja: '和牛や炭火料理のコントラストを高める黒マット皿。', zh: '哑光黑盘，提高和牛、牛排和炭烤料理的对比度。', fr: 'Assiette noire mate qui renforce le contraste du wagyu et des grillades.', es: 'Plato negro mate que realza wagyu, steak y platos a la brasa.' },
    scene: { en: 'Premium steak courses, wagyu tasting menus, and private dining rooms.', ja: '和牛コース、ステーキ、個室ダイニングに。', zh: '适合高级牛排套餐、和牛品鉴和私人包间。', fr: 'Menus wagyu, steaks premium et salons privés.', es: 'Menús de wagyu, steak premium y comedores privados.' }
  },
  {
    id: 'gold-accent-dessert', name: 'Gold Accent Dessert Plate', kiln: 'Arita / Kinrande Studio',
    image: img('photo-1544787219-7f47ccb76574'), alt: 'Small porcelain plate with gold accents',
    size: '18cm', sizeCategory: 'small', tone: 'gold', budget: 'signature', priceMin: 16000, priceMax: 24000, moq: 12, sampleAvailable: false,
    useCases: ['appetizer', 'kaiseki', 'privateDining'], cuisines: ['dessert', 'kaiseki'], buyerTypes: ['hotel', 'procurement'],
    description: { en: 'A gold-accent plate for final-course desserts, petit fours, or VIP tasting moments.', ja: 'デザートやVIP席の印象を高める金彩小皿。', zh: '带金色点缀的小盘，适合甜点和VIP品鉴。', fr: 'Assiette à accent or pour desserts finaux et moments VIP.', es: 'Plato con acento dorado para postres finales y momentos VIP.' },
    scene: { en: 'Dessert courses, VIP rooms, hotel dining, and celebratory menus.', ja: 'デザートコース、VIP個室、ホテルダイニングに。', zh: '适合甜点套餐、VIP包间、酒店餐饮。', fr: 'Desserts, salons VIP, restauration hôtelière et menus festifs.', es: 'Postres, salas VIP, hoteles y menús de celebración.' }
  },
  {
    id: 'earth-tone-kaiseki', name: 'Earth Tone Kaiseki Bowl', kiln: 'Arita / Seasonal Ware Studio',
    image: img('photo-1581760461090-c0d36df0b32f'), alt: 'Earth tone bowl for kaiseki course',
    size: '16cm', sizeCategory: 'medium', tone: 'earth', budget: 'standard', priceMin: 4200, priceMax: 6200, moq: 24, sampleAvailable: true,
    useCases: ['kaiseki', 'appetizer', 'courseMenu'], cuisines: ['kaiseki', 'seafood'], buyerTypes: ['restaurantOwner', 'hotel'],
    description: { en: 'A warm-toned bowl for seasonal appetizers, broths, and kaiseki rhythm.', ja: '季節の前菜や椀物、懐石の流れに合う温かみのある鉢。', zh: '温暖色调的碗，适合时令前菜、汤品和怀石节奏。', fr: 'Bol aux tons chauds pour entrées de saison, bouillons et rythme kaiseki.', es: 'Cuenco de tonos cálidos para aperitivos, caldos y ritmo kaiseki.' },
    scene: { en: 'Seasonal tasting menus and multi-course service.', ja: '季節のコースや多皿構成に。', zh: '适合时令品鉴菜单和多道式服务。', fr: 'Menus saisonniers et service en plusieurs temps.', es: 'Menús de temporada y servicio por tiempos.' }
  },
  {
    id: 'sake-pairing-set', name: 'Arita Sake Pairing Set', kiln: 'Arita / Sake Ware Kiln',
    image: img('photo-1612197527275-2d3d26061711'), alt: 'Porcelain sake cups and pourer set',
    size: 'Set', sizeCategory: 'small', tone: 'white', budget: 'premium', priceMin: 11000, priceMax: 15000, moq: 12, sampleAvailable: true,
    useCases: ['sakeWare', 'privateDining'], cuisines: ['sakePairing', 'kaiseki'], buyerTypes: ['restaurantOwner', 'hotel'],
    description: { en: 'A refined sake pairing set for tasting menus, private dining, and premium beverage programs.', ja: 'テイスティングメニューや個室、酒ペアリング向けの酒器セット。', zh: '精致清酒套组，适合品鉴菜单、私人用餐和高端酒水项目。', fr: 'Service à saké raffiné pour menus dégustation et salons privés.', es: 'Set de sake refinado para menús degustación y salas privadas.' },
    scene: { en: 'Sake pairings, chef counters, and private rooms.', ja: '酒ペアリング、カウンター、個室に。', zh: '适合清酒搭配、主厨吧台和私人包间。', fr: 'Accords saké, comptoirs chef et salons privés.', es: 'Maridajes de sake, barras de chef y salas privadas.' }
  },
  {
    id: 'hotel-breakfast-tray', name: 'Hotel Breakfast Tray Plate', kiln: 'Arita / Hospitality Line',
    image: img('photo-1523438097201-512ae7d59c44'), alt: 'Simple porcelain tray plate for hotel breakfast',
    size: '24cm', sizeCategory: 'medium', tone: 'white', budget: 'entry', priceMin: 2400, priceMax: 3000, moq: 48, sampleAvailable: true,
    useCases: ['breakfast', 'hotelDining'], cuisines: ['hotelDining'], buyerTypes: ['hotel', 'procurement'],
    description: { en: 'A practical yet elegant plate for hotel breakfast and high-volume hospitality operations.', ja: 'ホテル朝食や多数量運用に適した実用的で上品なプレート。', zh: '适合酒店早餐和大批量运营的实用优雅盘。', fr: 'Assiette pratique et élégante pour petit-déjeuner hôtelier.', es: 'Plato práctico y elegante para desayuno de hotel y alto volumen.' },
    scene: { en: 'Breakfast service, banquets, and hotel F&B operations.', ja: '朝食、宴会、ホテルF&B運用に。', zh: '适合早餐服务、宴会和酒店餐饮运营。', fr: 'Petit-déjeuner, banquets et opérations F&B.', es: 'Desayuno, banquetes y operaciones F&B.' }
  },
  {
    id: 'blue-appetizer-plate', name: 'Blue Appetizer Plate 16cm', kiln: 'Arita / Blue Line Studio',
    image: img('photo-1603199506016-b9a594b593c0'), alt: 'Blue small plate for appetizers',
    size: '16cm', sizeCategory: 'small', tone: 'blue', budget: 'entry', priceMin: 1800, priceMax: 2800, moq: 24, sampleAvailable: true,
    useCases: ['appetizer', 'courseMenu'], cuisines: ['seafood', 'kaiseki', 'sushi'], buyerTypes: ['restaurantOwner', 'distributor'],
    description: { en: 'A compact appetizer plate for adding color to first courses without raising the budget too much.', ja: '予算を抑えながら前菜に色を添える小皿。', zh: '小型前菜盘，可在不大幅增加预算的情况下增添色彩。', fr: 'Petite assiette d’entrée pour ajouter de la couleur sans trop augmenter le budget.', es: 'Plato pequeño para dar color a entradas sin elevar demasiado el presupuesto.' },
    scene: { en: 'Lunch tests, first courses, and compact tasting menus.', ja: 'ランチ、前菜、コンパクトなコースに。', zh: '适合午餐测试、第一道菜和小型品鉴菜单。', fr: 'Tests déjeuner, premières assiettes et menus courts.', es: 'Pruebas de almuerzo, primeros platos y menús compactos.' }
  },
  {
    id: 'extra-large-platter', name: 'Extra Large Sharing Platter', kiln: 'Arita / Banquet Studio',
    image: img('photo-1578749556568-bc2c40e68b61'), alt: 'Extra large porcelain platter',
    size: '36cm', sizeCategory: 'extraLarge', tone: 'earth', budget: 'signature', priceMin: 18000, priceMax: 28000, moq: 6, sampleAvailable: false,
    useCases: ['mainPlate', 'privateDining', 'hotelDining'], cuisines: ['seafood', 'wagyu', 'hotelDining'], buyerTypes: ['hotel', 'restaurantOwner'],
    description: { en: 'A large platter for signature sharing dishes, banquets, and dramatic table presentation.', ja: 'シェア料理や宴会、印象的なテーブル演出に使える大皿。', zh: '适合招牌分享菜、宴会和戏剧性桌面呈现的大盘。', fr: 'Grand plat pour pièces à partager, banquets et présentation spectaculaire.', es: 'Fuente grande para platos compartidos, banquetes y presentaciones impactantes.' },
    scene: { en: 'Private dining, hotel banquets, seafood platters, and chef specials.', ja: '個室、宴会、魚介盛り、シェフの特別料理に。', zh: '适合私人用餐、酒店宴会、海鲜拼盘和主厨特选。', fr: 'Salons privés, banquets, plateaux de fruits de mer et spécialités chef.', es: 'Privados, banquetes, mariscos y especiales del chef.' }
  },
  {
    id: 'minimal-white-bowl', name: 'Minimal White Rice Bowl', kiln: 'Arita / Everyday Fine Line',
    image: img('photo-1514517220039-68369a4e9b07'), alt: 'Minimal white porcelain bowl',
    size: '13cm', sizeCategory: 'small', tone: 'white', budget: 'entry', priceMin: 1200, priceMax: 2200, moq: 48, sampleAvailable: true,
    useCases: ['breakfast', 'hotelDining', 'kaiseki'], cuisines: ['hotelDining', 'kaiseki'], buyerTypes: ['hotel', 'distributor', 'procurement'],
    description: { en: 'A refined everyday bowl that supports high-volume service without losing a premium feel.', ja: '高回転の運用でも上質感を保つ日常使いの飯碗。', zh: '适合高频服务且保持高级感的日常碗。', fr: 'Bol quotidien raffiné pour service à volume élevé.', es: 'Cuenco diario refinado para alto volumen sin perder sensación premium.' },
    scene: { en: 'Breakfast, rice service, hotel operations, and casual fine dining.', ja: '朝食、ご飯提供、ホテル運用、カジュアル高単価店に。', zh: '适合早餐、米饭服务、酒店运营和休闲高级餐厅。', fr: 'Petit-déjeuner, service riz, hôtels et casual fine dining.', es: 'Desayuno, arroz, hoteles y casual fine dining.' }
  },
  {
    id: 'bespoke-counter-set', name: 'Bespoke Counter Course Set', kiln: 'Arita / Curated Kiln Network',
    image: img('photo-1573821663912-569905455b1c'), alt: 'Curated porcelain set for chef counter courses',
    size: 'Curated set', sizeCategory: 'medium', tone: 'gold', budget: 'bespoke', priceMin: 30000, priceMax: 60000, moq: 24, sampleAvailable: false,
    useCases: ['courseMenu', 'privateDining', 'kaiseki'], cuisines: ['sushi', 'kaiseki', 'sakePairing'], buyerTypes: ['restaurantOwner', 'hotel', 'procurement'],
    description: { en: 'A curated set for restaurants building a complete counter or course experience around Arita ware.', ja: '有田焼でカウンターやコース体験全体を構築するためのキュレーションセット。', zh: '为以有田烧打造完整吧台或套餐体验的餐厅策划的组合。', fr: 'Sélection pour créer une expérience complète de comptoir ou de menu autour d’Arita.', es: 'Selección para crear una experiencia completa de barra o menú con Arita.' },
    scene: { en: 'New openings, full restaurant refreshes, and multi-branch planning.', ja: '新規開業、店舗全体の刷新、多店舗展開に。', zh: '适合新开业、餐厅整体更新和多店规划。', fr: 'Ouvertures, refontes complètes et projets multi-sites.', es: 'Aperturas, renovaciones completas y proyectos multi-sede.' }
  },
  {
    id: 'seafood-oval-plate', name: 'Seafood Oval Plate', kiln: 'Arita / Coastal Studio',
    image: img('photo-1542838132-92c53300491e'), alt: 'Oval porcelain plate for seafood',
    size: '31cm', sizeCategory: 'large', tone: 'blue', budget: 'premium', priceMin: 7800, priceMax: 13200, moq: 12, sampleAvailable: true,
    useCases: ['mainPlate', 'courseMenu'], cuisines: ['seafood', 'sushi'], buyerTypes: ['restaurantOwner', 'hotel'],
    description: { en: 'An oval plate that frames grilled fish, sashimi, and coastal dishes with elegant movement.', ja: '焼き魚や刺身、魚介料理に動きと余白を与える楕円皿。', zh: '椭圆盘，为烤鱼、刺身和海岸风味料理带来优雅动感。', fr: 'Assiette ovale pour poisson grillé, sashimi et plats marins.', es: 'Plato oval para pescado, sashimi y platos costeros con movimiento elegante.' },
    scene: { en: 'Seafood tasting menus, sashimi plates, and coastal fine dining.', ja: '魚介コース、刺身、海鮮ファインダイニングに。', zh: '适合海鲜品鉴、刺身盘和海岸风味高级餐厅。', fr: 'Menus fruits de mer, sashimi et fine dining marin.', es: 'Menús de mariscos, sashimi y fine dining costero.' }
  }
];
