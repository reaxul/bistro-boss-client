
const SectionTitle = ({subHeading,heading}) => {
    return (
        <div className="mx-auto w-1/3 text-center mb-8 mt-10 md:mt-24">
            <p className="text-[#D99904] pb-2">{subHeading}</p>
            <h3 className="text-3xl border-y-2 py-3 uppercase">{heading}</h3>
        </div>
    );
};

export default SectionTitle;