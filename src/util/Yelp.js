// Yelp credentials
const apiKey = 'bxUH7FYk4WfP5I7Do3pmwylyytzGms12LcPmaZUa2RsZPHjfFWnx90Gtfhu9IBOlQgFJZj4j0btN2tHY5MiMI3qI6tzrcFKyrQ_jF6KknAGsFgkhXEnd9Eewt6L6WXYx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      }
    });
  }
};

export default Yelp;
