const Tour = require('./../models/Tour');
const BasicFeatures = require("../utils/basicFeatures");

exports.getTours = async (req, res) => {
    try {
        const features = new BasicFeatures(Tour.find(), req.query)
            .filter()
            .sort()
            .limitFields()
            .paginate();

        const tours = await features.query;

        return res.status(200).json({
            results: tours.length,
            data: tours
        });
    } catch (err) {
        return res.send(err.message || "An error as occurred. Try again later");
    }
}