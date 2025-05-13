import PropTypes from "prop-types";

const SectionHeading = ({ heading, subHeading }) => {
  return (
    <div className="text-center mt-4 md:mb-6">
      <p className="bg-primary inline-block px-4 py-1 font-semibold bg-opacity-30 font-roboto">
        {subHeading}
      </p>
      <h1 className="text-3xl font-bold uppercase mt-2 pb-4 border-b border-primary font-montserrat">{heading}</h1>
    </div>
  );
};

SectionHeading.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
};

export default SectionHeading;
