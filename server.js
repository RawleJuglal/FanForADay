import { createServer, Model } from "miragejs"


createServer({
    models: {
        vans: Model,
    },

    seeds(server) {
        server.create("van", { id: "1", name: "NY Yankees, Derek Jeter ", price: 8, description: "NY Yankees, Derek Jeter is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!", imageUrl: "https://fanatics.frgimages.com/new-york-yankees/mens-nike-derek-jeter-white/navy-new-york-yankees-home-replica-player-name-jersey_pi3832000_altimages_ff_3832344-d32cb8d934daff5eb761alt1_full.jpg?_hv=2&w=900", type: "new_york" })
        server.create("van", { id: "2", name: "LA Dodgers, Mookie Betts", price: 5, description: "LA Dodgers, Mookie Betts is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.", imageUrl: "https://fanatics.frgimages.com/los-angeles-dodgers/mens-nike-mookie-betts-royal-los-angeles-dodgers-alternate-replica-player-name-jersey_pi3826000_altimages_ff_3826323-94b9a3bf3ba751449482alt1_full.jpg?_hv=2&w=900", type: "los_angelos" })
        server.create("van", { id: "3", name: "Miami Huricanes, Michael Irvin", price: 8, description: "Miami Huricanes, Michael Irvin is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.", imageUrl: "https://best-sports-jerseys.com/cdn/shop/products/Michael_Irvin_Miami_Hurricanes_College_Throwback_Jersey_grande.jpg?v=1538684135", type: "miami" })
        server.create("van", { id: "4", name: "NYC FC, Sean Johnson", price: 5, description: "NYC FC, Sean Johnson is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.", imageUrl: "https://www.mlsplayershop.com/image/cache//2021gear/New%20York%20City%20FC/1-JOHNSON-500x500.jpg", type: "new_york" })
        server.create("van", { id: "5", name: "Miami Heat, Dwayne Wade", price: 8, description: "Miami Heat, Dwayne Wade is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.", imageUrl: "https://www.themiamiheatstore.com/cdn/shop/files/ccwadedoiuble_1024x1024.png?v=1691429166", type: "miami" })
        server.create("van", { id: "6", name: "LA Galaxy, Zlatan Ibrahimovic", price: 5, description: "With this van, you can take your travel life to the next level. LA Galaxy, Zlatan Ibrahimovic is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.", imageUrl: "https://images.footballfanatics.com/la-galaxy/youth-adidas-zlatan-ibrahimovic-white-la-galaxy-2018-primary-replica-player-jersey_pi3097000_altimages_ff_3097876alt1_full.jpg?_hv=2&w=900", type: "los_angelos" })
    },

    routes() {
        this.namespace = "api"

        this.get("/vans", (schema, request) => {
            return schema.vans.all()
        })
        
        this.get("/vans/:id", (schema, request) => {
            const id = request.params.id
            return schema.vans.find(id)
        })
    }
})