import Grid from '@/components/Grid';
import GridItem from '../GridItem';

export const Work = () => {
  return (
    <div>
      <Grid>
        <GridItem title="Work 1" image="/next.svg" wide tall />
        <GridItem title="Work 1" image="/next.svg" />
        <GridItem title="Work 1" image="/next.svg" />
        <GridItem title="Work 1" image="/next.svg" tall />
      </Grid>
    </div>
  );
};
