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
import { useApiProblemsRetrieve } from '../../../my-apis/endpoints/api/api';

const Problems: React.FC = () => {
  // Extract the slug from the URL parameters
  const [counter, setCounter] = React.useState(0);

  const router = useRouter();
  const {
    data: service,
    error,
    isLoading,
    refetch,
  } = useApiProblemsRetrieve(Number(router.query.slug), {
    format: 'json',
    counter: counter,
  });

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
            {service?.name}
          </Text>
        </Title>
        <Divider my="lg" variant="dashed" labelPosition="center" label={''} />
        <Text
          size="lg"
          style={{ color: 'white', textAlign: 'center', minWidth: 600 }}
        >
          {service?.description}
        </Text>
      </Card>
    </Container>
  );
};

export default Problems;
