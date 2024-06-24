const mongoose = require("mongoose");

const CountryStateCitySchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String },
  iso3: { type: String },
  iso2: { type: String },
  numeric_code: { type: String },
  phone_code: { type: String },
  capital: { type: String },
  currency: { type: String },
  currency_name: { type: String },
  currency_symbol: { type: String },
  tld: { type: String },
  native: { type: String },
  region: { type: String },
  region_id: { type: String },
  subregion: { type: String },
  subregion_id: { type: String },
  nationality: { type: String },
  timezones: [
    {
      zoneName: { type: String },
      gmtOffset: { type: String },
      gmtOffsetName: { type: String },
      abbreviation: { type: String },
      tzName: { type: String },
    },
  ],
  translations: {
    kr: { type: String },
    pt_BR: { type: String },
    pt: { type: String },
    nl: { type: String },
    hr: { type: String },
    fa: { type: String },
    de: { type: String },
    es: { type: String },
    fr: { type: String },
    ja: { type: String },
    it: { type: String },
    cn: { type: String },
    tr: { type: String },
  },
  latitude: { type: String },
  longitude: { type: String },
  emoji: { type: String },
  emojiU: { type: String },
  states: [
    {
      id: { type: String },
      name: { type: String },
      state_code: { type: String },
      latitude: { type: String },
      longitude: { type: String },

      cities: [
        {
          id: { type: String },
          name: { type: String },
          latitude: { type: String },
          longitude: { type: String },
        },
      ],
    },
  ],
});

module.exports = mongoose.model("countryStateCity", CountryStateCitySchema)