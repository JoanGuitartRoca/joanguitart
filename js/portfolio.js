const PortfolioData = [
    {
        name: "Emilio Sanchez",
        tool: "Prestashop",
        description: "",
        url: "https://emiliosanchezgourmet.com/gb/",
        img: "assets/demo/1.jpg",
    },
    {
        name: "Colored",
        tool: "React JS",
        description: "",
        url: "https://emiliosanchezgourmet.com/gb/",
        img: "assets/demo/2.jpg",
    },
    {
        name: "Colored",
        tool: "React JS",
        description: "",
        url: "https://emiliosanchezgourmet.com/gb/",
        img: "assets/demo/3.jpg",
    },
    {
        name: "Colored",
        tool: "React JS",
        description: "",
        url: "https://emiliosanchezgourmet.com/gb/",
        img: "assets/demo/4.jpg",
    },
    {
        name: "Colored",
        tool: "React JS",
        description: "",
        url: "https://emiliosanchezgourmet.com/gb/",
        img: "assets/demo/5.jpg",
    },
    {
        name: "Colored",
        tool: "React JS",
        description: "",
        url: "https://emiliosanchezgourmet.com/gb/",
        img: "assets/demo/6.jpg",
    },
]


const portfolio_box = document.querySelector('#portfolio-box');

PortfolioData.map( (project) => {
    portfolio_box.innerHTML += 
                                `
                                <div class="swiper-slide">
                                    <img src=${ project.img } alt="">
                                    <div class="info">
                                        <div class="text-box">
                                        <h4> ${ project.name } </h4>
                                        <h5> ${ project.tool } </h5>
                                        <p> ${ project.description } </p>
                                        <a href=${ project.url } target="_blank" class="button">View</a>
                                        </div>
                                    </div>
                                </div>
                                `
})