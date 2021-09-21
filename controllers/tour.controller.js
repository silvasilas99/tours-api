const Tour = require('./../models/Tour');

exports.getSimpleFilteredTours = async (req, res) => {
    try {
        const queryObj = {...req.query};
        const excludedFields = ['page', 'sort', 'count', 'limit', 'fields'];
        excludedFields.forEach(element => delete queryObj[element]);

        const tours = await Tour.find(queryObj);
        return res.status(200).json({
            results: tours.length,
            data: tours
        }); 
    } catch (err) {
        return res.send(err.message || "An error as occurred. Try again later");
    }
}