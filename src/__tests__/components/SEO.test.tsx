import { render } from '@testing-library/react';
import { SEO } from '../../components/SEO';
import { Helmet } from 'react-helmet';

describe('SEO', () => {
  const getHelmetContent = () => {
    const helmet = Helmet.peek();
    return {
      title: helmet.title,
      metaTags: helmet.metaTags,
    };
  };

  it('renders default SEO tags', () => {
    render(<SEO />);
    const { title, metaTags } = getHelmetContent();

    expect(title).toBe('William Westwood');
    
    const description = 'William Westwood is a developer and designer based in London, UK.';
    const descriptionTag = metaTags.find(tag => tag.name === 'description');
    expect(descriptionTag?.content).toBe(description);
  });

  it('renders custom SEO tags', () => {
    const customTitle = 'Custom Title';
    const customDescription = 'Custom description';
    
    render(<SEO title={customTitle} description={customDescription} />);
    const { title, metaTags } = getHelmetContent();

    expect(title).toBe(customTitle);
    
    const descriptionTag = metaTags.find(tag => tag.name === 'description');
    expect(descriptionTag?.content).toBe(customDescription);
  });

  it('renders Open Graph tags', () => {
    const title = 'Test Title';
    const description = 'Test description';
    
    render(<SEO title={title} description={description} />);
    const { metaTags } = getHelmetContent();

    const ogTitle = metaTags.find(tag => (tag as any).property === 'og:title');
    const ogDescription = metaTags.find(tag  => (tag as any).property === 'og:description');
    const ogType = metaTags.find(tag => (tag as any).property === 'og:type');

    expect(ogTitle?.content).toBe(title);
    expect(ogDescription?.content).toBe(description);
    expect(ogType?.content).toBe('website');
  });

  it('renders Twitter Card tags', () => {
    const title = 'Test Title';
    const description = 'Test description';
    
    render(<SEO title={title} description={description} />);
    const { metaTags } = getHelmetContent();

    const twitterCard = metaTags.find(tag => tag.name === 'twitter:card');
    const twitterTitle = metaTags.find(tag => tag.name === 'twitter:title');
    const twitterDescription = metaTags.find(tag => tag.name === 'twitter:description');

    expect(twitterCard?.content).toBe('summary');
    expect(twitterTitle?.content).toBe(title);
    expect(twitterDescription?.content).toBe(description);
  });
});