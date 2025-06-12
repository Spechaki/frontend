import PropTypes from 'prop-types';

export default function Stars({ rating }) {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const starRating = index + 1;
    return (
      <svg
        key={index}
        className={`w-5 h-5 ${starRating <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
      </svg>
    );
  });

  return <div className="flex space-x-1">{stars}</div>;
}

Stars.propTypes = {
  rating: PropTypes.number.isRequired,
};
