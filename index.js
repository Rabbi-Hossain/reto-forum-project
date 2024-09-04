
const AllPostDataLoad = async (serchFieldText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${serchFieldText}`)
    const data = await res.json()
    console.log(data.posts)
    displayData(data.posts,serchFieldText)
}

const displayData = (allPosts) => {
    console.log(allPosts)
    const mainConterElementId = document.getElementById('allPostContainer-id')
    mainConterElementId.innerHTML = ''

    allPosts.forEach(allPost => {
        const div = document.createElement('div')
        div.classList = 'bg-[#F3F3F5] p-6 rounded-3xl hover:bg-[#797DFC]'
        div.innerHTML =`
         <div
         
          class="avatar online mt-2 ">
                                <div class="mask mask-squircle w-24">
                                    <img
                                        src=${allPost.image} />
                                </div>
                            </div>
                            <!-- avater right side -->
                            <div class="ml-4 mt-10">
                                <div class="flex">
                                    <h3>#${allPost.category}</h3>
                                    <span class="ml-6">${allPost.author.name}</span>
                                </div>
                                <h3 id='title-id' class="text-[#12132D] font-bold mt-3">${allPost.title
                                }
                                </h3>
                                <p class="mt-4">${allPost.description}</p>
                                <p class="decoration-double ... ">
                                    ..........................................................
                                </p>
                                <!-- dotted icon div -->
                                <div class="flex justify-between mt-5">
                                    <div class="flex gap-6">
                                        <span class="ml-6 flex">
                                        <img class="mr-2" src="tabler-icon-message-2.jpg" alt="">
                                        ${allPost.
                                            comment_count
                                            }</span>
                                        
                                        <span class="ml-6 flex">
                                        <img class="mr-2" src="tabler-icon-eye.jpg" alt="">
                                        ${allPost.
                                            view_count
                                            }
                                        </span>
                                        
                                        <span class="ml-6 flex">
                                        <img class = 'mr-2' src="tabler-icon-clock-hour-9.jpg" alt="">
                                        ${allPost.
                                            posted_time
                                            }
                                        </span>
                                    </div>
                                    <div>
                                        <img src="email 1 (1).jpg" alt="">
                                    </div>
                                </div>
                            </div>

                            

    
        `
        
        mainConterElementId.appendChild(div)
    });
}


const searchHandler = (id)=>{
    const serchFieldElementId = document.getElementById('search-field')
    const serchFieldText = serchFieldElementId.value
    console.log(serchFieldText )
    AllPostDataLoad(serchFieldText)
}




AllPostDataLoad()
searchHandler()