<template>
    <div>
        <header>
            <div class="d-flex">
                <h1>Découvrez notre</h1>&nbsp;<span class="head"><i>menu.</i></span>
            </div>
            <div class="d-flex" id="header-left">
                <ul class="d-flex">
                    <li><a href="#">Tout</a></li>
                    <li><a href="#">Viandes</a></li>
                    <li><a href="#">Légumes</a></li>
                </ul>
            </div>
        </header>
        <main>
          <div id="meat-command"></div>
            <div id="meat-card" class="row row-cols-4">
                <div v-for="meal in meals" :key="meal">
                    <div class="col">
                        <section class="plat">
                            <div class="image">
                                <img class="img" :src=meal.imageSrc alt="" />
                                <a @click="afficherCommande(meal.title, meal.imageSrc)" href="#" class="buttonCommand">Commander</a>
                            </div>
                            <div class="legend">
                                <p><img id="star" src="https://svgsilh.com/svg/1139372.svg" />{{ meal.rating }} <span class="reviews">({{ meal.reviews }})</span></p>
                            </div>
                            <div class="description">
                                <p class="title">{{ meal.title }}</p>
                                <p>{{ meal.content }}</p>
                                <p class="price">{{ meal.price }}</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    name: 'LesPlats',
    data() {
        return {
            meals : [
            {
                "imageSrc": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
                "title": "Mélange de légume",
                "content": "Salade de tomates et carottes",
                "price": "5.99 €",
                "rating": 5.0,
                "reviews": 87,
                "type": "flower"
            },
            {
                "imageSrc": "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
                "title": "Macaroni",
                "content": "Pâtes au fromage",
                "price": "2.99 €",
                "rating": 4.8,
                "reviews": 32,
                "type": "meat"
            },
            {
                "imageSrc": "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327??ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
                "title": "Nelli",
                "content": "Hamburger & frites",
                "price": "7.99 €",
                "rating": 4.9,
                "reviews": 89,
                "type": "meat"
            },
            {
                "imageSrc": "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
                "title": "Poppers Jalapeno",
                "content": "Graines de soja croustillantes",
                "price": "8.99 €",
                "rating": 4.6,
                "reviews": 12,
                "type": "flower"
            },
            {
                "imageSrc": "https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
                "title": "Poulet Cajun",
                "content": "Poulet rôti et oeufs",
                "price": "7.99 €",
                "rating": 4.2,
                "reviews": 19,
                "type": "meat"
            },
            {
                "imageSrc": "https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
                "title": "Gâteau au piment",
                "content": "Poulet frit",
                "price": "2.99 €",
                "rating": 5.0,
                "reviews": 61,
                "type": "meat"
            },
            {
                "imageSrc": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
                "title": "Guacamole Mex",
                "content": "Piment mexicain",
                "price": "3.99 €",
                "rating": 4.2,
                "reviews": 95,
                "type": "flower"
            },
            {
                "imageSrc": "https://images.unsplash.com/photo-1565310022184-f23a884f29da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
                "title": "Carnet de Nachos",
                "content": "Nachos croustillants au piment",
                "price": "3.99 €",
                "rating": 3.9,
                "reviews": 26,
                "type": "meat"
            },
            {
                "imageSrc": "https://images.unsplash.com/photo-1582254465498-6bc70419b607?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
                "title": "Boeuf Samsa",
                "content": "Boeuf mexicain fris",
                "price": "3.99 €",
                "rating": 4.5,
                "reviews": 34,
                "type": "meat"
            }]
        }
    },
    methods: {
        afficherCommande(title, image) {
            document.querySelector("#meat-card").style.display = 'none';
            let meatCommand = document.querySelector("#meat-command");
            meatCommand.style.display = 'block';
            meatCommand.innerHTML = `
              Vous avez commandé le repas ${title}.<br /><br />
              <img class="img" src="${image}" alt="" />
            `;

        }
    }
}
</script>

<style>
body {
    font-family: Inter;
    margin: 150px;
}

header {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
}

header div {
    width: 700px;
}

#header-left {
    background-color: #EDF2F7;
    margin-right: 170px;
    width: auto;
}

#header-left ul {
    margin: 0;
    padding: 0;
    align-items: center
}

#header-left li {
    text-align: center;
    color: #718096;
    list-style: none;
    margin: 10px;
    width: 100px;
    padding: 10px;
}

#header-left li a {
    height: 20px;
    color: #718096;
}

#header-left li:hover {
    color: #fff;
    list-style: none;
    background-color: #6416FF;
    margin: 10px;
    width: 100px;
}

#header-left a:hover {
    color: #fff;
    text-decoration: none;
}

#header-left, #header-left li {
    border-radius: 7px;
}

h1 {
    font-size: 40px;
    font-weight: bold;
}

.head {
    background-color: #4D1CF7;
    color: #fff;
    font-weight: 900;
    text-align: center;
    font-size: 45px;
    height: 84px;
    transform : skew(-17deg, 0deg);
    width: 250px;
    height: 67px;
    margin-left: 15px;
}

main {
    float: left;
}

.plat {
    margin: 20px;
}

.img {
    width: 300px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.img:hover {
    filter : opacity(50%);
}

.image {
    margin: 0 auto;
}

.image a {
    color: #fff;
    text-decoration: none;
}

.buttonCommand {
    color: #fff;
    position: absolute;
    top: 24%;
    left: 24%;
    display: none;
    text-align: center;
    font-size: 16px;
    background-color: #4D1CF7;
    margin-left: 20px;
    border-radius: 5px;
    padding: 10px 30px;
    color: #fff;
    display: none;
    width: auto;
} 
 .plat:hover .buttonCommand {
     display: block;
 }

/*.buttonCommand:hover {
    display: block;
}

.buttonCommand {
    background-color: #4D1CF7;
    margin-left: 20px;
    border-radius: 5px;
    padding: 10px 30px;
    color: #fff;
    display: none;
    width: 100px;
}*/

.legend p {
    border: 1px solid #fff;
    color: #fff;
    background-color: #fff;
    margin-top: -40px;
    padding: 5px;
    font-weight: bold;
}

.description {
    background-color: #EDF2F7;
    padding: 20px;
    margin-top: -30px;
    width: 300px;
}

#star {
    margin-right: 5px;
    width: 30px;
}

.title {
    font-weight: bold;
}

.price {
    font-weight: bold;
}

.end {
    display: block;
}

.reviews {
    color: #718096;
}

#meat-command {
  display: none;
  text-align: center;
  margin: 0 auto;
  color: #38B2AC;
  font-size: 30px;
  width: 1500px;
  font-weight: bold;
}
</style>