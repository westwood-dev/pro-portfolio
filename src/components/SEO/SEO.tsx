import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
}

export const SEO = ({ 
  title = 'William Westwood',
  description = 'William Westwood is a developer and designer based in London, UK.'
}: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};