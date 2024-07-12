import React from 'react';
import { useRouter } from 'next/router'
import { Card, Table, Container, Title, Text, Divider, Button } from '@mantine/core';

const Problems: React.FC = () => {
    // Extract the slug from the URL parameters
    const router = useRouter()

    return (
        <Container id='abc' style={{width: '100%'}} p='md'>
            <Card shadow="sm" padding="md" radius="xl" withBorder style={{backgroundColor: '#2e2e2eDD'}}>
                <Title mt='md' order={1} style={{fontWeight: 900, textAlign: 'center', display: 'flex', justifyContent: 'center', fontSize: '2.5rem'}}>
                    <Text
                        component="span"
                        inherit
                        ml="lg"
                        variant="gradient"
                        gradient={{ from: '#FFFFFF', to: '#FFFFFF' }}>
                        {router.query.slug}
                    </Text>
                </Title>
                <Divider my="lg" variant="dashed" labelPosition="center" label={''}/>
            </Card>      
        </Container>
    );
};

export default Problems;
