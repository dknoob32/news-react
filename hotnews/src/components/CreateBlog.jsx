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
import React, { useEffect, useState, useRef } from 'react';
import JoditEditor from 'jodit-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
  // const [image, setImage] = useState("");
  const [categories, setCategories] = useState('');
  const [tags, setTags] = useState('');

  // const handleImageChange = (event) => {
  //   setImage(event.target.files[0])
  // }

  const Submit = async() => {

    const slug =
      title
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
   
    const token = localStorage.getItem('user');
     console.log({ title, content, categories, tags, slug, token });

      try {
    const formData = new FormData();
     formData.append('slug', slug);
     formData.append('title', title);
     formData.append('description', content);
     formData.append('tags', tags);
     formData.append('categories', categories);
     formData.append('post', content);
     formData.append('is_verified', 'false');
     formData.append('is_published', 'true');
    //  formData.append('image', image); // Assuming you want to send the image in a field named 'image'

    // You can add other data to the form if needed, e.g., formData.append('name', 'John');

    const response = await axios.post(
      'http://43.205.200.33/api/post',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`, // Important for server to recognize the content as a file upload
        },
      }
    );

    console.log('Image uploaded successfully!', response.data);
    return response.data; // If the server returns any useful information after the upload
  } catch (error) {
    console.error('Error uploading image:', error);
    return null;
  }

     

    //   console.log(formData,"data")
    //  axios
    //     .post(http://43.'205.200.33/api/post?limit=3&offset=0', formData , {
    //       headers: {
    //         'Content-Type': 'multipart/form-data',
    //         'Authorization': `Bearer ${token}`,
    //       },
    //     })
    //     .then(result => console.log(result.data))
    //     .catch(err => {
    //       console.log(err);
    //     });
    // setCategories('');
    // setTitle('');
    // setContent('');
    // setImage('');
    // setTags('');
  };

  const clearData = () => {
    setCategories('');
    setTitle('');
    setContent('');
    // setImage('');
    setTags('');
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
        {/* <FormLabel as={'Image'}>Image</FormLabel> */}
        {/* <Input
          type="file"
          value={image}
          onChange={handleImageChange}
          accept="image/*"
          placeholder="Upload Image"
        /> */}
        <FormLabel as={'content'}>Content</FormLabel>
        <JoditEditor
          ref={editor}
          config={{ theme: 'dark' }}
          value={content}
          onChange={newContent => setContent(newContent)}
        />
        <FormLabel>Categories</FormLabel>
        <Select
          value={categories}
          onChange={e => setCategories(e.target.value)}
          placeholder="Select Categories"
        >
          <option value="india">India</option>
          <option value="test">test</option>
          <option value="politics">Politics</option>
        </Select>
        <FormLabel>Tags</FormLabel>
        <Input
          type="tags"
          value={tags}
          onChange={e => setTags(e.target.value)}
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
            <Button onClick={clearData} size={['md', 'lg']} colorScheme="red">
              Reset Content
            </Button>
          </ButtonGroup>
        </Container>
      </FormControl>
    </>
  );
};

export default CreateBlog;
