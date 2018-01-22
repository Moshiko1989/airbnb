const flats = [];
function generateFlats() {
    let id = 101
    for (let i = 0; i < 30; i++) {
        flats.push({
            id: id + '',
            img: `http://jsdojo.cachefly.net/vuebnb/images/10/Image_1_thumb.jpg`,
            title: 'Central Downtown Apartment with Amenities',
            address: 'No. 11, Song-Sho Road, Taipei City, Taiwan 105',
            desc: `Donizzle posuere auctor mah nizzle. Da bomb a elizzle izzle nibh pretizzle yo mamma. Shit cool things. Fizzle in we gonna chung phat daahng dawg elementizzle fizzle. Nunc izzle fo shizzle mah nizzle fo rizzle, mah home g-dizzle sizzle check out this eros ultrices porta. In velit check out this, at, hendrerizzle quizzle, adipiscing shit, shizznit. Etiam velizzle leo, aliquizzle check out this, pharetra non, dictizzle sizzle, turpizzle. Bow wow wow neque. Crizzle phat. Shiznit vitae erizzle izzle shit commodo doggy. Fusce go to hizzle augue daahng dawg nibh sizzle mattizzle. Phasellus we gonna chung mah nizzle non dizzle. Suspendisse shizznit leo, dizzle sed, fo shizzle fo, fo nizzle, black. Donizzle dope porttitizzle uhuh ... yih!. Nunc feugizzle, tellizzle a ornare shizzlin dizzle, sapien fo shizzle mah nizzle fo rizzle, mah home g-dizzle mammasay mammasa mamma oo sa ante, egizzle dapibus pede enim izzle boofron. Phasellizzle mofo leo, black id, tempus izzle, semper in, check it out. Yo yo mamma magna yo mamma phat. Sed get down get down nibh, bling bling pizzle, daahng dawg izzle, rutrizzle i saw beyonces tizzles and my pizzle went crizzle, velizzle. Mauris a uhuh ... 
                    yih!. Ass non magna amizzle risus iaculizzle shiznit.`,
            Prices: {
                perNight: 90,
                weeklyDiscount: 11,
                extraPeople: 20,
                monthlyDiscount: 25,
            }

        })
        id++
    }
    return flats;
}
generateFlats()

function getFlats() {
    return Promise.resolve(flats)
}

function getFlatById(id) {
    return Promise.resolve(flats.filter(flat => flat.id === id)[0])
}

export default {
    getFlats,
    getFlatById
}
