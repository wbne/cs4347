import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PersonInfo from './info';

const images = [
  {
    url: '/loki.jpg',
    title: 'Lokesh Yerneni',
    width: '31%',
  },
  {
    url: '/benjamin.png',
    title: 'Benjamin Wang',
    width: '31%',
  },
  {
    url: '/caleb.jpg',
    title: 'Caleeb Lim',
    width: '31%',
  },
  {
    url: 'https://i0.wp.com/cs.utdallas.edu/wp-content/uploads/2009/04/Kamran-Khan-June-2017.jpg?fit=750%2C750',
    title: 'Kamran Khan',
    width: '31%',
  },
  {
    url: '/jack.jpg',
    title: 'Jack',
    width: '31%',
  },
  {
    url: '/luke.jpg',
    title: 'Luke',
    width: '31%',
  },
  {
    url: '/rees.jpg',
    title: 'Rees',
    width: '31%',
  },
  {
    url: '/kanishk.jpg',
    title: 'Kanishk',
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
      borderBottom: '3px solid currentColor',
      bottom: 2,
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
  bottom: 2,
  display: 'flex',
  alignItems: 'end',
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
  bottom: 2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

type Props = {
  input: string,
}

type prodProps = {
  productID: number,
  name: string,
  style: string,
  productType: string,
  price: number,
  size: number,
  weight: number,
  deptID: string,
}

export default function Cards<PROPS extends Props, >({ input }: PROPS) {
  const router = useRouter();
  const [allData, setAllData] = React.useState<prodProps[]>([]);
  const [open, setOpen] = React.useState(false);
  const [selectedVal, setSelectedVal] = React.useState<prodProps>();

  const handleClose = () => {
    setOpen(false);
  };
  
  const fetchAll = async () => {
    const response = await fetch("http://localhost:6817/get/products");
    const data = await response.json().then((result) => {
      setAllData(result);
      return result;
    });

    return data;
  };

  React.useEffect(() => {
    const hi = async () => {
      await fetchAll();
    };
    hi();
  }, []);

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300 }}>
      {
        allData.filter((val) => (val.name.trim().toLowerCase().includes(input)))
        .map((val) => (
          <>
            <ImageButton
              focusRipple
              key={val.productID}
              style={{
                width: "31%",
                margin: 10,
              }}
              onClick={() => {
                setSelectedVal({
                  productID: val.productID,
                  name: val.name,
                  style: val.style,
                  productType: val.productType,
                  price: val.price,
                  size: val.size,
                  weight: val.weight,
                  deptID: val.deptID

                });
                setOpen(true);
              }}
            >
              <ImageSrc style={{backgroundImage: `url("/prod.png")`}} />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  sx={{
                    position: "relative",
                    p: 4,
                    pt: 2,
                    pb: (theme) => `calc(${theme.spacing(1)} + 2px)`,
                  }}
                >
                  {val.name}
                </Typography>
              </Image>
            </ImageButton>
            {open && (
              <PersonInfo
                handleClose={handleClose}
                view={open}
                productID = {selectedVal ? selectedVal.productID : 0}
                name={selectedVal ? selectedVal.name : "Unavaliable"}
                style={selectedVal ? selectedVal.style : "Unavaliable"}
                productType = {selectedVal ? selectedVal.productType : "Unavailable"}
                price = {selectedVal ? selectedVal.price : 0}
                size = {selectedVal ? selectedVal.size : 0}
                weight = {selectedVal ? selectedVal.weight : 0}
                deptID = {selectedVal ? selectedVal.deptID : "Unavailable"}
              ></PersonInfo>
            )}
          </>
        ))
      }
    </Box>
  );
}