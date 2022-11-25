import React from 'react';
import { useEffect } from 'react';

export default function Select(props) {

    const planets = [
        {
        "id": "uranus",
        "englishName": "Uranus"
        },
        {
        "id": "neptune",
        "englishName": "Neptune"
        },
        {
        "id": "jupiter",
        "englishName": "Jupiter"
        },
        {
        "id": "mars",
        "englishName": "Mars"
        },
        {
        "id": "mercure",
        "englishName": "Mercury"
        },
        {
        "id": "saturne",
        "englishName": "Saturn"
        },
        {
        "id": "terre",
        "englishName": "Earth"
        },
        {
        "id": "venus",
        "englishName": "Venus"
        }
    ];
    const dwarfs = [
        {
        "id": "eris",
        "englishName": "136199 Eris"
        },
        {
        "id": "pluton",
        "englishName": "Pluto"
        },
        {
        "id": "haumea",
        "englishName": "136108 Haumea"
        },
        {
        "id": "makemake",
        "englishName": "136472 Makemake"
        }
    ];
    const moons = [
        {
        "id": "lune",
        "englishName": "Moon"
        },
        {
        "id": "phobos",
        "englishName": "Phobos"
        },
        {
        "id": "deimos",
        "englishName": "Deimos"
        },
        {
        "id": "io",
        "englishName": "Io"
        },
        {
        "id": "europe",
        "englishName": "Europa"
        },
        {
        "id": "ganymede",
        "englishName": "Ganymede"
        },
        {
        "id": "callisto",
        "englishName": "Callisto"
        },
        {
        "id": "amalthee",
        "englishName": "Amalthea"
        },
        {
        "id": "himalia",
        "englishName": "Himalia"
        },
        {
        "id": "elara",
        "englishName": "Elara"
        },
        {
        "id": "pasiphae",
        "englishName": "Pasiphae"
        },
        {
        "id": "sinope",
        "englishName": "Sinope"
        },
        {
        "id": "lysithea",
        "englishName": "Lysithea"
        },
        {
        "id": "carme",
        "englishName": "Carme"
        },
        {
        "id": "ananke",
        "englishName": "Ananke"
        },
        {
        "id": "leda",
        "englishName": "Leda"
        },
        {
        "id": "thebe",
        "englishName": "Thebe"
        },
        {
        "id": "adrastee",
        "englishName": "Adrastea"
        },
        {
        "id": "metis",
        "englishName": "Metis"
        },
        {
        "id": "callirrhoe",
        "englishName": "Callirrhoe"
        },
        {
        "id": "themisto",
        "englishName": "Themisto"
        },
        {
        "id": "megaclite",
        "englishName": "Megaclite"
        },
        {
        "id": "taygete",
        "englishName": "Taygete"
        },
        {
        "id": "chaldene",
        "englishName": "Chaldene"
        },
        {
        "id": "harpalyke",
        "englishName": "Harpalyke"
        },
        {
        "id": "kalyke",
        "englishName": "Kalyke"
        },
        {
        "id": "iocaste",
        "englishName": "Iocaste"
        },
        {
        "id": "erinome",
        "englishName": "Erinome"
        },
        {
        "id": "isonoe",
        "englishName": "Isonoe"
        },
        {
        "id": "praxidike",
        "englishName": "Praxidike"
        },
        {
        "id": "autonoe",
        "englishName": "Autonoe"
        },
        {
        "id": "thyone",
        "englishName": "Thyone"
        },
        {
        "id": "hermippe",
        "englishName": "Hermippe"
        },
        {
        "id": "aitne",
        "englishName": "Aitne"
        },
        {
        "id": "eurydome",
        "englishName": "Eurydome"
        },
        {
        "id": "euanthe",
        "englishName": "Euanthe"
        },
        {
        "id": "euporie",
        "englishName": "Euporie"
        },
        {
        "id": "orthosie",
        "englishName": "Orthosie"
        },
        {
        "id": "sponde",
        "englishName": "Sponde"
        },
        {
        "id": "cale",
        "englishName": "Kale"
        },
        {
        "id": "pasithee",
        "englishName": "Pasithee"
        },
        {
        "id": "hegemone",
        "englishName": "Hegemone"
        },
        {
        "id": "mneme",
        "englishName": "Mneme"
        },
        {
        "id": "aoede",
        "englishName": "Aoede"
        },
        {
        "id": "thelxinoe",
        "englishName": "Thelxinoe"
        },
        {
        "id": "arche",
        "englishName": "Arche"
        },
        {
        "id": "callichore",
        "englishName": "Kallichore"
        },
        {
        "id": "helice",
        "englishName": "Helike"
        },
        {
        "id": "carpo",
        "englishName": "Carpo"
        },
        {
        "id": "eukelade",
        "englishName": "Eukelade"
        },
        {
        "id": "cyllene",
        "englishName": "Cyllene"
        },
        {
        "id": "core",
        "englishName": "Kore"
        },
        {
        "id": "herse",
        "englishName": "Herse"
        },
        {
        "id": "s2003j2",
        "englishName": "S/2003 J 2"
        },
        {
        "id": "eupheme",
        "englishName": "Eupheme"
        },
        {
        "id": "s2003j4",
        "englishName": "S/2003 J 4"
        },
        {
        "id": "eirene",
        "englishName": "Eirene"
        },
        {
        "id": "s2003j9",
        "englishName": "S/2003 J 9"
        },
        {
        "id": "s2003j10",
        "englishName": "S/2003 J 10"
        },
        {
        "id": "s2003j12",
        "englishName": "S/2003 J 12"
        },
        {
        "id": "philophrosyne",
        "englishName": "Philophrosyne"
        },
        {
        "id": "s2003j16",
        "englishName": "S/2003 J 16"
        },
        {
        "id": "s2003j18",
        "englishName": "S/2003 J 18"
        },
        {
        "id": "s2003j19",
        "englishName": "S/2003 J 19"
        },
        {
        "id": "s2003j23",
        "englishName": "S/2003 J 23"
        },
        {
        "id": "mimas",
        "englishName": "Mimas"
        },
        {
        "id": "encelade",
        "englishName": "Enceladus"
        },
        {
        "id": "tethys",
        "englishName": "Tethys"
        },
        {
        "id": "dione",
        "englishName": "Dione"
        },
        {
        "id": "rhea",
        "englishName": "Rhea"
        },
        {
        "id": "titan",
        "englishName": "Titan"
        },
        {
        "id": "hyperion",
        "englishName": "Hyperion"
        },
        {
        "id": "japet",
        "englishName": "Iapetus"
        },
        {
        "id": "phoebe",
        "englishName": "Phoebe"
        },
        {
        "id": "janus",
        "englishName": "Janus"
        },
        {
        "id": "epimethee",
        "englishName": "Epimetheus"
        },
        {
        "id": "helene",
        "englishName": "Helene"
        },
        {
        "id": "telesto",
        "englishName": "Telesto"
        },
        {
        "id": "calypso",
        "englishName": "Calypso"
        },
        {
        "id": "atlas",
        "englishName": "Atlas"
        },
        {
        "id": "promethee",
        "englishName": "Prometheus"
        },
        {
        "id": "pandore",
        "englishName": "Pandora"
        },
        {
        "id": "pan",
        "englishName": "Pan"
        },
        {
        "id": "ymir",
        "englishName": "Ymir"
        },
        {
        "id": "paaliaq",
        "englishName": "Paaliaq"
        },
        {
        "id": "tarvos",
        "englishName": "Tarvos"
        },
        {
        "id": "ijiraq",
        "englishName": "Ijiraq"
        },
        {
        "id": "suttungr",
        "englishName": "Suttungr"
        },
        {
        "id": "kiviuq",
        "englishName": "Kiviuq"
        },
        {
        "id": "mundilfari",
        "englishName": "Mundilfari"
        },
        {
        "id": "albiorix",
        "englishName": "Albiorix"
        },
        {
        "id": "skathi",
        "englishName": "Skathi"
        },
        {
        "id": "erriapo",
        "englishName": "Erriapus"
        },
        {
        "id": "siarnaq",
        "englishName": "Siarnaq"
        },
        {
        "id": "thrymr",
        "englishName": "Thrymr"
        },
        {
        "id": "narvi",
        "englishName": "Narvi"
        },
        {
        "id": "methone",
        "englishName": "Methone"
        },
        {
        "id": "pallene",
        "englishName": "Pallene"
        },
        {
        "id": "pollux",
        "englishName": "Polydeuces"
        },
        {
        "id": "daphnis",
        "englishName": "Daphnis"
        },
        {
        "id": "aegir",
        "englishName": "Aegir"
        },
        {
        "id": "bebhionn",
        "englishName": "Bebhionn"
        },
        {
        "id": "bergelmir",
        "englishName": "Bergelmir"
        },
        {
        "id": "bestla",
        "englishName": "Bestla"
        },
        {
        "id": "farbauti",
        "englishName": "Farbauti"
        },
        {
        "id": "fenrir",
        "englishName": "Fenrir"
        },
        {
        "id": "fornjot",
        "englishName": "Fornjot"
        },
        {
        "id": "hati",
        "englishName": "Hati"
        },
        {
        "id": "hyrrokkin",
        "englishName": "Hyrrokkin"
        },
        {
        "id": "kari",
        "englishName": "Kari"
        },
        {
        "id": "loge",
        "englishName": "Loge"
        },
        {
        "id": "skoll",
        "englishName": "Skoll"
        },
        {
        "id": "surtur",
        "englishName": "Surtur"
        },
        {
        "id": "anthe",
        "englishName": "Anthe"
        },
        {
        "id": "jarnsaxa",
        "englishName": "Jarnsaxa"
        },
        {
        "id": "greip",
        "englishName": "Greip"
        },
        {
        "id": "tarqeq",
        "englishName": "Tarqeq"
        },
        {
        "id": "egeon",
        "englishName": "Aegaeon"
        },
        {
        "id": "s2004s7",
        "englishName": "S/2004 S 7"
        },
        {
        "id": "s2004s12",
        "englishName": "S/2004 S 12"
        },
        {
        "id": "s2004s13",
        "englishName": "S/2004 S 13"
        },
        {
        "id": "s2004s17",
        "englishName": "S/2004 S 17"
        },
        {
        "id": "s2006s1",
        "englishName": "S/2006 S 1"
        },
        {
        "id": "s2006s3",
        "englishName": "S/2006 S 3"
        },
        {
        "id": "s2007s2",
        "englishName": "S/2007 S 2"
        },
        {
        "id": "s2007s3",
        "englishName": "S/2007 S 3"
        },
        {
        "id": "s2009s1",
        "englishName": "S/2009 S 1"
        },
        {
        "id": "ariel",
        "englishName": "Ariel"
        },
        {
        "id": "umbriel",
        "englishName": "Umbriel"
        },
        {
        "id": "titania",
        "englishName": "Titania"
        },
        {
        "id": "oberon",
        "englishName": "Oberon"
        },
        {
        "id": "miranda",
        "englishName": "Miranda"
        },
        {
        "id": "cordelia",
        "englishName": "Cordelia"
        },
        {
        "id": "ophelia",
        "englishName": "Ophelia"
        },
        {
        "id": "bianca",
        "englishName": "Bianca"
        },
        {
        "id": "cressida",
        "englishName": "Cressida"
        },
        {
        "id": "desdemona",
        "englishName": "Desdemona"
        },
        {
        "id": "juliet",
        "englishName": "Juliet"
        },
        {
        "id": "portia",
        "englishName": "Portia"
        },
        {
        "id": "rosalind",
        "englishName": "Rosalind"
        },
        {
        "id": "belinda",
        "englishName": "Belinda"
        },
        {
        "id": "puck",
        "englishName": "Puck"
        },
        {
        "id": "caliban",
        "englishName": "Caliban"
        },
        {
        "id": "sycorax",
        "englishName": "Sycorax"
        },
        {
        "id": "prospero",
        "englishName": "Prospero"
        },
        {
        "id": "setebos",
        "englishName": "Setebos"
        },
        {
        "id": "stephano",
        "englishName": "Stephano"
        },
        {
        "id": "trinculo",
        "englishName": "Trinculo"
        },
        {
        "id": "francisco",
        "englishName": "Francisco"
        },
        {
        "id": "margaret",
        "englishName": "Margaret"
        },
        {
        "id": "ferdinand",
        "englishName": "Ferdinand"
        },
        {
        "id": "perdita",
        "englishName": "Perdita"
        },
        {
        "id": "mab",
        "englishName": "Mab"
        },
        {
        "id": "cupid",
        "englishName": "Cupid"
        },
        {
        "id": "triton",
        "englishName": "Triton"
        },
        {
        "id": "nereide",
        "englishName": "Nereid"
        },
        {
        "id": "naiade",
        "englishName": "Naiad"
        },
        {
        "id": "thalassa",
        "englishName": "Thalassa"
        },
        {
        "id": "despina",
        "englishName": "Despina"
        },
        {
        "id": "galatee",
        "englishName": "Galatea"
        },
        {
        "id": "larissa",
        "englishName": "Larissa"
        },
        {
        "id": "protee",
        "englishName": "Proteus"
        },
        {
        "id": "halimede",
        "englishName": "Halimede"
        },
        {
        "id": "psamathee",
        "englishName": "Psamathe"
        },
        {
        "id": "sao",
        "englishName": "Sao"
        },
        {
        "id": "laomedie",
        "englishName": "Laomedeia"
        },
        {
        "id": "neso",
        "englishName": "Neso"
        },
        {
        "id": "charon",
        "englishName": "Charon"
        },
        {
        "id": "nix",
        "englishName": "Nix"
        },
        {
        "id": "hydra",
        "englishName": "Hydra"
        },
        {
        "id": "namaka",
        "englishName": "Namaka"
        },
        {
        "id": "hiiaka",
        "englishName": "Hiʻiaka"
        },
        {
        "id": "dysnomie",
        "englishName": "Dysnomia"
        },
        {
        "id": "dia",
        "englishName": "Dia"
        },
        {
        "id": "s2004s3",
        "englishName": "S/2004 S 3"
        },
        {
        "id": "s2004s4",
        "englishName": "S/2004 S 4"
        },
        {
        "id": "s2004s6",
        "englishName": "S/2004 S 6"
        },
        {
        "id": "s2010j1",
        "englishName": "S/2010 J 1"
        },
        {
        "id": "s2010j2",
        "englishName": "S/2010 J 2"
        },
        {
        "id": "petitprince",
        "englishName": "The Little Prince"
        },
        {
        "id": "remus",
        "englishName": "Remus"
        },
        {
        "id": "vanth",
        "englishName": "Vanth"
        },
        {
        "id": "dactyl",
        "englishName": "(243) Ida I Dactyl"
        },
        {
        "id": "romulus",
        "englishName": "Romulus"
        },
        {
        "id": "alexhelios",
        "englishName": "Alexhelios"
        },
        {
        "id": "cleoselene",
        "englishName": "Cleoselene"
        },
        {
        "id": "weywot",
        "englishName": "Weywot"
        },
        {
        "id": "kerberos",
        "englishName": "Kerberos"
        },
        {
        "id": "s2011j1",
        "englishName": "S/2011 J 1"
        },
        {
        "id": "s2011j2",
        "englishName": "S/2011 J 2"
        },
        {
        "id": "styx",
        "englishName": "Styx"
        },
        {
        "id": "hippocampe",
        "englishName": "Hippocamp"
        },
        {
        "id": "mk2",
        "englishName": "S/2015 (136472) 1"
        },
        {
        "id": "s2017j1",
        "englishName": "S/2017 J 1"
        },
        {
        "id": "s2016j1",
        "englishName": "S/2016 J 1"
        },
        {
        "id": "valetudo",
        "englishName": "Valetudo"
        },
        {
        "id": "s2017j2",
        "englishName": "S/2017 J 2"
        },
        {
        "id": "s2017j3",
        "englishName": "S/2017 J 3"
        },
        {
        "id": "pandia",
        "englishName": "Pandia"
        },
        {
        "id": "s2017j5",
        "englishName": "S/2017 J 5"
        },
        {
        "id": "s2017j6",
        "englishName": "S/2017 J 6"
        },
        {
        "id": "s2017j7",
        "englishName": "S/2017 J 7"
        },
        {
        "id": "s2017j8",
        "englishName": "S/2017 J 8"
        },
        {
        "id": "s2017j9",
        "englishName": "S/2017 J 9"
        },
        {
        "id": "ersa",
        "englishName": "Ersa"
        },
        {
        "id": "s2004s22",
        "englishName": "S/2004 S 22"
        },
        {
        "id": "s2004s21",
        "englishName": "S/2004 S 21"
        },
        {
        "id": "s2004s20",
        "englishName": "S/2004 S 20"
        },
        {
        "id": "s2004s23",
        "englishName": "S/2004 S 23"
        },
        {
        "id": "s2004s24",
        "englishName": "S/2004 S 24"
        },
        {
        "id": "s2004s25",
        "englishName": "S/2004 S 25"
        },
        {
        "id": "s2004s26",
        "englishName": "S/2004 S 26"
        },
        {
        "id": "s2004s27",
        "englishName": "S/2004 S 27"
        },
        {
        "id": "s2004s28",
        "englishName": "S/2004 S 28"
        },
        {
        "id": "s2004s29",
        "englishName": "S/2004 S 29"
        },
        {
        "id": "s2004s30",
        "englishName": "S/2004 S 30"
        },
        {
        "id": "s2004s31",
        "englishName": "S/2004 S 31"
        },
        {
        "id": "s2004s32",
        "englishName": "S/2004 S 32"
        },
        {
        "id": "s2004s33",
        "englishName": "S/2004 S 33"
        },
        {
        "id": "s2004s34",
        "englishName": "S/2004 S 34"
        },
        {
        "id": "s2004s35",
        "englishName": "S/2004 S 35"
        },
        {
        "id": "s2004s36",
        "englishName": "S/2004 S 36"
        },
        {
        "id": "s2004s37",
        "englishName": "S/2004 S 37"
        },
        {
        "id": "s2004s38",
        "englishName": "S/2004 S 38"
        },
        {
        "id": "s2004s39",
        "englishName": "S/2004 S 39"
        },
        {
        "id": "s2003j24",
        "englishName": "S/2003 J 24"
        }
    ];
    const asteroids = [
        {
        "id": "ceres",
        "englishName": "1 Ceres"
        },
        {
        "id": "hebe",
        "englishName": "6 Hebe"
        },
        {
        "id": "lempo",
        "englishName": "47171 Lempo"
        },
        {
        "id": "pulcova",
        "englishName": "762 Pulcova"
        },
        {
        "id": "toutatis",
        "englishName": "4179 Toutatis"
        },
        {
        "id": "quaoar",
        "englishName": "50000 Quaoar"
        },
        {
        "id": "steins",
        "englishName": "2867 Šteins"
        },
        {
        "id": "astree",
        "englishName": "5 Astraea"
        },
        {
        "id": "pholus",
        "englishName": "5145 Pholus"
        },
        {
        "id": "castalia",
        "englishName": "4769 Castalia"
        },
        {
        "id": "hector",
        "englishName": "624 Hektor"
        },
        {
        "id": "kleopatra",
        "englishName": "216 Kleopatra"
        },
        {
        "id": "cruithne",
        "englishName": "3753 Cruithne"
        },
        {
        "id": "junon",
        "englishName": "3 Juno"
        },
        {
        "id": "hygie",
        "englishName": "10 Hygiea"
        },
        {
        "id": "lutetia",
        "englishName": "21 Lutetia"
        },
        {
        "id": "mathilde",
        "englishName": "253 Mathilde"
        },
        {
        "id": "iris",
        "englishName": "7 Iris"
        },
        {
        "id": "eros",
        "englishName": "433 Eros"
        },
        {
        "id": "sedna",
        "englishName": "90377 Sedna"
        },
        {
        "id": "chariklo",
        "englishName": "10199 Chariklo"
        },
        {
        "id": "sylvia",
        "englishName": "87 Sylvia"
        },
        {
        "id": "orcus",
        "englishName": "90482 Orcus"
        },
        {
        "id": "damocles",
        "englishName": "5335 Damocles"
        },
        {
        "id": "flore",
        "englishName": "8 Flora"
        },
        {
        "id": "chiron",
        "englishName": "2060 Chiron"
        },
        {
        "id": "eureka",
        "englishName": "5261 Eureka"
        },
        {
        "id": "achille",
        "englishName": "588 Achilles"
        },
        {
        "id": "ixion",
        "englishName": "28978 Ixion"
        },
        {
        "id": "9metis",
        "englishName": "9 Metis"
        },
        {
        "id": "nessus",
        "englishName": "7066 Nessus"
        },
        {
        "id": "itokawa",
        "englishName": "25143 Itokawa"
        },
        {
        "id": "hylonome",
        "englishName": "10370 Hylonome"
        },
        {
        "id": "eugenia",
        "englishName": "45 Eugenia"
        },
        {
        "id": "2006sq372",
        "englishName": "(308933) 2006 SQ372"
        },
        {
        "id": "pallas",
        "englishName": "2 Pallas"
        },
        {
        "id": "asbolus",
        "englishName": "8405 Asbolus"
        },
        {
        "id": "varuna",
        "englishName": "20000 Varuna"
        },
        {
        "id": "vesta",
        "englishName": "4 Vesta"
        },
        {
        "id": "ida",
        "englishName": "243 Ida"
        },
        {
        "id": "gaspra",
        "englishName": "951 Gaspra"
        },
        {
        "id": "albion",
        "englishName": "15760 Albion"
        },
        {
        "id": "arrokoth",
        "englishName": "Arrokoth"
        },
        {
        "id": "benou",
        "englishName": "101955 Bennu"
        }
    ];
    const comets = [
        {
        "id": "sl9",
        "englishName": "Shoemaker-Levy 9"
        },
        {
        "id": "hyakutake",
        "englishName": "Comet Hyakutake"
        },
        {
        "id": "halley",
        "englishName": "Halley's Comet"
        },
        {
        "id": "c2020f3-neowise",
        "englishName": "C/2020 F3 (NEOWISE)"
        }
    ];

    let type = '';
    switch (props.type) {
        case 'planets':
            type = planets;
            break;
        case 'dwarfs':
            type = dwarfs;
            break;
        case 'moons':
            type = moons;
            break;
        case 'asteroids':
            type = asteroids;
            break;
        case 'comets':
            type = comets;
            break;
        default:
            break;
    }

    useEffect(()=>{
        const select = document.querySelector('#select');
        select.innerHTML = '';
        for(let i = 0; i<type.length; i++) {
            select.innerHTML += `<option value='${type[i].id}'>${type[i].englishName}</option>\n`
        }
    })

  return (
    <div className='w-[300px]'>
        <select id="select" defaultValue="Choose a planet" className="block py-2.5 px-0 mt-3 mb-3 w-full text-sm text-slate-400 bg-transparent border-b-2 border-green-400 appearance-none focus:outline-none focus:ring-0 focus:border-green-400 peer">
            <option value="Earth">Earth</option>
         </select>
    </div>
  )
}
