const typeAll = "all";
const typeTop = "top";
const typeEntertainment = "entertainment";
const typeHistorical = "historical";
const typeMuseum = "museum";
const typeHiking = "hiking"

const SLIDE_LENGTH = 3;
const SLIDES_URL = [
    "https://wallpapercave.com/wp/wp1988998.jpg",
    "https://www.wallpapers13.com/wp-content/uploads/2016/01/Armenia_yerevan_hraparak_hayk_barseghyans-wallpaper-3840x2160.jpg",
    "https://wallpaperaccess.com/full/1382742.jpg"
];

const placeData = [
    {
      "imgUrl": "images/sevan.jpg",
      "name": "Lake Sevan",
      "location": "Gegharkunik",
      "cost": "free",
      "description": "Lake Sevan is the largest body of water in both Armenia and the Caucasus region. It is one of the largest freshwater high-altitude lakes in Eurasia",
      "types": ["top"]
    },
    {
      "imgUrl": "images/aragats.jpg",
      "name": "Mount Aragats",
      "location": "Aragatsotn",
      "cost": "free",
      "description": "Mount Aragats is an isolated four-peaked volcano massif in Armenia. Its northern summit, at 4,090 m above sea level, is the highest point of the Lesser Caucasus and Armenia.",
      "types": ["top", "hiking"]
    },
    {
      "imgUrl": "images/lakearpi.jpg",
      "name": "Lake Arpi",
      "location": "Tsovagyugh, Gegharqunik",
      "cost": "free",
      "description": "Lake Arpi is a lake and reservoir located in the Shirak Province of Armenia, on the Ashotsk plateau in the northwestern part of the country. It sits at an altitude of 2,025 m with an area of 20 km square",
      "types": ["top", "hiking"]
    },
    {
      "imgUrl": "images/gosh.jpg",
      "name": "Lake Gosh",
      "location": "Dilijan, Tavush",
      "cost": "free",
      "description": "The small, picturesque Lake Gosh, surrounded by lush, dense forests, is located in the heart of Dilijan State Reserve. It received its name from the village of the same name, which, in its turn, bears the name of the famous medieval writer and outstanding public figure Mkhitar Gosh",
      "types": ["top", "hiking"]
    },
    {
      "imgUrl": "images/haghartsin.jpg",
      "name": "Haghartsin Monastery",
      "location": "Dilijan, Tavush",
      "cost": "free",
      "description": "Haghartsin, also Hałarcin Monastery, is a 13th-century monastery located near the town of Dilijan in the Tavush Province of Armenia. It was built between the 10th and 13th centuries",
      "types": ["top", "historical"]
    },
    {
      "imgUrl": "images/lastiver.jpg",
      "name": "Lastiver",
      "location": "Tavush",
      "cost": "free",
      "description": "You can see small houses constructed on the trees, a waterfall, caves, where the hermits used to live. This place looks wonderful in every season.",
      "types": ["top", "hiking"]
    },
    {
      "imgUrl": "images/noravanq.jpg",
      "name": "Noravank",
      "location": "Yeghegnadzor, Vayots Dzor",
      "cost": "free",
      "description": "Noravank is a 13th-century Armenian monastery, located 122 km from Yerevan in a narrow gorge made by the Amaghu River, near the town of Yeghegnadzor in Armenia",
      "types": ["top", "historical"]
    },
    {
      "imgUrl": "images/amberd.jpg",
      "name": "Amberd Monastery",
      "location": "Aragatsotn",
      "cost": "free",
      "description": "Amberd is a 10th-century fortress located 2,300 meters (7,500 ft) above sea level, on the slopes of Mount Aragats at the confluence of the Arkashen and Amberd rivers in the province of Aragatsotn, Armenia. The name translates to fortress in the clouds in Armenian",
      "types": ["top", "historical"]
    },
    {
      "imgUrl": "images/karahunj.jpg",
      "name": "Carahunge",
      "location": "Syunik",
      "cost": "free",
      "description": "Carahunge is a prehistoric archaeological site near the town of Sisian in the Syunik Province of Armenia. It is also often referred to among international tourists as the Armenian Stonehenge.",
      "types": ["top"]
    },
    {
      "imgUrl": "images/khorvirap.jpg",
      "name": "Khor Virap Monastery",
      "location": "Lusarat, Ararat",
      "cost": "free",
      "description": "Khor Virap is an Armenian monastery located in the Ararat Plain in Armenia, near the border with Turkey, about 8 kilometres south of Artashat, Ararat Province, within the territory of ancient Artaxata.",
      "types": ["top", "historical"]
    },
    {
      "imgUrl": "images/cascade.jpg",
      "name": "Cascade",
      "location": "Kentron, Yerevan",
      "cost": "free",
      "description": "The Cascade is located in Yerevan, Armenia. White travertine stone was used for building the complex since only this stone was available in the amount sufficient for such a large-scale construction.",
      "types": ["top", "entertainment"]
    },
    {
      "imgUrl": "images/republicsquare.jpg",
      "name": "Republic Square",
      "location": "Kentron, Yerevan",
      "cost": "free",
      "description": "Republic Square is the central town square in Yerevan, the capital of Armenia. It consists of two sections: an oval roundabout and a trapezoid-shaped section which contains a pool with musical fountains.",
      "types": ["top", "entertainment"]
    },
    {
      "imgUrl": "images/vernissage.jpg",
      "name": "Vernissage",
      "location": "Kentron, Yerevan",
      "cost": "free",
      "description": "Yerevan Vernissage (Vernisazh) is a large open-air market in Yerevan, Armenia. The name of the market is derived from the French word vernissage. The market lies along Aram Street and Buzand Street at a length of 350 metres.",
      "types": ["top", "entertainment"]
    },
    {
      "imgUrl": "images/botanicalgarden.jpg",
      "name": "Botanical Garden",
      "location": "Kentron, Yerevan",
      "cost": "free",
      "description": "The Yerevan Botanical Garden of the Armenian National Academy of Sciences is the body responsible for plant collections in Armenia.",
      "types": ["top", "entertainment"]
    },
    {
      "imgUrl": "images/saryanwinestreet.jpg",
      "name": "Saryan Wine Street",
      "location": "Kentron, Yerevan",
      "cost": "free",
      "description": "Saryan Street is a long avenue in Yerevan that confines the city center of the Armenian capital city. The street has become synonymous with being a wine lover's paradise in the last couple of years thanks to the opening and birth of In Vino, a Yerevan institution for those who want to imbibe Armenia’s most famous beverage.",
      "types": ["top", "entertainment"]
    },
    {
      "imgUrl": "images/areniwinevillage.jpg",
      "name": "Areni Wine Village",
      "location": "Areni, Vayots Dzor",
      "cost": "free",
      "description": "Areni is a village and the center of the Areni Municipality of the Vayots Dzor Province in Armenia. Areni is best known for its wine production, with the majority of wine produced locally from the nearby village of Getap.",
      "types": ["top", "entertainment"]
    },
    {
      "imgUrl": "images/jermukhotsprings.jpg",
      "name": "Jermuk Hot Springs",
      "location": "Jermuk, Vayots Dzor",
      "cost": "free",
      "description": "One of the most famous springs is the hot springs. Despite the fact that the springs are located in inaccessible areas, this is the most beloved and sought-after place in Jermuk.",
      "types": ["top", "entertainment"]
    },
    {
      "imgUrl": "images/areni1cave.jpg",
      "name": "Areni 1 Cave",
      "location": "Vayots Dzor",
      "cost": "free",
      "description": "The Areni-1 cave complex is a multicomponent site, and late Chalcolithic/Early Bronze Age ritual site and settlement, located near the Areni village in southern Armenia along the Arpa River.",
      "types": ["top", "entertainment"]
    },
    {
      "imgUrl": "images/jermukwaterfall.jpg",
      "name": "Jermuk Waterfall",
      "location": "Vayots Dzor",
      "cost": "free",
      "description": "Considered the most picturesque waterfall in Armenia, the Jermuk Waterfall is found a few minutes outside town. A short pathway starts from the parking lot under the shadow of an impressive bridge, then winds along the gorge to the falls.",
      "types": ["top", "hiking"]
    },
    {
      "imgUrl": "images/smbataberd.jpg",
      "name": "Smbataberd Fortress",
      "location": "Vayots Dzor",
      "cost": "free",
      "description": "Smbataberd is a medieval fortress located upon the crest of a hill between the villages of Artabuynk and Yeghegis in the Vayots Dzor Province of Armenia. It may have existed as early as the 5th century or earlier, although other sources date it to the 9th to 11th centuries.",
      "types": ["top", "historical", "hiking"]
    },
    {
        "imgUrl": "images/garnitemple.jpg",
        "name": "Garni Temple",
        "location": "Kotayk",
        "cost": "free",
        "description": "Garni Temple is the only standing Greco-Roman colonnaded building in Armenia. Built in the Ionic order, it is located in the village of Garni, in central Armenia, around 30 km (19 mi) east of Yerevan. It is the best-known structure and symbol of pre-Christian Armenia.",
        "types": ["top", "historical"]
    },
    {
        "imgUrl": "images/matenadaran.jpg",
        "name": "Matenadaran",
        "location": "Kentron, Yerevan",
        "cost": "free",
        "description": "The Matenadaran, officially the Mesrop Mashtots Institute of Ancient Manuscripts, is a museum, repository of manuscripts, and a research institute in Yerevan, Armenia. It is the world's largest repository of Armenian manuscripts.",
        "types": ["top", "museum"]
      },
      {
        "imgUrl": "images/sergeiparajanovmuseum.jpg",
        "name": "Sergei Parajanov Museum",
        "location": "Yerevan",
        "cost": "free",
        "description": "The Sergei Parajanov Museum is a tribute to Soviet Armenian film director and artist Sergei Parajanov and is one of the most popular museums in Yerevan. It represents Parajanov's diverse artistic and literary heritage.",
        "types": ["museum"]
      },
      {
        "imgUrl": "images/nationalgallery.jpg",
        "name": "National Gallery",
        "location": "Kentron, Yerevan",
        "cost": "free",
        "description": "National Gallery is the largest art museum in Armenia. Located on Yerevan's Republic Square, the museum has one of the most prominent locations in the Armenian capital",
        "types": ["top","museum", "entertainment"]
      },
      {
        "imgUrl": "images/megeriancarpet.jpg",
        "name": "Megerian Carpet",
        "location": "Kentron, Yerevan",
        "cost": "free",
        "description": "Megerian Carpet in Armenia is a renowned establishment that has been perfecting the art of carpet-making for over a century, blending traditional Armenian designs with contemporary craftsmanship. This family-run business not only sells handmade carpets but also offers tours of their museum, showcasing the rich history and intricate process of Armenian carpet weaving",
        "types": ["museum"]
      },
      {
        "imgUrl": "images/genocidemuseum.jpg",
        "name": "Genocide Memorial",
        "location": "Yerevan",
        "cost": "free",
        "description": "The Armenian Genocide Memorial and Museum in Armenia stands as a solemn tribute to the millions of lives lost during the tragic events of the Armenian Genocide.",
        "types": ["museum"]
      },
      {
        "imgUrl": "images/tigranmuseum.jpg",
        "name": "Tigran Art Studio",
        "location": "Yerevan",
        "cost": "free",
        "description": "Tigran Art Studio in Armenia is a vibrant creative hub where local artists showcase their talents through diverse mediums, from paintings to sculptures.",
        "types": ["museum"]
      },
      {
        "imgUrl": "images/zvartnotscathedral.jpg",
        "name": "Zvartnots Cathedral",
        "location": "Armavir",
        "cost": "free",
        "description": "Zvartnots Cathedral is a medieval Armenian cathedral near Vagharshapat, Armenia. Built in the seventh century and now lying in ruins, Zvartnots was noted for its circular exterior structure, unique in medieval Armenian architecture",
        "types": ["historical"]
      },
      {
        "imgUrl": "images/museumofillustions.jpg",
        "name": "Museum of Illusions",
        "location": "Yerevan",
        "cost": "free",
        "description": "About 50 exhibits based on physics, mathematics, psychology, ordinary from the first glance, but in fact, magic rooms, where you will be surprised and entertained, update, strengthen and acquire new knowledge from different fields.",
        "types": ["entertainment"]
      },
      {
        "imgUrl": "images/tumopark.jpg",
        "name": "Tumanyan Park",
        "location": "Ajapnyak, Yerevan",
        "cost": "free",
        "description": "Tumanyan Park is a public park in the Ajapnyak district of Yerevan, Armenia. It is located on Halabyan Street in the gorge of Hrazdan River, between the Great Bridge of Hrazdan and the Tumo Center for Creative Technologies.",
        "types": ["top","entertainment"]
      },
      {
        "imgUrl": "images/yerevanpark.jpg",
        "name": "Yerevan Park",
        "location": "Yerevan",
        "cost": "free",
        "description": "Escape to Yerevan Park - the world of never-ending joy and unstoppable adventure! The region's largest theme park offers 24 indoor and outdoor kid, family, and thrill rides from top European manufacturers.",
        "types": ["top","entertainment"]
      },
      {
        "imgUrl": "images/mountkalasar.jpg",
        "name": "Mount Kalsar",
        "location": "Vayots Dzor",
        "cost": "free",
        "description": "Mount Kalasar is situated 1.5 km northeast of Hermon village in Vayots Dzor Prov ince. Certain sections of the mountains fortress walls are still intact near the peak.",
        "types": ["hiking"]
      },
      {
        "imgUrl": "images/byurakanobservatory.jpg",
        "name": "Byurakan Observatory",
        "location": "Aragatsotn",
        "cost": "free",
        "description": "The Byurakan Astrophysical Observatory, or Byurakan Observatory is an astronomical observatory owned and operated by the Armenian Academy of Sciences.",
        "types": ["top", "entertainment"]
      },
      {
        "imgUrl": "images/operaballetetheater.jpg",
        "name": "Opera and Ballete Theater",
        "location": "Kentron, Yerevan",
        "cost": "free",
        "description": "The Alexander Spendiaryan National Academic Opera and Ballet Theatre, simply known by locals as, is an opera theatre in Yerevan. It officially opened on 20 January 1933, with a performance of Alexander Spendiaryan's opera Almast as its first show.",
        "types": ["top", "entertainment"]
      },
      {
        "imgUrl": "images/tatevmonastrey.jpg",
        "name": "Tatev Monastery",
        "location": "Syunik",
        "cost": "free",
        "description": "The Tatev Monastery is a 9th-century Armenian Apostolic Christian monastery located on a large basalt plateau near the village of Tatev in the Syunik Province in southeastern Armenia.",
        "types": ["top", "historical"]
      },
      {
        "imgUrl": "images/lorigorge.jpg",
        "name": "Lori Gorge",
        "location": "Lori",
        "cost": "free",
        "description": "Lori Gorge as it is also referred to by locals, is one of the most impressive natural landscapes in the north of Armenia. Geographically, the canyon stretches from the city of Vanadzor, the administrative center of Lori province, along the Debed river and all the way north to the Armenian-Georgian border.",
        "types": ["top", "hiking"]
      },
      {
        "imgUrl": "images/etchmiadzin.jpg",
        "name": "Etchmiadzin",
        "location": "Armavir",
        "cost": "free",
        "description": "Etchmiadzin Cathedral is the mother church of the Armenian Apostolic Church, located in the city dually known as Etchmiadzin and Vagharshapat, Armenia.",
        "types": ["historical"]
      },
      {
        "imgUrl": "images/cicernakaberd.jpg",
        "name": "Tsitsernakaberd",
        "location": "Yerevan",
        "cost": "free",
        "description": "Tsitsernakaberd is Armenia's official memorial dedicated to the victims of the Armenian genocide, built in 1967 on the hill of Tsitsernakaberd in Yerevan.",
        "types": ["historical"]
      },
      {
        "imgUrl": "images/brandycompany.jpg",
        "name": "Ararat Company",
        "location": "Yerevan",
        "cost": "free",
        "description": "Yerevan Brandy Company, commonly known with its famous brand ArArAt, is the leading enterprise of Armenia for the production of cognac.",
        "types": ["historical", "entertainment", "museum"]
      },
      {
        "imgUrl": "images/historymuseum.jpg",
        "name": "The History Museum",
        "location": "Kentron, Yerevan",
        "cost": "free",
        "description": "The History Museum of Armenia is a museum in Armenia with departments of Archaeology, Numismatics, Ethnography, Modern History and Restoration. It has a national collection of 400,000 objects.",
        "types": [ "entertainment", "museum"]
      },
      {
        "imgUrl": "images/hellcanyon.jpg",
        "name": "Hell Canyon",
        "location": "Ararat",
        "cost": "free",
        "description": "Among climbers Hell Canyon is known as a perfect place for rock climbing. It is not far from Yerevan, but at the same time it is separated from civilization.",
        "types": [ "entertainment", "hiking"]
      },
      {
        "imgUrl": "images/mountkhustup.jpg",
        "name": "Mount Khustup",
        "location": "Syunik",
        "cost": "free",
        "description": "The mountain range is located in Syunik province and is the southern branch of Bargushat mountains. It includes Katar and Khustup massifs.",
        "types": ["hiking"]
      },
      {
        "imgUrl": "images/mountcakqar.jpg",
        "name": "Mount Tsakkar",
        "location": "Syunik",
        "cost": "free",
        "description": "The Zangezur mountain range stretches towards the meridian. It starts from Southern Tsarasar and spread till the gorge of Araks river. The length of the range is 160 km.",
        "types": ["hiking"]
      },
      {
        "imgUrl": "images/dimacler.jpg",
        "name": "Mount Dimac",
        "location": "Tavush",
        "cost": "free",
        "description": "Mount Dimats is located in the Tavush region of Armenia, in the Ijevan Mountains. The height of the mountain is 2378 meters.",
        "types": ["hiking", "top"]
      },
      {
        "imgUrl": "images/angelscanyon.jpg",
        "name": "Angels Canyon",
        "location": "Ararat",
        "cost": "free",
        "description": "The Angels Canyon, surrounded by yellow-red rocks, is located near the town of Vedi in the Ararat region. Recently, this tourist destination has become quite popular both for locals and for tourists.",
        "types": ["hiking"]
      },
      {
        "imgUrl": "images/rapilake.jpg",
        "name": "Rapi Lake",
        "location": "Aragats",
        "cost": "free",
        "description": "Rapi Lake is one of the many high altitude lakes of Aragats. It is located in the northern part of the Aragats Massive, on the left bank of the Dashtakijur River, 9 km from the Geghadzor village.",
        "types": ["hiking"]
      }

]

const places = placeData.map((place, index) => ({
    id: index + 1, 
    ...place
}));
  
console.log(places)


let allArray = [];
let topArray = [];
let hikingArray = [];
let entertainmentArray = [];
let historicalArray = [];
let museumArray = [];

if (localStorage.getItem("likedPlaces") === null) {
    localStorage.setItem("likedPlaces", JSON.stringify([]))
}

class Place {
    constructor(imgUrl, name, location, cost, description, types, id){
        this.id = id;
        this.imgUrl = imgUrl;
        this.name = name;
        this.location = location;
        this.cost = cost;
        this.types = types;
        this.description = description;
        allArray.push(this);
    }
}

function categorizePlace(place) {
    place.types.forEach(type => {
      switch (type) {
        case typeEntertainment:
            entertainmentArray.push(place);
            break;
        case typeHistorical:
            historicalArray.push(place);
            break;
        case typeMuseum:
            museumArray.push(place);
            break;
        case typeHiking:
            hikingArray.push(place);
            break;
        case typeTop:
            topArray.push(place);
            break;
        default:
            break;
      }
    });
}

function getLikedPlaces() {
    return JSON.parse(localStorage.getItem("likedPlaces")) || [];
} //gets the id-s of liked places

function addItemToLikedPlaces(itemID) {
    let liked = getLikedPlaces();
    if (!liked.includes(itemID)) {
        localStorage.setItem("likedPlaces", JSON.stringify([itemID, ...liked]));
    }
} //adds an id to the liked places

function removeItemFromLikedPlaces(itemID) {
    let liked = getLikedPlaces();
    liked = liked.filter(id => id !== itemID);
    localStorage.setItem("likedPlaces", JSON.stringify(liked));
} //removes id to the liked places


function getItemWithID(id) {
    return places.find(item => item.id === id);
} //returns the item with certain id

function isLiked(id) {
    let places = getLikedPlaces(); 
    return places.includes(id);
} //checks if an item is liked, returns boolean


function displayPlaces(placesArray, type) {
    const mainContainer = document.querySelector(".places-container");

    const updateContent = () => {
        mainContainer.innerHTML = ""; 
        
        if (!placesArray.length) {
            const noResultsMsg = document.createElement("p");
            noResultsMsg.textContent = "No results found. Try a different search.";
            mainContainer.appendChild(noResultsMsg);
            mainContainer.classList.add("show");
            mainContainer.classList.add("error-message");
            return;
        }

        const typeContainer = document.createElement("div");
        typeContainer.className = `${type}-container`;
        mainContainer.appendChild(typeContainer);

        placesArray.forEach(place => appendPlace(place, typeContainer));
        
        mainContainer.removeEventListener('transitionend', updateContent);
        mainContainer.classList.add("show"); 

    };

    if (mainContainer.classList.contains("show")) {
        mainContainer.classList.remove("show");
        mainContainer.addEventListener('transitionend', updateContent, { once: true });
    } else {
        updateContent();
    }
}

function clearContainers() {
    document.querySelector(".places-container").innerHTML = "";
}

function appendPlace(place, container) {
    const placeDiv = document.createElement("div");
    placeDiv.className = "place";
    
    const img = document.createElement("img");
    img.src = place.imgUrl;
    img.alt = place.name;
    
    const name = document.createElement("h3");
    name.textContent = place.name;
    const heart = document.createElement("h4");
    if(isLiked(place.id)) {
        heart.innerHTML = `<i class="fa-solid fa-heart like-heart" data-place-id="${place.name}"></i>`;
    } else {
        heart.innerHTML = `<i class="fa-regular fa-heart like-heart" data-place-id="${place.name}"></i>`;
    }

    heart.addEventListener("click", function(event) {
        const heart = event.target.closest('.like-heart');
        if(isLiked(place?.id)) {
            removeItemFromLikedPlaces(place?.id);
            heart.classList.remove("fa-solid");
            heart.classList.add("fa-regular");
        } else {
            addItemToLikedPlaces(place?.id);
            heart.classList.remove("fa-regular");
            heart.classList.add("fa-solid");
        }
    }); //changes the icons based on liked or not

    const location = document.createElement("p");
    location.innerHTML = `${place.location}<i class="fa-solid fa-location-dot"></i>`;
    
    placeDiv.appendChild(img);
    placeDiv.appendChild(name);
    placeDiv.appendChild(location);
    placeDiv.appendChild(heart);
    container.appendChild(placeDiv);

    img.addEventListener('click', function() {
        openPlaceDetail(place);
    });
    name.addEventListener('click', function() {
        openPlaceDetail(place);
    });
    
}  // Helper function to create and append place div


window.onload = function() {
    for(let i = 1; i<=SLIDE_LENGTH; i++){
        let imageElement = document.getElementsByClassName(`img${i}`)[0];
        if (imageElement) { 
            imageElement.src = SLIDES_URL[i-1];
        }
    } //displays the carousel

    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header'); 
        if (window.scrollY > 600) { 
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }); //for animation purposes

    document.querySelector('.fa-bars')?.addEventListener('click', function() {
        const dropdownContent = document.querySelector('.dropdown-content');
        dropdownContent.classList.toggle('show');
    }); //for animation purposes
    document.addEventListener('click', function(e) {
        const isDropdown = e.target.matches('.fa-bars') || e.target.closest('.dropdown-content');
        if (!isDropdown) {
            document.querySelector('.dropdown-content').classList.remove('show');
        }
    }); //for animation purposes
    
    document.getElementById('contact-link')?.addEventListener('click', function(e) {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        document.querySelector('.dropdown-content').classList.remove('show');
    });
    document.getElementById('about-link')?.addEventListener('click', function(e) {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        document.querySelector('.dropdown-content').classList.remove('show');
    });
    document.getElementById('blog-link')?.addEventListener('click', function(e) {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        document.querySelector('.dropdown-content').classList.remove('show');
    }); 
    document.getElementById('blog-link1')?.addEventListener('click', function(e) {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }); 
    document.getElementById('about-link1')?.addEventListener('click', function(e) {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }); 
    document.getElementById('contact-link1')?.addEventListener('click', function(e) {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });  
    
    
    //going to the bottom of the page
    places.forEach(placeData => {
        new Place(placeData.imgUrl, placeData.name, placeData.location, placeData.cost, placeData.description, placeData.types, placeData.id);
    });
    allArray.forEach(place => {
        categorizePlace(place);
    });

    displayPlaces(allArray, typeAll);
   
    const allButton = document.getElementById("allButton");
    const topButton = document.getElementById("topButton");
    const entertainmentButton = document.getElementById("entertainmentButton");
    const historicalButton = document.getElementById("historicalButton");
    const museumButton = document.getElementById("museumButton");
    const hikingButton = document.getElementById("hikingButton");
    const filterButtons = [allButton, topButton, entertainmentButton, historicalButton, museumButton, hikingButton];
    const chooseFilter = (filterButton) => {
        filterButtons.forEach(function(button) {
            button.classList.remove('filter-clicked');
        })
        filterButton.classList.add('filter-clicked')
    }

    // Event listeners for each button
    allButton.addEventListener("click", () => {
        displayPlaces(allArray, typeAll);
        chooseFilter(allButton);
    });
    topButton.addEventListener("click", () => {
        displayPlaces(topArray, typeTop);
        chooseFilter(topButton);
    });
    entertainmentButton.addEventListener("click", () => {
        displayPlaces(entertainmentArray, typeEntertainment)
        chooseFilter(entertainmentButton);
    });
    historicalButton.addEventListener("click", () => {
        displayPlaces(historicalArray, typeHistorical)
        chooseFilter(historicalButton);
    });
    museumButton.addEventListener("click", () => {
        displayPlaces(museumArray, typeMuseum)
        chooseFilter(museumButton);
    });
    hikingButton.addEventListener("click", () => {
        displayPlaces(hikingArray, typeHiking)
        chooseFilter(hikingButton);
    });

    document.getElementById("liked-page")?.addEventListener("click", () => {
        displayLikedPlaces();
        console.log("displayed");
    })

    document.getElementById('search-button').addEventListener('click', function() {
        const input = document.getElementById('search-input').value;
        const searchTerms = getInput(input);
        const searchResults = findSearchedPlaces(searchTerms, places);
        displayPlaces(searchResults, 'search');
    });

    document.getElementById("instagram-icon").addEventListener("click", () => {
        window.open("https://www.instagram.com/_sonasar_?igsh=OGQ5ZDc2ODk2ZA==", "_blank");
    })
    document.getElementById("github-icon").addEventListener("click", () => {
        window.open("https://github.com/sona-sar", "_blank");
    })
    document.getElementById("twitter-icon").addEventListener("click", () => {
        window.open("https://twitter.com/_sonasar_", "_blank");
    })
    document.getElementById("linkedin-icon").addEventListener("click", () => {
        window.open("https://www.linkedin.com/in/sona-sar/", "_blank");
    })

};

function displayLikedPlaces() {
    const likedPlacesIds = getLikedPlaces(); 
    const likedPlaces = likedPlacesIds.map(id => getItemWithID(id));
    console.log(likedPlaces);

    const wrapper = document.createElement('div');
    wrapper.className = 'liked-places-wrapper';
    wrapper.style.opacity = 0;
    wrapper.style.visibility = 'hidden'; 

    const container = document.createElement('div');
    container.className = 'liked-places-container';

    likedPlaces.forEach(place => {
        const placeDiv = document.createElement('div');
        placeDiv.className = 'liked-place';

        const imgDiv = document.createElement('div');
        imgDiv.className = 'liked-place-image-container';

        const img = document.createElement('img');
        img.src = place.imgUrl;
        img.alt = place.name;
        img.className = 'liked-place-image';
        imgDiv.appendChild(img);

        const textDiv = document.createElement('div');
        textDiv.className = 'liked-items-text-container';

        const name = document.createElement('h2');
        name.className = 'liked-place-name';
        name.textContent = place.name;

        const location = document.createElement('p');
        location.className = 'liked-place-location';
        location.textContent = place.location;

        const description = document.createElement('p');
        description.className = 'liked-place-description';
        description.textContent = place.description;

        textDiv.appendChild(name);
        textDiv.appendChild(location);
        textDiv.appendChild(description);

        placeDiv.appendChild(imgDiv);
        placeDiv.appendChild(textDiv);

        container.appendChild(placeDiv);
    });

    wrapper.appendChild(container);

    const pElement = document.createElement("i");
    pElement.classList.add("fa-solid", "fa-xmark", "close-icon");
    pElement.addEventListener('click', function() {
        wrapper.style.opacity = 0;
        wrapper.style.visibility = 'hidden';
        setTimeout(() => {
            document.body.removeChild(wrapper);
        }, 500); 
    });

    wrapper.appendChild(pElement);

    document.body.appendChild(wrapper);

    setTimeout(() => {
        wrapper.style.opacity = 1;
        wrapper.style.visibility = 'visible';
    }, 0);
}



function openPlaceDetail(place) {

    if (document.querySelector(".place-detail-view")) {
        return;
    }
    const detailView = document.createElement("div");
    detailView.className = "place-detail-view";

    const detailContent = document.createElement("div");
    detailContent.className = "detail-content";

    const closeBtn = document.createElement("i");
    closeBtn.className = "fa-solid fa-xmark close-btn";

    const backgroundImage = document.createElement("div");
    backgroundImage.className = "background-image";
    backgroundImage.style.backgroundImage = `url(${place.imgUrl})`;

    const detailName = document.createElement("h2");
    detailName.textContent = place.name;
    detailName.className = "detail-name";

    const detailLocation = document.createElement("p");
    detailLocation.textContent = place.location;
    detailLocation.className = "detail-location";

    const detailDescription = document.createElement("p");
    detailDescription.textContent = place.description;
    detailDescription.className = "detail-description";

    detailContent.appendChild(backgroundImage);
    detailContent.appendChild(detailName);
    detailContent.appendChild(detailLocation);
    detailContent.appendChild(detailDescription);

    detailView.appendChild(detailContent);
    detailView.appendChild(closeBtn);

    document.body.appendChild(detailView);

    requestAnimationFrame(() => {
        detailView.classList.add('visible');
    });

    closeBtn.addEventListener('click', function() {
        detailView.classList.remove('visible'); 
        detailView.addEventListener('transitionend', function() {
            document.body.removeChild(detailView); 
        }, { once: true });
    });
}

function getInput(input){
    const words = input.split(/[\s,]+/).filter(Boolean);
    return words;
}

function findSearchedPlaces(terms, places){
    return places.filter(place => 
        terms.some(term => 
            place.name.toLowerCase().includes(term.toLowerCase()) || 
            place.location.toLowerCase().includes(term.toLowerCase())
        )
    );
}