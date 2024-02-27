// =======================================================================
// =======================             ===================================
// =======================             ===================================
// ======================= VERSION OOP ===================================
// =======================             ===================================
// =======================             ===================================
// =======================================================================

// class Testimonial {
//   #quote = "" // # => membuat property menjadi private
//   #image = ""

//   constructor(quote, image) {
//     this.#quote = quote;
//     this.#image = image;
//   }

//   get quote() {
//     return this.#quote
//   }

//   get image() {
//     return this.#image
//   }

//   get ShowTestimonials() {
//     return `<div class="testimonial">
//               <img
//                 class="profile-testimonial"
//                 src=${this.image}
//                 alt="profile"
//               />
//               <p class="quote">${this.quote}</p>
//               <p class="author">${this.author}</p>
//             </div>`
//   }
// }

// class Author extends Testimonial {
//   #author = ""

//   constructor(author, quote, image) {
//     super(quote, image)
//     this.#author = author
//   }

//   get author() {
//     return this.#author
//   }
// }



// class Company extends Testimonial{
//   #company = ""

//   constructor(company, quote, image) {
//     super(quote, image)
//     this.#company = company
//   }

//   get author() {
//     return this.#company + " Corporation";
//   }
// }

// const user = new Author(
//     "Putri Maharani solid", 
//     "Dijamin jadi gila kalau belajar OOP", 
//     "https://images.unsplash.com/photo-1696246847440-bb0047ba93ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
//   )
// const user1 = new Author(
//     "Putri Maharani solid", 
//     "Dijamin jadi gila kalau belajar OOP", 
//     "https://images.unsplash.com/photo-1696246847440-bb0047ba93ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
//   )
// const user2 = new Author(
//     "Putri Maharani solid", 
//     "Dijamin jadi gila kalau belajar OOP", 
//     "https://images.unsplash.com/photo-1696246847440-bb0047ba93ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
//   )

// const user3 = new Company(
//     "Putri Maharani solid", 
//     "Dijamin jadi gila kalau belajar OOP", 
//     "https://images.unsplash.com/photo-1696246847440-bb0047ba93ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
//   )

// let data = [user, user1, user2, user3]
// let dataForHTML = ''

// for( let i = 0; i < data.length; i++) {
//   dataForHTML += data[i].ShowTestimonials
// }

// document.getElementById("testimonials").innerHTML = dataForHTML






// =======================================================================
// =======================             ===================================
// =======================             ===================================
// ======================= VERSION HOF ===================================
// =======================             ===================================
// =======================             ===================================
// =======================================================================
const data = [
  {
    name: "Almas Fadhilah",
    comment: "Jangan lupa mandi",
    image: "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?t=st=1709005056~exp=1709008656~hmac=5fe80bbd1fcc061cb1cc45c8ba117a495138c7d19ada0f4c82039d59a95e8164&w=740",
    rating: 3
  },
  {
    name: "Naila Soima",
    comment: "Ganteng Banget",
    image: "https://img.freepik.com/free-photo/thoughtful-asian-woman-looking-aside-pondering-making-assumption-thinking-choosing-smth-standing-white-background_1258-89213.jpg?t=st=1709005106~exp=1709008706~hmac=e18eb3ad9c1a23f1895f8c213fb6699a1309d0bb5ef42d88ffb1a214842ea09c&w=740",
    rating: 5
  },
  {
    name: "Ibnu Ihsanul",
    comment: "Ga tau aku tu bang",
    image: "https://img.freepik.com/free-photo/boy-blue-jacket_1187-2984.jpg?t=st=1709005167~exp=1709008767~hmac=209c2df29a1a788b06e43b91ec0e0928429f70151acd1e495ec09ab5c20cf9e4&w=740",
    rating: 2
  },
  {
    name: "Zuyyina Zahra",
    comment: "eh ha'ah laaa",
    image: "https://img.freepik.com/free-photo/beautiful-smiling-asian-female-model-showing-thumbs-up-looking-pleased-recommending-express-positive-feedback-standing-white-background_1258-89286.jpg?t=st=1709005216~exp=1709008816~hmac=52c700c763fe19363067ebbbe9568e2db1dc499ac47c0532a9e5c8b9b74235f5&w=740",
    rating: 2
  },
  {
    name: "Reihan Firdaus",
    comment: "Gas Makan siang Gratis",
    image: "https://img.freepik.com/free-photo/bearded-man-denim-shirt-round-glasses_273609-11430.jpg?w=740&t=st=1709005274~exp=1709005874~hmac=8474c54c4a3bd2c163c56f6930882c99fc52540c5227c6823e3b1aac72670c4e",
    rating: 4
  },
]

// show all testimonial datas
function Testimonials() {
  let dataHTML = ''

  data.forEach(function (data) {
    dataHTML += `
        <div class="testimonial">
        <img
          class="profile-testimonial"
          src="${data.image}"
        />
        <p class="quote">${data.comment}</p>
        <p class="author">- ${data.name}</p>
      </div>
    `
  })

  document.getElementById("testimonials").innerHTML = dataHTML
}
Testimonials()



const FilterTestimonial = (rating) => {
  let dataHTML = ''

  const dataFiltered = data.filter((data) => {
    return data.rating === rating
  })

  if(!dataFiltered.length) {
    dataHTML += `<h1>Data not found!!</h1>`
  } else {
    dataFiltered.forEach((data) => {
      console.log(data)
      dataHTML += `
          <div class="testimonial">
          <img
            class="profile-testimonial"
            src="${data.image}"
          />
          <p class="quote">${data.comment}</p>
          <p class="author">- ${data.name}</p>
        </div>
      `
    })
  }
  document.getElementById("testimonials").innerHTML = dataHTML
}