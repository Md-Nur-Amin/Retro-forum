const latestPost = async() =>{
  const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
  const data = await res.json();
  displayPost(data);
} 

const displayPost = data =>{
  // console.log(data)
  const postContainer = document.getElementById('post-container')
  data.forEach(post =>{
    // console.log(post)
    const postCard = document.createElement('div')
    postCard.classList = `card w-96 bg-base-100 shadow-xl rounded-3xl border-[#12132D26]`
    postCard.innerHTML = `
    <figure><img class="p-5 h-[200px] w-[326px] rounded-3xl" src="${post.cover_image
    }" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="text-[#12132D99]"> ${post.author.posted_date}</h2>
      <p class="pt-5 font-extrabold text-[#12132D] text-[18px]">${post.title}</p>
      <p class="pt-5 text-[#12132D99] text-base">${post.description}</p>
      <div class="flex ">
        <img class="mt-5 absolute rounded-r-full h-[22px] w-[22px] lg:h-[44px] lg:w-[44px]" src="${post.profile_image}" alt="">
        <p class="ml-20 pt-5 font-extrabold text-[#12132D] text-[16px]">${post.author.name}</p>
      </div>
      <p class="ml-20 text-[#12132D99] text-[14px]">${post.author.designation}</p>
    </div>`

    postContainer.appendChild(postCard)
  })

}
latestPost();




// All post start
const allPost = async() =>{
  const res2 = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
  const newData = await res2.json();
  const allNewPost = newData.posts
  displayAllPost(allNewPost)
}

const displayAllPost = allNewPost =>{
  const allPostContainer = document.getElementById('all-post-container')

  allNewPost.forEach(newPost =>{
    const allPostCard = document.createElement('div')
    allPostCard.classList = `grid my-6 lg:flex lg:gap-x-10 pt-10 pb-20 pr-20 rounded-3xl border-[#797DFC1A] bg-[#797DFC1A] lg:h-[300px] lg:w-[772px]`
    
    allPostCard.innerHTML = `
    <div>
    <span class="ml-32 badge ${newPost.isActive? "bg-green-600" : "bg-red-600"}"></span>
    <img class="ml-16 rounded-2xl h-[100px] w-[150px] lg:h-[72px] lg:w-[72px]" src="${newPost.image}" alt="">
  </div>

  <div>
    <div class="lg:flex   ml-16 lg:ml-0 mt-5 lg:gap-x-5">
      <p class="font-medium text-[#12132DCC] text-sm text-center"># ${newPost.category}</p>
      <p class="font-medium text-[#12132DCC] text-sm text-center">Author : ${newPost.author.name}</p>
    </div>

    <div>
      <p class="flex ml-16 lg:ml-0 my-3 font-bold text-[#12132D] text-[14px] lg:text-xl">${newPost.title}"</p>
      <p class="flex ml-16 lg:ml-0 text-[#12132D99] text-[12px] lg:text-base lg:font-[400]">${newPost.description}</p>
      <hr class="flex ml-16 lg:ml-0 bg-black border-dashed my-5">
    </div>

    <div class="flex gap-x-3  ml-[50px] lg:ml-0">
      <img class="w-[18px] h-[18px] lg:w-[21px] lg:h-[19px]" src="images/comment.png" alt="">
      <p class="lg:mr-7 text-[#12132D99] text-[12px] lg:text-base">${newPost.comment_count}</p>

      <img class="w-[18px] h-[18px] lg:w-[21px]" src="images/eye.png" alt="">
      <p class="lg:mr-7 text-[#12132D99] text-[12px] lg:text-base">${newPost.view_count}</p>

      <img class="w-[18px] h-[18px] lg:w-[21px]" src="images/clock.png" alt="">
      <p class="text-[#12132D99] text-[12px] lg:text-base">${newPost.posted_time}</p>
      <button class="button lg:ml-[200px] btn btn-circle h-[28px] w-[28px]">
      <img src="images/msg_box.png" alt="">
    </button>
    </div>
  </div>
    `
    allPostContainer.appendChild(allPostCard)
  })
}
allPost();

// all post end

// Search button 

const searchButton = () =>{
  const searchField = document.getElementById('search-field')
  const searchText = searchField.value;
  console.log(searchText)
}


 const buttn = document.getElementsByClassName('button')
 document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll('.button');
  let count = 0;
  buttons.forEach(btn => {
    btn.addEventListener('click', function() {
            count++;
            document.getElementById('cnt').textContent = count;
    })

})
 })





