import React from 'react';
import { useRouter } from 'next/router';
import {
  Table,
  Progress,
  Anchor,
  Text,
  Group,
  LoadingOverlay,
  Button,
} from '@mantine/core';
import { Card, Container, Title, Divider } from '@mantine/core';

const Problems: React.FC = () => {
  // Extract the slug from the URL parameters
  const router = useRouter();

  return (
    <Container id="abc" style={{ width: '100%' }} p="md">
      <Card
        shadow="sm"
        padding="md"
        radius="xl"
        withBorder
        style={{ backgroundColor: '#2e2e2eDD' }}
      >
        <Title
          mt="md"
          order={1}
          style={{
            fontWeight: 900,
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            fontSize: '2.5rem',
          }}
        >
          <Text
            component="span"
            inherit
            ml="lg"
            variant="gradient"
            gradient={{ from: '#FFFFFF', to: '#FFFFFF' }}
          >
            {router.query.slug}
          </Text>
        </Title>
        <Divider my="lg" variant="dashed" labelPosition="center" label={''} />
      </Card>
      <Card>
        <Group justify="space-between">
          <Text fz="xs" c="teal" fw={700}>
            {positiveReviews.toFixed(0)}%
          </Text>
          <Text fz="xs" c="red" fw={700}>
            {negativeReviews.toFixed(0)}%
          </Text>
        </Group>
        <Progress.Root>
          <Progress.Section
            className={classes.progressSection}
            value={positiveReviews}
            color="teal"
          />
          <Progress.Section
            className={classes.progressSection}
            value={negativeReviews}
            color="red"
          />
        </Progress.Root>
      </Card>
    </Container>
  );
};

export default Problems;
