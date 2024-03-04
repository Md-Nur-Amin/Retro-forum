
const latestPost = async() =>{
  const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
  const data = await res.json();
  displayPost(data);
} 

const displayPost = data =>{
  // console.log(data)
  const postContainer = document.getElementById('post-container')
  data.forEach(post =>{
    console.log(post)
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


