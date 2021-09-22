const Tour = require('./../models/Tour');

exports.getTours = async (req, res) => {
    try {
        const queryObj = {...req.query};
        const excludedFields = ['page', 'sort', 'count', 'limit', 'fields'];
        excludedFields.forEach (element => delete queryObj[element]);

        let queryStr = JSON.stringify (queryObj);
        queryStr = queryStr.replace (/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
        let query = Tour.find(JSON.parse(queryStr));

        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ');
            query = query.sort(sortBy);
        }

        const tours = await query;

        return res.status(200).json({
            results: tours.length,
            data: tours
        }); 
    } catch (err) {
        return res.send(err.message || "An error as occurred. Try again later");
    }
}