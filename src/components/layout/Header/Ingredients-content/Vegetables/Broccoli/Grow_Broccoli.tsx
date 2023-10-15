import { Link, Outlet } from "react-router-dom";
import "../../../../../../App.css";
import Ingredient from "../../Ingredient";
import IngredientNameHeading from "../../Ingredient-heading";

function Grow_Broccoli() {
    return (
        <>
            <IngredientNameHeading ingredientName="Broccoli" />
            <div className="ingredient-hub">
                <ul>
                    <li>
                        <Link to="/Broccoli_Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Broccoli_HowToUse">How to use</Link>
                    </li>
                    <li>
                        <Link to="/Broccoli_Benefits">Benefits</Link>
                    </li>
                    <li>
                        <Link to="/Broccoli_SideEffects">Side Effects</Link>
                    </li>
                    <li>
                        <Link to="/Broccoli_Dosage">Dosage</Link>
                    </li>
                    <li>
                        <Link to="/Grow_Broccoli">Grow Broccoli</Link>
                    </li>
                </ul>
            </div>
            <div className="component-content-rendering">
                <Outlet />
                <div className="flex-content">
                    <Ingredient ingredientName="Broccoli"
                        familyName="Brassicaceae" origin="Italy"
                        geoLocation="China, India, US, Spain, Mexico" />
                    <div className="content-wrapper">
                        <h2>How do I grow Broccoli?</h2>
                        <h3>Getting Started:</h3>
                        <p>
                            Broccoli, or sprouting broccoli, is a delicious, nutritious and easy-to-grow
                            member of the cabbage family. It forms multiple small clusters of purple or
                            white buds for harvesting from mid-summer onwards. Winter varieties provide
                            especially valuable harvests right through to spring.
                        </p>
                        <p>
                            In a gardening context, broccoli (or sprouting broccoli) are plants that
                            produce small clusters of purple or white buds on the tips of long, leafy
                            stems. Broccoli means 'small shoots' in Italian.
                        </p>
                    </div>
                </div>
                <div className="content-section2">
                    <p>
                        Calabrese, on the other hand, produces a large central green head (that's confusingly called
                        broccoli in supermarkets and recipes).
                    </p>
                    <p>
                        Broccoli produces repeated harvests of tasty purple or white florets for up to
                        two months. it is traditionally a winter/early spring crop, but newer varieties
                        offer harvests from summer onwards, depending on the sowing time.
                    </p>
                    <p>
                        The more compact, faster-growing summer varieties are best for smaller plots,
                        while the more traditional winter- and spring-cropping varieties form large plants,
                        up to 90cm (3ft) tall and wide, and can take eight months or more to mature.
                    </p>
                    <p>
                        Still, they provide a valuable crop
                        at an otherwise lean time of year and you dont need many plants to enjoy ample pickings.
                        Broccoli can also be expensive to buy, so is well worth growing.
                    </p>
                    <h2>Choosing:</h2>
                    <p>
                        There are many broccoli varieties to choose from, for sowing and harvesting at different
                        times. Traditional varieties are slow growing and hardy, sown in spring or early summer
                        and forming large plants that crop in winter and the following spring. They take up a lot
                        of space over a long period, but do provide valuable fresh harvests when little else is
                        available.
                    </p>
                    <p>
                        If you do not have the time or space for these, there are newer, smaller, faster-growing
                        varieties for harvesting from mid-summer to late autumn. Check seed packets for sowing and
                        harvesting times, as well as plant sizes and spacings.
                    </p>
                    <p>
                        You can choose from purple or white florets purple varieties tend to be hardier and more
                        productive, but both are attractive, delicious and well worth growing.
                    </p>
                    <p>
                        Broccoli is usually most successful in cooler summers, as hot weather can cause plants bolt
                        (flower prematurely) in warmer regions, grow bolt-resistant varieties.
                    </p>
                    <p>
                        For the most reliable broccoli varieties, look for those with an RHS Award of Garden Merit
                        (AGM), which shows they performed exceptionally well in trials see our list of AGM fruit
                        and veg for recommended varieties of broccoli and many other crops.
                    </p>
                    <p>
                        You can see many crops, including broccoli and other brassicas, growing in the veg plots at the
                        RHS gardens, so do visit to explore how they are grown, compare the varieties and pick up useful
                        tips and inspiration.
                    </p>
                    <p>
                        Some broccoli seeds are sold specifically for growing as micro-greens indoors, giving you
                        speedy harvests of nutritious, tasty seedlings to add to salads. Note: A seedling is a
                        young plant grown from seed.
                    </p>
                    <h2>Preparing the Ground:</h2>
                    <p>
                        Broccoli grows best in firm, fertile, well-drained soil, in sun or very light shade. It
                        forms quite tall plants, so choose a sheltered spot where they won not be buffeted by
                        strong winds. Avoid soil that gets waterlogged, especially during winter if growing an
                        overwintering variety.
                    </p>
                    <p>
                        If your soil is very acidic, apply lime the winter before sowing, to raise the
                        pH and deter clubroot disease. Broccoli prefers a pH of 6 to 7.
                    </p>
                    <p>
                        Before sowing or planting, weed thoroughly and dig in two buckets of well-rotted manure or
                        garden compost per square metre/yard. Ideally do this several months beforehand, to allow
                        the ground to settle. If done just before planting, firm the soil well by treading it down
                        using shuffling steps, then rake smooth.
                    </p>
                    <p>
                        Add a high potassium general fertiliser, such as Vitax Q4 use one and a half handfuls per
                        square metre/yard, or three handfuls if no manure or garden compost has been added.
                    </p>
                    <h2>Sowing:</h2>
                    <p>
                        Broccoli seeds can be sown from March to June indoors from March or outdoors from April. It is
                        best to sow broccoli in small batches several weeks apart, to provide regular pickings over a
                        long season.
                    </p>
                    <p>
                        Broccoli should be grown with other cabbage relatives in crop rotations, to avoid any build-up
                        of pests and diseases in the soil.
                    </p>
                    <h3>Sowing indoors:</h3>
                    <p>
                        From March, you can start broccoli off in a greenhouse or on a sunny windowsill. You can
                        continue sowing small batches through to June, or start sowing outdoors (see below) from
                        April.
                        When sowing indoors, It is best to use a modular tray to minimise root disturbance when
                        transplanting later. Fill with seed compost, water well, then sow two seeds per module, 2cm
                        (¾in) deep.
                    </p>
                    <p>
                        Sowing indoors is useful if you want an early harvest, giving plants a head start. It is
                        also beneficial if you have clubroot disease in your soil ensure plants have a well-developed
                        root system before being moved into the ground and they should be less severely affected.
                    </p>
                    <p>
                        Seeds should germinate within two weeks without any additional heat. After germination, thin
                        out the seedlings, removing the smaller or weaker one to leave one per module. Water regularly
                        and keep in good light. Apply a general-purpose liquid feed every week.
                    </p>
                    <p>
                        When the young plants are 10-15cm (46inch) tall with a good rootball, move them outdoors see
                        Transplanting, below. Another increasingly popular option, when sowing indoors, is to grow
                        broccoli as micro-greens. Simply sow the seeds into a small seedtray at any time of year and
                        harvest the tasty nutritious
                    </p>
                    <p>
                        A seedling is a young plant grown from seed. seedlings after just a few weeks, adding them
                        to salads or using as a garnish.
                    </p>
                    <h3>Sowing outdoors:</h3>
                    <p>
                        You can sow broccoli seeds outdoors from April to June – either on a temporary basis in a
                        An area of soil prepared for sowing seeds. This usually involves weeding and raking to remove
                        stones and clods, aiming to create a fine, crumbly soil texture and a firm, level surface.
                        A seedbed is traditionally prepared away from the main veg plot for starting off slow-growing
                        crops that in the long term need wide spacing, such as leeks and cabbages, to make best use
                        of space on the main plot during prime sowing season. Seedbed or straight into their final
                        position if you have space. Prepare the ground as explained above, then make a shallow
                        drill about 2cm (¾in) deep and water along the base.
                    </p>
                    <p>
                        If sowing in a seedbed, sow as thinly as possible, ideally 7.5cm (3in) apart - or thin out to
                        this distance once seedlings appear. If sowing in their final position, sow three seeds every
                        60-80cm (24-30in), depending on the variety, then thin out each cluster to one strong seedling
                        as soon as they are large enough to handle.
                    </p>
                    <h4>After sowing:</h4>
                    <div className="ingredient-benefits">
                        <ul>
                            <li>Cover the ground with fleece to exclude cabbage root fly.</li>
                            <li>Control slugs and snails, otherwise they will devour your seedlings as soon as
                                they appear.</li>
                            <li>Weed and water regularly.</li>
                        </ul>
                    </div>
                    <h2>Transplanting:</h2>
                    <p>
                        Young broccoli plants sown in a seedbed, raised indoors or bought as
                        Plug plants should be moved into their final position once they are 10-15cm
                        (4-6inch) tall. Take care to harden off indoor-sown plants first and try not
                        to disturb the roots, to ensure they do not suffer any check in growth.
                    </p>
                    <p>
                        Choose a site in sun or very light shade and prepare the ground as detailed above.
                        Water the plants well, both before and after moving.
                    </p>
                    <p>
                        Plant the young broccolis deeper than they were previously growing, with the lowest
                        leaves at the surface, so they root deeply and firmly.
                        Space broccoli 60-80cm (24-30inch) apart, depending on the variety/ultimate size, with
                        a similar distance between rows, then water in well.
                    </p>
                    <p>
                        Check individual seed packets for exact spacings generous distances between plants
                        ensures good air circulation, which reduces disease, and encourages more side-shoots,
                        which should give you larger harvests.
                    </p>
                    <h2>Plant Care:</h2>
                    <p>
                        Broccoli needs protection from pests such as cabbage butterflies and pigeons, so cover
                        with fine-mesh netting at all times. Weed between plants regularly, water during dry
                        spells, feed to boost growth and support taller plants with a sturdy cane.
                    </p>
                    <h3>Watering:</h3>
                    <p>
                        Water broccoli seedlings and young plants regularly until well established.
                    </p>
                    <h3>Mulching:</h3>
                    <p>
                        Apply a thick layer of garden compost to the soil to help hold moisture around
                        the roots. Mulch will also help to deter weed germination.
                    </p>
                    <h3>Feeding:</h3>
                    <p>
                        When broccoli plants are about 20cm (8in) tall, apply a nitrogen-rich fertiliser,
                        such as sulphate of ammonia, at a rate of 35g (1oz) per square metre/yard.
                    </p>
                    <h3>Supporting plants:</h3>
                    <p>
                        Broccoli can reach about 90cm (3ft), so should be given support, especially in
                        exposed locations. If these top-heavy plants are buffeting around by the wind,
                        this can loosen the roots and hinder growth. So before any autumn gales arrive,
                        pile soil up around the base of the stem to help stabilise the plants and/or
                        insert a sturdy cane to hold them securely.
                    </p>
                    <h3>Protecting from pests</h3>
                    <p>
                        Broccoli is susceptible to all the usual brassica pests, so keep them protected
                        at all times. Insect-proof mesh or fleece, supported on canes and pinned to the
                        ground, should deter cabbage caterpillars, cabbage root fly and pigeons.
                    </p>
                    <h2>Harvesting:</h2>
                    <p>
                        Regular sowings of broccoli can provide harvests from mid-summer to the following
                        spring. Plants take four to ten months to start cropping, depending on sowing time
                        and variety, then provide pickings for up to two months. Summer varieties crop much
                        more quickly than winter varieties.
                    </p>
                    <p>
                        Broccoli is ready to harvest when the small heads, or spears, are well formed but
                        still tightly in bud. Remove the whole shoot, cutting at the base, with about 10cm
                        (4in) of stem and any small leaves, which can all be eaten.
                    </p>
                    <p>
                        Take the central spear first, then more will form on the sideshoots, which can
                        be harvested over the following weeks. Check plants regularly, so you catch them
                        before the clusters of buds start to open. The more shoots you harvest, the more
                        the plants will produce.
                    </p>
                    <p>
                        Broccoli can be cooked in various ways lightly steamed, sautéed or stir-fried
                        until tender, succulent and delicious. It can be eaten as a side dish or given
                        pride of place in a wide range of delicious meals. Purple varieties generally turn
                        green when cooked. Broccoli is best used as fresh as possible, but can be kept in
                        the fridge for a few days and freezes well.
                    </p>
                    <h2>Problems:</h2>
                    <p>
                        Broccoli usually grows and crops well, although it may bolt (flower prematurely)
                        in hot weather. As it is a brassica, broccoli is susceptible to several pests and
                        diseases that affect the cabbage family, including clubroot and cabbage root fly.
                        It is best grown under fine-mesh netting to protect it from cabbage caterpillars
                        and pigeons. Cabbage whitefly and aphids may sometimes be problematic.
                    </p>
                    <p>
                        If you have clubroot disease in your soil, start broccoli off indoors so it has a
                        well-developed root system before being moved into the ground. Plants should then
                        be less severely affected.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Grow_Broccoli;