const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 5000;
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;

app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/api/home", (req, res) => {
    res.json({
        img1: `${BASE_URL}/uploads/img-1.jpg`,
        img2: `${BASE_URL}/uploads/img-2.jpg`,
        img3: `${BASE_URL}/uploads/img-3.jpg`,
        img4: `${BASE_URL}/uploads/img-4.jpg`,
        img5: `${BASE_URL}/uploads/img-5.jpg`,
        img6: `${BASE_URL}/uploads/img-6.jpg`,
        img7: `${BASE_URL}/uploads/img-7.jpg`,
        img8: `${BASE_URL}/uploads/img-8.jpg`,
        img9: `${BASE_URL}/uploads/img-9.jpg`,
        img10: `${BASE_URL}/uploads/img-10.jpg`,
        img11: `${BASE_URL}/uploads/img-11.jpg`,
        img12: `${BASE_URL}/uploads/img-12.jpg`,
        img13: `${BASE_URL}/uploads/img-13.jpg`,
        img14: `${BASE_URL}/uploads/img-14.jpg`,
        img15: `${BASE_URL}/uploads/img-15.jpg`,
        img16: `${BASE_URL}/uploads/img-16.jpg`,
        img17: `${BASE_URL}/uploads/img-17.jpg`,
        img18: `${BASE_URL}/uploads/img-18.jpg`,
        img19: `${BASE_URL}/uploads/img-19.jpg`,
        img20: `${BASE_URL}/uploads/img-20.jpg`,
        img21: `${BASE_URL}/uploads/google.jpg`,
        img22: `${BASE_URL}/uploads/edit-profile-img.png`,
        img23: `${BASE_URL}/uploads/img-21.jpg`,
        img24: `${BASE_URL}/uploads/img-22.jpg`,
        img25: `${BASE_URL}/uploads/img-23.jpg`,
        img26: `${BASE_URL}/uploads/img-24.jpg`,
        img27: `${BASE_URL}/uploads/img-25.jpg`,
        img28: `${BASE_URL}/uploads/img-26.jpg`,
        img29: `${BASE_URL}/uploads/img-27.jpg`,

        categories: [
            {
                id: 1,
                image: `${BASE_URL}/uploads/img-1.jpg`
            },
            {
                id: 2,
                image: `${BASE_URL}/uploads/img-2.jpg`
            },
            {
                id: 3,
                image: `${BASE_URL}/uploads/img-3.jpg`
            },  
            {
                id: 4,
                image: `${BASE_URL}/uploads/img-4.jpg`
            },
            {
                id: 5,
                image: `${BASE_URL}/uploads/img-5.jpg`
            },
            {
                id: 6,
                image: `${BASE_URL}/uploads/img-6.jpg`
            },
            {
                id: 7,
                image: `${BASE_URL}/uploads/img-7.jpg`
            },
            {
                id: 8,
                image: `${BASE_URL}/uploads/img-8.jpg`
            },
            {
                id: 9,
                image: `${BASE_URL}/uploads/img-9.jpg`
            },
            {
                id: 10,
                image: `${BASE_URL}/uploads/img-10.jpg`
            },
            {
                id: 11,
                image: `${BASE_URL}/uploads/img-11.jpg`
            },
            {
                id: 12,
                image: `${BASE_URL}/uploads/img-12.jpg`
            },
            {
                id: 13,
                image: `${BASE_URL}/uploads/img-13.jpg`
            },
            {
                id: 14,
                image: `${BASE_URL}/uploads/img-14.jpg`
            },
            {
                id: 15,
                image: `${BASE_URL}/uploads/img-15.jpg`
            },
            {
                id: 16,
                image: `${BASE_URL}/uploads/img-16.jpg`
            },
            {
                id: 17,
                image: `${BASE_URL}/uploads/img-17.jpg`
            },
            {
                id: 18,
                image: `${BASE_URL}/uploads/img-18.jpg`
            },
            {
                id: 19,
                image: `${BASE_URL}/uploads/img-19.jpg`
            },
            {
                id: 20,
                image: `${BASE_URL}/uploads/img-20.jpg`
            },
            {
                id: 21,
                image: `${BASE_URL}/uploads/google.jpg`
            },
            {
                id: 22,
                image: `${BASE_URL}/uploads/img-21.jpg`
            },
            {
                id: 23,
                image: `${BASE_URL}/uploads/img-22.jpg`
            },
            {
                id: 24,
                image: `${BASE_URL}/uploads/img-23.jpg`
            },
            {
                id: 25,
                image: `${BASE_URL}/uploads/img-24.jpg`
            },
            {
                id: 26,
                image: `${BASE_URL}/uploads/img-25.jpg`
            },
            {
                id: 27,
                image: `${BASE_URL}/uploads/img-26.jpg`
            },
            {
                id: 28,
                image: `${BASE_URL}/uploads/img-27.jpg`
            }
        ]
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});