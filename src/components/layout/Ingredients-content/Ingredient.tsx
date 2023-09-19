function Ingredient(props: any) {
    return (
        <>
            <div className="content-wrapper">
                <div>
                    <p>Ingredient Name: {props.ingredientName}</p>
                    <p>Family Name: {props.familyName}</p>
                    <p>Origin: {props.origin}</p>
                    <p>Geolocation found: {props.geoLocation}</p>
                </div>
            </div>
        </>
    )
}
export default Ingredient;