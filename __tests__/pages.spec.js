import Index, { getStaticProps } from '../src/pages/index'
import { mount } from 'enzyme'

describe('Pages', () => {
  it('should render /', async () => {
    let { props } = await getStaticProps()
    const wrap = mount(<Index {...props} />)
    const componentProps = wrap.props()
    expect(componentProps.allBlogs.length).toBeGreaterThanOrEqual(1)
    expect(componentProps.title).toBeTruthy()
    expect(componentProps.description).toBeTruthy()

    const c = wrap.render()
    expect(c).toBeTruthy()
  })
})
