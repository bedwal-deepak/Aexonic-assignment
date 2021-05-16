class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  paginate() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 100;
    const skip = (page - 1) * limit;
    // page=3&limit=10, 1-10, page=1, 11-20, page 2, 21-30 page 3
    this.query = this.query.skip(skip).limit(limit);
    // console.log(this.query);

    return this;
  }
}

module.exports = APIFeatures;
