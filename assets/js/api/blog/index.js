// const dotenv = require('dotenv')

const blog_list_section = document.querySelector('.blog-list-section');

// Card page
const blog_card_title = document.querySelector('.blog-card-title')
const blog_card_description = document.querySelector('.blog-card-description')
const blog_card_image = document.querySelector('.blog-card-image')

axios({
    method: 'get',
    url: 'http://54.91.21.194/api/blogs',
    responseType: 'json'
  })
  .then(function (response) {
    console.log(response.data.data)
    
    blog_cards(
                response.data.data[0].attributes.title,
                response.data.data[0].attributes.description,
                response.data.data[0].attributes.featured_image
              )
  });

  const blog_cards = (blog_title, blog_description, blog_image)=>{
    blog_card_title.innerHTML = blog_title
    blog_card_description.innerHTML = blog_description
    blog_card_image.src = blog_image
  }
  // featured_image