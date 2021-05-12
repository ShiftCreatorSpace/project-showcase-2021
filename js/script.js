//TODO: generate lights in background

// note: pictures should have a width of ~500px, height auto

let projects = [
  {
    name: "Generative Art",
    author: "Noah Finer",
    description: "Messing around with shapes and lines",
    url: "https://levelup.gitconnected.com/failing-successfully-my-process-of-learning-generative-art-a440dded40a",
    img: "assets/projects/generative.png",
    tag: "published",
  },
  {
    name: "Nonsense Books",
    author: "Kristina Rogers",
    description: "Nonsense racing thoughts captured in an ancient style archive",
    url: "https://krrogers-39627.medium.com/documenting-time-and-thought-through-objects-71d21fab27af",
    img: "assets/projects/shiftbook9.jpg",
    tag: "published",
  },
  {
    name: "Physical Time",
    author: "Kristina Rogers",
    description: "Manifesting unusual ways of recording time",
    url: "https://krrogers-39627.medium.com/documenting-time-and-thought-through-objects-71d21fab27af",
    img: "assets/projects/physicaltime.png",
    tag: "published",
  },
  {
    name: "Multitimbral Cello",
    author: "Jacob Hume",
    description: "Cello, meet digital audio",
    url: "https://jakehume.medium.com/multitimbral-cello-d4af89d279ed",
    img: "assets/projects/cello.jpeg",
    tag: "published",
  },
  {
    name: "Personal Portfolio Site",
    author: "Maia Muzumdar",
    description: "A working draft of my portfolio site: in progress!!",
    url: "https://maiamuzu.medium.com/finding-my-way-through-failing-acb7a35b84ce",
    img: "assets/projects/portfolio.png",
    tag: "published",
  },
  {
    name: "Flap",
    author: "Esha Maheshwari",
    description: "An animated storyline where every choice matters",
    url: "https://eshamaheshwari.medium.com/2021-a-year-of-learning-bd544962488e",
    img: "assets/projects/flap.jpg",
    tag: "published",
  },
  {
    name: "Untitled",
    author: "Fengjin Cui",
    description: "Personal encyclopedia",
    url: "https://medium.com/shiftcreatorspace/composition-visualization-ca1981cb1e87",
    img: "assets/projects/untitled.png",
    tag: "published",
  },
  {
    name: "Cacophony",
    author: "Fengjin Cui",
    description: "A chord sequencer that visualizes the physics of harmony",
    url: "https://medium.com/shiftcreatorspace/composition-visualization-ca1981cb1e87",
    img: "assets/projects/cacaphony.png",
    tag: "published",
  },
  {
    name: "Minecraft Bot",
    author: "Adris Jaukatas",
    description: "Plays Block game or Plays You",
    url: "https://adris-24630.medium.com/the-minecraft-and-margarita-69f3496cebf7",
    img: "assets/projects/minecraft.png",
    tag: "published",
  },
  {
    name: "OctoClock",
    author: "Ethan Burt",
    description: "A clock that represents time in a different way",
    url: "https://burteth.medium.com/led-clock-802acad93a8",
    img: "assets/projects/octoclock.png",
    tag: "published",
  },
  {
    name: "(bestie) book club",
    author: "Meera Kumar",
    description: "SHIFT-wide book club to foster discussion, debate and learning",
    url: "https://meerak5000.medium.com/eggsplaining-my-freshman-year-ed7d20ef0fad",
    img: "assets/projects/octoclock.png",
    tag: "published",
  },
  {
    name: "pK moon",
    author: "Paul Moon",
    description: "making original music!",
    url: "https://pkmoon.medium.com/pk-moon-62be163d0ca2",
    img: "assets/projects/moon.png",
    tag: "published",
  },
  {
    name: "Agos Artistry",
    author: "Patrick McElroy",
    description: "A clothing brand and business I own with a friend",
    url: "https://pdmcelroy1001.medium.com/agos-artistry-3c5898b13c0b",
    img: "assets/projects/agos.png",
    tag: "published",
  },
  {
    name: "Conceptual Furniture Design",
    author: "Caitie Cardwell",
    description: "An exploration in abstracted conceptual chair design",
    url: "https://ccard.medium.com/conceptual-furniture-design-be0cef5237db",
    img: "assets/projects/chairs.png",
    tag: "published",
  },
  {
    name: "Squirrel Picnic Table",
    author: "Varun Jindal",
    description: "A wooden picnic table so that squirrels can feast",
    url: "https://vjindal0112.medium.com/squirrels-and-feeling-shifted-3ea86c4d250c",
    img: "assets/projects/squirrel.png",
    tag: "published",
  },
  {
    name: "Music for Thirteen Ways of Looking at a Blackbird",
    author: "Zan Huang",
    description: "Imagist music for solo clarinet and narrator",
    url: "https://zan-huang.medium.com/fully-decentralized-social-media-network-and-thirteen-way-1fc9cb4e4382",
    img: "assets/projects/squirrels.png",
    tag: "published",
  },
  {
    name: "Creative Explorations",
    author: "Sanya Verma",
    description: "I explored various forms of creativity through my projects from 2D vs 3D to digital vs analog",
    url: "https://sanyav.medium.com/creative-explorations-6eb06706aba2",
    img: "assets/projects/blind.png",
    tag: "published",
  },
  {
    name: "Virtual Escape",
    author: "Jessie Singh",
    description: "A cybersecurity virtual escape room",
    url: "https://jessiesingh7.medium.com/stranger-your-country-needs-you-lessons-learned-crafting-a-mystery-e0bdbb82090b",
    img: "assets/projects/escape.png",
    tag: "published",
  },
  {
    name: "Wishly",
    author: "Eric Zhong",
    description: "Gift your favorite internet creator something they actually want",
    url: "https://medium.com/shiftcreatorspace/wishly-pan-rack-x-bottling-co-f64353da33c5",
    img: "assets/projects/wishly.png",
    tag: "published",
  },
  {
    name: "Bottling Co.",
    author: "Eric Zhong",
    description: "Turning drinking into a full time job ",
    url: "https://medium.com/shiftcreatorspace/wishly-pan-rack-x-bottling-co-f64353da33c5",
    img: "assets/projects/alc.jpg",
    tag: "published",
  },
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
