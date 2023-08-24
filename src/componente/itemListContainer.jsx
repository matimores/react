
const Header = ({ title }) => {
    return (
        <header>
            <h1> {title} </h1>
        </header>
    );
};


const ItemListContainer = () => {

    return (
        <div className="titulo">
            < Header title="MORES SECURITY" />
        </div>

    );
};

export default ItemListContainer