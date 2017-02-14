const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const countries = [
  'Austria',
  'France',
  'Germany',
  'Greece',
  'Italy',
  'Portugal',
  'Spain',
  'United Kingdom'
]

const manufacturers = [
  'AG Jeans',
  'Diesel',
  'Giorgio Armani',
  'G Star',
  'Lee Jeans',
  'Levi\'s',
  'Miss Sixty',
  'Wrangler'
]

const genders = [
  'female',
  'male'
]

const sizes = [
  '28',
  '29',
  '30',
  '31',
  '32'
]

const colours = [
  'Black',
  'Dark blue',
  'Dark green',
  'Red',
  'Yellow'
]

const styles = [
  'Boot cut',
  'Relaxed',
  'Slim',
  'Skinny'
]

module.exports = {
  month: {
    id: 'month',
    display: 'Month',
    data: months
  },
  country: {
    id: 'country',
    display: 'Country',
    data: countries
  },
  manufacturer: {
    id: 'manufacturer',
    display: 'Manufacturer',
    data: manufacturers
  },
  gender: {
    id: 'gender',
    display: 'Gender',
    data: genders
  },
  size: {
    id: 'size',
    display: 'Size',
    data: sizes
  },
  colour: {
    id: 'colour',
    display: 'Colour',
    data: colours
  },
  style: {
    id: 'style',
    display: 'Style',
    data: styles
  }
}
