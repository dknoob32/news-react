import {
  Button,
  ButtonGroup,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Wrap,
} from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import JoditEditor from 'jodit-react';
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('user')) {
      navigate('/login');
    }
  });

  return (
    <Container maxW={['container.md', 'container.lg']} my={'2c'}>
      <Wrap>
        <BlogCard />
      </Wrap>
    </Container>
  );
};
const BlogCard = () => {
  const editor = useRef(null);
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [categories, setCategories] = useState('');

  const Submit = () => {
    console.log({ title, content, categories });
    setCategories('');
    setTitle('');
    setContent('');
  };

  return (
    <>
      <Heading fontSize={['lg', '2xl']}>Whats going in your Mind ?</Heading>
      <FormControl my={'3'}>
        <FormLabel as={'title'}>Title</FormLabel>
        <Input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Enter Here"
        />
        <FormLabel as={'title'}>Description</FormLabel>
        <Input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Enter Here"
        />
        <FormLabel as={'content'}>Content</FormLabel>
        <Textarea h={'300px'} placeholder="write here" />
        {/* <JoditEditor
          ref={editor}
          value={content}
          onChange={newContent => setContent(newContent)}
        /> */}
        <FormLabel as={'title'}>Description</FormLabel>
        <Input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Enter Here"
        />

        <Container my={'8'} ml={['3', '30%']}>
          <ButtonGroup gap={'6'} py={'6'}>
            <Button
              onClick={Submit}
              size={['md', 'lg']}
              colorScheme="teal"
              type="submit"
            >
              Create Blog
            </Button>
            <Button size={['md', 'lg']} colorScheme="red">
              Reset Content
            </Button>
          </ButtonGroup>
        </Container>
      </FormControl>
    </>
  );
};

export default CreateBlog;
