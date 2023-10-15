import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Strawberry_HowToUse() {
    return (
        <>
            <IngredientNameHeading ingredientName="Strawberries" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Strawberry_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Strawberry_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Strawberry_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Strawberry_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Strawberry_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Strawberry">Grow Strawberry</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Strawberries"
                        familyName="Rosaceae" origin="Brittany, France"
                        geoLocation="China, US, Turkey, Mexico, Egypt, Spain" />
                    <div className="content-wrapper">
                        <h2>How are Strawberries used?</h2>
                        <p>
                            Strawberries are used by:
                        </p>
                        <div className="ingredient-benefits">
                            <ul>
                                <li>Beauty industry</li>
                                <li>Foods, Desserts, Drinks and more</li>
                                <li>Medicine</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="content-section2">
                    <h2>Beauty Products That Use Strawberries As a Key Ingredient:</h2>
                    <div className="ingredient-benefits">
                        <ol>
                            <li>
                                <h3>Bath & Body Works White Barn Strawberry Pound Cake 3-Wick Candle:</h3>
                                <dt>
                                    Deliver an amazing, room-filling fragrance to any room with this candle
                                    that features Bath & Body Works' proprietary fragrance wax blend that
                                    is formulated to provide the best fragrance experience. Infused with
                                    natural essential oils, it has three quality lead-free wicks and comes
                                    with a decorative lid. Burns for 25 to 45 hours. Enjoy the sweet, airy
                                    scent of fresh picked strawberries, golden shortcake and whipped cream.
                                </dt>
                            </li>
                            <li>
                                <h3>Eminence Organic Skin Care Strawberry Rhubarb Collection:</h3>
                                <dt>
                                    Formulated with Eminence Organic Skin Care's Botanical Hyaluronic Acid
                                    Complex, fresh strawberries and rhubarb, this delicious collection
                                    deeply hydrates, revealing visibly smooth, plump and glowing skin.
                                </dt>
                            </li>
                        </ol>
                    </div>
                    <h2>Foods, Beverages and Drinks:</h2>
                    <div className="ingredient-benefits">
                        <ol>
                            <li>
                                <h3>Cocktails:</h3>
                                <dt>
                                    Fresh berries are a refreshing addition to summertime drinks. If you're
                                    partial to a slushy, then this frozen strawberry daiquiri, with a
                                    generous glug of rum, makes for the ultimate summer party thirst
                                    quencher. Add fruit purée to gin or vodka, then top up with soda,
                                    or have a go at making your own infused spirit with this rhubarb &
                                    strawberry vodka.
                                </dt>
                            </li>
                            <li>
                                <h3>Desserts pots:</h3>
                                <dt>
                                    Elegant little strawberry & prosecco jellies make a light dinner
                                    party pudding, the delicate fruity flavour pairing perfectly with
                                    bubbly. Combine two British classics with a little Italian flair
                                    in this strawberry & Pimm's zabaglione and for the whole family,
                                    try 5-star favourite strawberry marshmallow mousse.
                                </dt>
                            </li>
                            <li>
                                <h3>Jams and preserves:</h3>
                                <dt>
                                    Preserve your strawberries to eat all year round, with this step-by-step
                                    strawberry jam. Or, if you'd rather not spend time slaving over a hot
                                    stove, raw strawberry jam is ready in just 15 minutes. Both make great
                                    gifts (if you can resist scoffing them yourself!)
                                </dt>
                            </li>
                            <li>
                                <h3>Ice cream and lollies:</h3>
                                <dt>
                                    Try a refreshing twist on a creamy classic with our strawberry & white
                                    balsamic ice cream. The sweetness of the ripe strawberries is complemented
                                    by a subtle tang, making this dinner party perfect. If you prefer your
                                    frozen pudding on a stick, then these milkshake ice pops are just the
                                    ticket. You can even pimp your pops for barbecue season with Pimm's
                                    lollies, complete with fresh cucumber and mint, strawberries and a glug
                                    of the good stuff.
                                </dt>
                            </li>
                            <li>
                                <h3>Strawberry cake:</h3>
                                <dt>
                                    There are a multitude of brilliant bakes that showcase the strawberry.
                                    If you want to make a truly stunning centrepiece, have a go at this
                                    step-by-step polka-dot strawberry cake or stack the berries high in
                                    Paul Hollywood's layered sponge. For an easier bake, the cream tea
                                    cake is a supersize scone. Top with lashings of cream,
                                    strawberries and jam.
                                </dt>
                            </li>
                            <li>
                                <h3>Smoothies:</h3>
                                <dt>
                                    Perk up your morning with a strawberry-packed smoothie. This banana
                                    & almond version is full of calcium, or try an avocado & strawberry
                                    breakfast blend - it is low in calories and has earnt our 'good for you'
                                    stamp of approval. Blend to your desired consistency and experiment
                                    with adding honey for sweetness.
                                </dt>
                            </li>
                            <li>
                                <h3>Strawberry salads:</h3>
                                <dt>
                                    Strawberries make great additions to savoury salads. This salmon,
                                    strawberry & fennel salad might sound unusual, but the peppery rocket,
                                    subtle salmon and sweet fruit work well together. Serve with fresh
                                    crusty rolls as a starter or light lunch.
                                </dt>
                            </li>
                            <li>
                                <h3>Summer crumble:</h3>
                                <dt>
                                    If you've got a glut of fruit from your allotment, or tubs of strawberries
                                    going spare, make a firm family favourite. Strawberry & rhubarb crumble is
                                    a brilliant way to use up an abundance of berries. Top with a dollop of
                                    vanilla ice cream.
                                </dt>
                            </li>
                            <li>
                                <h3>Trifles:</h3>
                                <dt>
                                    Trifle isn't just for Christmas, not with our summery twists. Whether it's
                                    strawberry & elderflower trifle with ginger jelly and hunks of lemon
                                    drizzle or this glorious Eton mess trifle with Sherry-steeped strawberries, you'll find the combination of custard, sponge and summer fruits hard to resist.
                                </dt>
                            </li>
                            <li>
                                <h3>Strawberry biscuits:</h3>
                                <dt>
                                    Who could resist these strawberry & cream roly-poly biscuits for an
                                    afternoon tea treat? Freeze-dried berries make them extra special. If
                                    you want a brighter pink swirl, use a splash of food colouring to enhance
                                    their rosy hue.
                                </dt>
                            </li>
                        </ol>
                    </div>
                    <h2>Medicine:</h2>
                    <div className="ingredient-benefits-a">
                        <ul>
                            <li>
                                <p>
                                    Look under the Benefits and Side effects tab for more information.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Strawberry_HowToUse;