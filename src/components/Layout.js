import Header from './Header'
import Meta from './Meta'

export default function Layout(props) {
  return (
    <section
      className={`layout ${props.pathname == 'info' && 'info_page'}`}
      style={{
        backgroundColor: `${props.bgColor && props.bgColor}`,
        color: `${props.pathname == 'info' && 'white'}`
      }}
    >
      <Meta title={props.title} description={props.description} />
      <Header title={props.title} />
      <div className="content">{props.children}</div>
      <style jsx>
        {`
          .layout {
            overflow-x: hidden;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
          .layout .info_page {
            color: #ebebeb;
          }
          .content {
            flex-grow: 1;
          }
          @media (min-width: 768px) {
            .layout {
              display: block;
            }
            .content {
              flex-grow: none;
              width: 70vw;
              margin-left: 30vw;
            }
          }
        `}
      </style>
    </section>
  )
}
