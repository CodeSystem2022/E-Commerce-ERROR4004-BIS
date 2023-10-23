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

// type ValidSizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL'
type ValidSizes = '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39' | '40' | '41' | '42' | '43' | '44' | '45' | '46' | '47' | '48' | '49' | '50' 
type ValidTypes = 'running' | 'sneakers' | 'soccer' | 'shirts' | 'pants' | 'hoodies' | 'hats' | 'basketball'

interface SeedData {
    products: SeedProduct[],
}

export const initialData: SeedData = {
    products: [
        {
            description: "Sleek, comfortable shoes for little ones. Your little adventurer will be ready to play in these comfy Swift Run 1.0 shoes. Featuring a knit upper and flexible EVA midsole, these shoes keep tiny feet supported and cushioned. Recycled materials and a non-marking outsole ensure each step is gentle on the planet. These lightweight, lace-up shoes inspire dreams of zooming across the playground or racing down the sidewalk — someday.",
            images: [
                '1740176-00-A_1.jpg',
                '1740176-00-A_0_2000.jpg',
            ],
            inStock: 7,
            price: 75,
            sizes: ['30', '31', '32', '33', '34', '35', '36'],
            slug: "swift_run",
            type: 'running',
            tags: ['Adidas', 'Shoes', 'Boys', 'Kids', 'Girls', 'Run'],
            title: "Swift Run 1.0 - Adidas (Kids)",
            gender: 'kid'
        },
        {
            description: "Slip-On sneakers made in part with recycled materials. Light as air and ready for adventure, these kids' shoes slip on quick and stay comfy all day thanks to an EVA midsole. The textile upper is made from recycled materials, doing right by the planet while doing right by little feet. An elastic strap with bold wording lets kids proudly sport the adidas logo. Perfect for playdates and playgrounds, these shoes keep up with kids on the move.This product features at least 20% recycled materials. By reusing materials that have already been created, we help to reduce waste and our reliance on finite resources and reduce the footprint of the products we make.",
            images: [
                '1740507-00-A_1.jpg',
                '1740507-00-A_0_2000.jpg',
            ],
            inStock: 5,
            price: 200,
            sizes: ['30', '31', '32', '33', '34', '35', '36'],
            slug: "lite_racer_adapt",
            type: 'sneakers',
            tags: ['Adidas','kids', 'Boys', 'Girls'],
            title: "Lite Racer Adapt 6.0 - Adidas (Kids)",
            gender: 'kid'
        },
        {
            description: "This low-cut AJ1 is simplified to the max for a black and white shoe, but it's anything but simple. The subtle tones create a perfect backdrop for the pop of color from Jordan's own big and bright image on the side. As always, you get quality materials, like the durable leather upper, supportive foam in the outsole, and the comfortable Air you know and love.",
            images: [
                '1740250-00-A_0_2000.jpg',
                '1740250-00-A_1.jpg'
            ],
            inStock: 10,
            price: 78,
            sizes: ['35', '36', '37', '38'],
            slug: "air_jordan_1_low",
            type: 'sneakers',
            tags: ['Nike', 'Jordan', 'kids', 'Boys', 'Girls'],
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
            slug: "nike_react_infinity_run_flyknit",
            type: 'running',
            tags: ['Women', 'Nike', 'Running'],
            title: "React Infinity Run Flyknit 3 - Nike (Women-running)",
            gender: 'women'
        },
        {
            description: "Meet the leader of the pack. First released in 1987, the Nike Air Max 1 was the first shoe in the family to bring Air to the world. With a fast-paced look, tried-and-true cushioning and classic wavy mudguard, it’s no wonder it’s reigned supreme ever since.",
            images: [
                '793ef95a-87aa.png',
                '793ef95a-87aa-2.png',
               
            ],
            inStock: 12,
            price: 160,
            sizes: ['36', '37', '38', '39', '40', '41', '42', '43' ,'44'],
            slug: "nike_air_max_1_premium",
            type: 'sneakers',
            tags: ['Men', 'Nike', 'Sneakers'],
            title: "Air Max 1 Premium - Nike (Men)",
            gender: 'men'
        },
        {
            description: "Looks Max, feels Max. The Georgia Air Max SYSTM brings back everything you love about your favorite '80s vibes and adds a bit of school pride. Tried-and-true visible Max Air cushioning pairs with a sleek, sport-inspired upper. It's Air Max delivering again for Bulldogs fans everywhere.",
            images: [
                '758583ad-bbd8.png',
                '758583ad-bbd8-2.png',
            ],
            inStock: 9,
            price: 110,
            sizes: ['36', '37', '38', '39', '40', '41', '42', '43' ,'44'],
            slug: "nike_college_air_max_SYSTM_georgia",
            type: 'sneakers',
            tags: ['Men', 'Nike', 'Sneakers'],
            title: "College Air Max SYSTM (Georgia) - Nike (Men)",
            gender: 'men'
        },
        {
            description: "Out-of-this-world talent. Down-to-earth heart. Zion stays away from the noise that comes with being a pro athlete and prioritizes his game. He puts in the mud, sweat, and tears necessary to elevate his game, and this special edition Zion 3 honors his sky-high level of play. Court-ready tech helps you go up fast, come down hard, and react quickly when you're getting low.",
            images: [
                'f6a0a8b3-4155.png',
                'f6a0a8b3-4155-2.png',               
            ],
            inStock: 5,
            price: 140,
            sizes: ['40', '41', '42', '43', '44', '45', '46', '47' ,'48', '49', '50'],
            slug: "zion_3_Mud_Sweat_and_Tears",
            type: 'basketball',
            tags: ['Men', 'Jordan', 'Basketball'],
            title: "Zion 3 Mud, Sweat and Tears - Jordan (Men)",
            gender: 'men'
        },
        {
            description: "Created for the hardwood but taken to the streets, the '80s b-ball icon returns with perfectly shined overlays and classic team colors. With its iconic hoops design, the Nike Dunk Low channels '80s vintage back onto the streets while its padded, low-cut collar lets you take your game anywhere—in comfort.",
            images: [
                'a447e0eb-b47c-2.png',
                'a447e0eb-b47c.png',
            ],
            inStock: 20,
            price: 115,
            sizes: ['34', '36', '37', '38', '39', '40', '41', '42'],
            slug: "nike_dunk_low",
            type: 'basketball',
            tags: ['Women', 'Nike', 'Sneakers'],
            title: "Dunk Low - Nike (Women)",
            gender: 'women'
        },
        {
            description: "With maximum cushioning to support every mile, the Invincible 3 gives you Nike Running's highest level of comfort underfoot to help you stay on your feet today, tomorrow and beyond. Designed to help keep you on the run, it’s super supportive and bouncy, so that you can propel down your preferred path and come back for your next run feeling ready and reinvigorated.",
            images: [
                '87a2f87d-9bd5-2.png',
                '87a2f87d-9bd5.png',
            ],
            inStock: 6,
            price: 180,
            sizes: ['34', '36', '37', '38', '39', '40', '41', '42'],
            slug: "nike_invincible_3",
            type: 'running',
            tags: ['Women', 'Nike', 'Running'],
            title: "Invincible 3 - Nike (Women)",
            gender: 'women'
        },
        {
            description: "Inspired by our original PUMA California, the classic lines and dreamy details of the Cali Dream.",
            images: [
                '1741416-00-A_0_2000.png',
                '1741416-00-A_1.png',
            ],
            inStock: 50,
            price: 68,
            sizes: ['35', '36', '37', '38', '39', '40', ],
            slug: "cali_dream_wooly",
            type: 'sneakers',
            tags: ['Sneakers', 'Puma', 'Women'],
            title: "Cali Dream Wooly - Puma (Women)",
            gender: 'women'
        },
        {
            description: "A rugged and winterised take on the Capri tennis shoe line, this bold piece can stand up to more than the courts. With its.",
            images: [
                '7654393-00-A_3.png',
                '7654393-00-A_2_2000.png',
            ],
            inStock: 2,
            price: 90,
            sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "capri_para_sneakers",
            type: 'sneakers',
            tags: ['Shirt', 'Man', 'Puma'],
            title: "Capri Para Sneakers - Puma (Men)",
            gender: 'men'
        },
        {
            description: "Rider FV is all about a combination of past and future, with a nostalgic, heritage.",
            images: [
                '1703767-00-A_1.png',
                '1703767-00-A_0_2000.png',
            ],
            inStock: 15,
            price: 35,
            sizes: ['35', '36', '37', '38'],
            slug: "rider_fv_mix_match_toddlers_sneakers",
            type: 'sneakers',
            tags: ['Sneakers', 'Boys', 'Kids', 'Puma'],
            title: "Rider FV Mix Match Toddlers' Sneakers - Puma (Kids)",
            gender: 'kid'
        },
        {
            description: "Inspired by our original PUMA California, the classic lines and groovy details of the Cali Dream make it ready for all city looks.",
            images: [
                '1700280-00-A_1.png',
                '1700280-00-A_0_2000.png',
            ],
            inStock: 17,
            price: 35,
            sizes: ['35', '36', '37', '38'],
            slug: "cali_dream_star_flower_child_big_kids",
            type: 'sneakers',
            tags: ['Sneakers', 'Kids', 'Boys', 'Girls', 'Puma'],
            title: "Cali Dream Star Flower Child Big Kids - Puma' Sneakers ",
            gender: 'kid'
        },
        {
            description: "Round out your favorite fit in cool style with these kicks.Low boot. Lace closure. With Puma branding details.",
            images: [
                '8764734-00-A_1.png',
                '8764734-00-A_0_2000.png',
            ],
            inStock: 12,
            price: 35,
            sizes: ['35', '36', '37', '38', '39', '40'],
            slug: "suede_nyc",
            type: 'sneakers',
            tags: ['Sneakers', 'Puma', 'Women'],
            title: "Suede NYC - Puma (Women)",
            gender: 'women'
        },
        /*
        {
            description: "Designed for fit, comfort and style, the Tesla T Logo Tee is made from 100% Peruvian cotton and features a silicone-printed T Logo on the left chest.",
            images: [
                '7652426-00-A_0_2000.jpg',
                '7652426-00-A_1.jpg',
            ],
            inStock: 5,
            price: 35,
            sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "men_3d_t_logo_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's 3D T Logo Tee",
            gender: 'men'
        },
        {
            description: "Designed for comfort and style in any size, the Tesla Small Wordmark Tee is made from 100% Peruvian cotton and features a 3D silicone-printed wordmark on the left chest.",
            images: [
                '8528839-00-A_0_2000.jpg',
                '8528839-00-A_2.jpg',
            ],
            inStock: 2,
            price: 35,
            sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "men_3d_small_wordmark_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men’s 3D Small Wordmark Tee",
            gender: 'men'
        },
        {
            description: "Designed to celebrate Tesla's incredible performance mode, the Plaid Mode Tee features great fit, comfort and style. Made from 100% cotton, it's the next best thing to riding shotgun at the Nürburgring.",
            images: [
                '1549268-00-A_0_2000.jpg',
                '1549268-00-A_2.jpg',
            ],
            inStock: 82,
            price: 35,
            sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "men_plaid_mode_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's Plaid Mode Tee",
            gender: 'men'
        },
        {
            description: "Inspired by our popular home battery, the Tesla Powerwall Tee is made from 100% cotton and features the phrase 'Pure Energy' under our signature logo in the back. Designed for fit, comfort and style, the exclusive tee promotes sustainable energy in any environment.",
            images: [
                '9877034-00-A_0_2000.jpg',
                '9877034-00-A_2.jpg',
            ],
            inStock: 24,
            price: 35,
            sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "men_powerwall_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's Powerwall Tee",
            gender: 'men'
        },
        {
            description: "Inspired by Tesla Battery Day and featuring the unveiled tabless battery cell, Battery Day Tee celebrates the future of energy storage and cell manufacturing. Designed for fit, comfort and style, Battery Day Tee is made from 100% cotton with a stylized cell printed across the chest. Made in Peru.",
            images: [
                '1633802-00-A_0_2000.jpg',
                '1633802-00-A_2.jpg',
            ],
            inStock: 5,
            price: 30,
            sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "men_battery_day_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's Battery Day Tee",
            gender: 'men'
        },
        {
            description: "Designed for exceptional comfort and inspired by the Cybertruck unveil event, the Cybertruck Bulletproof Tee is made from 100% cotton and features our signature Cybertruck icon on the back.",
            images: [
                '7654399-00-A_0_2000.jpg',
                '7654399-00-A_1.jpg',
            ],
            inStock: 150,
            price: 30,
            sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "men_cybertruck_bulletproof_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men’s Cybertruck Bulletproof Tee",
            gender: 'men'
        },
        {
            description: "Inspired by the Model Y order confirmation graphic, the limited edition Haha Yes Tee is designed for comfort and style. Made from 100% Peruvian cotton and featuring the Tesla wordmark across the chest, the exclusive tee will commemorate your order for years to come.",
            images: [
                '7652410-00-A_0.jpg',
                '7652410-00-A_1_2000.jpg',
            ],
            inStock: 10,
            price: 35,
            sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "men_haha_yes_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's Haha Yes Tee",
            gender: 'men'
        },
        {
            description: "Designed for fit, comfort and style, the limited edition S3XY Tee is made from 100% cotton with a 3D silicone-printed “S3XY” logo across the chest. Made in Peru. Available in black.",
            images: [
                '8764600-00-A_0_2000.jpg',
                '8764600-00-A_2.jpg',
            ],
            inStock: 34,
            price: 35,
            sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "men_s3xy_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's S3XY Tee",
            gender: 'men'
        },
        {
            description: "Designed for fit, comfort and style, the Men's 3D Wordmark Long Sleeve Tee is made from 100% cotton and features an understated wordmark logo on the left chest.",
            images: [
                '8764813-00-A_0_2000.jpg',
                '8764813-00-A_1.jpg',
            ],
            inStock: 15,
            price: 40,
            sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "men_3d_wordmark_long_sleeve_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's 3D Wordmark Long Sleeve Tee",
            gender: 'men'
        },
        {
            description: "Designed for fit, comfort and style, the Men's 3D T Logo Long Sleeve Tee is made from 100% cotton and features an understated T logo on the left chest.",
            images: [
                '8529198-00-A_0_2000.jpg',
                '8529198-00-A_1.jpg',
            ],
            inStock: 12,
            price: 40,
            sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "men_3d_t_logo_long_sleeve_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's 3D T Logo Long Sleeve Tee",
            gender: 'men'
        },
        {
            description: "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Hoodie has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve with a french terry interior for versatility in any season. Made from 70% bamboo and 30% cotton.",
            images: [
                '1740245-00-A_0_2000.jpg',
                '1740245-00-A_1.jpg',
            ],
            inStock: 10,
            price: 115,
            sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "men_raven_lightweight_hoodie",
            type: 'hoodies',
            tags: ['hoodie'],
            title: "Men's Raven Lightweight Hoodie",
            gender: 'men'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Chill Pullover Hoodie has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The unisex hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve, a double layer single seam hood and pockets with custom matte zipper pulls. Made from 60% cotton and 40% recycled polyester.",
            images: [
                '1740051-00-A_0_2000.jpg',
                '1740051-00-A_1.jpg',
            ],
            inStock: 10,
            price: 130,
            sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "chill_pullover_hoodie",
            type: 'hoodies',
            tags: ['hoodie'],
            title: "Chill Pullover Hoodie",
            gender: 'unisex'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Men's Chill Full Zip Hoodie has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and sleeve, a double layer single seam hood and pockets with custom matte zipper pulls. Made from 60% cotton and 40% recycled polyester.",
            images: [
                '1741111-00-A_0_2000.jpg',
                '1741111-00-A_1.jpg',
            ],
            inStock: 100,
            price: 85,
            sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "men_chill_full_zip_hoodie",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's Chill Full Zip Hoodie",
            gender: 'men'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Men’s Chill Quarter Zip Pullover has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The pullover features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, as well as a custom matte zipper pull. Made from 60% cotton and 40% recycled polyester.",
            images: [
                '1740140-00-A_0_2000.jpg',
                '1740140-00-A_1.jpg',
            ],
            inStock: 7,
            price: 85,
            sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "men_chill_quarter_zip_pullover_-_gray",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's Chill Quarter Zip Pullover - Gray",
            gender: 'men'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Men’s Chill Quarter Zip Pullover has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The pullover features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, as well as a custom matte zipper pull. Made from 60% cotton and 40% recycled polyester.",
            images: [
                '1740145-00-A_2_2000.jpg',
                '1740145-00-A_1.jpg',
            ],
            inStock: 15,
            price: 85,
            sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "men_chill_quarter_zip_pullover_-_white",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's Chill Quarter Zip Pullover - White",
            gender: 'men'
        },
        {
            description: "The Unisex 3D Large Wordmark Pullover Hoodie features soft fleece and an adjustable, jersey-lined hood for comfort and coverage. Designed in a unisex style, the pullover hoodie includes a tone-on-tone 3D silicone-printed wordmark across the chest.",
            images: [
                '8529107-00-A_0_2000.jpg',
                '8529107-00-A_1.jpg',
            ],
            inStock: 15,
            price: 70,
            sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "3d_large_wordmark_pullover_hoodie",
            type: 'hoodies',
            tags: ['hoodie'],
            title: "3D Large Wordmark Pullover Hoodie",
            gender: 'unisex'
        },
        {
            description: "As with the iconic Tesla logo, the Cybertruck Graffiti Hoodie is a classic in the making. Unisex style featuring soft fleece and an adjustable, jersey-lined hood for comfortable coverage.",
            images: [
                '7654420-00-A_0_2000.jpg',
                '7654420-00-A_1_2000.jpg',
            ],
            inStock: 13,
            price: 60,
            sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "cybertruck_graffiti_hoodie",
            type: 'hoodies',
            tags: ['hoodie'],
            title: "Cybertruck Graffiti Hoodie",
            gender: 'unisex'
        },
        {
            description: "The Relaxed T Logo Hat is a classic silhouette combined with modern details, featuring a 3D T logo and a custom metal buckle closure. The ultrasoft design is flexible and abrasion resistant, while the inner sweatband includes quilted padding for extra comfort and moisture wicking. The visor is fully made from recycled plastic bottles. 100% Cotton.",
            images: [
                '1657932-00-A_0_2000.jpg',
                '1657932-00-A_1.jpg',
            ],
            inStock: 11,
            price: 30,
            sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "relaxed_t_logo_hat",
            type: 'hats',
            tags: ['hats'],
            title: "Relaxed T Logo Hat",
            gender: 'unisex'
        },
        {
            description: "The Relaxed T Logo Hat is a classic silhouette combined with modern details, featuring a 3D T logo and a custom metal buckle closure. The ultrasoft design is flexible and abrasion resistant, while the inner sweatband includes quilted padding for extra comfort and moisture wicking. The visor is fully made from recycled plastic bottles. 100% Cotton.",
            images: [
                '1740417-00-A_0_2000.jpg',
                '1740417-00-A_1.jpg',
            ],
            inStock: 13,
            price: 35,
            sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "thermal_cuffed_beanie",
            type: 'hats',
            tags: ['hats'],
            title: "Thermal Cuffed Beanie",
            gender: 'unisex'
        },
        {
            description: "The Women's Cropped Puffer Jacket features a uniquely cropped silhouette for the perfect, modern style while on the go during the cozy season ahead. The puffer features subtle silicone injected Tesla logos below the back collar and on the right sleeve, custom matte metal zipper pulls and a soft, fleece lined collar. Made from 87% nylon and 13% polyurethane.",
            images: [
                '1740535-00-A_0_2000.jpg',
                '1740535-00-A_1.jpg',
            ],
            inStock: 85,
            price: 225,
            sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "women_cropped_puffer_jacket",
            type: 'hoodies',
            tags: ['hoodie'],
            title: "Women's Cropped Puffer Jacket",
            gender: 'women'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Women's Chill Half Zip Cropped Hoodie has a premium, soft fleece exterior and cropped silhouette for comfort in everyday lifestyle. The hoodie features an elastic hem that gathers at the waist, subtle thermoplastic polyurethane Tesla logos along the hood and on the sleeve, a double layer single seam hood and a custom ring zipper pull. Made from 60% cotton and 40% recycled polyester.",
            images: [
                '1740226-00-A_0_2000.jpg',
                '1740226-00-A_1.jpg',
            ],
            inStock: 10,
            price: 130,
            sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "women_chill_half_zip_cropped_hoodie",
            type: 'hoodies',
            tags: ['hoodie'],
            title: "Women's Chill Half Zip Cropped Hoodie",
            gender: 'women'
        },
        {
            description: "Introducing the Tesla Raven Collection. The Women's Raven Slouchy Crew Sweatshirt has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The slouchy crew features a subtle thermoplastic polyurethane Tesla wordmark on the left sleeve and a french terry interior for a cozy look and feel in every season. Pair it with your Raven Joggers or favorite on the go fit. Made from 70% bamboo and 30% cotton.",
            images: [
                '1740260-00-A_0_2000.jpg',
                '1740260-00-A_1.jpg',
            ],
            inStock: 9,
            price: 110,
            sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "women_raven_slouchy_crew_sweatshirt",
            type: 'hoodies',
            tags: ['hoodie'],
            title: "Women's Raven Slouchy Crew Sweatshirt",
            gender: 'women'
        },
        {
            description: "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Women's Turbine Cropped Long Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style with a cropped silhouette. Made from 50% cotton and 50%",
            images: [
                '1740290-00-A_0_2000.jpg',
                '1740290-00-A_1.jpg',
            ],
            inStock: 10,
            price: 45,
            sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "women_turbine_cropped_long_sleeve_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Women's Turbine Cropped Long Sleeve Tee",
            gender: 'women'
        },
        {
            description: "ntroducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Women's Turbine Cropped Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style with a cropped silhouette. Made from 50% cotton and 50% polyester.",
            images: [
                '1741441-00-A_0_2000.jpg',
                '1741441-00-A_1.jpg',
            ],
            inStock: 0,
            price: 40,
            sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "women_turbine_cropped_short_sleeve_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Women's Turbine Cropped Short Sleeve Tee",
            gender: 'women'
        },
        {
            description: "Designed for style and comfort, the ultrasoft Women's T Logo Short Sleeve Scoop Neck Tee features a tonal 3D silicone-printed T logo on the left chest. Made of 50% Peruvian cotton and 50% Peruvian viscose.",
            images: [
                '8765090-00-A_0_2000.jpg',
                '8765090-00-A_1.jpg',
            ],
            inStock: 30,
            price: 35,
            sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "women_t_logo_short_sleeve_scoop_neck_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Women's T Logo Short Sleeve Scoop Neck Tee",
            gender: 'women'
        },
        {
            description: "Designed for style and comfort, the ultrasoft Women's T Logo Long Sleeve Scoop Neck Tee features a tonal 3D silicone-printed T logo on the left chest. Made of 50% Peruvian cotton and 50% Peruvian viscose.",
            images: [
                '8765100-00-A_0_2000.jpg',
                '8765100-00-A_1.jpg',
            ],
            inStock: 16,
            price: 40,
            sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "women_t_logo_long_sleeve_scoop_neck_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Women's T Logo Long Sleeve Scoop Neck Tee",
            gender: 'women'
        },
        {
            description: "Designed for style and comfort, the Women's Small Wordmark Short Sleeve V-Neck Tee features a tonal 3D silicone-printed wordmark on the left chest. Made of 100% Peruvian cotton.",
            images: [
                '8765120-00-A_0_2000.jpg',
                '8765120-00-A_1.jpg',
            ],
            inStock: 18,
            price: 35,
            sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "women_small_wordmark_short_sleeve_v-neck_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Women's Small Wordmark Short Sleeve V-Neck Tee",
            gender: 'women'
        },
        {
            description: "Designed for style and comfort, the Women's Large Wordmark Short Sleeve Crew Neck Tee features a tonal 3D silicone-printed wordmark across the chest. Made of 100% Peruvian pima cotton.",
            images: [
                '8765115-00-A_0_2000.jpg',
                '8765115-00-A_1.jpg',
            ],
            inStock: 5,
            price: 35,
            sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "women_large_wordmark_short_sleeve_crew_neck_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Women's Large Wordmark Short Sleeve Crew Neck Tee",
            gender: 'women'
        },
        {
            description: "Designed to celebrate Tesla's incredible performance mode, the Plaid Mode Tee features great fit, comfort and style. Made from 100% cotton, it's the next best thing to riding shotgun at the Nürburgring.",
            images: [
                '1549275-00-A_0_2000.jpg',
                '1549275-00-A_1.jpg',
            ],
            inStock: 16,
            price: 35,
            sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "women_plaid_mode_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Women's Plaid Mode Tee",
            gender: 'women'
        },
        {
            description: "Inspired by our popular home battery, the Tesla Powerwall Tee is made from 100% cotton and features the phrase 'Pure Energy' under our signature logo in the back. Designed for fit, comfort and style, the exclusive tee promotes sustainable energy in any",
            images: [
                '9877040-00-A_0_2000.jpg',
                '9877040-00-A_1.jpg',
            ],
            inStock: 10,
            price: 130,
            sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "women_powerwall_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Women’s Powerwall Tee",
            gender: 'women'
        },
        {
            description: "Fully customized and uniquely styled, the Women's Corp Jacket features a silicone-printed 'T' logo on the left chest and prominent Tesla wordmark across the back.",
            images: [
                '5645680-00-A_0_2000.jpg',
                '5645680-00-A_3.jpg',
            ],
            inStock: 3,
            price: 90,
            sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "women_corp_jacket",
            type: 'shirts',
            tags: ['shirt'],
            title: "Women's Corp Jacket",
            gender: 'women'
        },
        {
            description: "Introducing the Tesla Raven Collection. The Women's Raven Joggers have a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The joggers feature a subtle thermoplastic polyurethane Tesla wordmark and T logo and a french terry interior for a cozy look and feel in every season. Pair them with your Raven Slouchy Crew Sweatshirt, Raven Lightweight Zip Up Jacket or other favorite on the go fit. Made from 70% bamboo and 30% cotton.",
            images: [
                '1740270-00-A_0_2000.jpg',
                '1740270-00-A_1.jpg',
            ],
            inStock: 162,
            price: 100,
            sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "women_raven_joggers",
            type: 'shirts',
            tags: ['shirt'],
            title: "Women's Raven Joggers",
            gender: 'women'
        },
        {
            description: "Designed for fit, comfort and style, the Kids Cybertruck Graffiti Long Sleeve Tee features a water-based Cybertruck graffiti wordmark across the chest, a Tesla wordmark down the left arm and our signature T logo on the back collar. Made from 50% cotton and 50% polyester.",
            images: [
                '1742694-00-A_1_2000.jpg',
                '1742694-00-A_3.jpg',
            ],
            inStock: 10,
            price: 30,
            sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "kids_cybertruck_long_sleeve_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Kids Cybertruck Long Sleeve Tee",
            gender: 'kid'
        },
        {
            description: "The Kids Scribble T Logo Tee is made from 100% Peruvian cotton and features a Tesla T sketched logo for every young artist to wear.",
            images: [
                '8529312-00-A_0_2000.jpg',
                '8529312-00-A_1.jpg',
            ],
            inStock: 0,
            price: 25,
            sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "kids_scribble_t_logo_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Kids Scribble T Logo Tee",
            gender: 'kid'
        },
        {
            description: "The Kids Cybertruck Tee features the iconic Cybertruck graffiti wordmark and is made from 100% Peruvian cotton for maximum comfort.",
            images: [
                '8529342-00-A_0_2000.jpg',
                '8529342-00-A_1.jpg',
            ],
            inStock: 10,
            price: 25,
            sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "kids_cybertruck_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Kids Cybertruck Tee",
            gender: 'kid'
        },
        {
            description: "The refreshed Kids Racing Stripe Tee is made from 100% Peruvian cotton, featuring a newly enhanced racing stripe with a brushed Tesla wordmark that's perfect for any speed racer.",
            images: [
                '8529354-00-A_0_2000.jpg',
                '8529354-00-A_1.jpg',
            ],
            inStock: 10,
            price: 30,
            sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "kids_racing_stripe_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Kids Racing Stripe Tee",
            gender: 'kid'
        },
        {
            description: "Designed for fit, comfort and style, the Tesla T Logo Tee is made from 100% Peruvian cotton and features a silicone-printed T Logo on the left chest.",
            images: [
                '7652465-00-A_0_2000.jpg',
                '7652465-00-A_1.jpg',
            ],
            inStock: 10,
            price: 30,
            sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "kids_3d_t_logo_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Kids 3D T Logo Tee",
            gender: 'kid'
        },
        {
            description: "The checkered tee is made from long grain, GMO free Peruvian cotton. Peru is the only country in the world where cotton is picked by hand on a large scale. The 4,500-year-old tradition prevents damage to the fiber during the picking process and removes the need to use chemicals to open the cotton plants before harvest. This environmentally friendly process results in cotton that is soft, strong, and lustrous – and the tee will get even softer with every wash.",
            images: [
                '100042307_0_2000.jpg',
                '100042307_alt_2000.jpg',
            ],
            inStock: 10,
            price: 30,
            sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "kids_checkered_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Kids Checkered Tee",
            gender: 'kid'
        },
        {
            description: "For the future space traveler with discerning taste, a soft, cotton onesie with snap closure bottom. Clear labeling provided in case of contact with a new spacefaring civilization. 100% Cotton. Made in Peru",
            images: [
                '1473809-00-A_1_2000.jpg',
                '1473809-00-A_alt.jpg',
            ],
            inStock: 16,
            price: 25,
            sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "made_on_earth_by_humans_onesie",
            type: 'shirts',
            tags: ['shirt'],
            title: "Made on Earth by Humans Onesie",
            gender: 'kid'
        },
        {
            description: "The Kids Scribble T Logo Onesie is made from 100% Peruvian cotton and features a Tesla T sketched logo for every little artist to wear.",
            images: [
                '8529387-00-A_0_2000.jpg',
                '8529387-00-A_1.jpg',
            ],
            inStock: 0,
            price: 30,
            sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "scribble_t_logo_onesie",
            type: 'shirts',
            tags: ['shirt'],
            title: "Scribble T Logo Onesie",
            gender: 'kid'
        },
        {
            description: "Show your commitment to sustainable energy with this cheeky onesie for your young one. Note: Does not prevent emissions. 100% Cotton. Made in Peru.",
            images: [
                '1473834-00-A_2_2000.jpg',
                '1473829-00-A_2_2000.jpg',
            ],
            inStock: 10,
            price: 30,
            sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "zero_emissions_(almost)_onesie",
            type: 'shirts',
            tags: ['shirt'],
            title: "Zero Emissions (Almost) Onesie",
            gender: 'kid'
        },
        {
            description: "Wear your Kids Cyberquad Bomber Jacket during your adventures on Cyberquad for Kids. The bomber jacket features a graffiti-style illustration of our Cyberquad silhouette and wordmark. With three zippered pockets and our signature T logo and Tesla wordmark printed along the sleeves, Kids Cyberquad Bomber Jacket is perfect for wherever the trail takes you. Made from 60% cotton and 40% polyester.",
            images: [
                '1742702-00-A_0_2000.jpg',
                '1742702-00-A_1.jpg',
            ],
            inStock: 10,
            price: 65,
            sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "kids_cyberquad_bomber_jacket",
            type: 'shirts',
            tags: ['shirt'],
            title: "Kids Cyberquad Bomber Jacket",
            gender: 'kid'
        },
        {
            description: "Cruise the playground in style with the Kids Corp Jacket. Modeled after the original Tesla Corp Jacket, the Kids Corp Jacket features the same understated style and high-quality materials but at a pint-sized scale.",
            images: [
                '1506211-00-A_0_2000.jpg',
                '1506211-00-A_1_2000.jpg',
            ],
            inStock: 10,
            price: 30,
            sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
            slug: "kids_corp_jacket",
            type: 'shirts',
            tags: ['shirt'],
            title: "Kids Corp Jacket",
            gender: 'kid'
        },
        */
    ]
}