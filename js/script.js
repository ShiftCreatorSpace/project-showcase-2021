//TODO: generate lights in background

let exampleJSON = [
  {
    name: "WeWord",
    author: "Noah Finer",
    description: "Can the Internet crowdsource stories?",
    url: "https://weword.co",
    img: "assets/projects/weword.png",
  },
  {
    name: "WeWord",
    author: "Noah Finer",
    description: "Can the Internet crowdsource stories?",
    url: "https://weword.co",
    img: "assets/projects/weword.png",
  },
  {
    name: "WeWord",
    author: "Noah Finer",
    description: "Can the Internet crowdsource stories?",
    url: "https://weword.co",
    img: "assets/projects/weword.png",
  },
  {
    name: "WeWord",
    author: "Noah Finer",
    description: "Can the Internet crowdsource stories?",
    url: "https://weword.co",
    img: "assets/projects/weword.png",
  },
  {
    name: "WeWord",
    author: "Noah Finer",
    description: "Can the Internet crowdsource stories?",
    url: "https://weword.co",
    img: "assets/projects/weword.png",
  },
  {
    name: "WeWord",
    author: "Noah Finer",
    description: "Can the Internet crowdsource stories?",
    url: "https://weword.co",
    img: "assets/projects/weword.png",
  },
  {
    name: "WeWord",
    author: "Noah Finer",
    description: "Can the Internet crowdsource stories?",
    url: "https://weword.co",
    img: "assets/projects/weword.png",
  },
  {
    name: "WeWord",
    author: "Noah Finer",
    description: "Can the Internet crowdsource stories?",
    url: "https://weword.co",
    img: "assets/projects/weword.png",
  },
  {
    name: "WeWord",
    author: "Noah Finer",
    description: "Can the Internet crowdsource stories?",
    url: "https://weword.co",
    img: "assets/projects/weword.png",
  },
  {
    name: "WeWord",
    author: "Noah Finer",
    description: "Can the Internet crowdsource stories?",
    url: "https://weword.co",
    img: "assets/projects/weword.png",
  },
  {
    name: "WeWord",
    author: "Noah Finer",
    description: "Can the Internet crowdsource stories?",
    url: "https://weword.co",
    img: "assets/projects/weword.png",
  },
  {
    name: "WeWord",
    author: "Noah Finer",
    description: "Can the Internet crowdsource stories?",
    url: "https://weword.co",
    img: "assets/projects/weword.png",
  },
  {
    name: "WeWord",
    author: "Noah Finer",
    description: "Can the Internet crowdsource stories?",
    url: "https://weword.co",
    img: "assets/projects/weword.png",
  }

]

let getProjectHTML = (project, idx) => {
  return `
    <a href="${project.url}" target="_blank" class="project" style="
                              animation-delay: ${idx*0.2}s;
                              transform:
                                scale(1)
                                translate(${Math.random()*30-15}px, ${Math.random()*30-15}px)
                                rotate(${Math.random()*6-3}deg)
                                ">
      <div class="project--image lazy" style="background-image: url('${project.img}')">
        <i class="fas fa-arrow-right arrow-link"></i>
      </div>


      <div class="project--text">
        <h4>${project.name}</h4>
        <h5>${project.author}</h5>
        <p>${project.description}</p>
      </div>
    </a>
  `
}

function lazyLoad() {
  let scroll = $(window).scrollTop() + window.innerHeight;
  $(".lazy").each(function(idx) {
    if($(this).offset().top <= scroll) {
      $(this).removeClass("lazy");
    }
  })
}

$(document).ready(function() {
  $(window).scroll(lazyLoad);
  exampleJSON.forEach((project, idx) => {
    $("#project-display").append(getProjectHTML(project, idx));
  });
  lazyLoad();
})
