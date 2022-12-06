const reviewComponent = (resto) => {
  const reviewer = document.querySelector('section.resto-review');
  reviewer.innerHTML = `
  <h2>Review Pelanggan</h2>
  <ul class="review-container">
  ${resto.customerReviews
    .map(
      (review) => `
      <li class="review-item">
        <div class="review-content">
          <p class="review-name">${review.name}</p>
          <p class="review-date">${review.date}</p>
          <p>${review.review}</p>
        </div>
      </li>`,
    )
    .join('')}
  </ul>`;
};

export default reviewComponent;
