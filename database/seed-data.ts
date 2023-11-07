import bcrypt from 'bcryptjs'

// Products
type ValidSizes = '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39' | '40' | '41' | '42' | '43' | '44' | '45' | '46' | '47' | '48' | '49' | '50'
type ValidTypes = 'running' | 'sneakers' | 'soccer' | 'basketball' | 'driving' | 'training'
interface SeedProduct {
    description: string
    images: string[]
    inStock: number
    price: number
    sizes: ValidSizes[]
    slug: string
    tags: string[]
    title: string
    type: ValidTypes
    gender: 'men' | 'women' | 'kid' | 'unisex'
}

// Users
interface SeedUser {
    name: string
    email: string
    password: string
    role: 'admin' | 'client'
}

// Data
interface SeedData {
    users: SeedUser[]
    products: SeedProduct[]
}

export const initialData: SeedData = {
    users: [
        {
            name: 'Pedro Rodriguez',
            email: 'p-rodriguez@google.com',
            password: bcrypt.hashSync('123456'),
            role: 'admin'
        },
        {
            name: 'Eduardo Rios',
            email: 'eduardor@google.com',
            password: bcrypt.hashSync('123456'),
            role: 'client'
        },
    ],
    products: [
        {
            description: "With a springy ride for every type of running, the familiar, ideal-for-you feel of the Peg returns to help you reach your goals. This version features the same immediate responsiveness and neutral support you love, but with improved comfort in sensitive areas of the foot, such as the arch and toes.",
            images: [
                '687965-1200-1200-002.png',
                '690124-1200-1200-001.png',
                '692133-1200-1200-003.png',
                '694358-1200-1200-004.png',
            ],
            inStock: 78,
            price: 130,
            sizes: [ '36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "pegasusu_40_premium",
            type: 'running',
            tags: ['nike', 'shoes', 'men', 'run'],
            title: "Pegasus 40 Premium - Nike (Men)",
            gender: 'men'
        },
        {
            description: "Sleek, comfortable shoes for little ones. Your little adventurer will be ready to play in these comfy Swift Run 1.0 shoes. Featuring a knit upper and flexible EVA midsole, these shoes keep tiny feet supported and cushioned. Recycled materials and a non-marking outsole ensure each step is gentle on the planet. These lightweight, lace-up shoes inspire dreams of zooming across the playground or racing down the sidewalk — someday.",
            images: [
                '1740176-00-A_1.jpg',
                '1740176-00-A_0_2000.jpg',
                '1740176-00-A_0_2001.png',
                '1740176-00-A_0_2002.png',
            ],
            inStock: 7,
            price: 75,
            sizes: ['30', '31', '32', '33', '34', '35', '36'],
            slug: "swift_run",
            type: 'running',
            tags: ['adidas', 'shoes', 'boys', 'kids', 'girls', 'run'],
            title: "Swift Run 1.0 - Adidas (Kids)",
            gender: 'kid'
        },
        {
            description: "Slip-On sneakers made in part with recycled materials. Light as air and ready for adventure, these kids' shoes slip on quick and stay comfy all day thanks to an EVA midsole. The textile upper is made from recycled materials, doing right by the planet while doing right by little feet. An elastic strap with bold wording lets kids proudly sport the adidas logo. Perfect for playdates and playgrounds, these shoes keep up with kids on the move.This product features at least 20% recycled materials. By reusing materials that have already been created, we help to reduce waste and our reliance on finite resources and reduce the footprint of the products we make.",
            images: [
                '1740507-00-A_0_2000.png',
                '1740507-00-A_1.png',
                '1740507-00-A_0_2001.png',
                '1740507-00-A_0_2002.png',
            ],
            inStock: 5,
            price: 200,
            sizes: ['30', '31', '32', '33', '34', '35', '36'],
            slug: "lite_racer_adapt",
            type: 'sneakers',
            tags: ['adidas', 'kids', 'boys', 'girls'],
            title: "Lite Racer Adapt 6.0 - Adidas (Kids)",
            gender: 'kid'
        },
        {
            description: "This low-cut AJ1 is simplified to the max for a black and white shoe, but it's anything but simple. The subtle tones create a perfect backdrop for the pop of color from Jordan's own big and bright image on the side. As always, you get quality materials, like the durable leather upper, supportive foam in the outsole, and the comfortable Air you know and love.",
            images: [
                '1740250-00-A_0_2002.png',
                '1740250-00-A_0_2001.png',
                '1740250-00-A_0_2000.png',
                '1740250-00-A_1.png'
            ],
            inStock: 30,
            price: 78,
            sizes: ['35', '36', '37', '38'],
            slug: "air_jordan_1_low",
            type: 'sneakers',
            tags: ['nike', 'jordan', 'kids', 'boys', 'girls'],
            title: "Air Jordan 1 Low - Nike (Kids)",
            gender: 'kid'
        },
        {
            description: "It's still our most proven shoe. Its design continues to help keep you moving. The Nike React Infinity Run 3 offers a soft, stable feel with a ride that will accompany you on all your long and short runs. The breathable upper is designed to be supportive yet flexible. We even added more cushioning to the collar to give you a soft, protective feel. Keep running; we've got what you need.",
            images: [
                '1740280-00-A_1.jpg',
                '1740280-00-A_0_2000.jpg',
            ],
            inStock: 50,
            price: 120,
            sizes: ['36', '37', '38', '39', '40', '41'],
            slug: "nike_react_infinity_run_flyknit_women",
            type: 'running',
            tags: ['women', 'nike', 'running'],
            title: "React Infinity Run Flyknit 3 - Nike (Women)",
            gender: 'women'
        },
        {
            description: "It's still our most proven shoe. Its design continues to help keep you moving. The Nike React Infinity Run 3 offers a soft, stable feel with a ride that will accompany you on all your long and short runs. The breathable upper is designed to be supportive yet flexible. We even added more cushioning to the collar to give you a soft, protective feel. Keep running; we've got what you need.",
            images: [
                '1740280-00-A_1222.png',
                '1740280-00-A_1223.png',
                '1740280-00-A_1224.png',
                '1740280-00-A_1225.png',
                '1740280-00-A_1226.png'
            ],
            inStock: 60,
            price: 120,
            sizes: ['36', '37', '38', '39', '40', '41'],
            slug: "nike_react_infinity_run_flyknit_men",
            type: 'running',
            tags: ['men', 'nike', 'running'],
            title: "React Infinity Run Flyknit 3 - Nike (Men)",
            gender: 'men'
        },
        {
            description: "Meet the leader of the pack. First released in 1987, the Nike Air Max 1 was the first shoe in the family to bring Air to the world. With a fast-paced look, tried-and-true cushioning and classic wavy mudguard, it’s no wonder it’s reigned supreme ever since.",
            images: [
                '793ef95a-87aa.png',
                '793ef95a-87aa-2.png',
                '793ef95a-87aa-3.png',
                '793ef95a-87aa-4.png',
                '793ef95a-87aa-5.png',
            ],
            inStock: 72,
            price: 160,
            sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "nike_air_max_1_premium",
            type: 'sneakers',
            tags: ['men', 'nike', 'sneakers'],
            title: "Air Max 1 Premium - Nike (Men)",
            gender: 'men'
        },
        {
            description: "Looks Max, feels Max. The Georgia Air Max SYSTM brings back everything you love about your favorite '80s vibes and adds a bit of school pride. Tried-and-true visible Max Air cushioning pairs with a sleek, sport-inspired upper. It's Air Max delivering again for Bulldogs fans everywhere.",
            images: [
                '758583ad-bbd8.png',
                '758583ad-bbd8-2.png',
                '758583ad-bbd8-333.png',
                '758583ad-bbd8-334.png'
            ],
            inStock: 9,
            price: 110,
            sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "nike_college_air_max_SYSTM_georgia",
            type: 'sneakers',
            tags: ['men', 'nike', 'sneakers'],
            title: "College Air Max SYSTM (Georgia) - Nike (Men)",
            gender: 'men'
        },
        {
            description: "Out-of-this-world talent. Down-to-earth heart. Zion stays away from the noise that comes with being a pro athlete and prioritizes his game. He puts in the mud, sweat, and tears necessary to elevate his game, and this special edition Zion 3 honors his sky-high level of play. Court-ready tech helps you go up fast, come down hard, and react quickly when you're getting low.",
            images: [
                'f6a0a8b3-4155.png',
                'f6a0a8b3-4155-2.png',
                '758583ad-bbd8-3.png',
                '758583ad-bbd8-4.png'
            ],
            inStock: 65,
            price: 140,
            sizes: ['40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50'],
            slug: "zion_3_Mud_Sweat_and_Tears",
            type: 'basketball',
            tags: ['men', 'jordan', 'basketball'],
            title: "Zion 3 Mud, Sweat and Tears - Jordan (Men)",
            gender: 'men'
        },
        {
            description: "Created for the hardwood but taken to the streets, the '80s b-ball icon returns with perfectly shined overlays and classic team colors. With its iconic hoops design, the Nike Dunk Low channels '80s vintage back onto the streets while its padded, low-cut collar lets you take your game anywhere—in comfort.",
            images: [
                'a447e0eb-b47c-2.png',
                'a447e0eb-b47c.png',
                'a447e0eb-b47c-3.png',
                'a447e0eb-b47c-4.png',
            ],
            inStock: 80,
            price: 115,
            sizes: ['34', '36', '37', '38', '39', '40', '41', '42'],
            slug: "nike_dunk_low",
            type: 'basketball',
            tags: ['women', 'nike', 'sneakers'],
            title: "Dunk Low - Nike (Women)",
            gender: 'women'
        },
        {
            description: "With maximum cushioning to support every mile, the Invincible 3 gives you Nike Running's highest level of comfort underfoot to help you stay on your feet today, tomorrow and beyond. Designed to help keep you on the run, it’s super supportive and bouncy, so that you can propel down your preferred path and come back for your next run feeling ready and reinvigorated.",
            images: [
                '87a2f87d-9bd5-2.png',
                '87a2f87d-9bd5.png',
            ],
            inStock: 0,
            price: 180,
            sizes: ['34', '36', '37', '38', '39', '40', '41', '42'],
            slug: "nike_invincible_3",
            type: 'running',
            tags: ['women', 'nike', 'running'],
            title: "Invincible 3 - Nike (Women)",
            gender: 'women'
        },
        {
            description: "Inspired by our original PUMA California, the classic lines and dreamy details of the Cali Dream make it ready for all city looks – even if you’re not in The Golden State. On the darker days, you'll love the cozy feeling of this Wooly version.",
            images: [
                '1741416-00-A_0_2001.png',
                '1741416-00-A_0_2000.png',
                '1741416-00-A_1.png',
                '1741416-00-A_0_2002.png',
            ],
            inStock: 70,
            price: 68,
            sizes: ['35', '36', '37', '38', '39', '40',],
            slug: "cali_dream_wooly",
            type: 'sneakers',
            tags: ['sneakers', 'puma', 'women'],
            title: "Cali Dream Wooly - Puma (Women)",
            gender: 'women'
        },
        {
            description: "A rugged and winterised take on the Capri tennis shoe line, this bold piece can stand up to more than the courts. With its.",
            images: [
                '7654393-00-A_3.png',
                '7654393-00-A_2_2000.png',
            ],
            inStock: 0,
            price: 90,
            sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "capri_para_sneakers",
            type: 'sneakers',
            tags: ['sneakers', 'man', 'puma'],
            title: "Capri Para Sneakers - Puma (Men)",
            gender: 'men'
        },
        {
            description: "Rider FV sneakers are all about a combination of past and future, with a nostalgic, heritage-inspired base and fresh tooling. Mix and match your style with this fun new concept for kids. Designs are all about self-expression and celebrating differences, with playful graphics and hand-drawn elements.",
            images: [
                '1703767-00-A_1.png',
                '1703767-00-A_0_2000.png',
                '1703767-00-A_2.png',
                '1703767-00-A_3.png',
            ],
            inStock: 45,
            price: 55,
            sizes: ['35', '36', '37', '38'],
            slug: "rider_fv_mix_match_toddlers_sneakers",
            type: 'sneakers',
            tags: ['sneakers', 'boys', 'kids', 'puma'],
            title: "Rider FV Mix Match Toddlers' Sneakers - Puma (Kids)",
            gender: 'kid'
        },
        {
            description: "Inspired by our original Puma  California, the classic lines and groovy details of the Cali Dream make it ready for all city looks.",
            images: [
                '1700280-00-A_0_2002.png',
                '1700280-00-A_0_2000.png',
                '1700280-00-A_1.png',
                '1700280-00-A_0_2003.png'
            ],
            inStock: 67,
            price: 70,
            sizes: ['35', '36', '37', '38'],
            slug: "cali_dream_star_flower_child_big_kids",
            type: 'sneakers',
            tags: ['sneakers', 'kids', 'boys', 'girls', 'puma'],
            title: "Cali Dream Star Flower Child Big Kids - Puma (Kids)",
            gender: 'kid'
        },
        {
            description: "Round out your favorite fit in cool style with these kicks.Low boot. Lace closure. With Puma branding details.",
            images: [
                '8764734-00-A_1.png',
                '8764734-00-A_0_2000.png',
                '8764734-00-A_0_2001.png',
                '8764734-00-A_0_2002.png'
            ],
            inStock: 42,
            price: 85,
            sizes: ['35', '36', '37', '38', '39', '40'],
            slug: "suede_nyc",
            type: 'sneakers',
            tags: ['sneakers', 'puma', 'women'],
            title: "Suede NYC - Puma (Women)",
            gender: 'women'
        },
        {
            description: "The Fast Rider was first launched in 1980. And now, over four decades later, this iconic shoe has been redesigned and renamed. With a new slim Federbein outsole and ultra-comfy Rider Foam, these are, quite simply, the epitome of casual-cool street style,and are the perfect addition to your little one’s wardrobe.",
            images: [
                '7652426-00-A_1.png',
                '7652426-00-A_0_2000.png',
                '7652426-00-A_0_2001.png',
                '7652426-00-A_0_2002.png'
            ],
            inStock: 5,
            price: 55,
            sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "future_rider_play_on_toddlers",
            type: 'sneakers',
            tags: ['sneakers', 'puma', 'kids', 'boys', 'girls'],
            title: "Future Rider Play On Toddlers' Shoes - Puma (Kids)",
            gender: 'kid'
        },
        {
            description: "The Suede hit the scene in 1968 and has been changing the game ever since. It’s been worn by icons of every generation, and it’s stayed classic through it all. Instantly recognizable and constantly reinvented, Suede’s legacy continues to grow and be legitimized by the authentic and expressive individuals that embrace the iconic shoe. Be apart of the history of Suede.",
            images: [
                '8528839-00-A_2.png',
                '8528839-00-A_0_2000.png',
                '8528839-00-A_0_2001.png',
                '8528839-00-A_0_2002.png'
            ],
            inStock: 2,
            price: 75,
            sizes: ['37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "suede_classic_xxi",
            type: 'sneakers',
            tags: ['sneakers', 'puma', 'men'],
            title: "Suede Classic XXI Sneakers - Puma (Men)",
            gender: 'men'
        },
        {
            description: "This season, we launch the iconic PUMA Suede into the 21st century in this new mid-top silhouette. The classic style from the '60s hits new heights with a mid-top padded collar and signature suede upper. The leather sourced in this product comes from environmentally responsible leather manufacturing, and is audited and certified via the Leather Working Group protocol.",
            images: [
                '1549268-00-A_0_2000.png',
                '1549268-00-A_2.png',
                '1549268-00-A_0_2001.png',
                '1549268-00-A_0_2002.png'
            ],
            inStock: 82,
            price: 85,
            sizes: ['38', '39', '40', '41', '42', '43', '44'],
            slug: "suede_mid_xxl_skeakers",
            type: 'sneakers',
            tags: ['sneakers', 'men', 'puma'],
            title: "Suede Mid XXI Sneakers - Puma (Men)",
            gender: 'men'
        },
        {
            description: "Pick up the pace with the Speedcat Shield Driving Shoes. These classic shoes are infused with true motorsport DNA – they're the perfect shoes for all the motorsport fans out there.",
            images: [
                '9877034-00-A_2.png',
                '9877034-00-A_0_2000.png',
            ],
            inStock: 64,
            price: 90,
            sizes: ['38', '39', '40', '41', '42', '43', '44'],
            slug: "speedcat_shield_sd_driving_shoes",
            type: 'driving',
            tags: ['puma', 'men', 'driving'],
            title: "Speedcat Shield SD Driving Shoes - Puma (Men)",
            gender: 'men'
        },
        {
            description: "Tackle any terrain in the sturdy confines of the Voyage NITRO™ 3. In this updated version of the model, we’ve tooled the trail shoe with a full NITROFOAM™ midsole for a lighter weight and more responsive ride when you’re conquering distances. The PUMAGRIP ATR rubber outsole has been revamped with our PWRADAPT tech, allowing the lugs to move independently with the ground for supreme traction on multi-terrain. Our new, wider upper has been reinforced with PWRTAPE for support and protection, and the forefoot drain ports shed water like a champ. Dominate your run, no matter the season, with the Voyage NITRO™ 3.",
            images: [
                '1633802-00-A_2.png',
                '1633802-00-A_0_2000.png',
                '1633802-00-A_0_201.png',
                '1633802-00-A_0_202.png'
            ],
            inStock: 5,
            price: 140,
            sizes: ['35', '36', '37', '38', '39', '40', '41'],
            slug: "seasons_voyage_nitro_3",
            type: 'running',
            tags: ['running', 'puma', 'women'],
            title: "SEASONS Voyage NITRO™ 3 - Puma (Women)",
            gender: 'women'
        },
        {
            description: "Introducing the latest high-performance training shoe from the TRAIN PUMA squad, the PWR NITRO™ Squared. This universal training shoe features our brand-new NITRO™ Squared technology, which is executed with a dual density nitrogen-injected outer to provide enhanced midsole banking during lateral movements. The internal compound is single density NITROFOAM™ to allow for rebounding and cushioning. With PWR NITRO™ Squared, you'll receive not only world-class comfort and stability during your next high intensity gym session, but it's also an eye-catching addition to your workout wardrobe.",
            images: [
                '7654399-00-A_1.png',
                '7654399-00-A_0_2000.png',
            ],
            inStock: 150,
            price: 120,
            sizes: ['35', '36', '37', '38', '39', '40', '41'],
            slug: "pwr_nitro_squad",
            type: 'training',
            tags: ['training', 'puma', 'women'],
            title: "PWR NITRO™ Squared - Puma (Women)",
            gender: 'women'
        },
        {
            description: "Forget about your inheritance? Never. In a tribute to heritage and innovation, we combined two icons to go beyond the expected. Lightweight, breathable Flyknit fabric blends seamlessly with super-comfortable Air Max cushioning. Lace up your laces and let your feet do the talking. Retro Superpower: inspired by the 2012 Flyknit Racer, the anatomical, feather-light, nearly seamless upper is as revolutionary as it is attractive. Modern comfort: the snug heel and expressive Max Air window design are inspired directly from Pre-Day, bringing a balanced combination of tradition and innovation.",
            images: [
                '7652410-00-A_1_2000.png',
                '7652410-00-A_0.png',
            ],
            inStock: 100,
            price: 118,
            sizes: ['35', '36', '37', '38', '39', '40', '41'],
            slug: "nike_air_max_flyknit_racer",
            type: 'running',
            tags: ['running', 'nike', 'women'],
            title: "Nike Air Max Flyknit Racer - Nike (Women)",
            gender: 'women'
        },
        {
            description: "Inhale. Breathe out. The ISPA Sense is your ticket to tranquility. The design, which blends sustainable materials (it's made with at least 20% recycled content by weight) with meditative comfort inspired by Zen gardens. The stretchy, bootie-like upper, with a ventilated Flyknit design, integrates coolness and cushioning to bring more joy to the foot. Tie it all together with the sleek lacing system, then maintain a steady stance thanks to additional traction in the outsole. Do good, look good and overcome the most challenging obstacles in the urban environment with this innovative design that gives new meaning to rest and relaxation. Adapt to challenges: the Nike ISPA project touts the philosophy of improvise, seek, protect and adapt through the latest innovations. Peace of mind customization: the cushioned midsole offers an extra soft feel, while the bootie-like upper customizes the comfort of your every step. Sublime support: zoned cushioning in the upper combines with a unique lacing system to keep you feeling stable, no matter where your journey takes you.",
            images: [
                '8764600-00-A_2.png',
                '8764600-00-A_0_2000.png',
            ],
            inStock: 84,
            price: 135,
            sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "ispa_sense_flyknit",
            type: 'running',
            tags: ['running', 'unisex', 'nike'],
            title: "ISPA Sense Flyknit - Nike (Unisex)",
            gender: 'unisex'
        },
        {
            description: "Keep evolving in speed with a running shoe made to help you reach new goals and records. Improved comfort and breathability with a redesigned upper. Whether it's a 10K race or a marathon, this model, like its previous version, maintains the responsive cushioning and secure support to help you reach your personal best. Best energy return: Nike ZoomX foam provides Nike Running's best energy return to date. Full-length carbon fiber plate creates an immediate responsive feel that keeps you moving with every step. Ultra-breathable and soft: A redesigned upper uses a mesh fabric placed in the areas where you need breathability the most. The result is a softer, cooler shoe that conforms to your foot.",
            images: [
                '8764813-00-A_1.png',
                '8764813-00-A_0_2000.png',
            ],
            inStock: 55,
            price: 140,
            sizes: ['37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "vaporfly_next_2",
            type: 'running',
            tags: ['running', 'men', 'nike'],
            title: "Vaporfly NEXT% 2 - Nike (Men)",
            gender: 'men'
        },
        {
            description: "They chase the clock, challenging and encouraging each other in the name of achieving goals and improving. Our quintessential training model relies on a lighter, more breathable upper than the previous edition to complement our standards for durability and comfort, so you can float through your cardio, propel yourself through lifts and dominate your workouts. This Metcon 8 AMP helps you fly under the radar with sfumed camo colorways that let others brag and chat while you train without anyone noticing. Cushioned Footstep: Nike React foam creates a comfortable, cushioned base that delivers a fluid, responsive ride. Plus, it feels light and springy as you pick up speed during cardio and sprints. Grip from every angle: grippy rubber wraps the arch during the most intense rope climbs. The rubber outsole gives you traction and helps you stay on your feet as you move from the training room floor to the pavement. Stability for lifting: the wide, flat heel is made even more stable with an inner plate that distributes weight from edge to edge. Plus, it flexes for comfort during cardio and sprints.",
            images: [
                '8529198-00-A_1.png',
                '8529198-00-A_0_2000.png',
            ],
            inStock: 62,
            price: 104,
            sizes: ['37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "metcon_8_amp",
            type: 'training',
            tags: ['training', 'nike', 'men'],
            title: "Metcon 8 AMP - Nike (Men)",
            gender: 'men'
        },
        {
            description: "We worked with professional athletes to amplify three key training attributes—stability, fit, and traction. The FUSE 2.0 features increased rubber for enhanced stability, including higher sidewall coverage to ensure traction and grip. The streamlined upper construction provides durability for rope climbs, while a lightweight TPU heel clip is designed for handstand push-ups. And all this innovation comes in one sleek package to help you reach your ultimate training potential. .",
            images: [
                '1740245-00-A_0_2000.png',
                '1740245-00-A_1.png',
            ],
            inStock: 90,
            price: 90,
            sizes: ['37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "fuse_2_0",
            type: 'training',
            tags: ['training', 'women', 'puma'],
            title: "Fuse 2.0 - Puma (Women)",
            gender: 'women'
        },
        {
            description: "Customizable Platform Chucks are the ultimate canvas for creativity. Let your little one express their style with a selection of new and trending colors and prints, then top it off with fully personalized details for a look that's one-of-a-kind—just like them.",
            images: [
                '1740051-00-A_1.jpg',
                '1740051-00-A_0_2000.jpg',
                '1740051-00-A_0_2001.png',
                '1740051-00-A_0_2002.png'
            ],
            inStock: 50,
            price: 60,
            sizes: ['35', '36', '37', '38', '39'],
            slug: "custom_chuck_taylor_kids",
            type: 'sneakers',
            tags: ['sneakers', 'kids', 'converse'],
            title: "Custom Chuck Taylor All Star By You - Converse (Kids)",
            gender: 'kid'
        },
        {
            description: "It's all about the twinkle and twirl from their first dance moves 'til they kick off their shoes— presumably hours before the ball drops at midnight. Go on, level-up their shine all night. Just lace up and set them loose to be the star of the kids table..",
            images: [
                '1740051-00-B-101.png',
                '1740051-00-B-100.png',
                '1740051-00-B-102.png',
                '1740051-00-B-103.png',
            ],
            inStock: 52,
            price: 65,
            sizes: ['35', '36', '37', '38', '39'],
            slug: "chuck_taylor_all_star_platform_lift_sparkle",
            type: 'sneakers',
            tags: ['sneakers', 'kids', 'converse'],
            title: "Chuck Taylor All Star Platform Lift Sparkle - Converse (Kids)",
            gender: 'kid'
        },
        {
            description: "Express yourself in signature Chuck Taylor style. Mix and match the tri-panel design with your choice of new colors and prints, then top it off with fully personalized laces, linings, text, and more for a truly one-of-a-kind style.",
            images: [
                '1741111-00-A_1.jpg',
                '1741111-00-A_0_2000.jpg',
            ],
            inStock: 100,
            price: 90,
            sizes: ['35', '36', '37', '38', '39', '40', '41',],
            slug: "custom_chuck_taylor_lift_platform",
            type: 'sneakers',
            tags: ['sneakers', 'converse', 'women'],
            title: "Custom Chuck Taylor All Star Lift Platform By You - Converse (Women)",
            gender: 'women'
        },
        {
            description: "Converse CONS team rider Sean Greene’s leaves a groove on every San Francisco street, wall, and sidewalk in his path. For his debut One Star Pro colorway, Sean added details and materials that speak to his grit, all-in commitment, and perpetual need for speed. Using a canvas upper with suede paneling, the Sean Greene One Star Pro is stealthily designed to be seen, adding reflective materials in the Star and heel stripe, custom sock liner artwork, and an embossed homage to the homies. With rubber-backed durability in high abrasion areas, elastic tongue straps, CX Foam sock liner, and grippy traction rubber outsole, the Sean Greene One Star Pro mixes Converse heritage with ground-up enhancements for skateboarding.",
            images: [
                '1740140-00-A_1.png',
                '1740140-00-A_0_2000.png',
            ],
            inStock: 7,
            price: 80,
            sizes: ['38', '39', '40', '41', '42', '43', '44'],
            slug: "sean_greene_one_star_pro",
            type: 'sneakers',
            tags: ['sneakers', 'converse', 'men'],
            title: "Sean Greene One Star Pro - Converse (Men)",
            gender: 'men'
        },
        {
            description: "aking cues from hiking faves, this edition of the Run Star Hike pairs hyper-bright hits and trail-inspired laces. Go on, get out there.High-top platform shoe with durable cotton twill upper. OrthoLite cushioning helps provide optimal comfort. Leather eyerow overlays and webbed heel loops. Color-popped outsole and round trail fleck laces for a utility-inspired look. Iconic Chuck Taylor ankle patch",
            images: [
                '1740145-00-A_1.png',
                '1740145-00-A_2_2000.png',
                '1740145-00-A_2_2001.png',
                '1740145-00-A_2_2002.png'
            ],
            inStock: 85,
            price: 110,
            sizes: ['35', '36', '37', '38', '39'],
            slug: "run_star_hike_pleatform_utility_twist",
            type: 'sneakers',
            tags: ['sneakers', 'converse', 'women'],
            title: "Run Star Hike Platform Utility Twist - Converse (Women)",
            gender: 'women'
        },
        {
            description: "Rack up the style points in the Jack Purcell. Named after the world badminton champ, this refined, sporty low top lands any look with ease. Plus, layers of cushioning serve up unmatched comfort—making it a win for any rotation.",
            images: [
                '8529107-00-A_1.png',
                '8529107-00-A_0_2000.png',
            ],
            inStock: 85,
            price: 70,
            sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "jack_purcell",
            type: 'sneakers',
            tags: ['sneakers', 'converse', 'unisex'],
            title: "Jack Purcell - Converse (Unisex)",
            gender: 'unisex'
        },
    ]
}