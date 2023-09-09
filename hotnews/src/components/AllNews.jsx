import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';


const AllNews = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `http://43.205.200.33/api/post?limit=2&offset=0`
        );
        setData(data.articles);
       
      } catch (error) {
       console.log('error')
       
      }
    };
    fetchData();
  }, []);

  
  return (
    <Container maxW={'container.xl'} rounded={'2xl'}>
      
        <>
          <Heading fontSize={'2xl'} margin={'10'}>All News</Heading>
          <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
            {data.map(i => (
              <DataCard
                key={i.id}
                name={i.name}
                img={i.urlToImage}
                title={i.title}
                description={i.description}
                content={i.content}
                urll={i.url}
              />
            ))}
          </HStack>
        </>
      
    </Container>
  );
};

const DataCard = ({ name, img, title, description,content,urll }) => (
  <a href={urll} target={'blank'}>
    <VStack
      w={'80'}
      shadow={'lg'}
      p={'8'}
      borderRadius={'lg'}
      transition={'all 0.3s'}
      m={'4'}
      css={{
        '&:hover': {
          transform: 'scale(1.1)',
        },
      }}
    >
      <Image
        src={img}
        boxSize={'300px'}
        objectFit={'cover'}
        alt={'Data'}
      />
      <Heading size={'md'} noOfLines={1}>
        {title}
      </Heading>

      <Text noOfLines={1} fontSize={'sm'}>{description}</Text>
      <Text fontSize={'x-small'}>{content}</Text>
    </VStack>
  </a>
);

export default AllNews;
