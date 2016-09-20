const Contentful = require('../../..')
const htmlStandards = require('reshape-standard')
const locals = {}

module.exports = {
  matchers: { html: '*(**/)*.sgr' },
  reshape: (ctx) => htmlStandards({ webpack: ctx, locals }),
  plugins: [new Contentful({
    accessToken: process.env.accessToken,
    spaceId: process.env.spaceId,
    addDataTo: locals,
    contentTypes: [
      {
        name: 'blogs',
        id: '633fTeiMaQwE44OsIqSimk'
      }
    ],
    json: 'data.json'
  })]
}
