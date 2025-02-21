import { Metadata } from 'next';

interface SEOProps {
  title?: string;
  description?: string;
}

export const generateMetadata = ({ 
  title = 'William Westwood',
  description = 'William Westwood is a developer and designer based in London, UK.'
}: SEOProps): Metadata => {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
  };
};