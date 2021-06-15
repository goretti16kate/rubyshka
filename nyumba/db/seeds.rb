# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
houses = House.create([
    {
        name: "Shiko's place",
        image_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ylGHmrN2K6G0qF2fwe_40gHaE_%26pid%3DApi&f=1"

    },
    {
        name: "Tobias' home",
        image_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.GvE0uCRvlkXRP_-Dmqb68QHaEK%26pid%3DApi&f=1"

    },
    {
        name: "wa philis",
        image_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.jUJUcDGm56Ko9ajOl-tbXQHaFj%26pid%3DApi&f=1"

    },
    {
        name: "Gilbert's",
        image_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.gkdTZypecxNq73xhhSb0fAHaFj%26pid%3DApi&f=1"

    }
])
reviews = Review.create([
    {
        title: 'great place',
        description: 'I had a lovely time',
        score: 5,
        house: houses.first
    },
    {
        title: 'bad place',
        description: 'I had an awful time',
        score: 1,
        house: houses.first
    }
])
