import mongoose, { Schema } from "mongoose";

const roomSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  listing_url: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  space: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
    required: true,
  },
  transit: {
    type: String,
    required: true,
  },
  access: {
    type: String,
    required: true,
  },
  interaction: {
    type: String,
    required: true,
  },
  house_rules: {
    type: String,
    required: true,
  },
  property_rules: {
    type: String,
    required: true,
  },
  room_type: {
    type: String,
    required: true,
  },
  bed_type: {
    type: String,
    required: true,
  },
  minimum_nights: {
    type: String,
    required: true,
  },
  maximum_nights: {
    type: String,
    required: true,
  },
  cancellation_policy: {
    type: String,
    required: true,
  },
  last_scraped: {
    type: Date,
    required: true,
  },
  calendar_last_scraped: {
    type: Date,
    required: true,
  },
  first_review: {
    type: Date,
    required: true,
  },
  last_review: {
    type: Date,
    required: true,
  },
  accommodates: {
    type: Number,
    required: true,
  },
  bedrooms: {
    type: Number,
    required: true,
  },
  beds: {
    type: Number,
    required: true,
  },
  number_of_reviews: {
    type: Number,
    required: true,
  },
  bathrooms: {
    type: mongoose.Types.Decimal128,
    required: true,
  },
  amenities: {
    type: Array,
    required: true,
  },
  price: {
    type: mongoose.Types.Decimal128,
    required: true,
  },
  security_deposit: {
    type: mongoose.Types.Decimal128,
    required: true,
  },
  cleaning_fee: {
    type: mongoose.Types.Decimal128,
    required: true,
  },
  extra_people: {
    type: mongoose.Types.Decimal128,
    required: true,
  },
  guests_included: {
    type: mongoose.Types.Decimal128,
    required: true,
  },

  /*
images
Object
thumbnail_url
""
medium_url
""
picture_url
"https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e…"
xl_picture_url
""

host
Object
host_id
"51399391"
host_url
"https://www.airbnb.com/users/show/51399391"
host_name
"Ana&Gonçalo"
host_location
"Porto, Porto District, Portugal"
host_about
"Gostamos de passear, de viajar, de conhecer pessoas e locais novos, go…"
host_response_time
"within an hour"
host_thumbnail_url
"https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7…"
host_picture_url
"https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7…"
host_neighbourhood
""
host_response_rate
100
host_is_superhost
false
host_has_profile_pic
true
host_identity_verified
true
host_listings_count
3
host_total_listings_count
3

host_verifications
Array (6)
0
"email"
1
"phone"
2
"reviews"
3
"jumio"
4
"offline_government_id"
5
"government_id"

address
Object
street
"Porto, Porto, Portugal"
suburb
""
government_area
"Cedofeita, Ildefonso, Sé, Miragaia, Nicolau, Vitória"
market
"Porto"
country
"Portugal"
country_code
"PT"

location
Object
type
"Point"

coordinates
Array (2)
0
-8.61308
1
41.1413
is_location_exact
false

availability
Object
availability_30
28
availability_60
47
availability_90
74
availability_365
239

review_scores
Object
review_scores_accuracy
9
review_scores_cleanliness
9
review_scores_checkin
10
review_scores_communication
10
review_scores_location
10
review_scores_value
9
review_scores_rating
89

reviews
Array (51)

0
Object
_id
"58663741"
date
2016-01-03T05:00:00.000+00:00
listing_id
"10006546"
reviewer_id
"51483096"
reviewer_name
"Cátia"
comments
"A casa da Ana e do Gonçalo foram o local escolhido para a passagem de …"
*/
});

export default mongoose.models.rooms || mongoose.model("rooms", roomSchema);
