const moment = require('moment')
const selectors = require('../data/selectors')
const jsonfile = require('jsonfile')
const path = require('path')
const countries = selectors.country.data
const manufacturers = selectors.manufacturer.data
const genders = selectors.gender.data
const sizes = selectors.size.data
const colours = selectors.colour.data
const styles = selectors.style.data

const file = path.resolve('.') + '/data/index.json'
const startDate = moment('2016-01-01')
const endDate = moment('2017-01-01')
let sales = []

const randomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let date = startDate; date.isBefore(endDate); date.add(1, 'months')) {
  countries.forEach(country => {
    manufacturers.forEach(manufacturer => {
      genders.forEach(gender => {
        sizes.forEach(size => {
          colours.forEach(colour => {
            styles.forEach(style => {
              sales.push({
                date: date.format('YYYY-MM-DD'),
                country,
                manufacturer,
                gender,
                size,
                colour,
                style,
                count: randomInteger(0, 5000)
              })
            })
          })
        })
      })
    })
  })
}

jsonfile.writeFile(file, sales, function (err) {
  err ? console.log(err) : console.log('Success!')
})
