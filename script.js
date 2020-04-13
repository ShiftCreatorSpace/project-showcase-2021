//TODO: lazy loading for images

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
  }
]

let getProjectHTML = (project, idx) => {
  return `
    <a href="${project.url}" class="project" style="
                              animation-delay: ${idx*0.2}s;
                              transform:
                                scale(1)
                                translate(${Math.random()*30-15}px, ${Math.random()*30-15}px)
                                rotate(${Math.random()*6-3}deg)
                                ">
      <div class="project--image" style="background-image: url('${project.img}')">
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

$(document).ready(function() {
  exampleJSON.forEach((project, idx) => {
    $("#project-display").append(getProjectHTML(project, idx));
  });
})
