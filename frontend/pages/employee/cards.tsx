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

export default function Cards<PROPS extends Props, >({ input }: PROPS) {
  const router = useRouter();
  const[name, setName] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const [empData, setEmpData] = React.useState([{
    employee_ID: Number,
    employee_rank: String,
    department_ID: String,
    site_ID: String,
    supervisor_ID: String,
  }]);

  const [allData, setAllData] = React.useState([{
    personalID: Number,
    age: Number,
    phoneNumber: String,
    emailAddress: String,
    name: String,
  }]);

  const [allEmpData, setAllEmpData] = React.useState([{
    employee_ID: Number,
    employee_rank: String,
    department_ID: String,
    site_ID: String,
    supervisor_ID: String,
    age: Number,
    phoneNumber: String,
    emailAddress: String,
    name: String,
  }])

  const fetchEmp = async () => {
    const response = await fetch("http://localhost:6817/get/employees");
    const data = await response.json();
    for (let x = 0; x < data.length; x++) {
      setEmpData((empData) => [...empData, {
        employee_ID: data[x].employee_ID,
        employee_rank: data[x].employee_rank,
        department_ID: data[x].department_ID,
        site_ID: data[x].site_ID,
        supervisor_ID: data[x].supervisor_ID,
      }]);
    }

    return empData;
  }

  const fetchAll = async () => {
    const response = await fetch("http://localhost:6817/get/citizensofearth");
    const data = await response.json();
    for (let x = 0; x < data.length; x++) {
      setAllData((allData) => [...allData, {
        personalID: data[x].personalID,
        age: data[x].age,
        emailAddress: data[x].emailAddress,
        phoneNumber: data[x].phoneNumber,
        name: data[x].name,
      }]);
    }

    return allData;
  }

  React.useEffect(() => {
    fetchAll();
    fetchEmp();

    allData.map((val) => (
      empData.map((id) => {
        if (val.personalID === id.employee_ID) {
          setAllEmpData((allData) => [...allData, {
            employee_ID: val.personalID,
            employee_rank: id.employee_rank,
            department_ID: id.department_ID,
            site_ID: id.site_ID,
            supervisor_ID: id.supervisor_ID,
            age: val.age,
            phoneNumber: val.phoneNumber,
            emailAddress: val.emailAddress,
            name: val.name,
          }])
        }
      })
    ))

    console.log(allEmpData);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300 }}>
      {/* {images.filter((image) => (image.title.includes(input))).map((image) => (
        <>
          <ImageButton
          focusRipple
          key={image.title}
          style={{
              width: image.width,
              margin: 10,
          }}
          onClick={() => {
            setName(image.title);
            setOpen(true);
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
                  pb: (theme) => `calc(${theme.spacing(1)} + 2px)`,
              }}
              >
              {image.title}
              </Typography>
          </Image>
          </ImageButton>
          {open && (<PersonInfo handleClose = {handleClose} view = {open} name={name}></PersonInfo>)}
        </>
      ))} */}
    </Box>
  );
}