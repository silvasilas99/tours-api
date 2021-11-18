class BasicFeatures {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }

    // General filtering
    filter() {
        const queryObj = { ...this.queryString };
        const excludedFields = ['page', 'sort', 'limit', 'fields'];
        excludedFields.forEach(el => delete queryObj[el]);

        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);

        this.query = this.query.find(JSON.parse(queryStr));

        return this;
    }

    // Sorting by fields
    sort() {
        if (this.queryString.sort) {
            const sortBy = this.queryString.sort.split(',').join(' ');
            this.query = this.query.sort(sortBy);
        } else {
            this.query = this.query.sort('-createdAt');
        }

        return this;
    }

    // Selecting specific fields
    limitFields() {
        if (this.queryString.fields) {
            const fields = this.queryString.fields.split(',').join(' ');
            this.query = this.query.select(fields);
        } else {
            this.query = this.query.select('-__v');
        }

        return this;
    }

    // Paginating data
    paginate() {
        const count = + this.queryString.count || 100;
        const page = + this.queryString.page || 1;
        this.query = this.query.skip(count * (page - 1)).limit(count);

        return this;
    }
}

module.exports = BasicFeatures;