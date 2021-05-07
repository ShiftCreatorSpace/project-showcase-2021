//TODO: generate lights in background

// note: pictures should have a width of ~500px, height auto

let projects = [
  {
    name: "WeWord",
    author: "Noah Finer",
    description: "Can the Internet crowdsource stories?",
    url: "https://medium.com/shiftcreatorspace/can-the-internet-crowdsource-stories-a-story-of-losing-some-hope-regaining-it-then-losing-it-all-97ca9c0bbdaf",
    img: "assets/projects/weword.png",
    tag: "published",
  },
  {
    name: "Reflect",
    author: "Varun Jindal",
    description: "A quantitative way to reflect on life through a chrome extension!",
    url: "https://medium.com/shiftcreatorspace/reflecting-on-creating-4537e398cca9",
    img: "assets/projects/reflect.png",
    tag: "completed",
  },
  {
    name: "Wellnest",
    author: "Thomas Searle",
    description: "A guided journaling application focused on mindfulness and wellbeing",
    url: "https://medium.com/@tsearle/crafting-wellnest-49601e8cabc1",
    img: "assets/projects/wellnest.png",
    tag: "published",
  }, // MAYBE ADD CUSTOM BACKGROUND POSITION
  {
    name: "BrainTrain",
    author: "Ria Bazaz",
    description: "A workout generator that learns off of your workout style",
    url: "https://medium.com/@ria_38953/my-journey-as-a-creator-e5fc520e2818",
    img: "assets/projects/braintrain.jpg",
    tag: "completed",
  },
  {
    name: "healthe",
    author: "Ria Bazaz",
    description: "Improve personal health and the health of the environment",
    url: "https://medium.com/@ria_38953/my-journey-as-a-creator-e5fc520e2818",
    img: "assets/projects/healthe.jpg",
    tag: "wip",
  }, // SHOULD RIA HAVE 2 PICS???
  {
    name: "rcrd",
    author: "Patrick McElroy",
    description: "An app for people to store important information",
    url: "https://medium.com/shiftcreatorspace/building-rcrd-3c8eb5ded9d8",
    img: "assets/projects/rcrd.png", // MAYBE UPDATE THIS
    tag: "wip",
  },
  {
    name: "Melomane",
    author: "Dana Dean",
    description: "Melomane is a platform that creates conversations around music",
    url: "https://medium.com/shiftcreatorspace/no-new-friends-ff730cce4f36",
    img: "assets/projects/melomane.png", // AHH
    tag: "completed",
  },
  {
    name: "zoomTV",
    author: "Ryan Lieu",
    description: "TV guide for live events on the internet",
    url: "https://medium.com/shiftcreatorspace/zoomtv-a-story-about-hackathons-and-creative-ruts-603210bfd1d9",
    img: "assets/projects/zoomtv.png",
    tag: "completed",
  },
  {
    name: "Dangangronpa Engine",
    author: "Adris Jautakas",
    description: "Lets you (easily?) make a Danganronpa game. If you know what Danganronpa is, I'm sorry.",
    url: "https://medium.com/shiftcreatorspace/the-perks-of-being-a-weaboo-798630a69453",
    img: "assets/projects/weeb.png",
    tag: "wip",
  },
  {
    name: "Unmissable",
    author: "Julia Dean",
    description: "Unmissable allows users to find more concerts through friends and following artists/locations",
    url: "https://medium.com/shiftcreatorspace/unmissable-7f797137c31c",
    img: "assets/projects/unmissable.png",
    tag: "completed",
  },
  {
    name: "My Scattered Thoughts in a Form of Art",
    author: "Elizabeth Yang",
    description: "A collection of abstract art pieces/doodles that express the inner workings of what goes on in my head at the time I'm creating",
    url: "https://medium.com/@eeyangg/what-shift-really-taught-me-5f984faaa2f2",
    img: "assets/projects/art.jpg",
    tag: "completed",
  },
  {
    name: "Sound Shapes",
    author: "Jason Pi",
    description: "Enabling tactile modulation of sound",
    url: "https://medium.com/@jasonpi/sound-shapes-caed5231f148",
    img: "assets/projects/blocks.png",
    tag: "completed",
  },
  {
    name: "STEM Kit",
    author: "Sneha Ojha",
    description: "STEM kit to help expose young girls to engineering concepts",
    url: "https://medium.com/@sojha_88489/finding-project-resources-at-michigan-1a8ee23ab9e5",
    img: "assets/projects/stem.png",
    tag: "wip",
  },
  {
    name: "Music Player",
    author: "Sam Hovie",
    description: "A minimalist mp3 player",
    url: "https://medium.com/@samhovie/my-experience-in-shift-f01d0fadbd24",
    img: "assets/projects/mp3.jpg",
    tag: "wip",
  },
  {
    name: "Lichen",
    author: "Jacob Yoso",
    description: "A collective, a publication, platform focused on environmental science, art and activism",
    url: "https://medium.com/shiftcreatorspace/shift-2019-2020-2dd824c667d1",
    img: "assets/projects/lichen.jpeg",
    tag: "wip",
  },
  {
    name: "0hh1",
    author: "Kaoru Murai",
    description: "A iOS puzzle game to strategically fill a board with red and blue tiles",
    url: "https://medium.com/@kaolugo/a-deceptively-simple-puzzle-game-0hh1-ffe62c801d7d",
    img: "assets/projects/0hh1.png",
    tag: "completed",
  },
  {
    name: "A Fly City",
    author: "Manasvi Parikh",
    description: "Fly through a 3D modeled city",
    url: "https://medium.com/@manasvi.parikh3/city-blend-d669db322da2",
    img: "assets/projects/cityframe.png",
    tag: "completed",
  },
  {
    name: "Dear World/Us The Humans",
    author: "Abey Noble",
    description: "What does it mean to be human? Well, I try to capture that in brand and blog.",
    url: "https://medium.com/@abeython/what-does-it-mean-to-be-human-d25a7c3f00c8",
    img: "assets/projects/dearworld.png",
    tag: "published",
  },
  {
    name: "Inflow",
    author: "Amar Ramachandran",
    description: "How does information flow through the internet? I set out to find the answers...",
    url: "https://medium.com/shiftcreatorspace/inflow-fa0f4009cee5",
    img: "assets/projects/inflow.png",
    tag: "published",
  },
  {
    name: "Making a Leather Wallet",
    author: "Eric Zhong",
    description: "Making a wallet that's built to last - and look better with time",
    url: "https://medium.com/shiftcreatorspace/making-a-leather-wallet-daefa8e2dfee",
    img: "assets/projects/wallet.jpg",
    tag: "completed",
  },
  {
    name: "RecTable",
    author: "Julia Averbuch & Eric Zhong",
    description: "A data analytics platform for small restaurants to optimize profitability",
    url: "https://medium.com/shiftcreatorspace/saas-development-4937fb1dbab8",
    img: "assets/projects/rectable-screenshot.png",
    tag: "published",
  },
  {
    name: "Treenote",
    author: "Fengjin Cui",
    description: "Visual model for your notes!",
    url: "https://medium.com/@cfengjin/treenote-fbf2a545d23f",
    img: "assets/projects/treenote.png",
    tag: "wip",
  },
  {
    name: "entry",
    author: "Wen Si",
    description: "A social journaling app",
    url: "https://medium.com/shiftcreatorspace/entry-starting-from-the-ground-up-c41aaa395418",
    img: "assets/projects/entry-mockups.png",
    tag: "wip",
  },
  {
    name: "Maize Days",
    author: "Sanya Verma",
    description: "A podcast to tell stories about student-led organizations",
    url: "https://medium.com/@sanyav/maize-days-51cb814c654f",
    img: "assets/projects/maizedays.png",
    tag: "wip",
  },
  {
    name: "PT-Time",
    author: "Jessie Singh",
    description: "Enable Physical Therapists to better understand their time",
    url: "https://medium.com/@jessiesingh7/a-journey-learning-to-create-362999f4bd78",
    img: "assets/projects/pttime.png",
    tag: "wip",
  },
  {
    name: "A Decade Ago",
    author: "Neil Macasilli-Tan",
    description: "The best and the worst of investments from 2010 til now",
    url: "https://medium.com/@nmtan/on-virality-373157796313",
    img: "assets/projects/adecadeago.png",
    tag: "published",
  }
];

let getProjectHTML = (project, idx) => {
  const getShape = () => {
    const type = ['rect', 'circle', 'diag', 'line'][Math.floor(Math.random()*4)];
    const topOffset = Math.random()*4 + 1 + "rem";
    const leftOffset = (Math.random()*11 + 3) + "rem";
    const direction1 = "bottom";
    const direction2 = Math.random() > 0.5 ? "left" : "right";
    return {
      type,
      topOffset,
      leftOffset,
      direction1,
      direction2,
    };
  };

  shape1 = getShape();
  shape2 = getShape();
  shape3 = getShape();

  return `
  <div class="projectouter">
    <a href="${project.url}" target="_blank" class="project" id="project-${idx}" style="
                              animation-delay: ${idx*0.2}s;
                              transform:
                              scale(1)
                              translate(0, 0)
                                ">
      <div class="project--gradient">
        <span class="project--gradient__span"></span>
      </div>
      <div class="project--image lazy" style="background-image: url('${project.img}')">
      </div>

      <div class="project--text">
        <h4>${project.name}</h4>
        <h5>${project.author}</h5>
        <p style="/*${(project.tag === "published" || project.tag === "completed") ? "margin-bottom: 0.8rem;" : ""}*/">${project.description}</p>
        <!--${(project.tag === "published" || project.tag === "completed") ? "<span class='tag'>"+project.tag+"</span>" : ""}-->
      </div>
      <div class="shape ${shape1.type}" style="${shape1.direction1}: ${shape1.topOffset}; ${shape1.direction2}: ${shape1.leftOffset}"></div>
      <div class="shape ${shape2.type}" style="${shape2.direction1}: ${shape2.topOffset}; ${shape2.direction2}: ${shape2.leftOffset}"></div>
      <div class="shape ${shape3.type}" style="${shape3.direction1}: ${shape3.topOffset}; ${shape3.direction3}: ${shape3.leftOffset}"></div>
    </a>
  </div>
  `;
};

const getUpperShape = (idx) => {
  if(!idx) idx = Math.floor(Math.random()*5);
  const type = ['rect', 'circle', 'diag', 'window', 'window'][idx];
  const top = Math.random()*20 - 10 + "rem";
  const left = (Math.random()*110 - 15) + "%";
  const delay = -Math.random()*5 + "s";
  return `
    <div class="upper-shape ${type}" style="top: ${top}; left: ${left}; animation-delay: ${delay};"></div>
  `;

};

function lazyLoad() {
  let scroll = $(window).scrollTop() + window.innerHeight;
  $(".lazy").each(function(idx) {
    if($(this).offset().top <= scroll) {
      $(this).removeClass("lazy");
    }
  });
}

// in place shuffling
// from https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

$(document).ready(function() {
  $(window).scroll(lazyLoad);
  shuffle(projects);

  // sort projects by tags
  const tagOrder = ["published", "completed", "wip"];

  projects.sort((a, b) => {
    const aIdx = tagOrder.indexOf(a.tag);
    const bIdx = tagOrder.indexOf(b.tag);
    if(aIdx < bIdx) {
      return -1;
    } else {
      return 1;
    }
  });

  projects.forEach((project, idx) => {
    $("#project-display").append(getProjectHTML(project, idx));
  });

  lazyLoad();

  $(".projectouter").on('mousemove', function(e){    
      const target = $(this).find(".project");
      if(!target) return false;

      const offset = target.offset();

      if(offset) {
        let xAxis = (e.pageX - offset.left - target.width()/2) / 8;
        let yAxis = (e.pageY - offset.top - target.height()/2) / 10;
  
        target.css("transform", `rotateY(${-xAxis}deg) rotateX(${yAxis}deg) scale3d(1.1, 1.1, 1.1)`);

        const gradient = $(this).find(".project--gradient__span");
        gradient.css("transform", `scale(2) translateX(${-xAxis*3}px) translateY(${yAxis*3}px)`);
      }
  });
  $(".projectouter").mouseleave(function(e) {
    $(this).find(".project").css("transform", "rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)");
  });


  for(let i = 0; i < 20; i++) {
    $("#upper-shapes").append(getUpperShape(i % 5));
  }
});
