export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f84b2964b683321fb2adba1',
                  title: 'Sanity Studio',
                  name: 'haa-sanity-nextjs-landing-pages-studio',
                  apiId: '15167c97-d5f3-4429-8ea6-555b8f04c167'
                },
                {
                  buildHookId: '5f84b29644023a1c2b3ad272',
                  title: 'Landing pages Website',
                  name: 'haa-sanity-nextjs-landing-pages',
                  apiId: 'b2db9035-0c38-4e2e-9b1a-3647060647f6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/makersphere/HAA-sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://haa-sanity-nextjs-landing-pages.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
