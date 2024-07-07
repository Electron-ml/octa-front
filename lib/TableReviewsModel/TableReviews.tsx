import { Table, Progress, Anchor, Text, Group, LoadingOverlay, Button, Badge, Tooltip, Modal, TextInput } from '@mantine/core';
import classes from './TableReviews.module.css';
import Link from 'next/link';
import { useEffect } from 'react';
import { apiAimodelsPartialUpdate } from '../../api/endpoints/api/api';
import { notifications } from '@mantine/notifications';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import { useForm } from '@mantine/form';
import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import {
  deployStrategy,
  depositToStrategy,
  updateLiqudity,
} from "../../scripts/smartContractInteractions";
import { ethers } from "ethers";
import { useDeployCreate } from '../../api/endpoints/deploy/deploy';
import { id } from 'ethers/lib/utils';


export function TableReviews({services, isLoading, refetchParent}) {
    const [opened, { open, close }] = useDisclosure(false);
    const [selectModel, setSelectModel] = useState(0);
    const [isUpdating, setIsUpdating] = useState(false);
    const { primaryWallet } = useDynamicContext();
    const [isDeployingonChain, setIsDeployingonChain] = useState(false);
    const { mutateAsync: deployCreate } = useDeployCreate();

    const form = useForm({
    });

    const deployMyStrategy = async () => {
      // const walletClient = await primaryWallet?.connector?.getWalletClient();
      setIsDeployingonChain(true);
      const signer = await primaryWallet?.connector.ethers?.getSigner();
      console.log(signer)
      const verifierAddress = "0xBaa37770a6486f8070E3B6e0ebbCEe5dd1320894"
      let strategyAddress = await deployStrategy(signer, verifierAddress);
      const depositAmount = ethers.utils.parseUnits("0.0001", 18);
      let txHash = await depositToStrategy(signer, depositAmount, strategyAddress);
      //let txhash1 = await updateLiqudity(signer, strategyAddress);
      notifications.show({message: `Strategy deployed successfully with address ${strategyAddress}`, color: 'green'});
      setIsDeployingonChain(false);
      }
  
    const rows = services?.map((row) => {
    const best_accuracy = parseFloat(row.accuracy) || 0;
    const positiveReviews = (best_accuracy);
    const negativeReviews = (100 - best_accuracy);  




    return (
      <Table.Tr key={row.name}>
        <Table.Td>
          <Anchor component="button" fz="sm">
            {row.name}
          </Anchor>
        </Table.Td>
        <Table.Td><Link href={'#'}>{row.problem_name}</Link></Table.Td>
        <Table.Td>
          <Anchor component="button" fz="sm">
            <Tooltip label={row.description}>
              <Text>Hover to read</Text>
            </Tooltip>
          </Anchor>
        </Table.Td>
        <Table.Td>
          {row.type_name? <Badge color="teal">{row.type_name}</Badge> : ''}
        </Table.Td>
        <Table.Td>
        {row.nevermind_tag? <Badge ml={5} variant='dot' color="teal">Deployed</Badge> : <Button onClick={() => {
          setSelectModel(row.id);
          open();
        }} variant='transparent'>Deploy with Nevermined</Button>}
        </Table.Td>
        <Table.Td>
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
        </Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Table.ScrollContainer minWidth={800}>
      <LoadingOverlay visible={isLoading} />
      <Table verticalSpacing="xs">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Name</Table.Th>
            <Table.Th>Problem</Table.Th>
            <Table.Th>Description</Table.Th>
            <Table.Th>Type</Table.Th>
            <Table.Th>Availability</Table.Th>
            <Table.Th>Mean Absolute Error</Table.Th>
            
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>

      <Modal opened={opened} onClose={close} title="Start charging for inference">
        <LoadingOverlay visible={false} />
        <Button mb='sm' onClick={() => {
          //deployCreate({id: selectModel});
          setIsDeployingonChain(true);
          setTimeout(() => {
            setIsDeployingonChain(false);
            notifications.show({message: 'Verifier deployed successfully', color: 'green'
          })
        }, 1500);
        }} loading={isDeployingonChain} >Deploy verifier</Button>

        <br></br>
        <Button mb='sm' onClick={deployMyStrategy} loading={isDeployingonChain}>Deploy strategy</Button>
        <form onSubmit={form.onSubmit((values) => {setIsUpdating(true); apiAimodelsPartialUpdate(selectModel, {
        nevermind_tag: values.tag
      }).then(() => {
      
      close();
      notifications.show({message: 'Tag updated successfully', color: 'green'});
      if (refetchParent) refetchParent();
      }).catch((error: any) => {
      notifications.show({message: `Tag update failed: ${JSON.stringify(error.response?.data)}`, color: 'red'});
      })})}>
          <TextInput
            withAsterisk
            label="Nevermined deployment tag"
            placeholder="did:nv:b85024..."
            {...form.getInputProps('tag')}
          />
          <Group position="right" mt="lg">
            <Button type="submit">Publish deployment</Button>
          </Group>
        </form>
      </Modal>
    </Table.ScrollContainer>
  );
}
