const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")))

app.get("/api/home", (req, res) => {

    res.json({

        img1: "http://localhost:5000/uploads/img-1.jpg",
        img2: "http://localhost:5000/uploads/img-2.jpg",
        img3: "http://localhost:5000/uploads/img-3.jpg",
        img4: "http://localhost:5000/uploads/img-4.jpg",
        img5: "http://localhost:5000/uploads/img-5.jpg",
        img6: "http://localhost:5000/uploads/img-6.jpg",
        img7: "http://localhost:5000/uploads/img-7.jpg",
        img8: "http://localhost:5000/uploads/img-8.jpg",
        img9: "http://localhost:5000/uploads/img-9.jpg",
        img10: "http://localhost:5000/uploads/img-10.jpg",
        img11: "http://localhost:5000/uploads/img-11.jpg",
        img12: "http://localhost:5000/uploads/img-12.jpg",
        img13: "http://localhost:5000/uploads/img-13.jpg",
        img14: "http://localhost:5000/uploads/img-14.jpg",
        img15: "http://localhost:5000/uploads/img-15.jpg",
        img16: "http://localhost:5000/uploads/img-16.jpg",
        img17: "http://localhost:5000/uploads/img-17.jpg",
        img18: "http://localhost:5000/uploads/img-18.jpg",
        img19: "http://localhost:5000/uploads/img-19.jpg",
        img20: "http://localhost:5000/uploads/img-20.jpg",
        img21: "http://localhost:5000/uploads/google.jpg",
        img22: "http://localhost:5000/uploads/edit-profile-img.png",
        img23: "http://localhost:5000/uploads/img-21.jpg",
        img24: "http://localhost:5000/uploads/img-22.jpg",
        img25: "http://localhost:5000/uploads/img-23.jpg",
        img26: "http://localhost:5000/uploads/img-24.jpg",
        img27: "http://localhost:5000/uploads/img-25.jpg",
        img28: "http://localhost:5000/uploads/img-26.jpg",
        img29: "http://localhost:5000/uploads/img-27.jpg",
        

        categories: [
            {
                id: 1,
                image: "http://localhost:5000/uploads/img-1.jpg"
            },
            {
                id: 2,
                image: "http://localhost:5000/uploads/img-2.jpg"
            },
            {
                id: 3,
                image: "http://localhost:5000/uploads/img-3.jpg"
            },
            {
                id: 4,
                image: "http://localhost:5000/uploads/img-4.jpg"
            },
            {
                id: 5,
                image: "http://localhost:5000/uploads/img-5.jpg"
            },
            {
                id: 6,
                image: "http://localhost:5000/uploads/img-6.jpg"
            },
            {
                id: 7,
                image: "http://localhost:5000/uploads/img-7.jpg"
            },
            {
                id: 8,
                image: "http://localhost:5000/uploads/img-8.jpg"
            },
            {
                id: 9,
                image: "http://localhost:5000/uploads/img-9.jpg"
            },
            {
                id: 10,
                image: "http://localhost:5000/uploads/img-10.jpg"
            },
            {
                id: 11,
                image: "http://localhost:5000/uploads/img-11.jpg"
            },
            {
                id: 12,
                image: "http://localhost:5000/uploads/img-12.jpg"
            },
            {
                id: 13,
                image: "http://localhost:5000/uploads/img-13.jpg"
            },
            {
                id: 14,
                image: "http://localhost:5000/uploads/img-14.jpg"
            },
            {
                id: 15,
                image: "http://localhost:5000/uploads/img-15.jpg"
            },
            {
                id: 16,
                image: "http://localhost:5000/uploads/img-16.jpg"
            },
            {
                id: 17,
                image: "http://localhost:5000/uploads/img-17.jpg"
            },
            {
                id: 18,
                image: "http://localhost:5000/uploads/img-18.jpg"
            },
            {
                id: 19,
                image: "http://localhost:5000/uploads/img-19.jpg"
            },
            {
                id: 20,
                image: "http://localhost:5000/uploads/img-20.jpg"
            },
            {
                id: 21,
                image: "http://localhost:5000/uploads/google.jpg"
            },
            {
                id: 22,
                image: "http://localhost:5000/uploads/img-21.jpg"
            },
            {
                id: 23,
                image: "http://localhost:5000/uploads/img-22.jpg"
            },
            {
                id: 24,
                image: "http://localhost:5000/uploads/img-23.jpg"
            },
            {
                id: 25,
                image: "http://localhost:5000/uploads/img-24.jpg"
            },
            {
                id: 26,
                image: "http://localhost:5000/uploads/img-25.jpg"
            },
            {
                id: 27,
                image: "http://localhost:5000/uploads/img-26.jpg"
            },
            {
                id: 28,
                image: "http://localhost:5000/uploads/img-27.jpg"
            },
            
        ]

    });

});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});