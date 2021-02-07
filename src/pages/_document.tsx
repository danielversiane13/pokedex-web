import Document, {
  DocumentProps,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'

class MyDocument extends Document<DocumentProps> {
  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000" />

          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Sriracha&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body
          style={{
            overflowX: 'hidden',
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
            minWidth: '100vw',
            minHeight: '100vh',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat',
            backgroundColor: '#0f1923',
            background:
              'url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiCiAgICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgICAgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiICBpZD0ic25hcHNob3QtMjY1NTIiIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgNDAwIDQwMCI+PGRlc2M+VGhpcyBpbWFnZSB3YXMgbWFkZSBvbiBQYXR0ZXJuaW5qYS5jb208L2Rlc2M+PGRlZnM+CjwhLS0gaW1hZ2UgMDgxNzQgLS0+CjxnIGlkPSJ0cmFuc2Zvcm1lZC0wODE3NCIgZGF0YS1pbWFnZT0iMDgxNzQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjUsIC0xMjUpIHJvdGF0ZSgwLCAxMjUsIDEyNSkiPjxnPjxzdmcgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjUwcHgiIGhlaWdodD0iMjUwcHgiIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj48ZyBpZD0ib3JpZ2luYWwtMDgxNzQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgogIDxwYXRoIGQ9Ik01MCAxMGMyMC4xIDAgMzYuOCAxNC45IDM5LjYgMzQuMi01LjMtLjgtMTMuNi0xLjMtMjYuNS0xLjZDNjAuNSAzOCA1NS41IDM1IDUwIDM1cy0xMC41IDMtMTMuMSA3LjZjLTEyLjkuMy0yMS4yLjgtMjYuNSAxLjZDMTMuMiAyNC45IDI5LjkgMTAgNTAgMTBtMC01QzI1LjEgNSA1IDI1LjEgNSA1MHYxLjFjLjUtMiAxNi43LTMuMiAzNS4zLTMuNSAxLjEtNC40IDUtNy42IDkuNy03LjYgNC43IDAgOC42IDMuMiA5LjcgNy42IDE4LjUuMyAzNC44IDEuNCAzNS4zIDMuNVY1MEM5NSAyNS4xIDc0LjkgNSA1MCA1eiIgZmlsbD0icmdiYSgyNDAsIDI0MCwgMjQwLCAwLjQpIiBzdHJva2U9Im5vbmUiLz4KICA8cGF0aCBkPSJNMzcuMSA1Ny42QzM5LjcgNjIuMSA0NC42IDY1IDUwIDY1czEwLjItMi45IDEyLjktNy40YzEzLjkuMyAyMS45IDEgMjYgMS42Qzg0LjcgNzcuMSA2OC43IDkwIDUwIDkwUzE1LjMgNzcuMSAxMS4xIDU5LjNjNC4xLS43IDEyLjEtMS40IDI2LTEuN20zLjItNWMtMTcuMi4zLTMyLjUgMS4zLTM1IDMuMUM4LjIgNzcuOCAyNy4xIDk1IDUwIDk1YzIyLjkgMCA0MS44LTE3LjEgNDQuNi0zOS4zLTIuNS0xLjgtMTcuNy0yLjgtMzUtMy4xLTEuMSA0LjMtNSA3LjQtOS43IDcuNC00LjUgMC04LjQtMy4yLTkuNi03LjR6IiBmaWxsPSJyZ2JhKDI0MCwgMjQwLCAyNDAsIDAuNCkiIHN0cm9rZT0ibm9uZSIvPgogIDxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjciIGZpbGw9InJnYmEoMjQwLCAyNDAsIDI0MCwgMC40KSIgc3Ryb2tlPSJub25lIi8+Cjwvc3ZnPgo8L2c+PC9zdmc+PC9nPjwvZz4KPCEtLSAvaW1hZ2UgMDgxNzQgLS0+CjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0icmdiYSgxNSwgMjUsIDM1LCAxKSI+PC9yZWN0Pjx1c2UgeGxpbms6aHJlZj0iI3RyYW5zZm9ybWVkLTA4MTc0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDAwLCAtNDAwKSI+PC91c2U+PHVzZSB4bGluazpocmVmPSIjdHJhbnNmb3JtZWQtMDgxNzQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsIC00MDApIj48L3VzZT48dXNlIHhsaW5rOmhyZWY9IiN0cmFuc2Zvcm1lZC0wODE3NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAwLCAtNDAwKSI+PC91c2U+PHVzZSB4bGluazpocmVmPSIjdHJhbnNmb3JtZWQtMDgxNzQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00MDAsIDApIj48L3VzZT48dXNlIHhsaW5rOmhyZWY9IiN0cmFuc2Zvcm1lZC0wODE3NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwgMCkiPjwvdXNlPjx1c2UgeGxpbms6aHJlZj0iI3RyYW5zZm9ybWVkLTA4MTc0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MDAsIDApIj48L3VzZT48dXNlIHhsaW5rOmhyZWY9IiN0cmFuc2Zvcm1lZC0wODE3NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQwMCwgNDAwKSI+PC91c2U+PHVzZSB4bGluazpocmVmPSIjdHJhbnNmb3JtZWQtMDgxNzQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsIDQwMCkiPjwvdXNlPjx1c2UgeGxpbms6aHJlZj0iI3RyYW5zZm9ybWVkLTA4MTc0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MDAsIDQwMCkiPjwvdXNlPjwvc3ZnPg==)'
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
