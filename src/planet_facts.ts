/**
 * PREDEFINE STRING FOR PLANET FACTS
 * */

export const sun_facts: string[] = [
    'Sun\'s gravity holds the solar system together, keeping everything from the biggest planets to the smallest particles of debris in its orbit',
    'At the equator, the Sun spins once about every 25 days, but at its poles the Sun rotates once on its axis every 35 Earth day',
    'By mass, the Sun is about 70.6 % Hydrogen and 27.4 % Helium',
    'Sun releases a constant stream of particles and magnetic fields called the solar wind that can slams worlds across the solar system with particles and radiation'
]
export const mercury_facts: string[] = [
    'Smallest planet in Solar System',
    'Mercury named after a Roman God with winged feet',
    'Mercury traveling through space at nearly 47 km/s',
    'It takes sunlight 3.2 minutes to travel from the Sun to Mercury'
]

export const FactsModule = (function () {
    let facts_sun_ind = 0, facts_mer_ind = 0
    let fact_arr: string[]
    let fact_ind: number
    return {
        setFact: function (ui_screen) {
            if (ui_screen.name == "sun_screen") {
                log("fact for SUN")
                fact_arr = sun_facts
                facts_sun_ind = (facts_sun_ind + 1) % sun_facts.length
                fact_ind = facts_sun_ind
                return fact_arr[fact_ind]
            }
            if (ui_screen.name == "mercury_screen") {
                fact_arr = mercury_facts
                facts_mer_ind = (facts_mer_ind + 1) % mercury_facts.length
                fact_ind = facts_mer_ind
                return fact_arr[fact_ind]
            }
        }
    }
}())