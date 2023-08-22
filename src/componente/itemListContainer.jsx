
const Greeting = ({ text }) => {
    return <h1>{text}</h1>;

};

function Title() {
    const texto = "MORES SECURITY"
    return (
        <>
            < Greeting text={texto} />
        </>

    )

}

export default Title



