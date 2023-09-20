function Ingredient(props: any) {
    return (
        <>
            <div className="content-wrapper">
                <p>Ingredient Name: {props.ingredientName}</p>
                <p>Family name: {props.familyName}</p>
                <p>Origin: {props.origin}</p>
                <p>Geoloaction found: {props.geoLocation}</p>
            </div>
        </>
    )
}

export default Ingredient;