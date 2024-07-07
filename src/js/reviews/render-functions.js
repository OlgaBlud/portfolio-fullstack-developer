export const createReviewsList = reviews => {
  return reviews
    .map(
      reviewData => ` 
     <li class=" reviews-item-container swiper-slide" id="${reviewData._id}">
     <div class="card-reviews">
     
       <div class="reviews-item item-details">
           <img
              class="reviews-avatar"
              alt="${reviewData.author}"
              src="${reviewData.avatar_url}" 
              loading="lazy"
            />          

          <h3 class="reviews-name">${reviewData.author}</h3>
          <p class="reviews-text">
            ${reviewData.review}
          </p>
        </div>
        <div class="img-big-avatar">
          <img
            class="reviews-img-big"
            alt="${reviewData.author} grossest"
            src="${reviewData.avatar_url}"
            loading="lazy"
          />
        </div>
        </div>
     
    </li>
  `
    )
    .join('');
};