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
    title: 'Employee',
    width: '31.5%',
  },
  {
    url: '/products.jpg',
    title: 'Products',
    width: '31.5%',
  },
  {
    url: 'https://www.plum.io/hubfs/structured%20interview@2x.png',
    title: 'Interviews',
    width: '32%',
  },
  {
    url: 'https://ciosrc.com/wp-content/uploads/2018/06/The-Ideal-Structure-for-an-IT-Department-in-a-Growing-Business.jpg',
    title: 'Department',
    width: '31.5%',
  },
  {
    url: 'data:image/png;base64,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',
    title: 'Vendor',
    width: '31.5%',
  },
  {
    url: 'https://thumbs.dreamstime.com/z/vacancy-job-position-flat-vector-illustration-vacancy-job-position-flat-vector-illustration-empty-office-chair-spotlight-176479368.jpg',
    title: 'Position',
    width: '32%',
  },
  {
    url: 'https://www.ivywise.com/core/wp-content/uploads/2017/01/What-Happens-to-Your-College-Application-After-Its-Submitted-1024x1024.jpg',
    title: 'Application',
    width: '31.5%',
  },
  {
    url: 'https://www.shutterstock.com/image-vector/business-infographic-part-whole-colored-260nw-1498580669.jpg',
    title: 'Part_Type',
    width: '31.5%',
  },
  {
    url: 'https://earlygame.com/uploads/images/_body/Item-Mythic-Items-LOL.jpg',
    title: 'Part',
    width: '31.5%',
  },
  {
    url: 'https://esub.com/wp-content/uploads/2020/05/Construction-site-workers.jpg',
    title: 'Site',
    width: '32%',
  },
  {
    url: 'https://www.creativefabrica.com/wp-content/uploads/2018/08/Sale-Discount-Shoppping-Shop-Logo-by-Mansel-Brist-1.jpg',
    title: 'Sale',
    width: '31.5%',
  },
  {
    url: 'https://www.commbox.io/wp-content/uploads/2019/10/11-1-1024x600.jpg',
    title: 'Customer',
    width: '31.5%',
  },
  {
    url: 'https://media.istockphoto.com/id/1209654046/vector/user-avatar-profile-icon-black-vector-illustration.jpg?s=612x612&w=0&k=20&c=EOYXACjtZmZQ5IsZ0UUp1iNmZ9q2xl1BD1VvN6tZ2UI=',
    title: 'Person',
    width: '32%',
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

export default function HomePage() {
  const router = useRouter();
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        <ImageButton
        focusRipple
        key={image.title}
        style={{
            width: image.width,
            margin: 10,
        }}
        onClick={() => {router.push(`/${image.title.toLowerCase()}`)}}
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