import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useRouter } from 'next/router';

const images = [
  {
    url: '/coffeeguy.jpg',
    title: 'Lokesh Yerneni',
    width: '31%',
  },
  {
    url: '/coffeeguy.jpg',
    title: 'Benjamin Wang',
    width: '31%',
  },
  {
    url: '/coffeeguy.jpg',
    title: 'Caleeb Lim',
    width: '31%',
  },
  {
    url: '/coffeeguy.jpg',
    title: 'Mario',
    width: '31%',
  },
  {
    url: '/coffeeguy.jpg',
    title: 'Luigi',
    width: '31%',
  },
  {
    url: '/coffeeguy.jpg',
    title: 'Person A',
    width: '31%',
  },
  {
    url: '/coffeeguy.jpg',
    title: 'Person B',
    width: '31%',
  },
  {
    url: '/coffeeguy.jpg',
    title: 'Person C',
    width: '31%',
  },
  {
    url: '/coffeeguy.jpg',
    title: 'Person D',
    width: '31%',
  },
  {
    url: '/coffeeguy.jpg',
    title: 'Person E',
    width: '31%',
  },
  {
    url: '/coffeeguy.jpg',
    title: 'Person F',
    width: '31%',
  },
  {
    url: '/coffeeguy.jpg',
    title: 'Person G',
    width: '31%',
  },
  {
    url: '/coffeeguy.jpg',
    title: 'Person H',
    width: '31%',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function Cards() {
  const router = useRouter();
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300 }}>
      {images.map((image) => (
        <ImageButton
        focusRipple
        key={image.title}
        style={{
            width: image.width,
            margin: 10,
        }}
        >
        <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
        <ImageBackdrop className="MuiImageBackdrop-root" />
        <Image>
            <Typography
            component="span"
            variant="subtitle1"
            color="inherit"
            sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
            }}
            >
            {image.title}
            <ImageMarked className="MuiImageMarked-root" />
            </Typography>
        </Image>
        </ImageButton>
      ))}
    </Box>
  );
}