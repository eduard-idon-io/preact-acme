import { h, render, Component } from 'preact';

class Page extends Component {
  render() {
      return (
        <html>
          <head>
            <title>Pagina Principal</title>
          </head>
          <body>
            <h1>Hola a todos desde el servidor</h1>
          </body>
        </html>
      );
  }
}

export default Page