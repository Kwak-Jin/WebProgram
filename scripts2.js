const clubs = [
    { name: "MIC", category: "Performance", image: "mic.jpg",description: "MIC stands for (Motion In Christ) <br> a ministry club that glorifies God through dance.<br> The group primarily practices and performs various dance genres, including hip-hop, popping, locking, waacking, girl\’s hip-hop, and urban dance." },
    { name: "God's Fellow", category: "Performance", image: "gospel.jpg" , description: "God's Fellows is a performance club that praises God through hip-hop. Members write and compose their own reflections, offering worship to God on various stages, including street performances, club-organized shows, and festival stages."},
    { name: "꾼들", category: "Performance", image: "kkundel.jpg", description: " Actors(Kkun-deul) is a theater club founded in 1995 alongside the establishment of the university, making it the oldest club on campus. Each semester, the club stages at least one theatrical production, conveying diverse stories of life through their performances." },
    { name: "Reverie", category: "Performance", image: "reverie.jpg", description: "Reverie is a classical guitar club founded in 1998, and music-loving students gather to carry out various activities." },
    { name: "Liquid", category: "Performance", image: "liquid.jpg" , description: "qweqweqwe"},
    { name: "MIR", category: "Performance", image: "mir.jpg", description: "MiR is the only rock band club with the goal of sharing passion and joy through various genres of music." },
    { name: "Soul", category: "Performance", image: "soul.png", description: "SOUL is a sign language club that aims to serve as a bridge between deaf and healthy people using the abbreviation of 'Sign Of Unlimited Love.'" },
    { name: "Amazing Story", category: "Performance", image: "amazingstory.jpg", description: "Amazing Story is a Christian theater club that aims to tell the amazing story of God through plays." },
    { name: "즉흥적 새벽 두시", category: "Performance", image: "improv2am.jpg", description: "Impromptu 2 a.m. (abbreviated as 'Immediately') is a jazz & acoustic band club." },
    { name: "PitchPipe", category: "Performance", image: "pitchpipe.jpg" , description: "Pitchpipe is a praise acappella club that means living life to God's absolute standards." },
    { name: "하향", category: "Performance", image: "hayang.jpg", description: "(Dance to Heaven) It is a Korean dance club that aims to worship God and preach the gospel through traditional Korean dances." },
    { name: "한동대학교 응원단", category: "Performance", image: "handongcheer.png", description: "Handong University's cheering squad aims to support Korea beyond Handong University and Pohang City through Action Cheerleading." },
    { name: "한동 오케스트라", category: "Performance", image: "handongorchestra.jpg", description: "The Handong God's Philharmonic Orchestra is the only orchestra club on campus and aims to bring together students who play various instruments to interact and grow through music." },
    { name: "한풍", category: "Performance", image: "hanpung.jpg", description: "Hanpung (Korean 風) is a Pungmul club that aims to harmonize the community and inherit the traditional culture through Pungmul, a traditional Korean music." },
    { name: "Ammission", category: "Performance", image: "ammission.png", description: "Ammission is a club where hip-hop-loving students gather to exchange and grow through music." },
    { name: "G.O.", category: "Performance", image: "go.jpg", description: "G.O. is a missionary worship dance club, which is an abbreviation of 'Great Order' and aims to follow the earthly command of Jesus in Matthew 28: 18-20." },
    { name: "NEO", category: "Performance", image: "neo.jpg", description: "NEO is the only songwriting and composition club on campus, and it aims to create and share its own songs with music-loving students.    " },
    { name: "ZIZZY", category: "Performance", image: "zizzy.jpg", description: "ZIZZY is a dance club that brings joy to Handong people through various genres of dance." },
    { name: "CANVAS", category: "Exhibition", image: "canvas.jpg",description: "CANVAS is an art club that aims to bring together students with passion for art to creativity and exchange through various art activities." },
    { name: "HAC", category: "Exhibition", image: "hac.png" ,description: "It is a Handong Animation Club (HAC) subculture club that aims to bring together students with various hobbies such as animation, cartoons, and games to interact and share joy."},
    { name: "VAM", category: "Exhibition" , image: "vam.jpg",description: "Visual Art Maniacs (V.A.M) is the only photography club on campus, where photography-loving students gather to improve photography skills through various activities and practice communication and service through photography." },
    { name: "비전선교단", category: "Religion" , image: "visionmission.jpg" ,description: "The Vision Mission is an ultra-Orthodox overseas missionary organization with the motto of Completion of God's Country, and it aims to pray and pioneer missions to the non-Orthodox race in order to carry out Jesus' ground orders."},
    { name: "오르", category: "Religion" , image: "or.jpg" ,description: "Or, meaning 'light' in Hebrew, is an Israeli אוֹר club. With the motto of 'Love Israel, Pray for Israel, Go to Israel,' I pray and work for the salvation and recovery of Israel."},
    { name: "B2B", category: "Religion" , image: "b2b.jpg" ,description: "Back to the Bible (B2B) is the only Bible recitation club on campus that aims to promote the growth of faith by reciting the words of God and applying them to life."},
    { name: "CCC", category: "Religion" , image: "ccc.jpg" ,description: "Campus Crusade for Christ (CCC) is a Christian missionary organization that operates on university campuses around the world and conducts various activities aimed at spiritual growth and evangelical propagation of students.Campus Crusade for Christ (CCC) is a Christian missionary organization that operates on university campuses around the world and conducts various activities aimed at spiritual growth and evangelical propagation of students."},
    { name: "SFC", category: "Religion" , image: "sfc.jpg" ,description: "Student For Christ (SFC) is a student faith movement club that pursues evangelical propagation and faith growth through training and nurturing based on reformist beliefs."},
    { name: "GrandSlam", category: "Sports" , image: "grandslam.jpg" ,description: "Grand Slam is a tennis club with the goal of gathering tennis-loving students to improve their skills and promote friendship."},
    { name: "Samson", category: "Sports" , image: "samson.jpg" ,description: "SAMSON is the only health club on campus, and it is a community where students with passion for exercise gather to improve their physical strength and pursue a healthy life."},
    { name: "Sweep", category: "Sports" , image: "sweep.jpg" ,description: "SWEEP is a jiu-jitsu club that aims to improve physical training and self-defense skills through jiu-jitsu."},
    { name: "차요차요", category: "Sports" , image: "chayo.jpg" ,description: "Chayochayo is the first women's futsal club on campus, and female students enjoy futsal together and aim to improve their physical strength and promote friendship."},
    { name: "천풍해세", category: "Sports" , image: "cheonpoong.jpg" ,description: "Cheonpoonghaesae(天風海勢) is the only taekwondo club in the school, meaning 'the wind of the sky and the momentum of the sea.' Through Taekwondo, we aim for a warm community like a family where we can find the vision of missionary work, exercise together and mingle."},
    { name: "한검", category: "Sports" , image: "hankum.jpg" ,description: "Hankum is the only kendo club on campus, and it is a community where students who pursue physical training and mental discipline through kendo gather and work.    "},
    { name: "한마지로", category: "Sports" , image: "hanmazero.png" ,description: "Handong University Judo Club Hanmarujiro can develop physical strength and confidence through judo, receive love from seniors, and interact with friends from various cultures!"},
    { name: "한방 스윙스", category: "Sports" , image: "hanbangswings.jpg" ,description: "Handong University's only baseball club, Han Dong Swings!"},
    { name: "Holy Rams", category: "Sports" , image: "holylambs.png" ,description: "WE PLAY FOR HIM, WE PRAY FOR HIM Handong Pohang's only praying football team HOLYRAMS"},
    { name: "H.MILAN", category: "Sports" , image: "milan.png" ,description: "Handong University's strongest soccer club ⚽H-MILAN⚽."},
    { name: "덜지니어스", category: "Sports" , image: "delgenius.png" ,description: "From board games that can be enjoyed lightly like Bang and Lumicube🎲 to new board games recommended by members♟🎰, a club where you can interact with new people😀🙌, Dulgenius🎲!"},
    { name: "펜통", category: "Education" , image: "pentong.png" ,description: "It is a literary club pen container that welcomes all writers, including poetry, novels, essays, and plays."},
    { name: "DUDUS", category: "Education" , image: "dudus.jpg" ,description: "DUDUS, a creative science club."},
    { name: "청소년 자유학교", category: "Volunteer" , image: "youthfreeschool.png",description: "It is the educational volunteer club 'Youth Free School'." },
    { name: "Palette", category: "Volunteer" , image: "palette.png" ,description: "Filling the world with colors of love"},
    { name: "피스메이커", category: "Volunteer" , image: "peacemaker.png" ,description: "Our Peacemaker Club is a community that helps children from family damage, dual-income families, single-parent families, and underprivileged families to reach out and grow."},
    { name: "LAMP", category: "Volunteer" , image: "lamp.png" ,description: "LAMP is a club that practices warm love with passion and creative ideas"},
    { name: "슬기짜기", category: "Computer" , image: "seulgijjagi.png" ,description: "Anyone who likes or is passionate about computer or coding comes to Sseulgijjagi"},
    { name: "CRA", category: "Computer" , image: "cra.jpg" ,description: "The CRA (Computer Research Club) is a club that researches and studies together the science and technology of the overall field of computers."},
    { name: "GHOST", category: "Computer" , image: "ghost.jpg" ,description: "GHOST stands for Global Handong Oriented Security Team, and it is Handong's only information security club created in July 2000 by people interested in security."},
];


// 페이지 로드 시 모든 동아리를 표시
document.addEventListener('DOMContentLoaded', () => {displayClubs(clubs);});

// 동아리 목록 표시
function displayClubs(clubList) {
    const container = document.getElementById('article-container');
    container.innerHTML = '';
    clubList.forEach(club => {
        const article = document.createElement('div');
        article.classList.add('article');
        article.innerHTML = `
            <img src="${club.image}" alt="${club.name}">
            <div class="article-content">
                <h3>${club.name}</h3>
                <p>${club.description}</p>
                <button onclick="applyToClub('${club.name}')">Apply</button>
            </div>
        `;
        container.appendChild(article);
    });
}

// 카테고리 필터링
function filterCategory(category) {
    const filteredClubs = clubs.filter(club => club.category === category);
    displayClubs(filteredClubs);
}

// 검색 기능
function searchClub() {
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    const filteredClubs = clubs.filter(club => club.name.toLowerCase().includes(query));
    displayClubs(filteredClubs);
}

// Apply 버튼 클릭 시 새 창 열기
function applyToClub(clubName) {
    alert(`Move to Application page for club (${clubName})`);
    window.open(`apply.html?club=${encodeURIComponent(clubName)}`, '_blank');
}