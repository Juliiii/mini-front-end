import reqwest from 'reqwest'

var rMap = {
    '/search-by-name': '/companys/search-by-name'
}

var fMap = {}

Object.keys(rMap).map((key, index) => {
    fMap[key] = (data) => reqwest({
        url: rMap[key],
        data
    })
})

export default fMap