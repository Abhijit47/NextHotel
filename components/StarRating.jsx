export default function StarRating({ rating }) {
  const filledStars = Math.floor(Number(rating));
  const remainder = Number(rating) - filledStars;
  let hasHalfStar = false;
  if (remainder >= 0.25 && remainder <= 0.75) {
    hasHalfStar = true;
  }
  hasHalfStar = Number(rating) - filledStars >= 0.5;

  function renderStars() {
    const stars = [];

    for (let i = 0; i < filledStars; i++) {
      stars.push(<span key={i}>&#9733;</span>);
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" style={{ position: "relative" }}>
          &#9733;
          <span
            style={{ position: "absolute", width: "50%", overflow: "hidden" }}
          >
            &#9733;
          </span>
        </span>,
      );
    }

    return stars;
  }

  return <div>{renderStars()}</div>;
}
