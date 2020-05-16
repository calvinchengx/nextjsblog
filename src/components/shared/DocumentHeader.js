import Head from 'next/head'
import config from '../../config'

export default class DocumentHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Head>
        <title>
          {config.site} | {this.props.title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#fffff" />
        <meta charSet="utf-8" />
        <meta name="description" content={config.description} />
      </Head>
    )
  }
}
