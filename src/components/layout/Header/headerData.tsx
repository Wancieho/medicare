const dataSet1 = [
    {
        "herb": {
            "id": 1,
            "name": "Herbs"
        }
    },
    {
        "herb": {
            "id": 2,
            "name": "Lemon Balm"
        }
    },
    {
        "herb": {
            "id": 3,
            "name": "Peppermint"
        }
    },
    {
        "herb": {
            "id": 4,
            "name": "Rosemary"
        }
    },
    {
        "herb": {
            "id": 5,
            "name": "Astragalus"
        }
    },
    {
        "herb": {
            "id": 6,
            "name": "Lavender"
        }
    },
    {
        "herb": {
            "id": 7,
            "name": "Chamomile"
        }
    }
]
const dataSet2 = [
    {
        "plant": {
            "id": 1,
            "name": "Plants"
        }
    },
    {
        "plant": {
            "id": 2,
            "name": "Flax Seeds"
        }
    },
    {
        "plant": {
            "id": 3,
            "name": "Garlic"
        }
    },
    {
        "plant": {
            "id": 4,
            "name": "Echinacea"
        }
    },
    {
        "plant": {
            "id": 5,
            "name": "Sambucus"
        }
    },
    {
        "plant": {
            "id": 6,
            "name": "Licorice"
        }
    },
    {
        "plant": {
            "id": 7,
            "name": "Ginseng"
        }
    }
]
const dataSet3 = [
    {
        "spice": {
            "id": 1,
            "name": "Spices"
        }
    },
    {
        "spice": {
            "id": 2,
            "name": "Turmeric"
        }
    },
    {
        "spice": {
            "id": 3,
            "name": "Ginger"
        }
    }
]
const dataSet4 = [
    {
        "extract": {
            "id": 1,
            "name": "Extracts"
        }
    },
    {
        "extract": {
            "id": 2,
            "name": "Dandelion"
        }
    },
    {
        "extract": {
            "id": 3,
            "name": "Ginkgo"
        }
    },
    {
        "extract": {
            "id": 4,
            "name": "Primrose"
        }
    },
    {
        "extract": {
            "id": 5,
            "name": "Grape Seed"
        }
    },
    {
        "extract": {
            "id": 6,
            "name": "Tea Tree Oil"
        }
    }
]

export default function DropDowns() {
    return (
        <>
            <div className="natural-material">
                <select>
                    {
                        dataSet1.map(getHerbs =>
                            <option key={getHerbs.herb?.id}>{getHerbs.herb?.name}</option>
                        )
                    }
                </select>
            </div>
            <div className="natural-material">
                <select>
                    {
                        dataSet2.map(getPlants =>
                            <option key={getPlants.plant?.id}>{getPlants.plant?.name}</option>
                        )

                    }
                </select>
            </div>
            <div className="natural-material">
                <select>
                    {
                        dataSet3.map(getSpices =>
                            <option key={getSpices.spice?.id}>{getSpices.spice?.name}</option>
                        )
                    }
                </select>
            </div>
            <div className="natural-material">
                <select>
                    {
                        dataSet4.map(getExtracts =>
                            <option key={getExtracts.extract?.id}>{getExtracts.extract?.name}</option>
                        )
                    }
                </select>
            </div>
        </>
    )
}