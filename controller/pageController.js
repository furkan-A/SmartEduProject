exports.getIndexPage = function (req, res) {
    res.status(200).render("index", {
        page_name: "index",
    });
};
exports.getAboutPage = function (req, res) {
    res.status(200).render("about", {
        page_name: "about",
    });
};
