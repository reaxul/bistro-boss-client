
const MenuItem = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div className="flex space-x-2">
            <img className="w-[100px] rounded-r-full rounded-b-full rounded-tr-full" src={image} alt="" />
            <div>
                <h1>{name} ---------------</h1>
                <p>{recipe}</p>
            </div>
            <p className="text-[#BB8506]">${price}</p>
        </div>
    );
};

export default MenuItem;