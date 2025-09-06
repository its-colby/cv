<script lang="ts">
    import Header from '$lib/ui/header/Header.svelte';
  import { flip } from 'svelte/animate';

    // Gallery organized by rows with captions
    const galleryRows = [
        {
            title: "Schroon Lake",
            // caption: "Digging a hole in a frozen lake, establishing useless safety lines to the shore, cold plunging each day, walking miles across the ice, building fires on both the ice and the shore, doing challenges across the thinnest parts of the lake's frozen surface...it was all amazing. However, strangely enough, the best part about this trip was putting multiple hours worth of manpower into pushing a 500+ pound log 50 yards onto the lake...just to push it back to the shore the day after",
            images: [
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756820067/IMG_4144_d0w563.png", 
                    alt: "frozen-schroon-shoulder-out-submerged" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756820067/IMG_4147_caaxw9.png", 
                    alt: "frozen-schroon-dip" 
                },
                // { 
                //     src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756823158/IMG_1792_lsvskj.jpg", 
                //     alt: "frozen-schroon-3-walking-daytime" 
                // },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756823168/IMG_4110_s1fwar.jpg", 
                    alt: "frozen-schroon-night-fire-2-ppl" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756847352/IMG_2228_ivaxgc.jpg", 
                    alt: "schroon-lake-campfire" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756847349/IMG_1795_obbrkx.jpg", 
                    alt: "schroon-lake-ice-walking-night" 
                },
            ]
        },
        {
            title: "Pali Puka",
            // caption: "This trail probably has my favorite entrance of any hike. It just looks like a black abyss into the jungle, usually demarcated by stray cats. After hiking for 5 minutes, you immediately hit the skyline ridge where one wrong move sends you tumbling down to your death. My survival instincts made me crawl some of the very narrow sections, but I know some crazy people who would trail run this. Of course, the group I was with continued hiking the ridge past the traditional end of the trail. However, we got to one section that just looked like pure death, so we stopped. Little did we know, that some crazy people do continue along that ridge for one of the world's craziest and most unknown hikes.",
            images: [
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756818451/pali-puka-scenic_fir7jf.jpg", 
                    alt: "pali-puka-scenic-ridge" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756823167/IMG_3625_ajzj4c.jpg", 
                    alt: "pali-puka-hiking-ridge" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756825141/IMG_3654_ftxl32.jpg", 
                    alt: "pali-puka-farside-scenic" 
                },
                // { 
                //     src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756825139/IMG_3593_muashx.jpg", 
                //     alt: "pali-puka-cat-entrance"
                // },
            ]
        },
        {
            title: "Lake George",
            // caption: "This was a fairly standard hike, but of course, me and my group of friends always elevate it. Barefoot and shirtless we hiked, crossed rivers, climbed waterfalls, and swam to islands.",
            images: [
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756823171/IMG_5699_cloyun.jpg", 
                    alt: "lake-george-falls-low-climb" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756823173/IMG_5706_xwtrp2.jpg", 
                    alt: "lake-george-falls-up-climb" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756825144/IMG_5715_xqtkns.jpg", 
                    alt: "lake-george-falls-downclimb" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756825142/IMG_5677_vvnthx.jpg", 
                    alt: "lake-george-river-crossing" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756825130/IMG_2924_zk64kn.jpg", 
                    alt: "lake-george-island-swim" 
                },
            ]
        },
        {
            title: "Mount Olomana",
            // caption: "Yet another hike that claims the lives of many. I swear, it seems like every trail I do in Hawaii has a sign with a death total on it; its like the new standard for marking trails.Hiking the first two peaks is not for the faint of heart, but relatively easy. Getting to the picturesque triangle-looking third peak is where lives get lost. Ultimately, its not too bad, but one wrong move could cause death. Unfortunately, I was struggling with a massive knee injury at the time that prevented me from contracting my hamstring effectively...so I was quite nervous. I also happened to be with a fellow daredevil who wanted to downclimb the backside of the third peak. This was one of those 'extensions' that you can only find on obscure comments in forums of some daredevil's blog. Immediately after beginning, we were faced with not hiking, but climbing with 100+ foot falls to either side. We hoped it would get better, but it didn't. We also had no where to go...because there was no trail of course. So, we decided to keep our lives, get back up to the third peak, and head back the traditional way (that still claims lives). Nonetheless, my favorite part of this hike is a forest along the way to the first peak that has great trees to climb.",
            images: [
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756825164/IMG_9164_hzol23.jpg", 
                    alt: "olomana-second-to-third-view" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756825162/IMG_9161_mtjywd.jpg", 
                    alt: "olomana-third-downclimb" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756825160/IMG_9135_qobjwq.jpg", 
                    alt: "olomana-first-to-second-walking" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756825147/IMG_6580_qpxxya.jpg", 
                    alt: "olomana-1-first-peak-scenic" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756825146/IMG_6526_u1eszr.jpg", 
                    alt: "olomana-tree-climb" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756847530/IMG_9144_k8ktgx.jpg", 
                    alt: "olomana-arch" 
                },
            ]
        },
        {
            title: "Heart Lake",
            // caption: "Hiking this when the trees change colors is something everyone should do. When my friends and I hiked it, it had rained the day before, and it was supposed to hail the day of and be around 30 degrees Farenheit. Of course, we decided we had to do it shirtless and barefoot. It was very odd walking passed people dressed in winter gear. Despite going barefoot a lot, this ground was so rough and painful. But luckily, it was so cold that our feet had no feeling anyway. Just to make sure we didn't get frostbite, we would take breaks every 5 minutes and furiously clench our feet with our hands...except my one flexible friend who was able to warm his feet in his armpits (somehow) one at a time.",
            images: [
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756819321/IMG_2314_zwnfbx.jpg", 
                    alt: "heart-lake-1-scenic" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756819321/IMG_2318_ttdimr.jpg", 
                    alt: "heart-lake-1-tree-climb" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756819321/IMG_2319_lpjcdm.jpg", 
                    alt: "heart-lake-1-dark-scenic" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756823162/IMG_2312_qfuvyh.jpg", 
                    alt: "heart-lake-1-3-bros" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756823161/IMG_2304_ha1g36.jpg", 
                    alt: "heart-lake-1-lake-scenic" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756847352/IMG_2296_ag5vz5.jpg", 
                    alt: "heart-lake-entrance" 
                },
            ]
        },
        {
            title: "Pali Notches",
            caption: "",
            images: [
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756825131/IMG_2980_mvbrci.jpg", 
                    alt: "pali-notches-trail-view" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756825133/IMG_2985_y0axjh.jpg", 
                    alt: "pali-notches-initial-descent" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756825135/IMG_2990_ep7js1.jpg", 
                    alt: "pali-notches-mid-descent" 
                },
            ]
        },
        {
            title: "Indian Head Vista",
            images: [
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756819693/IMG_1653_g542ru.jpg", 
                    alt: "indian-head-vista-wide-scenic" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756819694/IMG_5810_twpd1r.jpg", 
                    alt: "indian-head-lower-lake-scenic" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756847350/IMG_1800_eoydm2.jpg", 
                    alt: "indian-head-rainbow-falls" 
                },
            ]
        },
        {
            title: "Rio Celeste",
            images: [
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756820033/IMG_4339_wsl5cw.jpg", 
                    alt: "rio-celeste-falls" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756820033/IMG_4362_q33i2x.jpg", 
                    alt: "rio-celeste-deep-squat" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756820034/IMG_4438_x5ewll.jpg", 
                    alt: "rio-celeste-hack-squat" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756820034/IMG_4440_kc1p1g.jpg", 
                    alt: "rio-celeste-standing" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756820034/IMG_4388_ommoro.jpg", 
                    alt: "rio-celeste-in-water" 
                },
            ]
        },
        {
            title: "Chapel Pond",
            images: [
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756823159/IMG_2120_gqrlo7.jpg", 
                    alt: "chapel-pond-wall-low-climb" 
                },
                // { 
                //     src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756823174/IMG_6989_tynuz3.jpg", 
                //     alt: "chapel-pond-feet" 
                // },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756823175/IMG_7129_xkdijd.jpg", 
                    alt: "chapel-pond-back-scenic" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756825149/IMG_7140_sux0qa.jpg", 
                    alt: "chapel-pond-top-scenic-side-profile" 
                },
            ]
        },
        {
            title: "Pu'u Piei",
            images: [
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756825157/IMG_8744_mwe1sl.jpg", 
                    alt: "puu-piei-mid-hike" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756825136/IMG_3120_mtqwgn.jpg", 
                    alt: "puu-piei-near-top" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756825165/IMG_9356_ffmaia.jpg", 
                    alt: "puu-piei-scenic-bay" 
                },
            ]
        },
        {
            title: "Mokoli'i",
            images: [
                { src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756819694/IMG_4406_rlk2vr.jpg", alt: "mokolii-atop-mountain" },
                { src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756825158/IMG_8750_fgdmy9.jpg", alt: "mokolii-far-away" },
            ]
        },
        {
            title: "Hanakāpī'ai",
            images: [
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756819536/IMG_3458_ywyrcl.jpg", 
                    alt: "hanakapiai-1-falls-dark-scenic" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756819534/IMG_3459_grxaxh.jpg", 
                    alt: "hanakapiai-1-overhead-beach-light-scenic" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756819533/IMG_3417_mhk30l.jpg", 
                    alt: "hanakapiai-1-cave-scenic" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756819533/IMG_3402_j7ppl4.jpg", 
                    alt: "hanakapiai-1-overhead-beach-dark-scenic" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756819534/IMG_3435_qqt0l4.jpg", 
                    alt: "hanakapiai-1-beach-rocks-scenic" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756825167/IMG_9393_tn6kvb.jpg", 
                    alt: "hanakapiai-2-bamboo" 
                },
            ]
        },
        {
            title: "Spitting Caves",
            images: [
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756819320/IMG_1334_uvm7ka.jpg", 
                    alt: "spitting-caves-watching" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756819320/IMG_1328_ae8t8w.jpg", 
                    alt: "spitting-caves-on-wall" 
                },
            ]
        },
        {
            title: "OK Slip Falls",
            images: [
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756823165/IMG_2919_mmakjx.jpg", 
                    alt: "slip-falls-lizard-crawl" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756823163/IMG_2913_ztunch.jpg", 
                    alt: "slip-falls-more-ppl" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756847527/IMG_5618_qqzefx.jpg", 
                    alt: "ok-slip-falls-faraway" 
                },
            ]
        },
        {
            title: "Sleeping Giant",
            images: [
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756847355/IMG_3385_xut7ot.jpg", 
                    alt: "sleeping-giant-backside" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756847352/IMG_3207_i69eo9.jpg", 
                    alt: "sleeping-giant-tree" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756819694/IMG_3183_ilzosw.jpg", 
                    alt: "sleeping-giant-outlook" 
                },
            ]
        },
        {
            title: "Koko Head",
            images: [
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756847526/IMG_3559_pihcot.jpg", 
                    alt: "koko-head-scenic" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756846962/IMG_3915_ekvuat.jpg", 
                    alt: "koko-head-stairs" 
                },
            ]
        },
        {
            title: "Random Rocks",
            images: [
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756816817/221355903_2971760416404034_7591313906171650848_n_k44rwz.jpg", 
                    alt: "brickyard-sit-start"
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756816817/220893195_535498581200936_6516966712117382265_n_gbpo8x.jpg", 
                    alt: "brickyard-jump" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756825138/IMG_3469_wtq0zj.jpg",
                    alt: "brickyard-bouldering-2-finger-catch" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756825125/231837745_241203491338427_2131001244438781172_n_nflku0.jpg", 
                    alt: "brickyard-bouldering-lookback" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756825123/231672901_246688390609082_6245637837618808526_n_naseo7.jpg", 
                    alt: "rumney-bouldering-crimp"
                },
                // { 
                //     src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756825128/233625186_802361320429738_1727941105202489782_n_tnq5gv.jpg", 
                //     alt: "stoney-classic-front-boulder" 
                // },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756825126/231984949_2899115036967871_6803770982984566992_n_mfnu8n.jpg", 
                    alt: "rumney-bouldering" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756846961/231981004_345085977256605_8312258590479397381_n_ihfxua.jpg", 
                    alt: "brickyard-midair-shot" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756847347/193701165_162074255889779_2273753971447524776_n_17888001602195870_aumuio.jpg", 
                    alt: "brickyard-v7" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756847528/IMG_8259_txy4fc.jpg", 
                    alt: "makauwahi-cave-beach-rock" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756846964/IMG_8161_gyihzq.png", 
                    alt: "lincoln-woods-rock-solo" 
                },
            ]
        },
        {
            title: "Santa Barbara",
            images: [
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756847352/IMG_3080_e0slhc.jpg", 
                    alt: "zebra" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756846961/238812233_266629691614275_310970654216910934_n_uoktpr.jpg", 
                    alt: "potters-point" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756846961/200805165_110699784580826_6740529501320173081_n_gwbl6o.jpg", 
                    alt: "brickyard-scenic" 
                },
            ]
        },
        {
            title: "Urban Fun",
            images: [
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756846963/306105644_624915195647493_611706578453920384_n_lezmxx.jpg", 
                    alt: "climbing-pillar" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756846962/306527958_800688734475399_2871929026202741493_n_1_ovs5kj.jpg", 
                    alt: "l-sit-pillar" 
                },
                // { 
                //     src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756846962/306038110_823179652025471_6414430886347247126_n_zlqbiw.jpg", 
                //     alt: "standing-on-pillar" 
                // },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756846962/305940111_1788735721472426_6815439007533324306_n_enxtlt.jpg", 
                    alt: "hanging-upside-down" 
                },
            ]
        },
        {
            title: "Random Trees",
            images: [
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756825154/IMG_8326_x56rnm.png", 
                    alt: "coconut-tree-climb-mid-grab" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756825152/IMG_7352_lux14k.png", 
                    alt: "lake-george-tree-climb" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756825151/IMG_7351_vof2jk.png", 
                    alt: "splits-between-trees" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756823173/IMG_6051_wqbz91.jpg", 
                    alt: "log-in-ocean" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756846962/IMG_2627_rzrt0g.jpg", 
                    alt: "massive-banyan" 
                },
            ]
        },
        // {
        //     title: "Falling into Cactus",
        //     images: [
        //         { 
        //             src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756846964/IMG_0164_yisaxz.jpg", 
        //             alt: "cactus-er" 
        //         },
        //         { 
        //             src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756846963/IMG_0166_xhb2kf.jpg", 
        //             alt: "cactus-arm" 
        //         },
        //         { 
        //             src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756846964/IMG_5319_g7bojk.png", 
        //             alt: "cactus-finger" 
        //         },
        //     ]
        // },
        {
            title: "Miscellaneous",
            images: [
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756825155/IMG_8658_iaql4e.jpg", 
                    alt: "tahoe-barefoot-scenic" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756823170/IMG_4552_kumnih.jpg", 
                    alt: "monteverde-falls-standing" 
                },
                { 
                    src: "https://res.cloudinary.com/dqdb7eli7/image/upload/v1756823166/IMG_3234_cygw6r.jpg", 
                    alt: "wailua-falls" 
                },
            ]
        },
    ];
</script>

<Header/>
<main>
    <article>
        <header>
            <p>Below, you can find a few of my favorite memories (btw, this page may take a while to load...)</p>
        </header>
        {#each galleryRows as row}
            <section class="gallery-row">
                {#if row.title}
                    <h2 class="row-title">{row.title}</h2>
                {/if}
                {#if row.caption}
                    <p class="row-caption">{row.caption}</p>
                {/if}
                <div class="image-grid">
                    {#each row.images as image, index}
                        <figure class="image-item">
                            <img src={image.src} alt={image.alt} />
                            <!-- <figcaption>Photo {index + 1}</figcaption> -->
                        </figure>
                    {/each}
                </div>
            </section>
        {/each}
    </article>
</main>

<style lang="scss">
    @use '$lib/theme/fonts.scss';
    @use '$lib/theme/screens.scss';
    @use '$lib/theme/spacing.scss';
    @use "sass:map";

    :global(body, html) {
        margin: 0;
        padding: 0;
        background-color: var(--main-background);
        @extend %base-font;
    }

    h2 {
        @extend %kinda-large-font;
        color: var(--text-brand);
        margin: 0;
        text-align: center;
    }

    main {
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        padding: 2rem spacing.$indent;
        min-height: calc(100vh - 4rem);

        @include screens.mobile {
            padding: spacing.$indent;
        }
    }

    article {
        max-width: 60rem;
        width: 100%;
        background-color: var(--card-a-background);
        border-radius: 0.66rem;
        padding: 2rem spacing.$indent;
        display: flex;
        flex-direction: column;
        gap: 3rem;
        
        @include screens.mobile {
            padding: spacing.$indent;
            gap: 2rem;
        }

    }

    p {
            @extend %base-font;
            color: var(--text-neutral);
            line-height: 1.6;
            margin: 0;
            text-align: justify;
            font-style: italic;
            text-align: center;
            margin: 0 auto;
            max-width: 20rem;
            
            @include screens.mobile {
                text-align: left;
            }
        }

    .gallery-row {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        .image-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 1.5rem;
            justify-content: center;

            @include screens.mobile {
                gap: 1rem;
            }
        }

        .image-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: var(--card-background);
            border-radius: 8px;
            padding: 1rem;
            border: 1px solid var(--border-color);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            margin: 0;
            // min-width: 150px;
            // max-width: 200px;
            flex: 1 1 auto;

            @include screens.mobile {
                min-width: 120px;
                max-width: 150px;
                padding: 0.75rem;
            }

            &:hover {
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            }

            img {
                width: 300px;
                height: 300px;
                object-fit: cover;
                border-radius: 4px;
                margin-bottom: 0.75rem;

                @include screens.mobile {
                    width: 80px;
                    height: 80px;
                }
            }

            figcaption {
                @extend %base-font;
                color: var(--text-neutral);
                text-align: center;
                font-size: 0.9rem;
                line-height: 1.4;
                margin: 0;

                @include screens.mobile {
                    font-size: 0.8rem;
                }
            }
        }
    }
</style>
