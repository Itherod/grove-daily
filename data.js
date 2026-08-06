const RUNES = [
  {g:"ᚠ",name:"Fehu",sub:"Cattle · Wealth · sound of F",
   verse:["Wealth is a comfort to all,","yet each must share it well,","for it stirs strife among kin,","and the wolf is raised in the woods."],
   meaning:"Fehu is movable wealth. Cattle in the old world, money and resources in ours. It is abundance that flows rather than sits, and the poem names its double edge: what you gather can feed you or set your kin against one another. The rune asks not whether you have, but whether it moves. Held too tightly, wealth breeds the wolf. Kept in flow, given and circulated, it nourishes. Today, look at what you're holding and ask what it's doing — standing still, or feeding something.",source:"Norwegian Rune Poem, st. 1; Old English Rune Poem, st. 1"},

  {g:"ᚢ",name:"Uruz",sub:"Aurochs · Primal Strength · sound of U",
   verse:["Slag comes from poor iron;","the reindeer runs hard","over the frozen snow."],
   meaning:"Uruz is the wild ox, the untamed vital force that runs before it's broken. The poem sets slag against the running reindeer: raw material that failed the forge, and raw power that endures the hard ground. This is strength before it's shaped, health and drive in their rough form. Uruz doesn't ask you to be refined today. It asks you to be strong, to move over hard ground under your own power, to trust the vitality that was in you before anyone tried to smooth it down. The unbroken thing has its own wisdom.",source:"Norwegian Rune Poem, st. 2; Old English Rune Poem, st. 2"},

  {g:"ᚦ",name:"Thurisaz",sub:"Thurs · the Giant · sound of Th",
   verse:["The thurs brings torment;","few are made glad","by hardship."],
   meaning:"Thurs is the giant, the thorn, the force that breaks resistance. It is the most dangerous rune to hold lightly, and the poem doesn't soften it. Thurisaz is raw reactive power, the striking force, the thorn that defends and the thorn that wounds. It cuts both ways and it doesn't care which. Today it asks for care in how you meet resistance. There is a force available to you that breaks through obstacles, but it breaks other things too. Use it deliberately, or not at all. The thorn defends the blackthorn — and draws blood from the hand that grips it wrong.",source:"Norwegian Rune Poem, st. 3; Old Icelandic Rune Poem, st. 3"},

  {g:"ᚨ",name:"Ansuz",sub:"the God · Breath · sound of A",
   verse:["The god is the way of most journeys,","the mouth of speech,","the breath that carries the word."],
   meaning:"Ansuz is Odin's rune: breath, speech, the sacred word that shapes what it names. It is the power of communication and the force behind inspiration, the message that arrives from beyond the ordinary mind. Where Fehu asks about wealth and Uruz about strength, Ansuz asks about voice. What are you saying, and what is being said to you? Today, pay attention to words — the ones you speak, the ones you withhold, and the ones that seem to arrive unbidden. The breath carries the word, and the word carries power. Choose it well.",source:"Norwegian Rune Poem, st. 4; Old English Rune Poem, st. 4"},

  {g:"ᚱ",name:"Raidho",sub:"the Ride · Journey · sound of R",
   verse:["Riding is worst for horses;","Reginn forged","the finest sword."],
   meaning:"Raidho is the ride, the journey, right motion and rhythm. The poem holds two truths: the road is hard on the one who travels it, and great things are forged along the way. This is movement with purpose, the difference between wandering and traveling. Raidho governs the path taken deliberately, the wheel that turns in its proper time. Today it asks whether your motion has direction. Not speed, direction. The horse tires on the long road, but the journey shapes the traveler, and the right road is worth the wear it costs you.",source:"Norwegian Rune Poem, st. 5; Old English Rune Poem, st. 5"},

  {g:"ᚲ",name:"Kenaz",sub:"the Torch · Fire of Craft · sound of K",
   verse:["The torch is known by its flame;","it reveals what the dark had hidden,","and warms the hand that keeps it."],
   meaning:"Kenaz is the controlled fire — the torch, the forge-flame, the light of craft and revelation. Unlike wildfire, this is fire held and directed, the heat that shapes iron and the light that shows the hidden thing. It is knowledge won through making, skill earned at the anvil. Today Kenaz asks what you're forging and what you're willing to see. The torch reveals, and not everything it shows is comfortable. But the same flame that exposes also warms, and the same heat that burns also shapes. Tend your fire. It is how the raw becomes the made.",source:"Norwegian Rune Poem, st. 6; Old English Rune Poem, st. 6"},

  {g:"ᚷ",name:"Gebo",sub:"the Gift · Exchange · sound of G",
   verse:["A gift calls for a gift;","the bond is made","in the giving and the taking."],
   meaning:"Gebo is the gift, and the sacred law of exchange that runs beneath all relationship. A gift given creates a bond; a gift received carries an obligation. This is not transaction but reciprocity, the web of giving that ties people, and people to the gods. Gebo has no reversed form — a gift is a gift from either side. Today it asks about your exchanges. What have you been given, and what have you offered? Balance matters here. To take without giving starves the bond; to give without receiving exhausts it. The thread holds when it runs both ways.",source:"Old English Rune Poem, st. 7"},

  {g:"ᚹ",name:"Wunjo",sub:"Joy · Harmony · sound of W",
   verse:["Joy comes to the one","who knows few troubles,","and holds pain and sorrow at bay."],
   meaning:"Wunjo is joy — not the giddy kind, but the deep contentment of things in their right place. It is harmony, belonging, the gladness of kin gathered and work well done. The poem is honest that this joy comes to those free of grief, which makes it something to protect rather than assume. Wunjo closes the first aett, the reward at the end of the row's early labors. Today it asks where your genuine gladness lives, and whether you're tending it. Joy is not the absence of hardship. It's what you build in the clearings between.",source:"Old English Rune Poem, st. 8"},

  {g:"ᚺ",name:"Hagalaz",sub:"Hail · Disruption · sound of H",
   verse:["Hail is the coldest of grains;","it falls hard from the sky,","then melts to water and feeds the ground."],
   meaning:"Hagalaz is hail: the sudden destructive force that arrives from above and cannot be argued with. It is the storm that flattens the crop, the crisis that breaks the plan. But the poem holds the turn — hail is frozen water, and when it melts it feeds the very ground it battered. This is disruption that transforms, the necessary destruction that clears the way. Today Hagalaz asks how you meet what you can't control. The hail will fall. You don't choose that. But frozen sky becomes spring water, and what breaks you open can also become what feeds what comes next.",source:"Norwegian Rune Poem, st. 7; Old English Rune Poem, st. 9"},

  {g:"ᚾ",name:"Naudhiz",sub:"Need · Necessity · sound of N",
   verse:["Need makes a hard master;","yet the naked are warmed by the fire","that necessity kindles."],
   meaning:"Naudhiz is need — constraint, hardship, the friction of necessity. It is the fetter that binds and the fire kindled by rubbing wood in the cold. The poem names both: need is a hard master, and need is what teaches the freezing to make fire. This is the rune of lack that forces resourcefulness, the pressure that reveals what you're capable of. Today Naudhiz asks what your constraints are teaching you. Nobody chooses need. But the need-fire is real — the strength that only appears when there's no other way, the warmth kindled precisely because you had to.",source:"Norwegian Rune Poem, st. 8; Old English Rune Poem, st. 10"},

  {g:"ᛁ",name:"Isa",sub:"Ice · Stillness · sound of I",
   verse:["Ice we call the broad bridge;","the blind must be led across it,","for it hides the deep water below."],
   meaning:"Isa is ice: stillness, stasis, the great pause. It is the frozen river that becomes a bridge, beautiful and treacherous, hiding moving water beneath its stillness. This is the place of silence where the sacred is found, and also the trap of things frozen too long. Isa asks for patience and for caution both. Today, something may need to stop moving so you can see it clearly. But watch the ice — what looks solid may be thin, and what looks like rest may be avoidance. Stillness is a source and a hazard. Know which one you're standing on.",source:"Norwegian Rune Poem, st. 9; Old English Rune Poem, st. 11"},

  {g:"ᛃ",name:"Jera",sub:"Harvest · the Year · sound of J/Y",
   verse:["Harvest is the joy of all,","when the good year comes","and the earth gives up her gift."],
   meaning:"Jera is the harvest, the turning year, the reward that comes only in its proper season. It is the cycle completed — seed to growth to gathering — and the patience that cycle demands. Nothing about Jera is sudden; it is the rune of right timing, of effort that pays off when the time is ripe and not before. Today Jera asks what you've planted and whether you're letting it ripen. The harvest can't be rushed, and the good year comes to those who did the early work and then waited. What you tend now, you gather later. Both parts are the work.",source:"Norwegian Rune Poem, st. 10; Old English Rune Poem, st. 12"},

  {g:"ᛇ",name:"Eihwaz",sub:"Yew · the World-Tree · sound of Ei",
   verse:["The yew stands green through winter;","its roots run deep,","its fire burns slow and long."],
   meaning:"Eihwaz is the yew — the evergreen that endures winter, the wood of the bow, the axis that connects the worlds. It is death and endurance held together: the yew is poisonous and eternal, standing green when all else is bare. This is the rune of deep connection between realms, the spine of the World-Tree, the truth that runs through the core. Today Eihwaz asks what endures in you when everything else falls away. The yew doesn't drop its needles. Deep roots, slow fire, the green that outlasts the cold. Find the thing in you that winter can't touch, and stand on it.",source:"Old English Rune Poem, st. 13"},

  {g:"ᛈ",name:"Perthro",sub:"the Lot-Cup · Fate · sound of P",
   verse:["The lot-cup is play and laughter","among the bold,","where fate is cast and read."],
   meaning:"Perthro is the dice-cup, the vessel of chance and fate, the mystery of what is hidden and what is drawn. It is the rune of wyrd itself — the woven layers of what was, what is, and what becomes — and of divination, the reading of patterns not yet visible. Perthro governs the unknown and the unfolding. Today it asks how you hold uncertainty. The lot is cast in play among the bold, not in dread. What comes is partly chance and partly the pattern you've already woven. You can't see the whole board. You can choose how you meet what's dealt.",source:"Old English Rune Poem, st. 14"},

  {g:"ᛉ",name:"Algiz",sub:"Elk · Protection · sound of Z",
   verse:["The elk-sedge grows in the marsh;","it wounds the hand","that grasps it wrongly."],
   meaning:"Algiz is the ward — the elk, the raised hand, the sedge-grass that cuts the careless grip. It is protection, the shield-rune, the connection between the human and the divine that guards the one who reaches upward. This is defense that is also reaching, the boundary that is also a bridge to higher things. Today Algiz asks what you're protecting and how you're standing. The sedge defends itself by its own nature — not by attacking, but by being what it is. Raise your guard, root your ground, reach toward what's higher than you. Protection is a posture, not a wall.",source:"Old English Rune Poem, st. 15"},

  {g:"ᛊ",name:"Sowilo",sub:"the Sun · Victory · sound of S",
   verse:["The sun is the light of the land;","I bow before the holy power","that never fails to return."],
   meaning:"Sowilo is the sun — the wheel of light, the force that guides and does not fail. It is victory, wholeness, the solar power that burns through fog and shows the way. Where Isa freezes and Hagalaz destroys, Sowilo warms and reveals. It is the rune of the goal reached and the light that never truly dies, only sets to rise again. Today Sowilo asks what you're steering toward. The sun keeps its course without hurry and without doubt, and it returns every time. Find your own true north and hold it. The light comes back. It always comes back.",source:"Norwegian Rune Poem, st. 11; Old English Rune Poem, st. 16"},

  {g:"ᛏ",name:"Tiwaz",sub:"Tyr · Justice · sound of T",
   verse:["Tyr is the one-handed god;","he keeps his oath","though it cost him his hand."],
   meaning:"Tiwaz is Tyr, the sky-god of justice and sacrifice — the one who placed his hand in the wolf's mouth so the binding would hold, and lost it keeping his word. It is the rune of law, honor, the price of doing what's right. Tiwaz points upward like a spear: direct, disciplined, willing to pay. Today it asks what you stand for and what you'd sacrifice to keep faith with it. Tyr knew the cost and paid it anyway. That's the rune — not comfort, but integrity. The oath kept though it costs you. The right thing done though it takes something from you.",source:"Norwegian Rune Poem, st. 12; Old English Rune Poem, st. 17"},

  {g:"ᛒ",name:"Berkano",sub:"Birch · Growth · sound of B",
   verse:["The birch is greenest of leaves;","it grows without seed","and quietly renews the world."],
   meaning:"Berkano is the birch — the mother-tree, the rune of growth, birth, and quiet renewal. The birch is the first tree to return to cleared ground, greening without apparent seed, healing the land by simply growing. This is gentle generative power, the nurturing force that tends what is coming into being. Today Berkano asks what you're bringing to life, and whether you're giving it room to grow. Not all growth is loud. The birch doesn't force — it renews, softly and steadily, and the forest follows. Tend the new thing. Protect what's just beginning. Growth is its own kind of strength.",source:"Norwegian Rune Poem, st. 13; Old English Rune Poem, st. 18"},

  {g:"ᛖ",name:"Ehwaz",sub:"the Horse · Partnership · sound of E",
   verse:["The horse is the joy of nobles,","proud on its hooves,","trusted where warriors meet."],
   meaning:"Ehwaz is the horse — but more than the animal, it is the bond between horse and rider, the trust that lets two move as one. It is partnership, loyalty, the harmony of a team that carries each other. Where Raidho is the journey, Ehwaz is the one you journey with. Today it asks about your partnerships — the people and forces you move alongside, and whether the trust between you runs true. The horse and rider are only powerful together. Neither alone crosses the hard country. Find your true companions, and be one. What carries you deserves your faith.",source:"Old English Rune Poem, st. 19"},

  {g:"ᛗ",name:"Mannaz",sub:"the Human · Self · sound of M",
   verse:["Man is the joy of man,","and the increase of the earth;","yet each must fail the other in the end."],
   meaning:"Mannaz is the human — humanity, the self, the mind that knows itself and the community that shapes it. The poem holds a hard truth: people are the delight of people, and people fail one another, both true at once. This is the rune of what it means to be a person among persons, mortal and reflective and bound to others. Today Mannaz asks you to see yourself clearly, neither inflated nor diminished. You are one of many, made by your kin and destined to part from them. Know your own measure. The examined self is the beginning of every real work.",source:"Norwegian Rune Poem, st. 14; Old English Rune Poem, st. 20"},

  {g:"ᛚ",name:"Laguz",sub:"Water · the Deep · sound of L",
   verse:["Water is the sea the ship crosses,","wide and unknowable,","carrying life in its dark."],
   meaning:"Laguz is water — the sea, the deep, the flow of the unconscious and the intuitive. It is life-giving and unknowable, the element that carries and the element that drowns. This is the rune of instinct, dreams, the currents beneath the surface mind. It rewards those who trust the flow and warns those who fight it. Today Laguz asks what your intuition is telling you beneath the noise of thought. The deep water holds things the daylight mind can't reach. Don't force the current. Feel where it's already moving, and let it carry you toward what you couldn't have reasoned your way to.",source:"Norwegian Rune Poem, st. 15; Old English Rune Poem, st. 21"},

  {g:"ᛜ",name:"Ingwaz",sub:"Ing · the Seed · sound of Ng",
   verse:["Ing was first seen among men,","then departed over the waves;","the seed waits in the dark for its season."],
   meaning:"Ingwaz is Ing, the earth-god, the seed held in the dark until its time. It is potential gathered and stored, energy sealed away to be released when the season turns. Unlike Jera's completed cycle, Ingwaz is the pregnant pause before — the gestation, the held breath, the work done quietly underground. Today Ingwaz asks what you're incubating. Not everything should be visible yet. Some things need the dark to gather force, the sealed season before the sprouting. Trust what's growing where it can't be seen. The seed doesn't rush. It waits, whole and ready, for the ground to be right.",source:"Old English Rune Poem, st. 22"},

  {g:"ᛞ",name:"Dagaz",sub:"Day · Breakthrough · sound of D",
   verse:["Day is the lord's sending,","the light beloved of all,","hope and comfort to rich and poor alike."],
   meaning:"Dagaz is day — the dawn, the breakthrough, the moment darkness turns to light. It is awakening, the sudden clarity that changes everything, the threshold between one state and the next. Dagaz sits at the edge where opposites meet: the balance-point of dawn and dusk, the transformation that can't be undone once it's happened. Today Dagaz asks what's ready to break through. Some changes come gradually, and some arrive all at once, like daybreak — sudden, total, and beloved. If something in you is turning toward the light, let it. The day comes for everyone. Yours may be arriving now.",source:"Old English Rune Poem, st. 23"},

  {g:"ᛟ",name:"Othala",sub:"Ancestral Land · Legacy · sound of O",
   verse:["The homeland is dear to every man;","there he holds his own,","and stands on the ground of his kin."],
   meaning:"Othala is the ancestral land — inheritance, home, the ground your kin held before you and the legacy you keep. It is the rune of belonging, of what is truly yours by blood and by bond, and of the responsibility that comes with holding it. Othala closes the row: the journey returns to the hearth. Today it asks what you've inherited and what you'll pass on. Not just land, but values, craft, the tended ground of who you are. You stand on what came before you. Hold it well, add to it, and leave it stronger than you found it. That is the whole work, in the end.",source:"Old English Rune Poem, st. 24"}
];
const DEITIES = [
  {name:"Odin",epithet:"the Allfather, the Wanderer",domain:"Wisdom · War · the Runes · Poetry",
   blurb:"Chief of the Æsir and the restless seeker of knowledge. Odin hung nine nights on the World-Tree, pierced by his own spear, to win the runes from the deep. He trades an eye for wisdom, wanders the worlds in a grey cloak, and gathers the slain to Valhalla. He is the god who pays for what he learns, and always pays willingly.",
   brings:"insight won through sacrifice, the courage to seek what's hidden, mastery of word and rune",
   source:"Hávamál 138-145, Poetic Edda"},

  {name:"Frigg",epithet:"Queen of Asgard",domain:"Foresight · Marriage · the Hearth · Fate",
   blurb:"Wife of Odin and foremost of the goddesses. Frigg knows the fate of all things but speaks it to none, holding her knowing in silence. She is the weaver at the loom of the household and the protector of what is built and kept. Her grief for Baldr is the grief of a mother who saw what was coming and could not turn it.",
   brings:"quiet foresight, the strength of the keeper, protection of home and bond",
   source:"Gylfaginning, ch. 35 & 49, Snorri's Edda"},

  {name:"Freya",epithet:"Lady of the Vanir",domain:"Love · Seidr · War · the Slain",
   blurb:"Goddess of love and magic, and no soft figure. Freya rides a chariot drawn by cats, wears the necklace Brísingamen, and takes half the battle-slain to her hall Fólkvangr, Odin taking the rest. She is the mistress of Seidr, the fate-shaping magic, and taught it even to the gods. Desire and death, magic and war, all held in one hand.",
   brings:"the power of Seidr, the fierceness beneath beauty, sovereignty over your own desire",
   source:"Grímnismál 14; Gylfaginning, ch. 24"},

  {name:"Thor",epithet:"the Thunderer",domain:"Storm · Protection · Strength · the Common Folk",
   blurb:"Defender of gods and humankind, wielder of the hammer Mjölnir. Thor rides the storm in a goat-drawn chariot and stands between the ordered world and the giants who would unmake it. He is the least subtle and the most beloved of the gods, the one the working people called on. Where Odin schemes, Thor simply stands his ground and swings.",
   brings:"protection, honest strength, the will to guard what matters without apology",
   source:"Gylfaginning, ch. 21; Thrymskvida, Poetic Edda"},

  {name:"Tyr",epithet:"the One-Handed",domain:"Justice · Oath · Sacrifice · Right Order",
   blurb:"God of law and honorable war. When the gods bound the wolf Fenrir, only Tyr would place his hand in the beast's mouth as a pledge of good faith, and only Tyr lost it when the binding held. He is the god who knows the cost of the oath and pays it anyway. Justice, to Tyr, is not comfort. It is the thing you keep even when it takes from you.",
   brings:"integrity, the courage to keep your word, sacrifice for what is right",
   source:"Gylfaginning, ch. 25 & 34, Snorri's Edda"},

  {name:"Hel",epithet:"Keeper of the Dead",domain:"Death · the Underworld · Boundary · Rest",
   blurb:"Daughter of Loki and ruler of the realm that bears her name, where those who die of sickness and age come to dwell. Half her face is living, half is death. She is not evil and not to be feared for its own sake; she is the keeper of the boundary, the one who receives what has finished its time. To honor Hel is to make peace with endings.",
   brings:"acceptance of what has ended, respect for the boundary, peace with mortality",
   source:"Gylfaginning, ch. 34 & 49, Snorri's Edda"},

  {name:"Loki",epithet:"the Sky-Traveler, the Trickster",domain:"Change · Cunning · Fire · Disruption",
   blurb:"Blood-brother to Odin and the sharpest edge among the gods. Loki is neither purely enemy nor friend; he solves the gods' problems and causes them in equal measure, and his cleverness both saves and dooms. He is the necessary disruption, the one who will not let things stay settled. Handle him knowing what he is: change itself, which serves no one's comfort.",
   brings:"adaptability, the wit to find another way, the reminder that nothing stays fixed",
   source:"Gylfaginning, ch. 33-35; Lokasenna, Poetic Edda"},

  {name:"Freyr",epithet:"Lord of the Vanir",domain:"Fertility · Harvest · Peace · Prosperity",
   blurb:"Brother of Freya and god of the fruitful earth. Freyr governs the rain and the sun on the fields, the peace in which things grow, and the prosperity of a settled people. He gave away his sword for love and will face Ragnarök without it. He is the god of plenty and of the sacrifice plenty sometimes asks, generous, life-giving, and unguarded by choice.",
   brings:"abundance, fertility of land and life, the peace that lets things flourish",
   source:"Gylfaginning, ch. 24; Skírnismál, Poetic Edda"},

  {name:"Njord",epithet:"the Sea-Father",domain:"Sea · Wind · Wealth · Safe Passage",
   blurb:"God of the sea, the wind, and the wealth they carry. Njord of the Vanir governs the coast where water meets land, the fishing and the trade, the safe return of the ship. His marriage to the mountain-goddess Skadi could not hold; he could not bear her peaks and she could not bear his shore. He is the god of the tide's give and take.",
   brings:"safe passage, provision, the wealth that comes and goes like the tide",
   source:"Gylfaginning, ch. 23, Snorri's Edda"},

  {name:"Skadi",epithet:"the Snowshoe Goddess",domain:"Winter · Mountains · the Hunt · Independence",
   blurb:"Giantess and goddess of the high cold places, the ski and the bow. Skadi came to Asgard armed, demanding recompense for her slain father, and won a place among the gods on her own terms. When her marriage to Njord failed, she returned to her mountains rather than soften. She is the goddess of the solitary height, the hunt, and the will that will not be bent.",
   brings:"self-possession, the strength of solitude, the resolve to keep your own ground",
   source:"Gylfaginning, ch. 23; Skáldskaparmál, ch. 1"},

  {name:"Heimdall",epithet:"the White God, the Watcher",domain:"Vigilance · Boundary · the Bridge · Beginnings",
   blurb:"Guardian of Bifröst, the bridge between worlds. Heimdall needs less sleep than a bird, sees to the ends of the earth, and hears the grass grow and the wool on the sheep. He holds the horn Gjallarhorn, which will sound at the end of days. He is the sentinel who never fails in his watch, the keeper of the threshold, the one who marks where one world ends and another begins.",
   brings:"vigilance, clear perception, the guarding of thresholds and beginnings",
   source:"Gylfaginning, ch. 27; Grímnismál 13"},

  {name:"Baldr",epithet:"the Shining One",domain:"Light · Purity · Grief · the Turning of Fate",
   blurb:"The bright and beloved god, so fair that light shone from him. His mother Frigg drew an oath of safety from all things save one, the mistletoe, and by that one thing he fell, guided by Loki's malice. His death is the first shadow of Ragnarök and the great grief of the gods. Yet it is said he returns after the world's ending, to walk the new green earth.",
   brings:"the value of what is bright and fragile, grief honored rather than denied, hope past the ending",
   source:"Gylfaginning, ch. 49, Snorri's Edda"},

  {name:"Nerthus",epithet:"Mother Earth",domain:"Earth · Fertility · Peace · the Sacred Wagon",
   blurb:"An ancient earth-goddess whose worship Tacitus recorded among the old tribes long before the sagas. Her image rode in a covered wagon through the land, and where she passed, weapons were laid down and peace held until she returned to her grove. She is the earth herself, older than the written gods, the peace of the land and the mystery kept behind the veil.",
   brings:"deep peace, connection to the living land, reverence for what came before",
   source:"Tacitus, Germania, ch. 40"},

  {name:"Jörð",epithet:"the Earth",domain:"Land · Ground · the Body of the World",
   blurb:"The earth given form and name, mother of Thor. Jörð is the ground underfoot made a goddess, the raw land before it is farmed or bounded, the body of the world itself. She is less storied than the high gods because she is everywhere and always, the thing they all stand upon. To honor Jörð is to honor the ground you walk and the land that holds you up.",
   brings:"grounding, belonging to place, the steadiness of the earth beneath you",
   source:"Gylfaginning, ch. 9 & 36, Snorri's Edda"},

  {name:"Rán",epithet:"the Sea-Mother",domain:"the Deep · Drowning · What the Sea Keeps",
   blurb:"Goddess of the sea's depths, who draws the drowned down into her hall with her net. Rán is not cruel so much as absolute; the sea takes what it takes, and she is the keeper of it. Sailors carried gold to pay her should they fall. She is the deep water and its danger, the beauty and the taking, the reminder that some powers are not to be bargained with lightly.",
   brings:"respect for what is deep and dangerous, acceptance of what cannot be controlled",
   source:"Skáldskaparmál, ch. 25; Helgakvida Hundingsbana I"},

  {name:"Vár",epithet:"Goddess of Oaths",domain:"Vows · Agreements · Faith Kept",
   blurb:"A goddess of the Æsir who hears the oaths and private agreements made between people, and holds them to account. Vár witnesses the vow and marks its breaking. She is invoked when promises are made, the quiet power that gives weight to a given word. In a tradition where the oath was sacred, Vár is the one who remembers what was sworn.",
   brings:"the weight of the promise, faithfulness, the power of a word truly given",
   source:"Gylfaginning, ch. 35, Snorri's Edda"},

  {name:"Idunn",epithet:"Keeper of the Apples",domain:"Youth · Renewal · Vitality · Safekeeping",
   blurb:"Guardian of the apples that keep the gods young. When Idunn was stolen away by the giant Thjazi, the gods began at once to age and grey, and only her return restored them. She is the keeper of renewal itself, the vitality that must be tended or lost. Her story is a quiet warning: the source of life's freshness is precious, and never to be taken for granted.",
   brings:"renewal, the tending of your own vitality, the freshness that must be protected",
   source:"Skáldskaparmál, ch. 1, Snorri's Edda"},

  {name:"Bragi",epithet:"the Skald of the Gods",domain:"Poetry · Eloquence · Song · Memory",
   blurb:"God of poetry and the finest of skalds, with runes carved upon his tongue. Bragi welcomes the honored dead to Valhalla with words worthy of them. He is the power of poetry to shape memory and move the heart, the craft of language raised to the sacred. In a culture that kept its history in verse, the poet's art was no small thing, and Bragi is its god.",
   brings:"eloquence, the craft of words, the power of song to carry what matters",
   source:"Skáldskaparmál, ch. 1; Gylfaginning, ch. 26"},

  {name:"Ullr",epithet:"the Glorious",domain:"the Hunt · Winter · the Bow · Single Combat",
   blurb:"God of the bow, the ski, and the winter wild, called on in single combat. Ullr is little storied but old and deep, a god of the hunt and the cold months, of skill and solitary prowess. Oaths were sworn upon his ring. He is the quiet master of the winter craft, the one who moves sure-footed over snow and strikes true from a distance.",
   brings:"skill, self-reliance, sure movement through hard seasons",
   source:"Gylfaginning, ch. 31; Grímnismál 5"},

  {name:"Sif",epithet:"the Golden-Haired",domain:"Harvest · the Home · Loyalty · Grain",
   blurb:"Wife of Thor, famed for her hair of gold, which Loki once shorn away and then replaced with true-spun gold that grew as living hair. Her golden hair is read as the ripe grain of the fields. Sif is the goddess of the harvest and the faithful hearth, the golden abundance of the settled home and the loyalty that keeps it whole.",
   brings:"faithfulness, the golden harvest, the quiet strength of the kept home",
   source:"Skáldskaparmál, ch. 35, Snorri's Edda"},

  {name:"Surtr",epithet:"the Fire Giant",domain:"Fire · Ending · Muspelheim · the Last Flame",
   blurb:"The giant of Muspelheim who guards the realm of fire with a flaming sword, and who at Ragnarök will ride out to burn the world clean. Surtr is not a god but a primal force, elder than the ordered world and present at its end. He is fire itself, the ending that clears the ground for what comes after. To name him is to name the flame that both destroys and makes new.",
   brings:"the power of endings, the fire that clears, respect for forces older than the gods",
   source:"Völuspá 52; Gylfaginning, ch. 4 & 51"},

  {name:"Vidar",epithet:"the Silent God",domain:"Vengeance · Endurance · What Survives",
   blurb:"Son of Odin, second in strength only to Thor, and the most silent of the gods. At Ragnarök, when the wolf Fenrir devours Odin, it is Vidar who avenges him and tears the wolf apart. And Vidar is among the few who survive the world's ending to walk the earth renewed. He is the quiet power that endures, the one who says little and outlasts everything.",
   brings:"endurance, quiet resolve, the strength that survives the ending",
   source:"Gylfaginning, ch. 51; Vafthrúdnismál 53"}
];
