import Title from '@/components/Title';

interface sectionProps {
  title: string;
  children: React.ReactNode;
}

export const Section = ({ title, children }: sectionProps) => (
  <section className="pb-4">
    <Title text={title} />
    {children}
  </section>
);
