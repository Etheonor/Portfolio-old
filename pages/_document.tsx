import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(
    context_: DocumentContext
  ): Promise<DocumentInitialProps> {
    return await Document.getInitialProps(context_);
  }

  render(): JSX.Element {
    // This will set the initial theme, saved in localstorage

    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
