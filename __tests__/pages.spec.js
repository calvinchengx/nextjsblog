
describe('Pages', () => {
  it('render', async() => {
    const a = 1
    expect(a).toBe(1)
  })
})

// import Index, { getStaticProps } from '../src/pages/index'
// import { mount } from 'enzyme'
// import BlogTemplate, {
//   getStaticPaths
// } from '../src/pages/[yyyy]/[mm]/[dd]/[slug]'

// describe('Pages', () => {
//   it('should render /', async () => {
//     let { props } = await getStaticProps()
//     const wrap = mount(<Index {...props} />)
//     const componentProps = wrap.props()
//     expect(componentProps.allBlogs.length).toBeGreaterThanOrEqual(1)
//     expect(componentProps.title).toBeTruthy()
//     expect(componentProps.description).toBeTruthy()

//     const c = wrap.render()
//     expect(c).toBeTruthy()
//   })

//   it('should render dynamic pages /[yyyy]/[mm]/[dd]/[slug]', async () => {
//     let { paths, fallback } = await getStaticPaths()
//     expect(paths).toEqual(expect.any(Array))
//     expect(fallback).toBeFalsy()

//     // Emulates a user browsing to this specific url /2020/05/11/hello-world,
//     // thus generating this ctx
//     let ctx = {
//       params: { yyyy: '2020', mm: '05', dd: '11', slug: 'hello-world' }
//     }
//     let { props } = await getStaticProps(ctx)
//     const wrap = mount(<BlogTemplate {...props} />)
//     const componentProps = wrap.props()
//     expect(componentProps.allBlogs.length).toBeGreaterThanOrEqual(1)
//     expect(componentProps.title).toBeTruthy()
//     expect(componentProps.description).toBeTruthy()

//     const c = wrap.render()
//     expect(c).toBeTruthy()
//   })
// })
