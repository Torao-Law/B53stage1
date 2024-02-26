// class SayHello {
//   getName() {
//     return `Hello bang`
//   }
// }

// const data = new SayHello()

// console.log(data.getName())



class Testimonial {
  #quote = "" // # => membuat property menjadi private
  #image = ""

  constructor(quote, image) {
    this.#quote = quote;
    this.#image = image;
  }

  get quote() {
    return this.#quote
  }

  get image() {
    return this.#image
  }

  get ShowTestimonials() {
    return `<div class="testimonial">
              <img
                class="profile-testimonial"
                src=${this.image}
                alt="profile"
              />
              <p class="quote">${this.quote}</p>
              <p class="author">${this.author}</p>
            </div>`
  }
}

class Author extends Testimonial {
  #author = ""

  constructor(author, quote, image) {
    super(quote, image)
    this.#author = author
  }

  get author() {
    return this.#author
  }
}



class Company extends Testimonial{
  #company = ""

  constructor(company, quote, image) {
    super(quote, image)
    this.#company = company
  }

  get author() {
    return this.#company + " Corporation";
  }
}

const user = new Author(
    "Putri Maharani solid", 
    "Dijamin jadi gila kalau belajar OOP", 
    "https://images.unsplash.com/photo-1696246847440-bb0047ba93ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
  )
const user1 = new Author(
    "Putri Maharani solid", 
    "Dijamin jadi gila kalau belajar OOP", 
    "https://images.unsplash.com/photo-1696246847440-bb0047ba93ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
  )
const user2 = new Author(
    "Putri Maharani solid", 
    "Dijamin jadi gila kalau belajar OOP", 
    "https://images.unsplash.com/photo-1696246847440-bb0047ba93ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
  )

const user3 = new Company(
    "Putri Maharani solid", 
    "Dijamin jadi gila kalau belajar OOP", 
    "https://images.unsplash.com/photo-1696246847440-bb0047ba93ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
  )

let data = [user, user1, user2, user3]
let dataForHTML = ''

for( let i = 0; i < data.length; i++) {
  dataForHTML += data[i].ShowTestimonials
}

document.getElementById("testimonials").innerHTML = dataForHTML

