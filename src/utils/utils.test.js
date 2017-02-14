import { isEmpty, deepmerge, query } from './utils'

describe('isEmpty', () => {

  test('returns true for an empty object', () => {
    expect(isEmpty({})).toBe(true);
  })

  test('returns true for a non empty object', () => {
    expect(isEmpty({name: 'joao'})).toBe(false);
  })

})

describe('deepmerge', () => {

  test('merges the enumerable attributes of two objects deeply', () => {
    expect(deepmerge(
      { name: 'joao' },
      { country: 'Portugal',
        work: {
          present: 'BBC'
        }
      }
    )).toEqual({
      name: 'joao',
      country: 'Portugal',
      work: {
        present: 'BBC'
      }
    })
  })

  test('overrides the enumerable attributes of type Array with the source array', () => {
    expect(deepmerge(
      { name: 'joao',
        work: {
          present: 'BBC',
          previous: ['Channel 4']
        }
      },
      { country: 'Portugal',
        work: {
          present: 'BBC',
          previous: ['Channel 4', 'Neoworks', 'Vodafone UK', 'Vodafone Spain']
        }
      }
    )).toEqual({
      name: 'joao',
      country: 'Portugal',
      work: {
        present: 'BBC',
        previous: ['Channel 4', 'Neoworks', 'Vodafone UK', 'Vodafone Spain']
      }
    })
  })

})

describe('query', () => {

  const data =[
    { date: '2016-01-01', country: 'Portugal', manufacturer: 'Levis', gender: 'female', size: '32', colour: 'White', style: 'straight', count: 1 },
    { date: '2016-12-01', country: 'Portugal', manufacturer: 'Levis', gender: 'male', size: '38', colour: 'Yellow', style: 'straight', count: 5 },
    { date: '2016-09-01', country: 'Portugal', manufacturer: 'Miss Sixty', gender: 'female', size: '34', colour: 'White', style: 'straight', count: 8 },
    { date: '2016-01-01', country: 'Portugal', manufacturer: 'Miss Sixty', gender: 'female', size: '34', colour: 'Red', style: 'straight', count: 2 },
    { date: '2016-01-01', country: 'Germany', manufacturer: 'Levis', gender: 'female', size: '34', colour: 'Red', style: 'straight', count: 5 },
    { date: '2016-01-01', country: 'Germany', manufacturer: 'Levis', gender: 'female', size: '35', colour: 'Dark green', style: 'straight', count: 10 },
    { date: '2016-12-01', country: 'Germany', manufacturer: 'Diesel', gender: 'female', size: '36', colour: 'White', style: 'straight', count: 12 },
    { date: '2016-10-01', country: 'Germany', manufacturer: 'Diesel', gender: 'male', size: '38', colour: 'Dark blue', style: 'straight', count: 15 },
    { date: '2016-01-01', country: 'Germany', manufacturer: 'G Star', gender: 'male', size: '38', colour: 'Dark blue', style: 'straight', count: 17 },
    { date: '2016-01-01', country: 'Italy', manufacturer: 'G Star', gender: 'female', size: '32', colour: 'White', style: 'straight', count: 22 },
    { date: '2016-12-01', country: 'Italy', manufacturer: 'G Star', gender: 'female', size: '34', colour: 'Red', style: 'straight', count: 20 }
  ]

  test('returns the top selling manufactures by country', () => {
    expect(query(
      data,
      'manufacturer',
      {
        country: ['Portugal']
      }
    )).toEqual([
      { rank: 1, type: 'manufacturer', key: 'Miss Sixty', count: 10 },
      { rank: 2, type: 'manufacturer', key: 'Levis', count: 6 }
    ])
  })

  test('returns the top selling manufactures by country and gender', () => {
    expect(query(
      data,
      'manufacturer',
      {
        country: ['Portugal'],
        gender: 'male'
      }
    )).toEqual([
      { rank: 1, type: 'manufacturer', key: 'Levis', count: 5 }
    ])
  })

  test('returns the top selling sizes by country', () => {
    expect(query(
      data,
      'size',
      {
        country: ['Germany'],
        gender: 'male'
      }
    )).toEqual([
      { rank: 1, type: 'size', key: '38', count: 32 }
    ])
  })

  test('returns the top selling months globally', () => {
    expect(query(
      data,
      'month',
      {}
    )).toEqual([
       { rank: 1, 'count': 57, 'key': 'January', 'type': 'month'},
       { rank: 2, 'count': 37, 'key': 'December', 'type': 'month'},
       { rank: 3, 'count': 15, 'key': 'October', 'type': 'month'},
       { rank: 4, 'count': 8, 'key': 'September', 'type': 'month'}
    ])
  })

  test('returns the top selling months by country', () => {
    expect(query(
      data,
      'month',
      {
        'country': ['Portugal']
      }
    )).toEqual([
      { rank: 1, 'count': 8, 'key': 'September', 'type': 'month'},
      { rank: 2, 'count': 5, 'key': 'December', 'type': 'month'},
      { rank: 3, 'count': 3, 'key': 'January', 'type': 'month'}
    ])
  })

  test('returns the top selling months across multiple countries', () => {
    expect(query(
      data,
      'month',
      {
        'country': ['Portugal', 'Italy']
      }
    )).toEqual([
      { rank: 1, 'count': 25, 'key': 'January', 'type': 'month'},
      { rank: 2, 'count': 25, 'key': 'December', 'type': 'month'},
      { rank: 3, 'count': 8, 'key': 'September', 'type': 'month'}
    ])
  })

  test('returns the top selling sizes by country and gender', () => {
    expect(query(
      data,
      'size',
      {
        'country': ['Germany'],
        'gender': ['female']
      }
    )).toEqual([
      { rank: 1, 'count': 12, 'key': '36', 'type': 'size'},
      { rank: 2, 'count': 10, 'key': '35', 'type': 'size'},
      { rank: 3, 'count': 5, 'key': '34', 'type': 'size'}
    ])
  })

  test('returns the top selling gender by manufacturer', () => {
    expect(query(
      data,
      'gender',
      {
        'manufacturer': ['Miss Sixty']
      }
    )).toEqual([
      { rank: 1, 'count': 10, 'key': 'female', 'type': 'gender'}
    ])
  })

  test('returns the top selling style by country and gender', () => {
    expect(query(
      data,
      'style',
      {
        'country': ['Germany'],
        'gender': ['male']
      }
    )).toEqual([
      { rank: 1, 'count': 32, 'key': 'straight', 'type': 'style'}
    ])
  })

  test('returns the top selling colour globally by gender', () => {
    expect(query(
      data,
      'colour',
      {
        'country': [],
        'gender': ['female']
      }
    )).toEqual([
      { rank: 1, 'count': 43, 'key': 'White', 'type': 'colour'},
      { rank: 2, 'count': 27, 'key': 'Red', 'type': 'colour'},
      { rank: 3, 'count': 10, 'key': 'Dark green', 'type': 'colour'}
    ])
  })

})
